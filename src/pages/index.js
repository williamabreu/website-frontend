import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { FaLinkedin } from "react-icons/fa"

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
            description="Sr. Software Engineer"
            socialNetworks={[
              { name: "LinkedIn", icon: <FaLinkedin className="mb-1"/>, link: "https://linkedin.com/in/williamabreu96" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
