import { NextApiRequest, NextApiResponse } from "next";
import { properties } from "@/data/properties"; // Import unsorted properties

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the method is GET
  if (req.method === "GET") {
    // Sort properties by location (ascending)
    const sortedProperties = [...properties].sort((a, b) =>
      a.location.localeCompare(b.location)
    );

    // Return sorted properties as the response
    res.status(200).json(sortedProperties);
  } else {
    // Return 405 if the method is not GET
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
