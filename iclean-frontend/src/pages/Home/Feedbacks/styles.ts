import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1120px;
    padding: 0 1rem 1rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    h1 {
        font-size: 3.4rem;
    }

    ul {
        padding: 0 1rem;

        display: flex;
        align-items: center;

        li:not(:last-child) {
            margin-right: 1rem;
        }
    }
`;

export const CardFeedback = styled.li`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 300px;

    background-color: var(--primary);
    box-shadow: -2px 3px 6px -1px rgba(0,0,0,0.61); 
    border-radius: 0.5rem;

    color: var(--shape);

    padding: 1rem;

    & > img {
        max-width: 220px;
        align-self: center;
    }

    strong {
        font-size: 2.4rem;
    }

    div {
        img {
            width: 2rem;
        }
    }
`;