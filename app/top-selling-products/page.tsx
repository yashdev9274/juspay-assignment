"use client";

import { useState } from "react";
import { TopSellingProductsTable } from "@/components/top-selling-products-table";
import { SearchBar } from "@/components/search-bar";
import { topSellingProductsData } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopSellingProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = topSellingProductsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4 flex justify-between items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
      <TopSellingProductsTable data={filteredData} />
    </div>
  );
}