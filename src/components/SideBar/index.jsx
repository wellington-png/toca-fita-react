import { useEffect, useState } from "react";

import { styled } from "styled-components";
import ItemListMusic from "../ItemListMusic";
import  api  from "../../services/api";

const SideBarWrapper = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    background-color: #EBD564;
    overflow: hidden;
    padding: 1rem;
    gap: 1rem;

    .title-sidebar {
        display: flex;
        align-items: center;
        
        h2 {
            color: #363636;
            font-family: Puritan;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

    .list-music {
        display: flex;
        flex-direction: column;
        flex: 1;
    }


    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #fff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #363636;
        border-radius: 20px;
        border: 3px solid #fff;
    }



    @media (max-width: 768px) {
        .list-music > div {
            padding: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        .list-music > div {
            padding: 0.5rem;
        }
    }

`;

export default function Playbar() {
    const [music, setMusic] = useState([]);
    
    useEffect(() => {
        async function getMusic() {
            const response = await api.get("", {
                params: {
                    method: "geo.getTopTracks",
                    country: "brazil",
                    limit: 8,
                }
            })
            setMusic(response.data.tracks.track);
        }

        getMusic();

    }
    , []);

    return (
        <SideBarWrapper>
            <div className="title-sidebar">
                <h2>My favorite tracks</h2>
            </div>
            <div className="list-music">
                {/* <ItemListMusic /> */}
                {music.map((item) => (
                    <ItemListMusic
                        key={item.name}
                        url_image={item.image[2]["#text"]}
                        name={item.name}
                        artist={item.artist.name}
                    />
                ))}
            </div>
        </SideBarWrapper>
    );
}