"use client";
import { Button, TextField } from "@mui/material";
import {
  Property,
  properties,
  sortByName,
  sortByLocation,
} from "@/data/properties";
import PropertyCard from "@components/PropertyCard";
import { useState, useMemo } from "react";

export default function Properties() {
  const [sortType, setSortType] = useState<"name" | "location">("name"); // Store the sort type
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(properties);

  // Use useMemo to memoize the sorted properties based on the sortType
  const sortedProperties = useMemo(() => {
    if (sortType === "name") {
      return sortByName(properties); // Correctly pass properties to the function
    } else if (sortType === "location") {
      return sortByLocation(properties); // Correctly pass properties to the function
    }
    return properties;
  }, [sortType]); // Only recompute when the sortType changes

  const handleSortByName = () => {
    setSortType("name");
  };

  const handleSortByLocation = () => {
    setSortType("location");
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on search term and display results
  const handleSearch = () => {
    const filtered = properties.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen">
      <div className="flex px-[5%] items-center justify-between">
        <h1 className="text-3xl font-bold">Find your property</h1>
        <form className="flex gap-2" onSubmit={handleSearch}>
          <TextField
            variant="outlined"
            label="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>

        <div>
          <Button onClick={handleSortByName}>Sort by name</Button>
          <Button onClick={handleSortByLocation}>Sort by location</Button>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 justify-items-center gap-y-10 py-[2%]">
        {filteredData.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
