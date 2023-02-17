import React from "react";
import styled from "styled-components";
import Box from "../../assets/chipper img box.webp";
import Gh from "../../assets/Ghana.png";
import Rw from "../../assets/Rwanda.png";
import Nig from "../../assets/Nigeria.png";
import Ug from "../../assets/Uganda.png";
import SA from "../../assets/South Africa.png";
import UK from "../../assets/UK.png";
import USA from "../../assets/USA.png";
import BB from "../../assets/burnaboy.webp";
import Icon from "../../assets/video-player-icon.svg";
import Dash from "../Dash/Dash";
import RO from "../../assets/amai-rosie.webp";
import RT from "../../assets/sunday-adeniyi.webp";
import VT from "../../assets/chipper-connections.webp";
import Star from "../../assets/star-rating.svg";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

const StyledProduct = styled.div`
  width: 100%;
  height: auto;
  font-family: Graphik,sans-serif;
  background-color: #eff0fe;

  .bg-container {
    padding-top: 4rem;
    margin-left: 8rem;
    margin-right: 8rem;

    .container-large {
      display: flex;
      padding-bottom: 5rem;
      column-gap: 3.5rem;

      .lf-container {
        flex: 1;
        margin-top: 5.7rem;

        h2 {
          margin-top: 0;
          margin-bottom: 0;
          color: #090b0e;
          font-size: 2.625rem;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: -0.035rem;
        }

        .lf-text {
          margin-top: 1.8rem;
          font-size: 15px;
          width: 85%;
          font-weight: 500;
          line-height: 1.6;
          color: #090b0e;
        }
      }

      .rt-container {
        flex: 1;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .countries {
      padding-bottom: 8rem;

      p {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.6;
        color: #090b0e;
      }

      .country-flags {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        column-gap: 3rem;

        .flags {
          overflow: hidden;
          width: 100%;
          height: 5.2rem;
          max-width: 7.6rem;
          border-radius: 1rem;

          img {
            width: 100%;
            height: 100%;
            min-width: 118px;
            object-fit: cover;
            object-position: 50% 50%;
          }
        }
      }
    }

    .partners {
      text-align: center;

      h2 {
        margin-left: 8rem;
        margin-right: 8rem;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }

      p {
        margin-left: 15rem;
        margin-right: 15rem;
        line-height: 1.6;
        font-size: 15px;
        font-weight: 500;
      }

      .small-container {
        margin-top: 2rem;

        .burna-pics {
          width: 39rem;
          border-radius: 20px;
          position: inherit;
          object-fit: contain;
          margin-left: 4rem;
        }

        .play-icon {
          width: 60px;
          height: 60px;
          border-radius: 100%;
          position: relative;
          bottom: 8rem;
          right: 21.5rem;
          cursor: pointer;


          &:hover {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }

  .comment-container {
    display: flex;
    background-color: #fff;
    padding-top: 4rem;
    padding-left: 8rem;
    padding-right: 8rem;
    color: #090b0e;
    gap: 3.5rem;
    padding-bottom: 3.4rem;

    .lf-comment {
      flex: 1;

      .first-c,
      .second-c {
        display: flex;
        column-gap: 1rem;
        box-shadow: 0 8px 2px 0 rgb(56 77 105 / 10%);
        overflow: hidden;
        padding: 1rem;
        border: 1px solid #c1c4e5;
        border-radius: 1rem;
        margin-bottom: 1rem;
        width: 100%;

        .reviewer-pics {
          img {
            width: 3rem;
            height: 3rem;
            border-radius: 1000px;
            object-fit: cover;
          }
        }

        .review-wrapper {
          .reviewer-comment {
            font-size: 11px;
            font-weight: 500;
            line-height: 1.6;
            margin-bottom: 8px;
          }

          .reviewer-date {
            font-size: 10px;
            font-weight: 500;
            color: #496283;
          }
        }
      }

      .second-c {
        margin-left: 2rem;
        margin-bottom: 0;
        padding-left: 1rem;
      }
    }

    .rt-comment {
      flex: 1;
      margin-top: 1.5rem;

      h2 {
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 1.2rem;
      }

      p {
        font-size: 14px;
        width: 85%;
        line-height: 1.6;
        font-weight: 500;
      }
    }
  }

  .goals-container {
    text-align: center;

    h3 {
        margin-left: 23rem;
        margin-top: 5rem;
        font-size: 30px;
        margin-right: 23rem;
        font-weight: 600;
    }

    p {
        font-size: 15px;
        font-weight: 500;
        margin-top: 1rem;
    }

    .small-container {
        margin-top: 2.8rem;

        .video-thumbnail {
          width: 39rem;
          border-radius: 20px;
          position: inherit;
          object-fit: contain;
          margin-left: 4rem;
        }

        .play-icon {
          width: 80px;
          height: 80px;
          border-radius: 100%;
          position: relative;
          bottom: 10rem;
          right: 22rem;
          cursor: pointer;


          &:hover {
            width: 90px;
            height: 90px;
          }
        }
    }
  }

  .community-section {
    display: flex;
    column-gap: 1rem;
    background-color: #fff;
    padding-top: 4rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 4rem;
    color: #090b0e;

    .container-large {
      flex: 1;
      width: 100%;
      margin-top: 3.5rem;

        .bg-blue {
            width: 28px;
            height: 5px;
            margin-bottom: 0.75rem;
            border-radius: 20px;
            background-color: #6945d8;
        }
    
        .text-size {
            font-weight: 500;
            margin-right: 6rem;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 2rem;
        }
    
        .community-wrapper {
            display: flex;
            column-gap: 4.75rem;
    
            .community-rating {
                .text-medium {
                    display: flex;
                    gap: 4px;
                    font-weight: 600;
                    font-size: 16px;
                    align-items: baseline;
    
                    .text-span {
                        font-size: 50px;
                        font-weight: 600;
                    }
                }
    
                .app-download {
                    display: flex;
                    color: #090b0e;
                    font-weight: 600;
                    align-item: center;
                    margin-top: 1rem;
                    text-decoration: none;
                    column-gap: 4px;
    
                    .store-icon {
                        font-size: 20px;
                    }
    
                    .download-btn {
                        font-size: 14px;
                    }
    
                }
            }
        }

      }

      .star-cards {
        flex: 1;
        width: 100%;

        .usa-card {
          overflow: hidden;
          padding: 1rem;
          border: 1px solid #c1c4e5;
          border-radius: 1rem;
          box-shadow: 0 8px 2px 0 rgb(56 77 105 / 10%);
          margin-left: 6rem;
          margin-right: 6rem;
          margin-bottom: 20px;
          
          .rated-star {
            display: flex;
            margin-bottom: 1rem;
            justify-content: space-between;
            align-items: center;

            .star {
              border: 0;
              vertical-align: middle;
              display: inline-block;
              max-width: 100%;
            }

            .usa-flag {
              height: 2rem;
              border-radius: 0.25rem;
              object-fit: cover;
            }
          }

          .rated-comment {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 7px;
          }

          .rated-date{
            font-size: 10px;
          }
        }

        .africa-cards {
          display: flex;
          column-gap: 1rem;

          .card {
            overflow: hidden;
            padding: 1rem;
            border: 1px solid #c1c4e5;
            border-radius: 1rem;
            box-shadow: 0 8px 2px 0 rgb(56 77 105 / 10%);
            
            .rated-star {
              display: flex;
              margin-bottom: 1rem;
              justify-content: space-between;
              align-items: center;
  
              .star {
                border: 0;
                vertical-align: middle;
                display: inline-block;
                max-width: 100%;
              }
  
              .flag {
                height: 2rem;
                border-radius: 0.25rem;
                object-fit: cover;
              }
            }
  
            .rated-comment {
              font-size: 14px;
              line-height: 1.6;
              margin-bottom: 7px;
            }
  
            .rated-date{
              font-size: 10px;
            }
          }
        }
      }
  }
`;

