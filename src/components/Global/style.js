import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: #00A7EE;

    header {
        width: 100%;
        height: auto;
        margin-bottom: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-family: 'Bangers', cursive;
        letter-spacing: 0.08em;
        font-size: 38px;
        line-height: 50px;
        color: #FFFFFF;
        text-shadow: 4px 3px 6px rgba(0,0,0,0.6);
    }

    form {
        padding: 0 20px;
        width: 100%;
        height: auto;
        margin-bottom: 10%;
    }

    .input {
        width: 100%;
        height: auto;
        margin-top: 24px;

        input {
            width: 100%;
            height: 48px;
            border-radius: 5px;
            margin-bottom: 12px;
            padding: 0 16px;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: rgb(75,75,80);
            text-align: left;
            border: none;
            background-color: #FFFFFF;
        }
    }

    .button {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

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

    p {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        color: #FFFFFF;
    }
`;

export default Container;
