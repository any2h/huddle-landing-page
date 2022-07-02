import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    background-image: url('./images/bg-hero-desktop.svg');
    background-position: center;
    padding: 50px 0;

    h1 {
        font-size: clamp(24px, 4vw, 34px);
    }

    p {
        opacity: 1;
    }

    section {

        > div {
            flex: 2;

            > button {
                margin-top: 1rem;
            }
        }

        > img {
            flex: 3;
        }
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        gap: 2.5rem;

        > img {
            width: 40%;
        }

        > button {
            padding: .5rem 2rem;
        }
    }
`

export const Logo = styled.img`

`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 10px;
        /* margin: 2rem 0 1.5rem; */
    }
`
