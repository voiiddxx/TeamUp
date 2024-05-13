import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface KoalaWelcomeEmailProps {
    userFirstname: string;
    useremail:string
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const WelcomeEmail = ({
    userFirstname,
  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcO6uXnKnQRoqQCYfVrhTvTLKmivsmYCEwzXjsicbKxbyOiuHnx0sb6eI2DusDzTkoi7Y&usqp=CAU`}
            width="100"
            height="80"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Welcome to TeamUp , An Cutting Edge platform build for listing your matches and find opponent to compete!.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://github.com/voiiddxx">
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The TeamUp Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Punjab , India
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  KoalaWelcomeEmail.PreviewProps = {
    userFirstname: "Alan",
  } as KoalaWelcomeEmailProps;
  
  export default KoalaWelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  