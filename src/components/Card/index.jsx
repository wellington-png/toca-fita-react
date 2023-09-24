import CardContainer from './styles'

export default function Card({ url_photo, title, key }) {
    return (
        <CardContainer key={key}>
            <div className="box">
                <img src={url_photo} alt="" />
            </div>
            <h3>{ title }</h3>
        </CardContainer >
    )
}