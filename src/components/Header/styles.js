import { styled } from "styled-components"


const HeaderWrapper = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;

    .logo p {
        font-family: Puritan;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: #363636;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    .logo {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .search {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 0.2rem 0.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        width: 100%;
        

        input {
            width: 100%;
            border: none;
            outline: none;
            padding: 0.5rem;
            font-size: 1rem;
            min-height: 47px;
            border-radius: 0;
        }

        button {
            border: none;
            outline: none;
            background-color: transparent;
            cursor: pointer;
        }

        svg {
            font-size: 1.5rem;
            color: #242424;
        }
    }

    .navbar {
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 100%;

        button {
            border: none;
            outline: none;
            background-color: transparent;
            cursor: pointer;
            background-color: #010101;
        height: 100%;
        padding: 0.5rem;
        }

        svg {
            font-size: 2rem;
            color: #fff;

        }
    }

    @media (max-width: 768px) {
        .search {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .search {
            display: none;
        }
    }
`;
export default HeaderWrapper;
