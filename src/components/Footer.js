import SocialIcons from "./SocialIcons";
import { LocationIcon, PhoneIcon, MailIcon } from './SocialIcons';
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { StyledFooter } from "./styles/Footer.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
            <img src="./images/logo_white.svg" alt=""/>
                <Flex>
                    <ul>
                        <li>
                            <span><MdLocationOn /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li>
                            <span><MdPhoneInTalk /></span>
                            +1-543-123-4567
                        </li>
                        <li>
                            <span><IoIosMail /></span>
                            example@huddle.com
                        </li>
                    </ul>

                    <ul>
                        <li><a href="#">About Us</a> </li>
                        <li><a href="#">What We Do</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2022 Huddle. All rights reserved.</p>
            </Container>
        </StyledFooter>
    )
}
