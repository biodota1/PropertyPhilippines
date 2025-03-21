import property_01 from "@propertyImg/symfoni-nichols.jpg";
import property_02 from "@propertyImg/soltana-nature-residences.jpg";
import property_03 from "@propertyImg/horizons101.jpg";
import property_04 from "@propertyImg/east-gate.jpg";

import { StaticImageData } from "next/image";

export interface UnitType {
  id: number;
  imageSrc: string;
  imageAlt: string;
  name: string;
}

export interface Property {
  id: number;
  name: string;
  propertyName: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  available: string;
  location: string;
  href: string;
  unitTypes: UnitType[];
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Symfoni Nichols",
    propertyName: "symfoni",
    imageSrc: property_01,
    imageAlt: "Symfoni Nichols Image",
    available: "Studio",
    location: "Brgy. Guadalupe, Cebu City, Cebu",
    href: "/property/symfoni",
    unitTypes: [
      {
        id: 1,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit A Image",
        name: "2 Bedroom Unit A",
      },
      {
        id: 2,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit B Image",
        name: "2 Bedroom Unit B",
      },
      {
        id: 3,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit C Image",
        name: "2 Bedroom Unit C",
      },
      {
        id: 4,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "1 Bedroom Unit Image",
        name: "1 Bedroom Unit",
      },
      {
        id: 5,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "Studio Unit Image",
        name: "Studio Unit",
      },
    ],
  },
  {
    id: 2,
    name: "Soltana Nature Residences",
    propertyName: "soltana",
    imageSrc: property_02,
    imageAlt: "Soltana Nature Residences Image",
    available: "One-bedroom, Two-bedroom, Studio",
    location: "Basak-Marigondon Rd, Lapu-Lapu City, Cebu",
    href: "property/soltana",
    unitTypes: [
      {
        id: 1,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit A Image",
        name: "2 Bedroom Unit A",
      },
      {
        id: 2,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit B Image",
        name: "2 Bedroom Unit B",
      },
      {
        id: 3,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit C Image",
        name: "2 Bedroom Unit C",
      },
      {
        id: 4,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "1 Bedroom Unit Image",
        name: "1 Bedroom Unit",
      },
      {
        id: 5,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "Studio Unit Image",
        name: "Studio Unit",
      },
    ],
  },
  {
    id: 3,
    name: "Horizon Residences",
    propertyName: "horizon",
    imageSrc: property_03,
    imageAlt: "Horizons 101 Image",
    available: "One-bedroom, Two-bedroom, Three-bedroom, Studio",
    location: "74 General Maxilom Avenue, Cebu City, Cebu",
    href: "property/horizon",
    unitTypes: [
      {
        id: 1,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit A Image",
        name: "2 Bedroom Unit A",
      },
      {
        id: 2,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit B Image",
        name: "2 Bedroom Unit B",
      },
      {
        id: 3,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit C Image",
        name: "2 Bedroom Unit C",
      },
      {
        id: 4,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "1 Bedroom Unit Image",
        name: "1 Bedroom Unit",
      },
      {
        id: 5,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "Studio Unit Image",
        name: "Studio Unit",
      },
    ],
  },
  {
    id: 4,
    name: "East Gate",
    propertyName: "eastgate",
    imageSrc: property_04,
    imageAlt: "East Gate Image",
    available: "One-bedroom, Two-bedroom, Three-bedroom, Studio",
    location: "Pusok, Lapu-lapu City, Cebu",
    href: "property/eastgate",
    unitTypes: [
      {
        id: 1,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit A Image",
        name: "2 Bedroom Unit A",
      },
      {
        id: 2,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit B Image",
        name: "2 Bedroom Unit B",
      },
      {
        id: 3,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "2 Bedroom Unit C Image",
        name: "2 Bedroom Unit C",
      },
      {
        id: 4,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "1 Bedroom Unit Image",
        name: "1 Bedroom Unit",
      },
      {
        id: 5,
        imageSrc: "/east_gate_units/1-bedroom-unit.jpg",
        imageAlt: "Studio Unit Image",
        name: "Studio Unit",
      },
    ],
  },
];
