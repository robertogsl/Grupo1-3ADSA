import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--dark);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 1rem;

    div:first-of-type {
        background-color: #fff;
    }

    nav {
        a {
            margin: 0 0.8rem;
            text-decoration: none;

            font-size: 1.2rem;
            font-weight: 500;
            color: #fff;

            position: relative;

            cursor: pointer;

            &:after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;

                background-color: var(--primary);

                width: 0;
                height: 2.4px;

                transition: width .3s linear;
            }

            &:hover {
                &:after {
                    width: 100%;
                }
            }
        }
    }
`;