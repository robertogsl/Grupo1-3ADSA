import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    min-height: 100vh;
    background-color: white;
`;

export const SideBar = styled.div`
    background-color: white;
    min-height: 100vh;
    width: 18.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Logo = styled.div `
    img{
        width: 3rem;
    }
    strong {
        padding-left: 1rem;
        font-size: 2rem;
    }

    display: inline-flex;
    padding: 1rem 2rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 80%;
        height: 0.01rem;
        bottom: -0.6rem;
        left: 10%;

        background-color: #F5F5F5;

    }
`;

export const Options = styled.ul`
    padding: 1.5rem 0.5rem 1.5rem 2rem;
    li{
        padding: 1rem;
        display: inline-flex;
        color: #67748E;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 36px;
        }
    }
    div{
        background-color: var(--primary);
        padding: 0.5rem;
        border-radius: 8px;
    }
    span{
        padding: 0.3rem 0.8rem;
        font-size: 1rem;
    }
`;

export const Helper = styled.div `
    width: 100%;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
            
    span{
        font-size: 1.8rem;
        margin-right: 0.9rem;
    }
`;

export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div `

`;

export const PrimaryCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 15rem;
    color: white;
    background-color: var(--primary);
    margin-bottom: 1rem;
    box-shadow: -20px 20px 35px rgba(0, 0, 0, 0.15);
    border-radius: 12px;

    span{
        padding: 3.5rem;
    }
`
export const SecondCard = styled.div`
color: white;
display: flex;
flex-direction: row;
    width: 90%;
    height: 15rem;
    border-radius: 8px;  
    margin-bottom: 1rem;
    display: inline-flex;
    justify-content: space-between;
    div{
        height: 100%;
        background-color: var(--primary);
        width: 49%;
        border-radius: 8px;
    }
`;
