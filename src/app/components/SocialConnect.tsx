import { Button } from "@mui/material";
import Image from "next/image";
import socialConnectImg from "@images/hero-background.jpg";
import Link from "next/link";

export default function SocialConnect() {
  return (
    <div className="flex min-h-screen w-full items-center gap-16 px-[5%]">
      <div className="w-[700px] flex flex-col gap-5">
        <h1 className="text-2xl md:text-4xl font-bold">
          Discover Your Perfect Home Today.
        </h1>
        <h2 className="md:text-xl font-bold">
          Get in touch with us today to begin your inquiry were here to support
          you every step of the way.
        </h2>
        <h3 className="font-bold">
          Unlock the door to your dream property with our comprehensive real
          estate solutions. Explore a wide range of listings, from sleek city
          apartments to sprawling suburban homes, and let our experienced agents
          guide you through the process
        </h3>
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/green8rhyme">
            <Button variant="contained">Facebook</Button>
          </Link>
          <Button variant="contained" color="secondary">
            <p className="font-bold">Inquire</p>
          </Button>
        </div>
      </div>
      <div className="hidden md:flex">
        <Image className="h-[400px] w-[400px]" src={socialConnectImg} alt="" />
      </div>
    </div>
  );
}
