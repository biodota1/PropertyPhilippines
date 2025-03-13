import nodemailer from "nodemailer";

export async function POST(req) {
  // Get the data from the request body
  const { firstName, lastName, email, phoneNumber, interest, type } =
    await req.json();

  // Create a Nodemailer transporter object using Hostinger SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587, // Use port 465 for SSL if you want secure connection
    secure: false, // False for TLS, set true for SSL (465)
    auth: {
      user: "support@propertyphilippines.net", // Email address
      pass: "Petforest123@", // Email password
    },
  });

  try {
    // Send the email using the transporter
    await transporter.sendMail({
      from: '"Property Philippines" <support@propertyphilippines.net>', // Sender's address
      to: "jamesmyertaneo@gmail.com", // Recipient's address
      subject: `${type}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Property of Interest: ${interest}
      `,
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Property of Interest:</strong> ${interest}</p>
      `,
    });

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
