import { styled } from 'styled-components';
import { GrPlayFill } from 'react-icons/gr';

import capa from '../../assets/capa.png';

const ItemListMusicWrapper = styled.div`
    display: flex;
    border: 1px solid rgba(65, 65, 65, 0.13);
    max-height: 80px;
    margin-bottom: 0.5rem;

    .music-photo {
        height: 100%;
        overflow: hidden;
        background-color: #fff;

        img {
            width: 100%;
            height: 100%;
            max-width: 100%;
            object-fit: cover;
        }
    }

    .music-conteudo {
        display: flex;
        flex-direction: column;
        flex: 1;

        h3 {
            margin-block-start: 0;
            margin-block-end: 0;

            color: #000;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

        }

        p {
            margin-block-start: 0;
            margin-block-end: 0;

            color: rgba(0, 0, 0, 0.32);
            
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

        }
    }

    .music-play {
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid rgba(65, 65, 65, 0.13);

        button {
            border: none;
            outline: none;
            background-color: transparent;
            cursor: pointer;

            .icon-play {
                font-size: 1.5rem;
                color: #242424;
            }

        }
    }

    &:hover {
        background-color: #000000;
        p {
            color: #ffffff;

        }
        h3 {
            color: #ffffff;
        }
        .music-play{
            border-left: 1px solid #ffffff;
            button {
                .icon-play {
                    color: #ffffff;
                }
            }  
        }
    }
}
`


export default function ItemListMusic({ url_image, name, artist, id }) {
    return (
        <ItemListMusicWrapper key={id}>
            <div className="music-photo">
                <img src={url_image || capa } alt="" />
            </div>
            <div className="music-conteudo">
                <h3>{ name }</h3>
                <p>{ artist }</p>
            </div>
            <div className="music-play">
                <button>
                    <GrPlayFill color="#EBD564" className="icon-play" />
                </button>
            </div>
        </ItemListMusicWrapper>
    );
}