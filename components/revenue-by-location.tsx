import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueByLocationData } from "@/lib/mock-data";

interface LocationRevenue {
  city: string;
  revenue: string;
}

export function RevenueByLocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Placeholder for a map or visualization if needed */}
        <div className="h-40 w-full bg-muted rounded-md flex items-center justify-center mb-4 text-muted-foreground">Map Placeholder</div>
        <div className="space-y-2">
          {revenueByLocationData.map((data, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span>{data.city}</span>
              <span className="font-medium">{data.revenue}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
