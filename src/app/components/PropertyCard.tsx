"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import { Property } from "@/data/properties";
import { useRouter } from "next/navigation";

interface PropertyProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyProps> = ({ property }) => {
  const router = useRouter();
  return (
    <div className=" flex flex-col gap-2 ">
      <div className="w-full">
        <Image
          style={{ objectFit: "cover" }}
          src={property.imageSrc}
          alt={property.imageAlt}
        />
      </div>
      <div className="md:h-[100px]">
        <p className="text-2xl font-bold">{property.name}</p>
        <p className="font-semibold">Available: {property.available}</p>
        <p className="text-md font-semibold">Location: {property.location}</p>
      </div>
      <div className="w-200px">
        <Button variant="contained" onClick={() => router.push(property.href)}>
          More Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
