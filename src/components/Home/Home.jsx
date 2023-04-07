import React from 'react';
import styled from 'styled-components';
import Map from "../../assets/chipper map.png";
import QR from "../../assets/QR-code.svg";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";


const StyledHome = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Mulish', sans-serif;
    background-color: #222654;
    color: #fff;

    .container {
        display: flex;
        margin-left: 8rem;
        margin-right: 8rem;
        padding-top: 5rem;

        .left-container {
            flex: 1;
            h1 {
                font-size: 45px;
                font-weight: 800;
                width: 60%;
                margin-top: 4rem;
            }

            .l-c-text {
                font-size: 16px;
                font-weight: 500;
                margin-top: 35px;
                width: 70%;
                line-height: 27px;
            }

            .scan{
                display: flex;
                margin-top: 3rem;
                gap: 4rem;

                .scan-image {

                    img {
                        border-radius: 100%;
                    }
                }

                .scan-text {
                    display: block;
                    align-self: center;

                    .scan-d {

                    }

                    ul {
                        display: flex;
                        list-style-type: none;
                        gap: 1.5rem;
                        margin-top: 1.5rem;

                        .app-download {
                            display: flex;
                            color: #c1c4e5;
                            text-decoration: none;
                            align-items: center;
                            column-gap: 0.5rem;
                        

                            .store-icon {
                                font-size: 20px;
                            }

                            .download-btn {
                                font-size: 14px;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        }

        .right-container {
            // width: 100%;
            flex: 1;
            img {
                width: 100%;
                height: 100%;
            }
        }

        

    }


    .container-footer {
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 8rem;
        margin-right: 8rem;
        padding-bottom: 2rem;

        .heading-wrapper {
            color: #a3a6d8;
            
            .bg-white {
                width: 28px;
                height: 5px;
                margin-bottom: 0.75rem;
                border-radius: 20px;
                background-color: #fff;
            }

            h2 {
                color: #c1c4e5;
                font-size: 1rem;
                font-weight: 500;
                letter-spacing: 0;
            }
        }

        .stats-wrapper {
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            // column-gap: 3rem;
            column-gap: 3rem;

            .stats {
                display: block;
                max-width: 220px;

                h2 {
                    // text-align: center;
                    text-align: center;
                    color: #fff;
                    font-size: 2rem;
                    font-weight: 400;
                }

                div {
                    text-align: center;
                    color: #c1c4e5;
                    font-size: 11px;

                }
            }
        }
    }

    @media (max-width: 768px){
        .container {
            display: block;
            margin-left: 1rem;
            margin-right: 1rem;
            padding-top: 3rem;

            .left-container {
                h1 {
                    width: 100%;
                    margin-top: 2rem;
                }
                .l-c-text {
                    width: 100%;
                }

                .scan {
                    display: flex;
                    gap: 1rem;
                }
            }

        }
        
        .container-footer {
            display: block;
            margin-left: 1rem;
            margin-right: 1rem;

            .stats-wrapper {
                margin-top: 1rem;
                column-gap: 0.5rem;
    
                .stats {
    
                    h2 {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
`;

const Home = () => {
  return (
    <StyledHome>
        <div className="container">
            <div className="left-container">
                <h1>Move Your Money Freely</h1>
                <p className="l-c-text">Send and receive money across Africa the fast and easy way. Enjoy free transfers and the lowest cross-border rates.</p>
                <div className="scan">
                    <div className="scan-image">
                        <img src={QR} alt="" />
                    </div>
                    <div className="scan-text">
                        <p className="scan-d">Scan to download</p>
                        <ul>
                            <a href="#" className="app-download">
                                <div className="store-icon"><AiFillApple /></div>
                                <p className="download-btn">App Store</p>
                            </a>

                            <a href="#" className="app-download">
                                <div className="store-icon"><FaGooglePlay /></div>
                                <p className="download-btn">Google Play</p>
                            </a>
                        
                        </ul>
                    </div>
                </div>
            </div>

            <div className="right-container">
                <img src={Map} alt="" />
            </div>
        </div>

            <div className="container-footer">
                <div className="heading-wrapper">
                    <div className="bg-white"></div>
                    <h2>Chipper Cash key figures</h2>
                </div>

                <div className="stats-wrapper">
                    <div className="stats">
                        <h2 className="stat-title">5+ million</h2>
                        <div>Users <br /></div>
                    </div>

                    <div className="stats">
                        <h2 className="stat-title">300,000+</h2>
                        <div>Visa Cards Issued</div>
                    </div>

                    <div className="stats">
                        <h2 className="stat-title">6,000+</h2>
                        <div>US Public Companies to Invest in</div>
                    </div>

                    <div className="stats">
                        <h2 className="stat-title">$1.5+ billion</h2>
                        <div>Total Process Volume per quarter</div>
                    </div>
                </div>
            </div>
    </StyledHome>
  );
}

export default Home;