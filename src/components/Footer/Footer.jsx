import React from 'react';
import styled from 'styled-components';
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import Dash from '../Dash/Dash';
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "../../assets/logo-chipper.svg";


const StyledFooter = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Mulish', sans-serif;

    .empty-section {
        padding-top: 20rem;

        .footer-container {
            background-color: #202654;
            padding-left: 8rem;
            padding-right: 8rem;
            position: relative;

            .footer-cta {
                overflow: hidden;
                width: 81%;
                height: 20rem;
                bottom: 21rem;
                position: absolute;
                padding: 4rem;
                margin-bottom: 1rem;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid #c1c4e5;
                border-radius: 2rem;
                background-color: #fff;
                text-align: center;

                .cta-content {
                    z-index: 1;

                    h3 {
                        font-size: 2.5rem;
                        line-height: 1.3;
                        font-weight: 700;
                        position: relative;
                        z-index: 1;
                        letter-spacing: -.015rem;
                    }

                    .button-group {
                        margin-top: 2rem;
                        display: flex;
                        column-gap: 1.2rem;
                        justify-content: center;
                        z-index: 1;
                        position: relative;

                        .app-download {
                            display: flex;
                            padding: .7rem 2rem .7rem 2rem;
                            justify-content: center;
                            align-items: center;
                            column-gap: 10px;
                            border-radius: 1rem;
                            background-color: #202654;
                            text-decoration: none;
                            transition: background-color 250ms;
                            color: #fff;

                            .store-icon {
                                font-size: 30px;
                            }

                            .downloads {

                                .download-text {
                                    font-size: 10px;
                                    line-height: 1;
                                }
    
                                .download-store {
                                    font-size: 16px;
                                    line-height: 2;
                                    font-weight: 600;
                                }
                            }

                            
                        }
                    }

                    .mint-circle {
                        position: absolute;
                        left: auto;
                        top: auto;
                        right: 6rem;
                        bottom: 7rem;
                        width: 21rem;
                        height: 21rem;
                        border-radius: 1000px;
                        background-color: #acfce3;
                    }

                    .purple-circle {
                        position: absolute;
                        left: -5rem;
                        top: 10rem;
                        right: auto;
                        bottom: auto;
                        width: 20rem;
                        height: 20rem;
                        border-radius: 1000px;
                        background-color: #6945d8;
                    }

                    .purple-square {
                        position: absolute;
                        left: auto;
                        top: auto;
                        right: 0;
                        bottom: 0;
                        width: .7rem;
                        height: .7rem;
                        margin-right: 5rem;
                        margin-bottom: 6rem;
                        border-radius: 4px;
                        background-color: #6945d8;
                    }

                    .mint-square {
                        position: absolute;
                        left: 4rem;
                        top: 4rem;
                        right: auto;
                        bottom: auto;
                        width: .7rem;
                        height: .7rem;
                        background-color: #acfce3;
                    }

                    .alt-orange-square {
                        position: absolute;
                        border-radius: 4px;
                        background-color: #f06943;
                        width: 1rem;
                        height: 1rem;
                        left: auto;
                        top: auto;
                        right: -5rem;
                        bottom: 0;
                        margin-right: 16rem;
                        margin-bottom: -6px;
                    }

                    .orange-square {
                        position: absolute;
                        left: auto;
                        top: 0;
                        right: 28rem;
                        bottom: 0;
                        width: .8rem;
                        height: .8rem;
                        margin-right: 10rem;
                        border-radius: 4px;
                        background-color: #f06943;
                    }
                }
            }

            .footer-top {
                display: flex;
                padding-top: 13.5rem;
                padding-bottom: 2.5rem;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 1px solid #384d69;

                .footer-tl {
                    flex: 1;
                    width: 100%;

                    .footer-menu {
                        display: flex;
                        margin-top: 2rem;
                        align-items: center;
                        column-gap: 1.25rem;

                        p {
                            color: #c1c4e5;
                            font-size: 15px;
                        }
                    }
                    
                }

                .footer-top-right {
                    flex: 1;
                    width: 100%;

                    .footer-tr {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        color: #c1c4e5;

                        h4 {
                            color: #fff;
                            margin-top: 0;
                            margin-bottom: 0;
                            font-size: 1.625rem;
                            line-height: 1.4;
                            font-weight: 600;
                        }

                        .support-link {
                            display: flex;
                            align-items: baseline;
                            text-align: center;
                            width: 70%;

                            Dash {
                                color: #acfce3;
                            }

                            .support-text {
                                width: 100%;
                                font-size: 15px;
                            }
                        }
                    }
                }
            }

            .footer-bottom {
                display: flex;
                padding-top: 2.5rem;
                padding-bottom: 2.5rem;
                -webkit-box-pack: justify;
                justify-content: space-between;
                align-items: flex-start;
                color: #c1c4e5;

                .footer-bl {
                    p {
                        margin-top: 0;
                        margin-bottom: 0;
                        line-height: 1.6;
                    }
                }

                .footer-middle {

                    p {
                        font-size: 15px;
                        margin-top: 0;
                        margin-bottom: 0;
                        line-height: 1.6;
                    }
                }

                .footer-br {
                    display: flex;
                    column-gap: .7rem;

                    p {

                    }

                    .footer-icons {
                        display: flex;
                        column-gap: .7rem;
                    }
                }
            }
        }
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
        <div className="empty-section">
            <div className="footer-container">
                <div className="footer-cta">
                        <div className="cta-content">
                            <h3>Move Your Money Freely</h3>
                            <div className="button-group">
                                <a href="#" className="app-download">
                                    <div className="store-icon"><AiFillApple /></div>
                                    <div className="downloads">
                                        <p className="download-text">Download on the</p>
                                        <p className="download-store">App Store</p>
                                    </div>
                                    
                                </a>

                                <a href="#" className="app-download">
                                    <div className="store-icon"><FaGooglePlay /></div>
                                    <div className="downloads">
                                        <p className="download-text">Download on the</p>
                                        <p className="download-store">App Store</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="mint-circle"></div>
                            <div className="purple-circle"></div>
                            <div className="purple-square"></div>
                            <div className="mint-square"></div>
                            <div className="alt-orange-square"></div>
                            <div className="orange-square"></div>

                        </div>
                   </div>

                    <div className="footer-top">
                        <div className="footer-tl">
                            <img src={Image} alt="Chipper-cash logo" />
                            <div className="footer-menu">
                                <p>Products</p>
                                <p>Support</p>
                                <p>Careers</p>
                                <p>Legal</p>
                            </div>
                        </div>

                        <div className="footer-top-right">
                            <div className="footer-tr">
                                <h4>How Can We Help You?</h4>
                                <div className="support-link">
                                    <Dash paragraph={"Help Docs & FAQs"}/>
                                    <p className="support-text">|  Support via In-app Chat</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bl">
                            <p>© 2021-2022 Critical Ideas, Inc. <br />Voyse Technologies US, Inc. NMLS ID: 2266748</p>
                        </div>

                        <div className="footer-middle">
                            <p>Product availability may vary by market.</p>
                        </div>

                        <div className="footer-br">
                            <p>Follow us:</p>
                            <div className="footer-icons">
                                <div><AiFillFacebook /></div>
                                <div><BsTwitter /></div>
                                <div><BsInstagram /></div>
                                <div><AiFillYoutube /></div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </StyledFooter>
  );
}

export default Footer;