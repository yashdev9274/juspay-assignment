import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { Bell, RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-background p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Dashboards / Default</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search..."
          className="w-[200px] lg:w-[300px]"
        />
        <Button variant="ghost" size="icon">
          <RefreshCcw className="h-5 w-5"/>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5"/>
        </Button>
        <ModeToggle />
        {/* Add more icons/buttons here later */}
      </div>
    </header>
  );
}
