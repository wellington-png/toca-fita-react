import { styled } from "styled-components";


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

export { AlbumDetailsWrapper, Banner };
