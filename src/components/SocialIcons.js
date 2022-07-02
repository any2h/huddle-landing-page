import { FaTwitter, FaFacebook, FaInstagram, } from 'react-icons/fa'
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
                <a href="#">
                    <FaFacebook />
                </a>
 
            </li>
            <li>
                <a href="#">
                    <FaInstagram />
                </a>
            </li>
        </StyledSocialIcons>
    )
}
