import horizonImg from "../../public/horizons101.jpg";
import { StaticImageData } from "next/image";

export interface Property {
  id: number;
  name: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  available: string;
  location: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Horizon",
    imageSrc: horizonImg,
    imageAlt: "Horizons 101 Image",
    available: "1BR 2BR",
    location: "Cebu City",
    description:
      "A beautiful beachside property with ocean views and modern amenities.",
  },
  {
    id: 2,
    name: "Mountain Cabin",
    imageSrc: horizonImg,
    imageAlt: "Horizons 101 Image",
    available: "1BR 2BR",
    location: "Colorado, USA",
    description:
      "A cozy cabin nestled in the mountains with access to hiking trails.",
  },
  {
    id: 3,
    name: "Urban Apartment",
    imageSrc: horizonImg,
    imageAlt: "Horizons 101 Image",
    available: "1BR 2BR",
    location: "Apple",
    description: "A stylish city apartment in the heart of Manhattan.",
  },
];

export const sortByName = () => {
  const sortedProperties = [...properties].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log(sortedProperties);
  return sortedProperties;
};

// Function to sort properties by location
export const sortByLocation = () => {
  const sortedProperties = [...properties].sort((a, b) =>
    a.location.localeCompare(b.location)
  );
  console.log(sortedProperties);
  return sortedProperties;
};
