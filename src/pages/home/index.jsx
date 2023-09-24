import { useEffect, useState, useContext } from "react";

import { GrPlayFill } from 'react-icons/gr';
import { Link } from "react-router-dom";
import listening from '../../assets/listening-music.png';

import Banner from "./styles"
import Container from "../../components/Container";
import CardListBar from "../../components/CardListBar";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import SideBar from "../../components/SideBar";

import api from "../../services/api";

import SearchContext from "../../context/searchContext";




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
            <SideBar titulo="Top music Brazil" music={toMusic} />
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