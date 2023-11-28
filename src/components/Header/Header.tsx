import React from "react";
import styled from "styled-components";
import BurgerMenu from "../Burger/BurgerMenu";
import MobileMenu from "../Burger/MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };
  return (
    <StyledHeader className="my-container">
      <div className="header flex justify-between items-center py-8 z-[50]">
        <div className="flex items-center gap-4">
          <img src="/zone-logo.svg" alt="logo" />
          <p className="text-[20px] font-[500]">Zone.</p>
        </div>
        <div className="flex items-center gap-10 header-nav">
          <a className="custom-link" href="#">
            Home
          </a>
          <a className="custom-link" href="#">
            About us
          </a>
          <a className="custom-link" href="#">
            Service
          </a>
          <a className="custom-link" href="#">
            Pricing
          </a>
          <button className="primary-button">Contact us</button>
        </div>
        <div className="mobile-container hidden">
          <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <div className="header-content flex items-center py-24 relative">
        <div className="w-[50%] header__text-container">
          <p className="header-title text-[50px] font-[700]">
            Virtual Reality Business Solutions
          </p>
          <p className="text-[#E5E7EB] font-[500] py-6">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consultting arena and
            artficial intelligence.
          </p>
          <button className="primary-button">Join Us</button>
        </div>
        <div className="w-[50%] header__img-container">
          <img
            width="400px"
            className="absolute top-0 right-0"
            src="/img/header-bg.png"
            alt="bg"
          />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  .header-title {
    background: linear-gradient(90deg, #2563eb 0.11%, #d946ef 58.65%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1020px) {
    .header-content {
      flex-direction: column;
    }
    .header__text-container {
      width: 100%;
    }
    .header__img-container {
      width: 100%;

      & img {
        object-fit: contain;
        width: 100%;
        height: 600px;
        position: relative;
      }
    }
  }

  @media (max-width: 730px) {
    .header-nav {
      display: none;
    }
    .mobile-container {
      display: block;
    }
    .header-content {
      padding: 20px 0;
    }
  }
  @media (max-width: 535px) {
    .header-title {
      font-size: 32px;
    }
  }
`;

export default Header;
