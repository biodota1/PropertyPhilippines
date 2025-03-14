import Image from "next/image";
import { Button } from "@mui/material";
import { Property } from "@/data/properties";

interface PropertyProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyProps> = ({ property }) => {
  return (
    <div className="h-[500px] md:h-[500px] md:w-[350px] flex flex-col gap-2 ">
      <Image
        className="h-[400px]"
        src={property.imageSrc}
        alt={property.imageAlt}
      />
      <p className="text-2xl font-bold">{property.name}</p>
      <p className="text-lg font-semibold">Available: {property.available}</p>
      <p className="text-md font-semibold">Location: {property.location}</p>
      <p>{property.description}</p>
      <Button variant="contained">More Details</Button>
    </div>
  );
};

export default PropertyCard;
