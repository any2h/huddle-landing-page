import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 140px 0 60px;

    > div {
        padding-right: 80px;

        > div {
            align-items: start;
            
            > div {
                width: 100%;
                margin-top: 1rem;
                
                > li a {
                    transition: all .15s ease-in-out;

                    &:hover {
                        border-color: #FE52C0;
                        color: #FE52C0;
                    }
                }
            }
        }
    }
    
    ul:first-child {
        flex: 2;
        padding-inline-start: 0;
    }

    ul {
        list-style-type: none;
        padding-inline-start: 110px;
    }

    ul li {
        display: flex;
        margin-bottom: 20px;

        > a {
            position: relative;
            
            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 1px;
                background-color: #fff;
                opacity: 0;
                transition: all .15s ease-in-out;
            }
            
            &:hover {
                &::before {
                    opacity: 1;
                }
            }
        }

        > span {
            font-size: 1.5rem;
            margin-right: 1rem;
        }
    }

    p {
        font-size: .75rem;
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        * {
            text-align: start;
        }

        > div {
            padding-right: 20px;
        }
        
        ul {
            padding: 0;
        }
        p {
            text-align: center;
        }
    }
`
