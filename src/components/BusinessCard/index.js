import React from "react"
import { Button, ButtonGroup, Col, Container, Row, Image } from "react-bootstrap"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

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
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 200 }}
            overlay={
              <Tooltip>
                {item.name}
              </Tooltip>
            }
          >
            <Button variant="outline-dark" href={item.link} target="_blank" >
              {item.icon}
            </Button>
          </OverlayTrigger>
        ))}
      </ButtonGroup>
    }
  </Container>
)

export default BusinessCard
