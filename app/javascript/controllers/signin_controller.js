import { Controller } from "@hotwired/stimulus";
import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import SignIn from "../components/SignIn";
import reactDom from "react-dom";

export default class extends Controller {
  connect() {
    console.log("Sign connected");
    const signIn = document.getElementById("signin");
    createRoot(signIn).render(<SignIn />);
  }
}
