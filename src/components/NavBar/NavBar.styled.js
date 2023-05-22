import Styled from "styled-components";

export const StyledNavBar = Styled.nav`
    width: 100%;
    height: auto;
    font-family: 'Mulish', sans-serif;
    background-color: #222654;
    position: fixed;
    z-index: 1000;

`;

export const FlexBar = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 131px;

    .logo {
        width: 8rem;
        height: 1rem;
    }

    @media (max-width: 768px){
        padding: 15px 30px;
        align-items: normal;

        .logo {
            font-size: 10px;
        }
    }    
`;
export const Ul = Styled.div`
    display: flex;
    list-style-type: none;
    column-gap: 72px;
    flex-flow: row nowrap;
    cursor: pointer;


        li {

            a {
                color: #c7cfd4;
                text-decoration: none;
                font-size: 14px;
                font-weight: 600;

                &:hover {
                }

            }

            .btn-menu {
                border: 1px solid #A19CDC;
                color: #E8EAFC;
                font-size: 16px
                font-weight: 500;
                padding: 15px 25px;
                border-radius: 15px;
            }
        }
    }


    @media (max-width: 768px){
        row-gap: 39px;
        flex-flow: column nowrap;
        background-color: #222654;
        position: fixed;
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 260px;
        width: 200px;
        padding-top: 3rem;
        transition: transform 0.3s ease-in-out;
    
            li {
                padding-left: 3rem;
                a {
                    color: #c7cfd4;
                    font-size: 10px;

                    &:hover {
                        
                    }
                }

                .btn-menu {
                    font-size: 10px;
                    padding: 8px 10px;
                    border-radius: 7px;
                }
            }
        }
    
        
    }
`;
