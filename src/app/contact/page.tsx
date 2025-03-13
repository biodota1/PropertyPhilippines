import { Button, TextField } from "@mui/material";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row p-[5%] gap-8">
      <div className="md:w-[600px]">
        <form action="" method="get" className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">CONTACT US</h1>
          <TextField variant="outlined" label="First Name"></TextField>
          <TextField variant="outlined" label="Last Name"></TextField>
          <TextField variant="outlined" label="Email"></TextField>
          <TextField variant="outlined" label="Phone"></TextField>
          <TextField variant="outlined" label="Message"></TextField>
          <Button variant="contained">Submit</Button>
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
