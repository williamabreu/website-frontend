/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main d-flex align-items-center justify-content-center">
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        {/* <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  Developed by <a href="https://www.williamabreu.net">williamabreu.net</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container> */}
      </>
    )}
  />
)

export default Layout
