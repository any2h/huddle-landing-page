import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        gap: 2.5rem;
    }
`

export const Logo = styled.img`

`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px;
        /* margin: 2rem 0 1.5rem; */
    }
`
