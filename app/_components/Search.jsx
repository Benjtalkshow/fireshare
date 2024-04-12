import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

import React from "react";

const Search = () => {
  return (
    <section className="w-full bg-white my-10 flex justify-center">
      <div className="flex rounded-lg w-full md:w-1/2 border-2 border-gray-200 items-center space-x-2">
        <Input type="text" placeholder="Search worker" className="py-6 border-0 focus:outline-teal-600" />
        <Button type="submit" className="bg-teal-600 h-full"><SearchIcon /></Button>
      </div>
    </section>
  );
};

export default Search;
