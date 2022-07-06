import styled from 'styled-components'
import { Button } from './styles/Button.styled'

const StyledCta = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: clamp(20.5rem, 75vw, 45rem);
    height: clamp(212px, 30vw, 280px);
    margin: 0 auto;
    padding: 2.25rem 4rem;
    text-align: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    transform: translateY(30%);

    h3 {
        font-size: 1.5rem;
    }
    
    > button {
        padding: clamp(.95rem, 2vw, 1.75rem) clamp(2.5rem, 8vw, 7.5rem);

        @media (min-width: ${({theme}) => theme.mobile}) {
            font-size: 1rem;
        }
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        h3 {
            font-size: 1.125rem;
        }
    }
`

export default function Cta() {
    return (
        <StyledCta>
            <h3>Ready To Build Your Community?</h3>
            <Button bg="#FE52C0" color="#fff">
                Get Started For Free
            </Button>
        </StyledCta>
    )
}
