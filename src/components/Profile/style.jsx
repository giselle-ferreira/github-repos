import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const ContainerUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    h3 {
        font-size: 18px;
        font-weight: 700;
    }

    h4 {
        font-size: 16px;
        font-weight: 700;
    }
`;

export const ContainerStatusCount = styled.div`
    display: flex;
    align-items: center;

    div {
        margin: 8px;
        text-align: center;
    }
`;

export const ContainerUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3 {
        margin-right: 8px
    }

    a {
        font-size: 18px;
        color: #1c39ad;
        font-weight: 700;
    }
`;

export const ContainerImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;