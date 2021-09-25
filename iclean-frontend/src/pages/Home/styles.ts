import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Content = styled.main`
    max-width: 1120px;
    padding: 0 1rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 540px;

    & > div {
        display: grid;

        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;

        & > div {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;

            strong {
                font-size: 3.4rem;
                line-height: 3.4rem;
            }

            span {
                margin-top: 1rem;
                font-size: 1.2rem;
            }

            div {
                margin-top: 1.6rem;
                width: 100%;

                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 1rem;
            }
        }
    }
`;

interface ButtonProps {
    main: boolean;
}

export const ButtonMain = styled.button<ButtonProps>`
    padding: 0.5rem 1rem;

    background-color: var(--primary);
    color: var(--shape);
    border: 0;

    ${props => !props.main && css`
        background-color: var(--shape);
        color: var(--primary);
        border: 1px solid var(--primary);
    `};

    font-size: 1.2rem;
    font-weight: 500;

    border-radius: 4px;

    transition: filter .3s;

    &:hover {
        filter: brightness(0.9);
    }
`;