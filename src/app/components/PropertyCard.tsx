import Image from "next/image";
import property_image from "@images/hero-background.jpg";
import { Button } from "@mui/material";

export default function PropertyCard() {
  return (
    <div className="h-[380px] md:w-[300px] flex flex-col gap-2">
      <Image className="h-[500px] md:w-[300px]" src={property_image} alt="" />
      <h2 className="text-2xl font-bold">SKYRIZE RESIDENCE</h2>
      <h3 className="text-lg font-semibold">Lahug,Cebu City</h3>
      <h4 className="text-md">
        Centrally located on P. Basubas Street, Tipolo, Mandaue City—quick
        access to key areas, ideal for urban living.
      </h4>
      <Button variant="contained">More Details</Button>
    </div>
  );
}
