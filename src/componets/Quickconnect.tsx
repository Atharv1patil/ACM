"use client";
import styled from "styled-components";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const QuickConnectCard = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
              <span className="acm-logo">ACM</span>
            </span>
          </div>

          <div className="glass" />

          <div className="content">
            <span className="title">Quick Connect 💬</span>
            <span className="text">
              Email us at <span className="highlight">acm@ghrce.ac.in</span>
              <br />
              Or use the contact form below to get in touch instantly.
            </span>
          </div>

          <div className="bottom">
            <div className="social-buttons-container">
              <button className="social-button">
                <FaLinkedinIn className="icon" />
              </button>
              <button className="social-button">
                <FaTwitter className="icon" />
              </button>
              <button className="social-button">
                <FaInstagram className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 290px;
    height: 300px;
    perspective: 1000px;
    position: relative;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, #0f2027 0%, #203a43 40%, #2c5364 100%);
    transition: all 0.6s ease-in-out;
    transform-style: preserve-3d;
    box-shadow:
      rgba(0, 255, 255, 0.08) 40px 50px 25px -40px,
      rgba(0, 255, 255, 0.25) 0px 25px 25px -5px;
    position: relative;
    z-index: 1;
  }

  .glass {
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(6px);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid rgba(0, 255, 255, 0.3);
    border-bottom: 1px solid rgba(0, 255, 255, 0.3);
    transition: all 0.6s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
    position: relative;
    z-index: 10;
  }

  .title {
    color: #a7ffff;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 0.5px;
  }

  .text {
    color: rgba(255, 255, 255, 0.85);
    font-size: 15px;
    margin-top: 20px;
    display: block;
    line-height: 1.4;
  }

  .highlight {
    color: #00e5ff;
    font-weight: 600;
  }

  .bottom {
    padding: 10px 12px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
    z-index: 10;
  }

  .social-buttons-container {
    display: flex;
    gap: 12px;
  }

  .social-button {
    width: 34px;
    height: 34px;
    background: linear-gradient(145deg, rgba(0, 255, 255, 0.2), rgba(0, 150, 180, 0.25));
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(0, 255, 255, 0.3) 0px 6px 6px -2px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .icon {
    width: 16px;
    height: 16px;
    color: #00eaff;
    transition: all 0.3s ease;
  }

  .social-button:hover {
    background: linear-gradient(145deg, #00eaff, #00bcd4);
    transform: scale(1.1) translate3d(0, 0, 40px);
    box-shadow: rgba(0, 255, 255, 0.4) -5px 15px 10px 0px;
  }

  .social-button:hover .icon {
    color: #0a0a0a;
  }

  /* === Logo Circles === */
  .logo {
    position: absolute;
    right: 0;
    top: 0;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    backdrop-filter: blur(5px);
    background: rgba(0, 255, 255, 0.1);
    transition: all 0.5s ease-in-out;
  }

  .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
  }

  .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    transition-delay: 0.1s;
  }

  .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    transition-delay: 0.2s;
  }

  .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    transition-delay: 0.3s;
  }

  .circle5 {
    width: 55px;
    height: 55px;
    transform: translate3d(0, 0, 100px);
    display: grid;
    place-content: center;
    transition-delay: 0.4s;
    background: linear-gradient(145deg, #00bcd4, #00eaff);
    color: black;
    font-weight: 900;
    letter-spacing: 1px;
  }

  .acm-logo {
    font-size: 14px;
    font-weight: 800;
    color: #001f23;
    letter-spacing: 1.5px;
  }

  /* Hover Effects */
  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow:
      rgba(0, 255, 255, 0.4) 30px 50px 25px -40px,
      rgba(0, 255, 255, 0.3) 0px 25px 30px 0px;
  }

  .parent:hover .circle2 {
    transform: translate3d(0, 0, 60px);
    background: rgba(0, 255, 255, 0.15);
  }

  .parent:hover .circle3 {
    transform: translate3d(0, 0, 80px);
    background: rgba(0, 255, 255, 0.25);
  }

  .parent:hover .circle4 {
    transform: translate3d(0, 0, 100px);
    background: rgba(0, 255, 255, 0.35);
  }

  .parent:hover .circle5 {
    transform: translate3d(0, 0, 120px);
    background: linear-gradient(145deg, #00eaff, #00bcd4);
  }
`;

export default QuickConnectCard;
