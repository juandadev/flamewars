import React from "react";
import Homepage from "@components/Homepage";
import io from "socket.io-client";
const ENDPOINT = process.env.BASE_URL;

export default function index() {
  const socket = io(ENDPOINT);

  return <Homepage socket={socket} />;
}
