

import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Playbar from "../../components/Playbar";
import SideBar from "../../components/SideBar";

const ContainerWrapper = styled.div`
    display: grid;
    grid-template-areas: "header sidebar"
        "main  sidebar"
        "playbar playbar";
    grid-template-columns: 3fr 1fr ;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 100vw;

    @media (max-width: 768px) {
        grid-template-areas: "header"
            "main"
            "sidebar"
            "playbar";
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto auto;
    }

    @media (max-width: 480px) {
        grid-template-areas: "header"
            "main"
            "sidebar"
            "playbar";
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto auto;
    }
`;


export default function Default() {
    return (
        <ContainerWrapper>
            <Header />
            <Outlet />
            <SideBar />
            <Playbar />
        </ContainerWrapper>
    );
}