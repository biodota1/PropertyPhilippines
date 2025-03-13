import FeaturedProperties from "@components/FeaturedProperties";
import { Button, TextField } from "@mui/material";

export default function Properties() {
  return (
    <div>
      <div className="flex px-[5%] items-center justify-between">
        <h1 className="text-3xl font-bold">Find your property</h1>
        <div className="flex gap-2">
          <TextField variant="outlined" label="Search" />
          <Button variant="contained">Search</Button>
        </div>

        <div>
          <Button>Sort by name</Button>
          <Button>Sort by price</Button>
          <Button>Sort by location</Button>
        </div>
      </div>

      <FeaturedProperties />
    </div>
  );
}
