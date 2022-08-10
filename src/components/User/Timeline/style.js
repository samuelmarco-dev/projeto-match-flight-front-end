import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00A7EE;

    header {
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #126BA5;

        p {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-family: 'Bangers', cursive;
            letter-spacing: 0.08em;
            font-size: 30px;
            line-height: 30px;
            color: #FFFFFF;
            text-shadow: 4px 3px 6px rgba(0,0,0,0.6);
        }

        img {
            width: 50px;
            height: 50px;
        }

        svg {
            height: 100%;
            font-size: 32px;
            color: #FFFFFF;
        }
    }

    main {
        width: 100%;
        height: calc(100% - 10vh - 9vh);
        margin-top: 10vh;

        img {
            width: 100%;
            height: 100%;
            position: relative;
        }

        nav {
            width: 100%;
            height: calc(100% - 10vh - 9vh);
            position: absolute;
            top: 10vh;
            left: 0;

            h1 {
                width: 100%;
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Saira Stencil One', cursive;
                font-weight: 700;
                font-size: 26px;
                line-height: 18px;
                color: #FFFFFF;
                margin-top: 10px;
            }

            div {
                width: 100%;
                height: auto;
                position: absolute;
                bottom: 15px;
                left: 0;
                padding: 0 20px;

                strong {
                    font-weight: 600;
                    line-height: 23px;
                    color: #FFFFFF;
                }

                p {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 23px;
                    color: #FFFFFF;
                    margin-bottom: 3px;
                }
            }
        }
    }

    footer {
        background-color: white;
        width: 100%;
        height: 9vh;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        div {
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;

            svg {
                width: 60%;
                height: 100%;
            }
        }

        .clear {
            border: 2px solid #b61212;
            svg {
                color: #b61212;
            }
        }

        .subscribe {
            border: 2px solid #340be8;
            svg {
                color: #340be8;
            }
        }

        .favorite {
            border: 2px solid #0be8af;
            svg {
                color: #0be8af;
            }
        }
    }
`;

export default Container;
