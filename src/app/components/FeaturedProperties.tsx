"use client";
import PropertyCard from "./PropertyCard";
import { Property } from "@/data/properties";
import { useEffect, useState } from "react";

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [sortType, setSortType] = useState<string>("name"); // Track which sort type is selected

  // Function to fetch sorted properties based on the sort type
  const fetchSortedProperties = async () => {
    const response = await fetch(
      `/api/sortBy${sortType.charAt(0).toUpperCase() + sortType.slice(1)}`
    );
    const sortedData = await response.json();
    setProperties(sortedData);
  };

  // Fetch sorted properties when the component mounts or when the sort type changes
  useEffect(() => {
    fetchSortedProperties();
  }, [sortType]);
  return (
    <div className="px-[5%] md:px-[2%] py-[50px]">
      <div className="flex flex-col md:grid grid-cols-3 justify-items-center gap-y-10">
        {properties.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
