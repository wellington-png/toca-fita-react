import { styled } from "styled-components";


const SpinnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Spinner() {


    return (

        <SpinnerContainer>
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" />
        </SpinnerContainer>

    )
}