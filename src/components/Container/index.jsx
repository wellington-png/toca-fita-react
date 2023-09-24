import { styled } from "styled-components";

const ContainerWrapper = styled.div`
    grid-area: main;
    padding: 1rem 2rem;
    gap: 1rem;
`;

export default function Container( {children} ) {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
}