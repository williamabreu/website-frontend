import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa"

import { BusinessCard, Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO
      title="Home"
      keywords={[`william`, `abreu`, `software`, `developer`]}
    />
    <Container className="text-center">
      <Row>
        <Col>
          <BusinessCard
            name="William Abreu"
            description="Software Developer"
            socialNetworks={[
              { name: "GitHub",    icon: <FaGithub/>,    link: "https://github.com/williamabreu" },
              { name: "LinkedIn",  icon: <FaLinkedin/>,  link: "https://linkedin.com/in/williamsantosabreu" },
              { name: "YouTube",   icon: <FaYoutube/>,   link: "https://youtube.com/williamabreu" },
              { name: "Instagram", icon: <FaInstagram/>, link: "https://instagram.com/williamsantosabreu" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
