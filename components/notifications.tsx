import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BugPlay, UserIcon, WifiIcon } from "lucide-react";
import { notificationsData } from "@/lib/mock-data";

interface Notification {
  icon: React.ElementType;
  message: string;
  time: string;
}

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationsData.map((notification, index) => (
          <div key={index} className="flex items-start space-x-3">
            <notification.icon className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{notification.message}</p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
