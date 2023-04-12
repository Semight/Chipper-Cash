import React from 'react';
import styled from 'styled-components';
import Evra from "../../assets/evra.webp";
import Team from "../../assets/football-team-p.webp"
import Solo from "../../assets/football-solo-player.webp"
import Rising from "../../assets/football-rising-star.webp"
import Dash from '../Dash/Dash';
import BBC from "../../assets/bbc-logo.svg";
import TE from "../../assets/the-economist-logo.svg";
import Forbes from "../../assets/forbes-logo.svg";
import TC from "../../assets/techcrunch-logo.svg";
import Roma from "../../assets/roma-logo.svg";
import Apple from "../../assets/apple-logo.svg";
import FT from "../../assets/free-transfers-p.webp";
import ST from "../../assets/sending-text.png";


const StyledSupport = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Mulish', sans-serif;
    

    .partnership {
        background-color: #222654;
        padding-left: 8rem;
        color: #fff;
        display: flex;
        padding-top: 7rem;
        margin-top: 5rem;
        background-color: #202654;
        background-position: 105% 1%;
        background-size: auto 35rem;
        background-repeat: no-repeat;

        .container-large {
            display: flex;
            max-height: 17rem;

            .partners {
                flex: 1;
                width: 100%;

                .partners-content {
                    font-size: 31px;
                    line-height: 1.6;
                    font-weight: 600;
                }

                a {
                    text-decoration: none;
                    margin-top: 1.8rem;
                    display: flex;
                    color: #acfce3;
                    align-items: center;
                    column-gap: 0.75rem;
                    row-gap: 0.75rem;
                    font-size: 1.125rem;
                    font-weight: 600;
            
                    .bg-blue {
                        width: 25px;
                        height: 5px;
                        border-radius: 1000px;
                        background-color: #acfce3;;
                    }
            
                    .bg-text {
                        font-size: 18px;
                        font-weight: 600;
                    }
                }
            }

            .partners-pics {
                flex: 1;
                width: 100%;

                .p-image {
                    position: relative;
                    right: 7rem;
                    bottom: 12rem;
                    height: 29rem;
                    object-fit: contain;
                }
            }
        }

    }

    .football {
        background-color: #fff;
        padding-left: 8rem;
        display: flex;
        margin-top: 3.5rem;
        margin-bottom: 3rem;
        
        .players {
            flex: 1;
            width: 100%;
            
            .image {
                display: flex;
                column-gap: 2rem;

                img {
                    overflow: hidden;
                    width: 7.75rem;
                    height: 7.75rem;
                    border-radius: 100%;
                    object-fit: cover;
                }
            }
        }

        .content-box {
            flex: 1;
            width: 100%;  
            margin-top: 2rem;


            h2 {
                font-size: 27px;
                font-weight: 700;
            }
        }
    }

    .chipper-story {
        background-color: #eff0fe;
        padding-left: 8rem;
        padding-right: 8rem;
        display: flex;
        padding-top: 4rem;
        padding-bottom: 2rem;

        .feature {
            flex: 1;
            width: 100%;

            h2 {
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 1rem;
            }

            p {
                font-size: 17px;
                font-weight: 500;
                line-height: 1.6;
                width: 80%;
            }    
        }

        .logos {
            flex: 1;
            width: 100%;

            .logo1, .logo2 {
                display: flex;
                column-gap: 6rem;

                img {
                    overflow: hidden;
                    width: 7.75rem;
                    height: 7.75rem;
                    object-fit: none;
                }
            }
        }
    }

    .save-container {
        background-color: #fff;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 4rem;
        padding-bottom: 2rem;

        .d-flex, .b-flex {
            display: flex;
            column-gap: 9rem;

            .image-box {
                flex: 1;
                width: 100%;

                img {
                    width: 100%;
                }
            }

            .contents-box {
                flex: 1;
                width: 100%;
                margin-top: 7rem;

                h2 {
                    width: 70%;
                    line-height: 1.3;
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                p {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 1.6;
                }
            }
        }

        .b-flex {
            margin-top: 8rem;
        }
    }

    .chipper-team {
        height: 23rem;
        align-items: center;
        padding-left: 8rem;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-position: 0rem -3rem;

        h2 {
            width: 37%;
            padding-top: 9.5rem;
            font-size: 36px;
            font-weight: 700;
            color: #fff;
        }

        .icon {
            color: #acfce3;
        }
    }

    @media (max-width: 768px){
        .partnership {
            padding-left: 1rem;

            .container-large {
                .partners-pics {
                    display: none;
                }
            }

        }
        .football {
            display: block;
            padding-left: 1rem;

            .players {
                .image {
                    column-gap: 0.5rem;
                }
            }
        }

        .chipper-story {
            padding-left: 1rem;
            padding-right: 1rem;
            display: block;
        }

        .save-container {
            padding-left: 1rem;
            padding-right: 1rem;
            display: block;

            .d-flex, .b-flex {
                display: block;

                .contents-box {
                    h2 {
                        width: 100%;
                    }
                }
            }
        }

        .chipper-team {
            padding-left: 1rem;
            width: 100%;
            height: 17rem;
            background-position: -3rem 0rem;

            h2 {
                width: 100%;
                padding-top: 6.5rem;
            }
        }
    }
`;


const Support = () => {
  return (
    <StyledSupport>
        <div className="partnership" style={{backgroundImage: `url("https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297793062de1_coral-pattern.svg")`}}>
            <div className="container-large">
                <div className="partners" >
                    <h2 className="partners-content">Chipper-sponsored supporters groups attended the 2022 World Cup in Qatar!</h2>
                    <a href="/">
                        <div className="bg-blue"></div>
                        <p className="bg-text">Learn More</p>
                    </a>
                </div>

                <div className="partners-pics">
                    <img className= "p-image" src={Evra} alt="" />
                </div>
            </div>
        </div>

        <div className="football">
            <div className="players">
                <div className="image">
                    <img className="" src={Team} alt="" />
                    <img className="" src={Solo} alt="" />
                    <img className="" src={Rising} alt="" />
                </div>
            </div>

            <div className="content-box">
                <h2>Football Culture Across Africa</h2>
                <Dash 
                paragraph={"Take a photographic journey"}
                />
            </div>
        </div>

        <div className="chipper-story">
            <div className="feature">
                <h2>Featured In</h2>
                <p>Chipper’s story is “chipping away” at hard problems and unlocking global opportunities.</p>
                <Dash paragraph={"Read more about our journey"}/>
            </div>

            <div className="logos">
                <div className="logo1">            
                    <img src={BBC} alt="" />
                    <img src={TE} alt="" />
                    <img src={Forbes} alt="" />
            </div>

            <div className="logo2">            
                    <img src={TC} alt="" />
                    <img src={Roma} alt="" />
                    <img src={Apple} alt="" />
            </div>
            </div>
        </div>

        <div className="save-container">
            <div className="d-flex">
                <div className="image-box">
                    <img src={FT} alt="" />
                </div>

                <div className="contents-box">
                    <h2>Free Transfers & Low Cross-border Rates</h2>
                    <p>More money stays in your pocket, and more money arrives in theirs.</p>
                </div>
            </div>

            <div className="b-flex">
                <div className="contents-box">
                    <h2>As Fast and Easy as Sending a Text</h2>
                    <p>Send cash in just a few taps and watch it arrive instantly.</p>
                    <Dash paragraph={"Get started with Chipper Cash"}/>
                </div>

                <div className="image-box">
                    <img src={ST} alt="" />
                </div>
            </div>
        </div>

        <div className="chipper-team" style={{backgroundImage: `url("https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929b54f062de6_happy-people-p-1600.jpeg")`}}>
            <h2>Make an impact - Join the Chipper Cash team</h2>
            <div className="icon">
                <Dash paragraph={"Meet the team"}/>
            </div>
            
        </div>
    </StyledSupport>
  );
}

export default Support;