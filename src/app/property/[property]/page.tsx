import { properties } from "@/data/properties";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PropertyPageProps {
  params: { property: string };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { property } = params;

  const propertyData = properties.find((p) => p.propertyName === property);

  if (!propertyData) {
    return notFound(); // Returns a 404 page if the property doesn't exist
  }

  return (
    <div className="container min-h-screen mx-auto p-6 flex flex-col gap-6">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {property.replace(/-/g, " ")}
      </h1>
      <h3 className="text-xl font-semibold">{propertyData.location}</h3>
      <h3 className="text-2xl font-bold">STANDARD UNITS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertyData.unitTypes.map((unit) => (
          <div key={unit.id} className="border rounded-lg shadow-md p-4">
            <Image
              src={unit.imageSrc}
              alt={unit.imageAlt}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{unit.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 font-bold pt-10 pb-16">
        <h1 className="text-xl font-bold">CONTACT DETAILS</h1>
        <p>Please find below contact details and contact us today!</p>
        <div className="flex flex-col gap-4">
          <div>Whatsapp +63 945 280 6942</div>
          <div>Globe +63 945 280 6942</div>
          <div>Email charyprochina@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
