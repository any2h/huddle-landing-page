import { FaTwitter, FaTelegram, FaLinkedin, } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href="#">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/any2h/">
                    <FaLinkedin />
                </a>
 
            </li>
            <li>
                <a href="https://t.me/any2h">
                    <FaTelegram />
                </a>
            </li>
        </StyledSocialIcons>
    )
}
