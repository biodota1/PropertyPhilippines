import React from "react";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <div className="px-[5%]">
      <div className="flex flex-col md:grid grid-cols-3 justify-items-center gap-y-10">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
}
