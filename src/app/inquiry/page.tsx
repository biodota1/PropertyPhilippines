"use client";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    interest: "",
    type: "Inquiry",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Error sending email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="min-h-screen p-[5%] flex flex-col">
      <h1 className="text-2xl font-bold">Property Listing Inquiry</h1>
      <p className="font-semibold">
        Please fill the form below to know more about the property
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:w-[500px] py-10 gap-5"
      >
        <TextField
          variant="outlined"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        ></TextField>
        <TextField
          variant="outlined"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        ></TextField>
        <TextField
          variant="outlined"
          label="Email  "
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></TextField>
        <TextField
          variant="outlined"
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        ></TextField>
        <TextField
          variant="outlined"
          label="Propery of Interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
        ></TextField>
        <div>
          <Button variant="contained" type="submit">
            <p className="font-bold">Submit Inquiry</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
