import React from "react"
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap"

const BusinessCard = (props) => (
  <Container className="business-card">
    <Row>
      <Col>
        <h1>{props.name}</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        <p style={{ fontSize: "16pt" }}>{props.description}</p>
      </Col>
    </Row>

    {props.socialNetworks &&
      <ButtonGroup>
        {props.socialNetworks.map(item => (
          <Button variant="outline-dark" href={item.link} >
            {item.icon}
          </Button>
        ))}
      </ButtonGroup>
    }
  </Container>
)

export default BusinessCard