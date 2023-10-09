import Navbar from "@/components/navbar/navbar";
import React from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

export default function Login() {
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
              <h2 className="text-light text-center">Login</h2>
              <Form.Control
                type="email"
                placeholder="Your email"
              ></Form.Control>
              <Form.Control
                type="password"
                placeholder="Password"
              ></Form.Control>
              <Button
                type="submit"
                variant="primary"
                style={{ fontSize: 20 }}
                className="fw-bold"
              >
                Login
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
