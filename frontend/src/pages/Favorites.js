// Import frameworks and library's
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import child components
import FavoriteTable from "../components/favoriteTable";


// Favorite page contain on imported favorite table component and a shipment
// table.
export default function Favorites() {
  return (
    <Container className="App full-height">
      <Row>
        <Col md={12}>
          <FavoriteTable />
        </Col>

      </Row>
    </Container>
  );
}
