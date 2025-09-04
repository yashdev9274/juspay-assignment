import { Notifications } from "@/components/notifications";
import { Activities } from "@/components/activities";
import { Contacts } from "@/components/contacts";

export function RightSidebar() {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r bg-background p-4 shadow-sm">
      <div className="lg:col-span-1 flex flex-col gap-4">
        <Notifications />
        <Activities />
        <Contacts />
      </div>
    </div>
  );
}
