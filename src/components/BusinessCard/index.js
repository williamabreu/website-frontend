import React from "react"
import { Button, ButtonGroup, Col, Container, Row, Image } from "react-bootstrap"

const BusinessCard = (props) => (
  <Container className="business-card px-4 py-5">
    {props.avatar &&
      <Row>
        <Col>
          <Image
            style={{ height: "150px", marginBottom: "20px" }}
            src={props.avatar}
            roundedCircle
          />
        </Col>
      </Row>
    }

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
          <Button variant="outline-dark" href={item.link} target="_blank" >
            {item.icon} {item.name}
          </Button>
        ))}
      </ButtonGroup>
    }
  </Container>
)

export default BusinessCard
