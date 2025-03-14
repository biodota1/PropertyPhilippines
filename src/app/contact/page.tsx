"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendInquiry", {
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
    <div className="flex flex-col md:flex-row p-[5%] gap-8">
      <div className="md:w-[600px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">CONTACT US</h1>
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
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></TextField>
          <div>
            <Button variant="contained" type="submit">
              <p className="font-bold">Submit</p>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 font-bold bg-slate-800 text-white p-6">
        <h1 className="text-xl font-bold">CONTACT DETAILS</h1>
        <p>Please find below contact details and contact us today!</p>
        <div className="flex flex-col gap-4">
          <div>Whatsapp +63 945 280 6942</div>
          <div>Globe +63 945 280 6942</div>
          <div>Email charyprochina@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
