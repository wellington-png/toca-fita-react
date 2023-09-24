import { styled} from 'styled-components'

const CardListBarContainer = styled.div`

    display: flex;
    flex-direction: column;

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .content-conteudo {
        background: #fff;
        padding: 20px;

        display: flex;
        align-content: flex-start;
        max-height: 100%;
        width: 100%;
        flex-wrap: wrap;
        margin: 5px;

        justify-content: space-around;
        
    }

`

export default function CardListBar({ children, title }) {
    return (
        <CardListBarContainer>
            <h2>{ title }</h2>
            <div className="content-conteudo">
                {children}
            </div>
        </CardListBarContainer>
    )
}