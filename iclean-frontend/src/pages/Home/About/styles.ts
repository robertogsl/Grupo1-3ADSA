import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1120px;
    padding: 4rem 1rem 1rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        h1 {
            font-size: 3.4rem;
        }

        p {
            margin-top: 1rem;
            font-size: 1.2rem;

            text-align: end;
        }
    }
`;
