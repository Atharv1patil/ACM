import React, { useEffect, useRef } from "react";

type Props = {
  bgColor?: string;       // default '#3b3a3a'
  textColor?: string;     // default '#ffffff'
  width?: string;         // default '100%'
  height?: string;        // default '100vh'
  intensity?: number;     // overall light multiplier (default 1.0)
  spread?: number;        // hotspot radius 0-1 (default 0.45)
  quality?: "low" | "medium" | "high";

  /*** NEW SHADOW-BEAM CONTROLS ***/
  rayCount?: number;      // number of ray samples (default = quality-based)
  rayDecay?: number;      // how fast rays fade (0.5-0.99, default 0.94)
  rayDensity?: number;    // step size multiplier (0.5-2.0, default 0.97)
  rayExposure?: number;   // base brightness of rays (0.5-3.0, default 1.9)
  rayBlur?: number;       // jitter strength (0.0-0.01, default 0.0031)
  rayRevealStart?: number;// reveal threshold start (default 0.012)
  rayRevealEnd?: number;  // reveal threshold end (default ~0.031)
  rayColor?: string;      // ray tint (CSS color, default warm white)
};

function hexToRgbNorm(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return [r / 255, g / 255, b / 255];
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return [r / 255, g / 255, b / 255];
  }
  return [0.22, 0.22, 0.22];
}

