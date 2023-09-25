import { useEffect, useState } from "react";

import { GrPlayFill } from 'react-icons/gr';
import SideBar from "../../components/SideBar";
import CardListBar from "../../components/CardListBar";

import { AlbumDetailsWrapper, Banner } from "./styles";

import Container from "../../components/Container";
import Spinner from "../../components/Spinner";
import Card from "../../components/Card";

import api from "../../services/api";
import { Link } from "react-router-dom";


function AlbumDetails() {
    const [loading, setLoading] = useState(true);
    const [album, setAlbumDetails] = useState([]);
    const [musicAlbum, setMusicAlbum] = useState([]);
    const [albumSimilares, setAlbumSimilares] = useState([]);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const artist = urlParams.get('artist');
    const albumName = urlParams.get('album');

    useEffect(() => {
        async function getAlbumDetails() {
            try {
                const { data } = await api.get(``, {
                    params: {
                        method: 'album.getinfo',
                        artist,
                        album: albumName,
                    }
                });
                setAlbumDetails(data.album);
                const traks = data.album.tracks.track
                const musicAlbum = traks.map((track, index) => {
                    return {
                        key: index,
                        name: track.name,
                        artist: track.artist.name,
                        url_image: 'https://via.placeholder.com/150'
                    }
                })
                setMusicAlbum(musicAlbum);
            } catch (error) {
                console.log(error);
            }
        }

        async function getAlbumSimilares() {
            try {
                const { data } = await api.get(``, {
                    params: {
                        method: 'artist.getSimilar',
                        artist,
                        limit: 5,
                    }
                });
                setAlbumSimilares(data.similarartists.artist);
                console.log(data.similarartists);

            } catch (error) {
                console.log(error);
            }
        }
        getAlbumDetails();
        getAlbumSimilares();
        setLoading(false);
    }, [artist, albumName]);


    return (
        <>
            <SideBar titulo={`Musica do album ${albumName}`} music={musicAlbum} />
            <Container>
                {loading && <Spinner />}
                <AlbumDetailsWrapper>
                    <Banner>
                        <div className="content-conteudo">
                            <div className="tags">
                                {album.tags && album.tags.tag.map((tag, index) => (
                                    <div className="tag" key={index}>
                                        <span>#{tag.name}</span>
                                    </div>
                                ))
                                }
                            </div>
                            <div className="title">
                                <h1>{album.artist}</h1>
                                <p>{album.name}</p>
                            </div>
                            <div className="buttons">
                                <Link to={album.url} target="_black">
                                    <button><GrPlayFill /> Play</button>
                                </Link>
                                <button>Follow</button>
                            </div>
                        </div>
                        <div className="img-banner">
                            {album.image && <img src={album.image[2]['#text']} alt="" />}
                        </div>
                    </Banner>

                    <div className="wiki">
                        <h2>Biografia</h2>
                        <p dangerouslySetInnerHTML={{ __html: album.wiki && album.wiki.content !== '' ? album.wiki.content : 'Sem informações' }} />
                    </div>
                    <div className="data_public">
                        <h2>Data de lançamento</h2>
                        <p>{album.wiki && album.wiki.published !== '' ? album.wiki.published : 'Sem informações'}</p>
                    </div>

                </AlbumDetailsWrapper>
                <CardListBar title='Albums similares'>
                    {albumSimilares && albumSimilares.map((item, index) => (
                        <Card
                            key={index}
                            url_photo={item.image[2]['#text']}
                            title={item.name}
                        />
                    ))}
                </CardListBar>
            </Container>
        </>
    );
}

export default AlbumDetails;