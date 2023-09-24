
import ItemListMusic from "../ItemListMusic";
import SideBarWrapper from "./styles";

export default function Playbar({ titulo, music }) {

    return (
        <SideBarWrapper>
            <div className="title-sidebar">
                <h2>{ titulo }</h2>
            </div>
            <div className="list-music">
                {/* <ItemListMusic /> */}
                {music.map((item) => (
                    <ItemListMusic
                        key={item.name}
                        url_image={item.url_image || item.image[2]["#text"]}
                        name={item.name}
                        artist={item.artist.name}
                    />
                ))}
            </div>
        </SideBarWrapper>
    );
}