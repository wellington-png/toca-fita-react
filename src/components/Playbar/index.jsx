import FooterWrapper from "./styles";
import ItemListMusic from "../ItemListMusic";

export default function Playbar() {
    return (
        <FooterWrapper>
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
        </FooterWrapper>
    );
}
