import React from "react";
import styled from "styled-components";

const StyledDash = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Mulish', sans-serif;

    a {
        text-decoration: none;
        margin-top: 1.8rem;
        display: flex;
        color: #6945d8;
        align-items: center;
        column-gap: 0.75rem;
        row-gap: 0.75rem;
        font-size: 1.125rem;
        font-weight: 600;

        .bg-blue {
            width: 17px;
            height: 3px;
            border-radius: 1000px;
            background-color: #6945d8;
        }

        .bg-text {
            font-size: 18px;
            font-weight: 600;
        }
    }
`;

const Dash = ({paragraph}) => {
  return (
    <StyledDash>
      <a href="#">
        <div className="bg-blue"></div>
        <p className="bg-text">{paragraph}</p>
      </a>
    </StyledDash>
  );
};

export default Dash;
