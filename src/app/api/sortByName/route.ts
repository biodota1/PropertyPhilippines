import { NextApiRequest, NextApiResponse } from "next";
import { properties } from "@data/properties";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello, this is your message from the API!" });
}
