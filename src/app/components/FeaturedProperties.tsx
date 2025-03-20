"use client";
import PropertyCard from "./PropertyCard";
import { Property, properties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <div className="px-[5%] md:px-[2%] py-[50px]">
      <h2 className="text-2xl md:text-3xl font-bold pb-5">
        Featured Properties
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10">
        {properties.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
