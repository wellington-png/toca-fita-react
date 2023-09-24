import { useEffect, useState, useContext } from "react";

import { styled } from "styled-components";
import { GrPlayFill } from 'react-icons/gr';
import { Link } from "react-router-dom";
import listening from '../../assets/listening-music.png';


import Container from "../../components/Container";
import CardListBar from "../../components/CardListBar";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import SideBar from "../../components/SideBar";

import api from "../../services/api";

import SearchContext from "../../context/searchContext";


const Banner = styled.div`
    background: rgba(235, 213, 100, 0.94);
    border-radius: 6px;
    width: 100%;
    max-height:  224px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    
    .content-conteudo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 20px 0;

        .tags {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            margin-bottom: 10px;

            .tag {
                background: rgba(244, 234, 179, 0.60);
                border-radius: 5px;
                padding: 7px 15px;
                margin-right: 10px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease-in-out;

                &:hover {
                    background: #000;
                    color: #fff;
                }
            }
        }

        .title {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 10px;

            h1 {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 5px;
            }

            p {
                font-size: 14px;
                font-weight: 500;
            }
        }

        .buttons {
            display: flex;
            width: 100%;

            button {
                background: #fff;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                font-size: 14px;
                color: #000;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
            margin-left: 10px;


                &:hover {
                    background: #000;

                }
            }
        }
    }

    
`;


export default function Home() {

    const { search } = useContext(SearchContext);
    const [music, setMusic] = useState([]);
    const [toMusic, setTopMusic] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMusic() {
            setLoading(true);
            try {
                const { data } = await api.get(``, {
                    params: {
                        method: 'artist.getTopAlbums',
                        artist: search,
                        limit: 10,
                    }
                });
                setMusic(data.topalbums.album);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getMusic();
    }, [search]);


    useEffect(() => {
        async function getMusic() {
            const response = await api.get("", {
                params: {
                    method: "geo.getTopTracks",
                    country: "brazil",
                    limit: 8,
                }
            })
            setTopMusic(response.data.tracks.track);
        }

        getMusic();

    }, []);


    return (
        <>
            <SideBar music={toMusic} />
            <Container>
                {loading && <Spinner />}
                <Banner>
                    <div className="content-conteudo">
                        <div className="tags">
                            <div className="tag">
                                <span>#radio</span>
                            </div>
                            <div className="tag">
                                <span>#house</span>
                            </div>
                        </div>
                        <div className="title">
                            <h1>Best Progressive House (All - Time)</h1>
                            <p>Westcoast Radio (EDM)</p>
                        </div>
                        <div className="buttons">
                            <button>
                                Play
                                <GrPlayFill />
                            </button>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="img-banner">
                        <img src={listening} alt="" />
                    </div>
                </Banner>
                <CardListBar title='Tops Musicas'>
                    {music.map((item, index) => (
                        item.image[3]['#text'] !== '' && <Link to={`album/?album=${encodeURIComponent(item.name)}&artist=${encodeURIComponent(item.artist.name)}`} className="tega">
                            <Card key={index} url_photo={item.image[3]['#text']} title={item.name} />
                        </Link>
                    ))}
                </CardListBar>
            </Container>
        </>
    );
}