import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa"

import { BusinessCard, Layout, SEO } from "../components"
import profilePicture from "../images/favicon.png"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO
      title="Home"
      keywords={[
        `william`,
        `abreu`,
        `software`,
        `developer`,
        `engineer`,
        `backend`,
        `python`,
        `node`,
      ]}
    />
    <Container className="text-center">
      <Row>
        <Col>
          <BusinessCard
            avatar={profilePicture}
            name="William Abreu"
            description="Senior Software Engineer"
            socialNetworks={[
              { name: "GitHub",    icon: <FaGithub/>,    link: "https://github.com/williamabreu" },
              { name: "LinkedIn",  icon: <FaLinkedin/>,  link: "https://linkedin.com/in/williamabreu96" },
              { name: "YouTube",   icon: <FaYoutube/>,   link: "https://youtube.com/williamabreu" },
              { name: "Instagram", icon: <FaInstagram/>, link: "https://instagram.com/williamabreu96" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
