import { Button } from "@mui/material";
import heroBg from "@images/hero-background.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    // <div className="h-[600px]">
    //   <div className="w-full">
    //     <div
    //       className="w-full h-[500px] flex items-center"
    //       style={{
    //         backgroundImage: `url(${heroBg})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundSize: "cover",
    //       }}
    //     >
    //       <div className="w-[600px] flex flex-col gap-4 px-16">
    //         <h2 className="text-white text-5xl font-bold">
    //           Find Your Dream Home Today
    //         </h2>
    //         <h3 className="text-white text-lg font-bold">
    //           Explore the best properties for sale and rent in your city. <br />
    //         </h3>
    //         <div>
    //           <Button variant="contained">
    //             <p className="font-bold">Explore</p>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="relative w-full min-h-screen">
      {/* Background Image using <img /> */}
      <Image
        src={heroBg} // Replace with the actual image URL or variable
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="w-[600px] flex flex-col gap-4 px-16">
          <h2 className="text-white text-5xl font-bold">
            Find Your Dream Home Today
          </h2>
          <h3 className="text-white text-lg font-bold">
            Explore the best properties for sale and rent in your city. <br />
          </h3>
          <div>
            <Button variant="contained">
              <p className="font-bold">Explore</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
