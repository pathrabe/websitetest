// Updated Footer Component Code
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { personalInfo, socialLinks } from "../data/data";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: ${theme.colors.darkNavy};
  padding: 50px 0;
  text-align: center;

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;

    a {
      color: ${theme.colors.lightestSlate};
      font-size: 24px;
      transition: ${theme.transition};

      &:hover {
        color: ${theme.colors.green};
      }
    }
  }

  .footer-text {
    color: ${theme.colors.slate};
    font-size: 14px;

    a {
      color: ${theme.colors.green};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="social-icons">
      {socialLinks.map(({ id, name, url }) => {
        let Icon;
        switch (name) {
          case "GitHub":
            Icon = FaGithub;
            break;
          case "LinkedIn":
            Icon = FaLinkedin;
            break;
          case "Twitter":
            Icon = FaTwitter;
            break;
          case "Instagram":
            Icon = FaInstagram;
            break;
          default:
            Icon = FaGithub;
        }
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
    <div className="footer-text">
      <p>
        Designed & Built by{" "}
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {personalInfo.name}
        </a>
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
