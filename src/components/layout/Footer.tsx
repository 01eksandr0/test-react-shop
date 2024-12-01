import Container from "./Container";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #004832;
  padding: 30px 0;

  @media screen and (min-width: 1440px) {
    padding: 68px 0;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
`;

const Logo = styled.img`
  height: 43px;
  width: 144px;

  @media screen and (min-width: 1440px) {
    height: 58px;
    width: 195px;
  }
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 12px;
  }
`;

const LinkItem = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #ffd012;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 19px;
    width: 19px;
    color: #fff;
  }
`;

const Address = styled.address`
  margin-top: 32px;

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

const AddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;

  li {
    display: flex;
    gap: 36px;
    align-items: center;
  }

  svg {
    width: 22px;
    height: 27px;
    color: #ffd012;
  }

  a {
    width: 212px;
    font-size: 14px;
    color: #fff;
  }
`;

const MobileAttr = styled.p`
  font-size: 12px;
  color: #fff;
  margin-top: 32px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const DesktopAttr = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    color: #fff;
    display: block;
  }
`;

// Usage in Footer Component
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <div>
            <Logo src="/assets/logo.svg" alt="logo" />
            <LinkList>
              <li>
                <LinkItem href="" aria-label="Facebook link">
                  <FaFacebookF />
                </LinkItem>
              </li>
              <li>
                <LinkItem href="" aria-label="Instagram link">
                  <FaInstagram />
                </LinkItem>
              </li>
              <li>
                <LinkItem href="" aria-label="Twitter link">
                  <FaTwitter />
                </LinkItem>
              </li>
              <li>
                <LinkItem href="" aria-label="Pinterest link">
                  <FaPinterestP />
                </LinkItem>
              </li>
            </LinkList>
            <DesktopAttr>©"LivroMundo" JSC, 2006 -2024</DesktopAttr>
          </div>
          <Address>
            <AddressList>
              <li>
                <FaMapMarkerAlt />
                <a href="">Statensingel 52, 3039 LP Rotterdam, Netherlands</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+845466789">Mobile: +(84) 546-6789</a>
              </li>
              <li>
                <IoMdMail />
                <a href="mailto:info@moviestore.nl">info@moviestore.nl</a>
              </li>
            </AddressList>
            <MobileAttr>©"LivroMundo" JSC, 2006 -2024</MobileAttr>
          </Address>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
