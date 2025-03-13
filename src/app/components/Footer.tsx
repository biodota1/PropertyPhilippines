import { Button, TextField } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-16 px-[5%]">
      <div className="flex flex-col md:flex-row pb-10 gap-4 md:justify-between">
        <div className="font-bold">
          <h1 className="text-lg pb-2">About Site</h1>
          <p className="text-sm md:w-[400px]">
            We are inviting you to consider me in your real estate journey
            whether you rent, sell or buy a property. We're looking forward to
            assisting you one day and find the best investment according to your
            preference!
          </p>
        </div>
        <div className="font-bold">
          <h1 className="text-lg pb-2">Quick Links</h1>
          <ul>
            <li>
              <Link href="about">Abous us</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
            <li>
              <Link href="inquire">Inquire</Link>
            </li>
          </ul>
        </div>
        <div className="font-bold">
          <h1 className="text-lg pb-2">Newsletter</h1>
          <h2 className="py-1">Interested</h2>
          <div className="flex gap-3">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <Button variant="contained">Inquire</Button>
          </div>
        </div>
      </div>
      <div className="font-semibold my-5">Copyright © 2025 Micasa.com</div>
    </div>
  );
}
