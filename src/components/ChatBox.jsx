import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ChatBox({ onSubmit }) {
  const [chatBox, setChatBox] = useState("");

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(chatBox);
        setChatBox("");
      }}
    >
      <div className="form-row">
        <Form.Group controlId="message">
          <Form.Control
            type="text"
            placeholder="Start typing here..."
            autoComplete="off"
            value={chatBox}
            onChange={(event) => setChatBox(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </div>
    </Form>
  );
}
