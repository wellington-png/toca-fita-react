import { useEffect, useState } from "react";

import { styled } from "styled-components";
import { GrPlayFill } from 'react-icons/gr';


import Container from "../../components/Container";
import Spinner from "../../components/Spinner";

import api from "../../services/api";
import { Link } from "react-router-dom";


const AlbumDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;

    .wiki {
        width: 100%;
        margin-bottom: 30px;

        h2 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            font-weight: 500;
        }
    }

    .data_public {
        width: 100%;
        margin-bottom: 30px;

        h2 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            font-weight: 500;
        }
    }
`

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


function AlbumDetails() {
    const [loading, setLoading] = useState(true);
    const [album, setAlbumDetails] = useState([]);

    // get query params
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const artist = urlParams.get('artist');
    const albumName = urlParams.get('album');

    useEffect(() => {
        api.get('', {
            params: {
                method: 'album.getinfo',
                artist,
                album: albumName,
            }
        }).then(response => {
            setAlbumDetails(response.data.album);
            console.log(album.artist);
            setLoading(false);
        }).catch(error => {
            console.log(error);

        });

    }, [artist, albumName, album.artist]);



    return (
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
                    <p dangerouslySetInnerHTML={{ __html: album.wiki && album.wiki.content }}></p>
                </div>
                <div className="data_public">
                    <h2>Data de lançamento</h2>
                    <p>{album.wiki && album.wiki.published}</p>
                </div>

            </AlbumDetailsWrapper>
        </Container>
    );
}

export default AlbumDetails;