import { Notifications } from "@/components/notifications";
import { Activities } from "@/components/activities";
import { Contacts } from "@/components/contacts";
// import { Button } from "../ui/button";
// import { PanelRight } from "lucide-react";

export function RightSidebar() {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r bg-background p-4 mt-9 shadow-sm">
        {/* <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <Button variant="ghost" size="icon" onClick={toggle}>
                <PanelRight className="h-5 w-5"/>
            </Button>
        </div> */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <Notifications />
        <Activities />
        <Contacts />
      </div>
    </div>
  );
}
