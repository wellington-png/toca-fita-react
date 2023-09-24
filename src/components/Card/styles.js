import { styled } from 'styled-components'

const CardContainer = styled.article`
    width: 100%;
    max-width: 250px;
    height: 100%;
    max-height: 250px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease-in-out;


    .box {
        width: 100%;
        height: 100%;
        max-height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        margin-bottom: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s ease-in-out;
        }
    }

    h3 {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #000;
        margin-bottom: 10px;
    }

    &:hover {
        .box {
            img {
                transform: scale(1.1);
            }
        }
    }
`

export default CardContainer