const Product = () => {
  return (
    <StyledProduct>
      <div className="bg-container">
        <div className="container-large">
          <div className="lf-container">
            <h2>Transact Across Africa & beyond</h2>
            <p className="lf-text">
              Send and receive money across Africa the fast and easy way. Enjoy
              free transfers and the lowest cross-border rates.
            </p>
            <Dash 
            paragraph= {"Get started with Chipper Cash"}/>
          </div>

          <div className="rt-container">
            <img src={Box} alt="" />
          </div>
        </div>

        <div className="countries">
          <p>Available in 7 countries today, with many more coming soon</p>

          <div className="country-flags">
            <div className="flags">
              <img src={Gh} alt="Ghana flag" />
            </div>

            <div className="flags">
              <img src={Rw} alt="Rwanda flag" />
            </div>

            <div className="flags">
              <img src={Nig} alt="Nigeria flag" />
            </div>

            <div className="flags">
              <img src={Ug} alt="Uganda flag" />
            </div>

            <div className="flags">
              <img src={SA} alt="South Africa flag" />
            </div>

            <div className="flags">
              <img src={UK} alt="UK flag" />
            </div>

            <div className="flags">
              <img src={USA} alt="USA flag" />
            </div>
          </div>
        </div>

        <div className="partners">
          <h2>Chipper Special Event - Unlocking Global Opportunities</h2>
          <p>
            Our launch in the United States, the global partnership with Burna
            Boy, and Twitter Tips integration are all steps in our journey to
            make sending money to, from, and across Africa easy, accessible, and
            maybe even fun. Watch the full event.
          </p>

          <div className="small-container">
            <img className="burna-pics" src={BB} alt="Burna Boy pics" />
            <img className="play-icon" src={Icon} alt="Video player icon" />
          </div>
        </div>
      </div>

      <div className="comment-container">
        <div className="lf-comment">
          <div className="first-c">
            <div className="reviewer-pics">
              <img src={RO} alt="" />
            </div>
            <div className="review-wrapper">
              <p className="reviewer-comment">
                Great app to send and receive money across a number of
                countries, highly recommended as a money transfer alternative.
              </p>
              <p className="reviewer-date">Amai Rosie, 6 June, 2020</p>
            </div>
          </div>

          <div className="second-c">
            <div className="reviewer-pics">
              <img src={RT} alt="" />
            </div>
            <div className="review-wrapper">
              <p className="reviewer-comment">
                Chipper cash is the coolest app ever. Packed with great
                features, very reliable, fast transactions, easy to use and cool
                discounts.
              </p>
              <p className="reviewer-date">Sunday Adeniyi, 9 Aug, 2020</p>
            </div>
          </div>
        </div>

        <div className="rt-comment">
          <h2>Trusted & Secure</h2>
          <p>
            Join over 5 million people securely sending and receiving money with
            Chipper Cash.
          </p>
          <Dash 
          paragraph= {"Get started with Chipper Cash"}
          />
        </div>
      </div>

      <div className="goals-container">
        <h3>It’s the connections between us that power Chipper Cash</h3>
        <p>The possibilities of what we can achieve together are endless.</p>
        <div className="small-container">
          <img
            className="video-thumbnail"
            src={VT}
            alt="Video Thumbnail pics"
          />
          <img className="play-icon" src={Icon} alt="Video player icon" />
        </div>
      </div>

      <div className="community-section">
        <div className="container-large">
        <div className="bg-blue"></div>
          <p className="text-size">
            Community-powered by over 5 million users, and we are just getting
            started.
          </p>

          <div className="community-wrapper">
            <div className="community-rating">
              <p className="text-medium">
                <span className="text-span">4.5</span>
                out of 5
              </p>

              <a href="#" className="app-download">
                <div className="store-icon"><FaGooglePlay /></div>
                <p className="download-btn">Google Play</p>
              </a>
            </div>

            <div className="community-rating">
              <p className="text-medium">
                <span className="text-span">4.5</span>
                out of 5
              </p>

              <a href="#" className="app-download">
                <div className="store-icon"><AiFillApple /></div>
                <p className="download-btn">App Store</p>
              </a>
            </div>
          </div>
        </div>

        <div className="star-cards">
          <div className="usa-card">
            <div className="rated-star">
              <img className="star" src={Star} alt="" />
              <img className="usa-flag" src={USA} alt="" />
            </div>
            <p className="rated-comment">
              So fast and very easy to transfer money to Nigeria. I love it!
            </p>
            <p className="rated-date">App store review, 10 September, 2021</p>
          </div>

          <div className="africa-cards">
            <div className="card">
              <div className="rated-star">
                <img className="star" src={Star} alt="" />
                <img className="flag" src={Gh} alt="" />
              </div>
              <p className="rated-comment">
                I find it reliable and fast and it helps me save cash on
                transactions. Kudos to the customer care service.
              </p>
              <p className="rated-date">App store review, 29 July, 2020</p>
            </div>

            <div className="card">
              <div className="rated-star">
                <img className="star" src={Star} alt="" />
                <img className="flag" src={Nig} alt="" />
              </div>
              <p className="rated-comment">
                The best app to send and receive money from friends, family and
                associates across Africa.
              </p>
              <p className="rated-date">App store review, 6 June, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </StyledProduct>
  );
};

export default Product;
