import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: var(--dark);

    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1rem;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        img {
            width: 4rem;
        }

        strong {
            color: var(--shape);
            font-weight: 600;
            font-size: 2.4rem;
            margin-left: 1.2rem;
        }
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