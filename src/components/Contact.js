// src/components/Contact.js
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { personalInfo } from "../data/data";

const ContactSection = styled.section`
  max-width: 600px;
  margin: 150px auto;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: ${theme.colors.lightestSlate};
  }

  p {
    color: ${theme.colors.slate};
    margin-bottom: 40px;
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

const Contact = () => (
  <ContactSection id="contact">
    <h2>{personalInfo.contact.heading}</h2>
    <p>{personalInfo.contact.message}</p>
    <a className="email-link" href={`mailto:${personalInfo.contact.email}`}>
      Say Hello
    </a>
  </ContactSection>
);

export default Contact;
