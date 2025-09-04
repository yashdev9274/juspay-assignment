import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRightIcon, ArrowDownRightIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
}

export function DashboardCard({
  title,
  value,
  change,
  changeType,
}: DashboardCardProps) {
  const ChangeIcon = changeType === "increase" ? ArrowUpRightIcon : ArrowDownRightIcon;
  const changeColorClass = changeType === "increase" ? "text-green-500" : "text-red-500";

  return (
    <Card className="w-202px h-112px">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {/* Icon for the card title can be added here if needed */}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${changeColorClass} flex items-center`}>
          <ChangeIcon className="h-4 w-4" />
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
