import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const [responsive, setResponsive] = useState({
    lg: 3,
    md: 12,
    sm: 12,
    xs: 12,
  });

  const socialIcon = [
    { icon: <TwitterIcon /> },
    { icon: <LinkedInIcon /> },
    { icon: <YouTubeIcon /> },
    { icon: <FacebookIcon /> },
    { icon: <InstagramIcon /> },
  ];
  const explore = [
    { option: "Fashion" },
    { option: "Women" },
    { option: "Furniture" },
    { option: "Shoes" },
    { option: "TopWear" },
    { option: "Brands" },
    { option: "Kids" },
  ];
  const company = [
    { option: "Fashion" },
    { option: "Women" },
    { option: "Furniture" },
    { option: "Shoes" },
    { option: "TopWear" },
    { option: "Brands" },
    { option: "Kids" },
  ];
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#F9F9F9", padding: "10px 0px 30px 0px" }}
      >
        <Container>
          <Row>
            <Col md={responsive.md} lg={responsive.lg}>
              <Logo />
              <h4 style={{ marginTop: 5 }}>About Us</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </Col>
            <Col md={responsive.md} lg={responsive.lg}>
              <h4>About Us</h4>
              <ul style={{ padding: 0 }}>
                {explore.map((ex, index) => (
                  <li style={{ listStyle: "none" }} key={index}>
                    {ex.option}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={responsive.md} lg={responsive.lg}>
              <h4>Company</h4>
              <ul style={{ padding: 0 }}>
                {company.map((co, index) => (
                  <li style={{ listStyle: "none" }} key={index}>
                    {co.option}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={responsive.md} lg={responsive.lg}>
              <h4>Follow Us</h4>
              <div>
                {socialIcon.map((io, index) => (
                  <i style={{ margin: 5 }} key={index}>
                    {io.icon}
                  </i>
                ))}
                <h4>Support</h4>
                <p>support@example.com</p>
                <h4>Toll Free</h4>
                <p>1800-2xx-3xx</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Footer;
