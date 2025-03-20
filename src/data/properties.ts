import property_01 from "@propertyImg/symfoni-nichols.jpg";
import property_02 from "@propertyImg/soltana-nature-residences.jpg";
import property_03 from "@propertyImg/horizons101.jpg";
import property_04 from "@propertyImg/east-gate.jpg";

import east_gate_unit_type_01 from "@eastgateUnit/2-bedroom-unit-a.jpg";
import east_gate_unit_type_02 from "@eastgateUnit/2-bedroom-unit-b.jpg";
import east_gate_unit_type_03 from "@eastgateUnit/2-bedroom-unit-c.jpg";
import east_gate_unit_type_04 from "@eastgateUnit/1-bedroom-unit.jpg";
import east_gate_unit_type_05 from "@eastgateUnit/studio-unit.jpg";

import { StaticImageData } from "next/image";

export interface Property {
  id: number;
  name: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  available: string;
  location: string;
}

export interface UnitType {
  id: number;
  imageSrc: StaticImageData;
  imageAlt: string;
  name: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Symfoni Nichols",
    imageSrc: property_01,
    imageAlt: "Symfoni Nichols Image",
    available: "Studio",
    location: "Brgy. Guadalupe, Cebu City, Cebu",
  },
  {
    id: 2,
    name: "Soltana Nature Residences",
    imageSrc: property_02,
    imageAlt: "Soltana Nature Residences Image",
    available: "One-bedroom, Two-bedroom, Studio",
    location: "Basak-Marigondon Rd, Lapu-Lapu City, Cebu",
  },
  {
    id: 3,
    name: "Horizon Residences",
    imageSrc: property_03,
    imageAlt: "Horizons 101 Image",
    available: "One-bedroom, Two-bedroom, Three-bedroom, Studio",
    location: "74 General Maxilom Avenue, Cebu City, Cebu",
  },
  {
    id: 4,
    name: "East Gate",
    imageSrc: property_04,
    imageAlt: "East Gate Image",
    available: "One-bedroom, Two-bedroom, Three-bedroom, Studio",
    location: "Pusok, Lapu-lapu City, Cebu",
  },
];

export const eastGateUnit: UnitType[] = [
  {
    id: 1,
    imageSrc: east_gate_unit_type_01,
    imageAlt: "2 Bedroom Unit A Image",
    name: "2 Bedroom Unit A",
  },
  {
    id: 2,
    imageSrc: east_gate_unit_type_02,
    imageAlt: "2 Bedroom Unit B Image",
    name: "2 Bedroom Unit B",
  },
  {
    id: 3,
    imageSrc: east_gate_unit_type_03,
    imageAlt: "2 Bedroom Unit C Image",
    name: "2 Bedroom Unit C",
  },
  {
    id: 4,
    imageSrc: east_gate_unit_type_04,
    imageAlt: "1 Bedroom Unit Image",
    name: "1 Bedroom Unit",
  },
  {
    id: 5,
    imageSrc: east_gate_unit_type_01,
    imageAlt: "Studio Unit Image",
    name: "Studio Unit",
  },
];

export const soltanaUnit: UnitType[] = [
  {
    id: 1,
    imageSrc: east_gate_unit_type_01,
    imageAlt: "2 Bedroom Unit A Image",
    name: "2 Bedroom Unit A",
  },
  {
    id: 2,
    imageSrc: east_gate_unit_type_02,
    imageAlt: "2 Bedroom Unit B Image",
    name: "2 Bedroom Unit B",
  },
  {
    id: 3,
    imageSrc: east_gate_unit_type_03,
    imageAlt: "2 Bedroom Unit C Image",
    name: "2 Bedroom Unit C",
  },
  {
    id: 4,
    imageSrc: east_gate_unit_type_04,
    imageAlt: "1 Bedroom Unit Image",
    name: "1 Bedroom Unit",
  },
  {
    id: 5,
    imageSrc: east_gate_unit_type_01,
    imageAlt: "Studio Unit Image",
    name: "Studio Unit",
  },
];

export const user = [
  { id: 1, name: "janine" },
  { id: 2, name: "james" },
];
