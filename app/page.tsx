import { DashboardCard } from "@/components/dashboard-card";
import ProjectionsVsActualsChart from "@/components/charts/projections-vs-actuals-chart";
import RevenueChart from "@/components/charts/revenue-chart";
import { RevenueByLocation } from "@/components/revenue-by-location";
import { TopSellingProductsTable } from "@/components/top-selling-products-table";
import TotalSalesChart from "@/components/charts/total-sales-chart";


export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <div className="text-bold">
        E-commerce
      </div>
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="grid w-2/3 grid-cols-2 gap-4">
            <DashboardCard
              title="Customers"
              value="3,781"
              change="+11.01%"
              changeType="increase"
            />
            <DashboardCard
              title="Orders"
              value="1,219"
              change="-0.03%"
              changeType="decrease"
            />
            <DashboardCard
              title="Revenue"
              value="$695"
              change="+15.03%"
              changeType="increase"
            />
            <DashboardCard
              title="Growth"
              value="30.1%"
              change="+6.08%"
              changeType="increase"
            />
          </div>
          <div className="w-1/3">
            <ProjectionsVsActualsChart />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2/3">
            <RevenueChart />
          </div>
          <div className="w-1/3">
            <RevenueByLocation />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2/3">
            <TopSellingProductsTable />
          </div>
          <div className="w-1/3">
            <TotalSalesChart />
          </div>
        </div>
      </div>
    </div>
  );
}
