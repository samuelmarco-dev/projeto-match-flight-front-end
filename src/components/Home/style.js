import styled from "styled-components";

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30%;
        padding: 0 20px;

        svg {
            color: #FFFFFF;
            font-size: 120px;
        }
        
        p {
            width: 100%;
            height: 70px;
            font-weight: 800;
            font-family: 'Bangers', cursive;
            letter-spacing: 0.08em;
            font-size: 44px;
            line-height: 50px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            text-shadow: 4px 3px 6px rgba(0,0,0,0.6);
        }
    }

    div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        
        a {
            width: 100%;
            height: auto;
        }
        
        button{
            width: 100%;
            height: 48px;
            background-color: #126BA5;
            border-radius: 5px;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            margin-bottom: 15px;
            box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4)
        }
    }
`;

export default Container;
