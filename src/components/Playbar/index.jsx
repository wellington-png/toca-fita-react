import { styled } from "styled-components";
import ItemListMusic from "../ItemListMusic";


const HeaderWrapper = styled.section`
    grid-area: playbar;
    display: flex;

    background-color: #242424;
    overflow: hidden;
    padding: 1rem;
    gap: 1rem;
    align-items: center;


    .music {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 1rem;
        gap: 1rem;
    }

    .music-time {
        display: flex;
        flex-direction: column;
        flex: 2;
        padding: 1rem;
        gap: 1rem;
    }

    .music-control {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 1rem;
        gap: 1rem;
    }

    .bar-time {
        width: 100%;
        height: 5px;
        background-color: #fff;
        border-radius: 5px;
    }

    .bar-time-now {
        width: 50%;
        height: 5px;
        background-color: #EBD564;
        border-radius: 5px;
    }

    .time {
        display: flex;
        justify-content: space-between;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        margin: 13.8px 0;
    }
    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000;
        background: #EBD564;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0.5px 0.5px 0.5px #000000;
        border: 1px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7.5px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #fff;
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000;
        background: #fff;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
`;

export default function Playbar() {
    return (
        <HeaderWrapper>
            <div className="music">
                <ItemListMusic />
            </div>
            <div className="music-time">
                <div className="bar-time">
                    <div className="bar-time-now"></div>
                </div>
            </div>
            <div className="music-control">
                <input type="range" min="0" max="100" />
            </div>
        </HeaderWrapper>
    );
}