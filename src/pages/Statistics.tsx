import EcommerceMetrics from "../components/statistics/EcommerceMetrics";
import MonthlySalesChart from "../components/statistics/MonthlySalesChart";
import StatisticsChart from "../components/statistics/StatisticsChart";
import MonthlyTarget from "../components/statistics/MonthlyTarget";
import RecentOrders from "../components/statistics/RecentOrders";
import DemographicCard from "../components/statistics/DemographicCard";
import PageMeta from "../components/common/PageMeta";

export default function Ecommerce() {
  return (
    <>
      <PageMeta title="Dashboard | Home" description="Yamm Task Dashboard" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlySalesChart />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>
        <div className="col-span-12">
          <StatisticsChart />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
