import ItemListMusicWrapper from './styles';
import { GrPlayFill } from 'react-icons/gr';

import capa from '../../assets/capa.png';



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