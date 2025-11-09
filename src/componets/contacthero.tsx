export default function ContactHero() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - SVG Illustration (larger size) */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-lg sm:max-w-1xl lg:max-w-1xl h-auto" // 🔥 Increased from max-w-sm → max-w-2xl
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="#00d9ff" strokeWidth="2" opacity="0.2" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="#00d9ff" strokeWidth="1.5" opacity="0.1" />

              {/* Envelope */}
              <g>
                <rect x="80" y="120" width="240" height="160" rx="8" fill="none" stroke="#00d9ff" strokeWidth="2" />
                <path d="M 80 120 L 200 200 L 320 120" fill="none" stroke="#00d9ff" strokeWidth="2" />
                <rect
                  x="95"
                  y="145"
                  width="210"
                  height="115"
                  rx="4"
                  fill="none"
                  stroke="#00d9ff"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line x1="105" y1="160" x2="295" y2="160" stroke="#00d9ff" strokeWidth="1" opacity="0.4" />
                <line x1="105" y1="175" x2="295" y2="175" stroke="#00d9ff" strokeWidth="1" opacity="0.4" />
                <line x1="105" y1="190" x2="270" y2="190" stroke="#00d9ff" strokeWidth="1" opacity="0.4" />
                <line x1="105" y1="205" x2="260" y2="205" stroke="#00d9ff" strokeWidth="1" opacity="0.4" />
                <line x1="105" y1="220" x2="240" y2="220" stroke="#00d9ff" strokeWidth="1" opacity="0.4" />
              </g>

              {/* Decorative elements */}
              <circle cx="350" cy="100" r="8" fill="#00d9ff" opacity="0.4" />
              <circle cx="50" cy="80" r="5" fill="#00d9ff" opacity="0.3" />
              <circle cx="370" cy="320" r="6" fill="#00d9ff" opacity="0.35" />

              {/* Checkmark */}
              <path
                d="M 120 280 L 140 300 L 180 260"
                fill="none"
                stroke="#00ff00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sky-400 text-sm sm:text-base font-semibold tracking-wide">
                LET'S CONNECT
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                We'd Love to Hear From You
              </h2>
            </div>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Whether you're interested in learning more about ACM, have a project proposal, or just want to chat about
              technology and innovation, we're here to help!
            </p>

            <div className="space-y-4 sm:space-y-5 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Quick Response</h3>
                  <p className="text-neutral-400 text-sm">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Collaborative Spirit</h3>
                  <p className="text-neutral-400 text-sm">We love working with students and partners</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Innovation First</h3>
                  <p className="text-neutral-400 text-sm">Pushing boundaries in tech and computing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
