import React from "react";

import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { FormProps } from "../interfaces/formProps";

const ContactEmail = ({ name, social, email, comment }: FormProps) => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Contact information</Text>
          <Text style={paragraph}>Name: {name}</Text>
          <Text style={paragraph}>Instagram/Telegram: {social}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>
            Comment: {comment}
          </Text>
        </Container>
      </Section>
    </Html>
  );
};

// Styles for the email template
const main = {
  fontFamily: "Montserrat",
};

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "740px",
  padding: "20px 20px 20px 20px",
  border: "1px solid #d39c50",
  borderRadius: "2.3125rem",
  backgroundColor: "#2d2814",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#d39c50",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#e3e3c5",
};

export default ContactEmail;
