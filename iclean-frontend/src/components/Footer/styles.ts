import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: var(--dark);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1120px;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 1rem;
    }

    span {
        color: var(--shape);
    }

    div {
        margin-top: 1rem;

        display: flex;

        justify-content: space-between;
        align-items: center;
        
        svg {
            margin: 0 0.6rem;
        }
    }
`;