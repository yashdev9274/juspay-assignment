import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="w-full lg:w-[300px]"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
