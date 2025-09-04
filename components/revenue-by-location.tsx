'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueByLocationData } from "@/lib/mock-data";
import Image from "next/image";

export function RevenueByLocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px] w-[300px] mb-3">
        <div className="w-full rounded-md flex items-center justify-center h-60">
          <Image src="/World-Map.png" alt="World Map" className="object-contain h-full w-full" width={1000} height={1000} />
        </div>
        <div className="space-y-1">
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
