// src/components/Contact.js

import React from "react";
import styled from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFileDownload,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";

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
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 40px;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;

    a {
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition};

      &:hover {
        background-color: ${({ theme }) => theme.colors.greenTint};
      }

      svg {
        font-size: 20px;
      }
    }
  }

  .email-link {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem 1.75rem;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.mono};
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
    }
  }

  .social-link-row2 {
    display: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
    }

    svg {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      display: inline-flex;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition};
      margin-top: 20px;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Contact = () => {
  // const linkedinUrl = socialLinks.find((link) => link.name === "LinkedIn").url;
  const tiktokUrl = socialLinks.find((link) => link.name === "TikTok").url;
  const youtubeUrl = socialLinks.find((link) => link.name === "Youtube").url;
  const instagramUrl = socialLinks.find(
    (link) => link.name === "Instagram"
  ).url;

  return (
    <ContactSection id="contact">
      <h2>{personalInfo.contact.heading}</h2>
      <p>{personalInfo.contact.message}</p>
      <div className="contact-links">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
          <FaTiktok /> TikTok
        </a>
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <FaYoutube /> Youtube
        </a>
        <a className="email-link" href={`mailto:${personalInfo.contact.email}`}>
          <FaEnvelope /> Email
        </a>

      </div>
      <div className="contact-links">
        {/* <a
          className="social-link-row2"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a> */}
        <a
          className="social-link-row2"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload /> Download Brochure
        </a>
      </div>
    </ContactSection>
  );
};

export default Contact;
