import { Button } from "@mui/material";
import Image from "next/image";
import aboutImage from "@images/about-us.jpg";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center p-[5%]">
      <div className="pl-12">
        <Image src={aboutImage} alt="Chary Conde Prochina" />
      </div>
      <div className="md:w-[500px]">
        <h1 className="text-3xl md:text-5xl font-semibold py-5 pt-24">
          Chary Conde Prochina{" "}
        </h1>
        <h2 className="md:text-xl pb-12">
          A PRC Accredited and DHSUD Registered Real Estate Salesperson and Unit
          Manager of Filipino Homes
        </h2>
        <h3 className="md:text-lg">
          I am inviting you to consider me in your real estate journey whether
          you rent, sell or buy a property. With my track record, you can never
          go wrong with me. I’m looking forward to assisting you one day and
          find the best investment according to your preference!
        </h3>
        <div className="py-5 flex gap-4">
          <a href="https://www.facebook.com/green8rhyme">
            <Button variant="outlined">Facebook</Button>
          </a>
          <Button variant="contained">Contact</Button>
        </div>
      </div>
    </div>
  );
}
