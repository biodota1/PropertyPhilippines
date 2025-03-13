"use client";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UpperNavBar() {
  const router = useRouter();
  return (
    <div className="h-16 w-full hidden md:flex items-center justify-between">
      <Link
        href="/"
        className="w-[350px] flex justify-center text-2xl font-bold"
      >
        PropertyPhilippines
      </Link>
      <div className="">
        <div className="px-10 flex justify-center gap-5 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Button variant="contained" onClick={() => router.push("/inquiry")}>
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
}
