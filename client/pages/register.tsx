import Navbar from "@/components/navbar/navbar";
import React from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

export default function Register() {
  return (
    <div>
      <Navbar />
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "8%",
            marginRight: 0,
          }}
        >
          <Col xs={5}>
            <Stack gap={3}>
              <h2 className="text-light text-center">Register</h2>
              <Form.Control type="text" placeholder="Name"></Form.Control>
              <Form.Control type="email" placeholder="Email"></Form.Control>
              <Form.Control
                type="password"
                placeholder="Password"
              ></Form.Control>
              <Form.Control
                type="password"
                placeholder="Comfirm password"
              ></Form.Control>
              <Button
                type="submit"
                variant="primary"
                style={{ fontSize: 20 }}
                className="fw-bold"
              >
                Register
              </Button>
              <Alert variant="danger">
                <p>An error occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
