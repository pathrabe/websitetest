// src/components/Footer.js

import React from "react";
import styled from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 20px;

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 30px;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.2);
      }
    }
  }

  .footer-text {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .credits {
    margin-top: 20px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text};
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
            Icon = FaCode;
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
          href="https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {personalInfo.name}
        </a>
      </p>
    </div>
    <div className="credits">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
