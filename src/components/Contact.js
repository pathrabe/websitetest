// src/components/Contact.js
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { personalInfo, socialLinks } from "../data/data";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: ${theme.colors.lightestSlate};
  }

  p {
    color: ${theme.colors.slate};
    margin-bottom: 40px;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;

    a {
      color: ${theme.colors.green};
      background-color: transparent;
      border: 1px solid ${theme.colors.green};
      border-radius: ${theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${theme.fonts.mono};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: ${theme.transition};

      &:hover {
        background-color: ${theme.colors.greenTint};
      }

      svg {
        font-size: 20px;
      }
    }
  }

  .email-link {
    color: ${theme.colors.green};
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 1rem 1.75rem;
    font-size: 16px;
    font-family: ${theme.fonts.mono};
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover {
      background-color: ${theme.colors.greenTint};
    }
  }
`;

const Contact = () => {
  const linkedinUrl = socialLinks.find((link) => link.name === "LinkedIn").url;
  const instagramUrl = socialLinks.find(
    (link) => link.name === "Instagram"
  ).url;

  return (
    <ContactSection id="contact">
      <h2>{personalInfo.contact.heading}</h2>
      <p>{personalInfo.contact.message}</p>
      <div className="contact-links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a className="email-link" href={`mailto:${personalInfo.contact.email}`}>
          <FaEnvelope /> Email
        </a>
      </div>
    </ContactSection>
  );
};

export default Contact;
