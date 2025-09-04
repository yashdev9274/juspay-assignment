import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { activitiesData } from "@/lib/mock-data";

interface Activity {
  avatarSrc: string;
  avatarFallback: string;
  message: string;
  time: string;
}

export function Activities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activitiesData.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activity.avatarSrc} alt={activity.avatarFallback} />
              <AvatarFallback>{activity.avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{activity.message}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
