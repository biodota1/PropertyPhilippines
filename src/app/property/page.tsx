interface Property {
  id: Number;
  name: string;
}

export default async function Property() {
  const res = await fetch("http://localhost:3000/api/getName");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const properties = await res.json();
  return (
    <div>
      <ul>
        {properties.map((property: Property) => (
          <li key={property.id} property={property}></li>
        ))}
      </ul>
    </div>
  );
}
