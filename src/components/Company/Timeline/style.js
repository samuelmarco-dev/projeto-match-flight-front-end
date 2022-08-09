import styled from 'styled-components';

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

    h1 {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: flex-start;
        font-family: 'Saira Stencil One', cursive;
        align-items: center;
        margin-top: 10%;
        font-weight: 700;
        font-size: 26px;
        line-height: 18px;
        color: #FFFFFF;
        padding: 0 20px;
    }

    .button {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        margin-top: 10px;

        button {
            width: 100%;
            height: 44px;
            border-radius: 5px;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #126BA5;
            box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
        }
    }

    nav {
        background-color: gray;
        margin-top: 8%;
    }
`;

export default Container;