const CrepuscularACM: React.FC<Props> = ({
  bgColor = "#3b3a3a",
  textColor = "#ffffff",
  width = "100%",
  height = "100vh",
  intensity = 1.0,
  spread = 0.45,
  quality = "medium",

  // Shadow-beam controls (with sensible defaults)
  rayCount,
  rayDecay = 0.94,
  rayDensity = 0.97,
  rayExposure = 1.9,
  rayBlur = 0.0031,
  rayRevealStart = 0.012,
  rayRevealEnd,
  rayColor = "#fff9e6", // warm off-white
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lightPosRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // ---- Quality-based sample count (fallback if rayCount not given) ----
    const defaultSamples =
      quality === "low" ? 36 : quality === "high" ? 72 : 48;
    const SAMPLE_COUNT = rayCount ?? defaultSamples;

    // Clamp new props to safe ranges
    const DECAY = Math.max(0.5, Math.min(0.99, rayDecay));
    const DENSITY = Math.max(0.5, Math.min(2.0, rayDensity));
    const EXPOSURE = Math.max(0.5, Math.min(3.0, rayExposure));
    const RAY_BLUR_STRENGTH = Math.max(0.0, Math.min(0.01, rayBlur));
    const REVEAL_START = Math.max(0.001, rayRevealStart);
    const REVEAL_END = rayRevealEnd ?? REVEAL_START * 2.6;

    const [bgR, bgG, bgB] = hexToRgbNorm(bgColor);
    const [tR, tG, tB] = hexToRgbNorm(textColor);
    const [rayR, rayG, rayB] = hexToRgbNorm(rayColor);

    const vsSrc = `#version 100
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fsSrc = `#version 100
      precision mediump float;
      uniform vec2 u_resolution;
      uniform vec2 u_lightPos;
      uniform float u_time;
      uniform sampler2D u_occlusion;
      uniform vec3 u_bgColor;
      uniform vec3 u_textColor;
      uniform vec3 u_rayColor;
      uniform float u_intensity;
      uniform float u_spread;

      const int SAMPLE_COUNT = ${SAMPLE_COUNT};
      const float DECAY = ${DECAY};
      const float DENSITY = ${DENSITY};
      const float EXPOSURE = ${EXPOSURE};
      const float RAY_BLUR_STRENGTH = ${RAY_BLUR_STRENGTH};

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec3 color = u_bgColor;

        // hotspot
        vec2 toL = uv - u_lightPos;
        float d = length(toL);
        float hotspotRadius = clamp(u_spread, 0.02, 0.9);
        float hotspotStrength = 2.0 * u_intensity;
        float lightInt = exp(-d * d / (hotspotRadius * hotspotRadius)) * hotspotStrength;
        vec3 hotspot = vec3(1.0, 0.97, 0.92) * lightInt;
        color += hotspot * 0.85;

        // crepuscular rays (shadow beams)
        vec2 toLight = u_lightPos - uv;
        float distToLight = length(toLight);
        float intensityAccum = 0.0;
        if (distToLight > 1e-5) {
          vec2 stepUV = toLight / float(SAMPLE_COUNT) * DENSITY;
          float decay = 1.0;
          for (int i = 1; i <= SAMPLE_COUNT; i++) {
            vec2 j = vec2(
              random(uv + float(i) * 0.123 + u_time * 0.002) - 0.5,
              random(uv.yx + float(i) * 0.177 + u_time * 0.003) - 0.5
            ) * RAY_BLUR_STRENGTH;
            vec2 sUV = clamp(uv + stepUV * float(i) + j, 0.0, 1.0);
            float occ = texture2D(u_occlusion, sUV).r;
            intensityAccum += occ * decay * (EXPOSURE / float(SAMPLE_COUNT)) * 2.4 * u_intensity;
            decay *= DECAY;
          }
          intensityAccum /= (1.0 + distToLight * 1.3);
          intensityAccum = clamp(intensityAccum * 0.98, 0.0, 3.0);
        }
        vec3 rays = u_rayColor * intensityAccum * 0.95;
        color += rays;

        // occlusion
        float occCenter = texture2D(u_occlusion, uv).r;
        float isOccluder = 1.0 - occCenter;

        // rim
        vec2 offs = vec2(1.0) / u_resolution;
        float neighborAvg = (
          texture2D(u_occlusion, uv + vec2(offs.x,0.0)).r +
          texture2D(u_occlusion, uv - vec2(offs.x,0.0)).r +
          texture2D(u_occlusion, uv + vec2(0.0,offs.y)).r +
          texture2D(u_occlusion, uv - vec2(0.0,offs.y)).r
        ) / 4.0;
        float rim = isOccluder * (1.0 - neighborAvg) * 0.38;
        color += vec3(rim) * 0.62;

        // text reveal using ray intensity
        float reveal = smoothstep(${REVEAL_START}, ${REVEAL_END}, intensityAccum);
        vec3 textEmissive = u_textColor * intensityAccum * 1.2;
        vec3 occluderBase = u_bgColor;
        vec3 occludedColor = mix(occluderBase, textEmissive + rays * 0.22, reveal);
        color = mix(color, occludedColor, isOccluder);

        // tone-map + vignette
        color = 1.0 - exp(-color * 1.08);
        float vig = smoothstep(0.85, 0.25, length(uv - vec2(0.5)));
        color *= mix(1.0, 0.64, vig);

        gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
      }
    `;

    // --- WebGL setup (unchanged except for new uniform) ---
    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const linkProgram = (vs: string, fs: string) => {
      const v = compileShader(gl.VERTEX_SHADER, vs);
      const f = compileShader(gl.FRAGMENT_SHADER, fs);
      if (!v || !f) return null;
      const p = gl.createProgram()!;
      gl.attachShader(p, v);
      gl.attachShader(p, f);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(p));
        return null;
      }
      gl.deleteShader(v);
      gl.deleteShader(f);
      return p;
    };

    const program = linkProgram(vsSrc, fsSrc);
    if (!program) return;
    gl.useProgram(program);

    const posBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "position");
    if (posLoc >= 0) {
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    }

    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const lightLoc = gl.getUniformLocation(program, "u_lightPos");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const occLoc = gl.getUniformLocation(program, "u_occlusion");
    const bgLoc = gl.getUniformLocation(program, "u_bgColor");
    const textLoc = gl.getUniformLocation(program, "u_textColor");
    const rayColorLoc = gl.getUniformLocation(program, "u_rayColor");
    const intensityLoc = gl.getUniformLocation(program, "u_intensity");
    const spreadLoc = gl.getUniformLocation(program, "u_spread");

    const occlusionTexture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, occlusionTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(occLoc, 0);

    const occlusionCanvas = document.createElement("canvas");
    const occCtx = occlusionCanvas.getContext("2d")!;
    if (!occCtx) return;

    // --- inline SVG logo (black diamond occluder with holes for circle + "acm") ---
const rawSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M9.912 16.333c-0.105 0.031-0.199 0.093-0.267 0.183-0.067 0.093-0.099 0.208-0.093 0.323 0 0.203 0.047 0.339 0.156 0.412 0.104 0.072 0.261 0.109 0.475 0.109 0.115 0 0.229-0.027 0.348-0.079 0.12-0.052 0.235-0.131 0.329-0.219v-0.88c-0.224 0.015-0.407 0.036-0.543 0.057-0.14 0.015-0.276 0.047-0.405 0.093zM16 0l-16 16 16 16 16-16zM16 25.807c-5.416 0-9.807-4.391-9.807-9.807s4.391-9.807 9.807-9.812c5.416 0.005 9.807 4.396 9.807 9.812s-4.391 9.807-9.807 9.807zM16 7.172c-4.869 0-8.828 3.953-8.828 8.828 0 4.869 3.959 8.823 8.828 8.823s8.828-3.953 8.828-8.823c0-4.875-3.953-8.828-8.828-8.833zM12.183 18.161h-1.323v-0.448l-0.245 0.208c-0.188 0.147-0.407 0.251-0.636 0.313-0.109 0.025-0.271 0.047-0.468 0.047-0.349 0.005-0.688-0.131-0.932-0.38-0.251-0.256-0.371-0.573-0.371-0.959 0-0.317 0.063-0.568 0.188-0.765 0.135-0.199 0.317-0.36 0.541-0.464 0.271-0.12 0.563-0.203 0.86-0.24 0.333-0.041 0.687-0.077 1.072-0.104v-0.020c0-0.235-0.088-0.396-0.265-0.485-0.172-0.093-0.427-0.135-0.771-0.135-0.156 0-0.339 0.025-0.547 0.083s-0.412 0.136-0.609 0.219h-0.115v-1.025c0.125-0.041 0.339-0.084 0.635-0.136 0.292-0.052 0.589-0.077 0.885-0.077 0.735 0 1.267 0.12 1.6 0.364 0.333 0.245 0.5 0.62 0.5 1.12v2.891zM16.479 17.943c-0.093 0.036-0.181 0.073-0.271 0.115-0.093 0.036-0.197 0.079-0.301 0.104-0.125 0.032-0.251 0.057-0.365 0.084-0.109 0.015-0.26 0.025-0.448 0.025-0.348 0-0.672-0.041-0.963-0.131-0.276-0.083-0.543-0.223-0.761-0.411-0.213-0.188-0.385-0.427-0.495-0.693-0.12-0.281-0.181-0.609-0.181-0.984-0.011-0.359 0.056-0.713 0.197-1.041 0.12-0.271 0.297-0.511 0.521-0.704 0.219-0.181 0.473-0.312 0.744-0.389 0.297-0.089 0.599-0.125 0.901-0.125 0.495 0 0.979 0.115 1.416 0.339v1.14h-0.171c-0.063-0.057-0.125-0.115-0.199-0.167-0.077-0.063-0.161-0.12-0.249-0.167-0.219-0.131-0.475-0.192-0.729-0.188-0.339 0-0.604 0.115-0.787 0.349-0.188 0.24-0.281 0.552-0.281 0.953 0 0.427 0.099 0.745 0.297 0.953 0.203 0.208 0.463 0.312 0.791 0.312 0.147 0 0.297-0.015 0.439-0.057 0.208-0.057 0.395-0.156 0.556-0.296 0.063-0.052 0.115-0.109 0.163-0.147h0.171v1.12zM22.255 18.172v-2.131c0-0.208 0-0.385-0.009-0.525 0-0.12-0.027-0.245-0.068-0.355-0.032-0.088-0.095-0.156-0.172-0.197-0.208-0.089-0.437-0.084-0.641 0-0.113 0.057-0.224 0.119-0.323 0.187v3.021h-1.328v-2.131c0-0.208 0-0.38-0.011-0.525-0.005-0.12-0.025-0.24-0.067-0.355-0.037-0.088-0.1-0.156-0.183-0.197-0.079-0.047-0.193-0.063-0.333-0.063-0.109 0-0.219 0.025-0.317 0.072-0.105 0.053-0.204 0.115-0.308 0.183v3.016h-1.323v-4.251h1.323v0.475c0.193-0.167 0.396-0.313 0.615-0.432 0.197-0.104 0.417-0.161 0.645-0.161 0.24-0.005 0.48 0.061 0.683 0.187 0.203 0.136 0.36 0.328 0.453 0.552 0.255-0.235 0.495-0.416 0.724-0.547 0.224-0.125 0.453-0.192 0.683-0.192 0.181 0 0.359 0.031 0.531 0.099 0.151 0.063 0.292 0.156 0.401 0.281 0.12 0.14 0.208 0.307 0.265 0.484 0.057 0.193 0.089 0.437 0.089 0.74v2.765z"/>
</svg>`;

// encode into a data URL (same-origin; no CORS issues)
const svgDataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(rawSvg);

const logoImg = new Image();
logoImg.crossOrigin = "anonymous";
logoImg.src = svgDataUrl;


    const updateOcclusion = (w: number, h: number, dpr: number) => {
  occCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  occCtx.clearRect(0, 0, w, h);

  // white background = transparent to light (occ texture uses white = no occlusion)
  occCtx.fillStyle = "#ffffff";
  occCtx.fillRect(0, 0, w, h);

  // compute logo size & center; tweak scaleFactor (0.55) to change logo size
  const scaleFactor = 0.55;
  const size = Math.min(w, h) * scaleFactor;
  const x = (w - size) / 2;
  const y = (h - size) / 2;

  if (logoImg.complete && logoImg.naturalWidth !== 0) {
    // draw the SVG (already has transparent holes for circle + letters)
    occCtx.drawImage(logoImg, x, y, size, size);
  } else {
    // fallback small black circle so rays still show until image loads
    occCtx.fillStyle = "#000000";
    occCtx.beginPath();
    occCtx.arc(w / 2, h / 2, Math.min(w, h) * 0.16, 0, Math.PI * 2);
    occCtx.fill();
    logoImg.onload = () => updateOcclusion(w, h, dpr);
  }

  // upload occlusion canvas to GL texture (flip Y to match shader coordinates)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
  gl.bindTexture(gl.TEXTURE_2D, occlusionTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, occlusionCanvas);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
};

    const resize = () => {
      const w = Math.max(1, canvas.clientWidth);
      const h = Math.max(1, canvas.clientHeight);
      const dpr = Math.min(1.25, window.devicePixelRatio || 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);

      occlusionCanvas.width = canvas.width;
      occlusionCanvas.height = canvas.height;
      updateOcclusion(w, h, dpr);

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform3f(bgLoc, bgR, bgG, bgB);
      gl.uniform3f(textLoc, tR, tG, tB);
      gl.uniform3f(rayColorLoc, rayR, rayG, rayB);
      gl.uniform1f(intensityLoc, intensity);
      gl.uniform1f(spreadLoc, Math.max(0.02, Math.min(0.9, spread)));
    };

    const render = (t: number) => {
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(lightLoc, lightPosRef.current.x, lightPosRef.current.y);
      gl.uniform1f(timeLoc, t * 0.001);
      gl.uniform1f(intensityLoc, intensity);
      gl.uniform3f(bgLoc, bgR, bgG, bgB);
      gl.uniform3f(textLoc, tR, tG, tB);
      gl.uniform3f(rayColorLoc, rayR, rayG, rayB);
      gl.uniform1f(spreadLoc, Math.max(0.02, Math.min(0.9, spread)));

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, occlusionTexture);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    };

    const onPointer = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      lightPosRef.current.x = Math.max(0, Math.min(1, nx));
      lightPosRef.current.y = Math.max(0, Math.min(1, 1 - ny));
    };

    resize();
    rafRef.current = requestAnimationFrame(render);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
      try { gl.deleteTexture(occlusionTexture); } catch { /* Ignore cleanup errors */ }
      try { gl.deleteBuffer(posBuf); } catch { /* Ignore cleanup errors */ }
      try { gl.deleteProgram(program); } catch { /* Ignore cleanup errors */ }
    };
  }, [
    bgColor, textColor, width, height, intensity, spread, quality,
    rayCount, rayDecay, rayDensity, rayExposure, rayBlur,
    rayRevealStart, rayRevealEnd, rayColor
  ]);

  return (
    <div
      className="relative w-full select-none overflow-hidden"
      style={{ width, height, background: bgColor }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
};

export default CrepuscularACM;