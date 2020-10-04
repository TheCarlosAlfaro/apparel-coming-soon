import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import heroDesktop from "../images/hero-desktop.jpg";
import iconArrow from "../images/icon-arrow.svg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  max-width: 80vw;
  background: #f6c1ba;
  display: grid;
  grid-template-columns: 1.3fr 1fr;

  .right-img {
    width: 100%;
  }
`;

const LeftSide = styled.div`
  padding: 3rem;
`;

export default function Card() {
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <MainContainer>
      <CardContainer>
        <LeftSide>
          <img src={logo} alt="logo" />
          <h1>
            <span>we're</span>
            <span>coming</span>
            <span>Soon</span>
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <button type="submit">
              <img src={iconArrow} alt="arrow" />
            </button>
          </form>
        </LeftSide>
        <div>
          <img className="right-img" src={heroDesktop} alt="girl" />
        </div>
      </CardContainer>
    </MainContainer>
  );
}
