import OrdersChart from './OrdersChart';
import NotificationForm from './NotificationForm';

function Dashboard() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Reporting Dashboard Assignment Solution
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
        <div>
          <OrdersChart />
        </div>
        <div>
          <NotificationForm />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;