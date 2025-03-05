import React, { useState } from "react";
import Form from "./components/Form";
import "./styles.css";

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmitDetail(details) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Corrosponding to the input field names
    setName(details.name);
    setEmail(details.email);
    console.log("Name:", details.name);
    console.log("Email:", details.email);

    // Clear the form fields
    event.target.reset();
  }


  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onSubmitDetail={handleSubmitDetail} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
