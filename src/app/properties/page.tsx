import { Property, properties } from "@/data/properties";
import PropertyCard from "@components/PropertyCard";

export default function Properties() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:grid grid-cols-3 justify-items-center gap-y-10 py-[2%]">
        {properties.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
