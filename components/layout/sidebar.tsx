import Link from "next/link";
// import { Button } from "../ui/button";
// import { PanelLeft } from "lucide-react";

export function Sidebar() {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r bg-background p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="mb-6 text-2xl font-bold">ByeWind</div>
      </div>
      <nav className="flex-1 space-y-2">
        <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
          Favorites
        </h3>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Overview</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Projects</span>
        </Link>

        <h3 className="mb-2 pt-4 text-xs font-semibold uppercase text-muted-foreground">
          Dashboards
        </h3>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Default</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>eCommerce</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Projects</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Online Courses</span>
        </Link>

        <h3 className="mb-2 pt-4 text-xs font-semibold uppercase text-muted-foreground">
          Pages
        </h3>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>User Profile</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Overview</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Projects</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Campaigns</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Documents</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Followers</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Account</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Corporate</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Blog</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <span>Social</span>
        </Link>
      </nav>
    </div>
  );
}
