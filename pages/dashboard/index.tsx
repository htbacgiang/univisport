import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import Link from "next/link";
import LargeCards from "../../components/backend/dashboard/LargeCards";
import SmallCards from "../../components/backend/dashboard/SmallCards";
import DashboardCharts from "../../components/backend/dashboard/DashboardCharts";
import CustomDataTable from "../../components/backend/dashboard/CustomDataTable";
import AdminLayout from "../../components/layout/AdminLayout";
import Heading from "../../components/backend/Heading";
import { GetServerSidePropsContext } from "next";
import { Database, Package, Plus, Edit } from "lucide-react";

export default function Dashboard({ user }: { user: { role: string } }) {
  return (
    <AdminLayout title="Dashboard">
      <div className="p-8 bg-white dark:bg-slate-900 text-slate-50 min-h-screen">
        {/* Products Management Section */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Quản lý sản phẩm
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/dashboard/san-pham">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-slate-700">
                <div className="flex items-center">
                  <Package className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Danh sách sản phẩm
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Xem và quản lý sản phẩm
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/dashboard/them-san-pham">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-slate-700">
                <div className="flex items-center">
                  <Plus className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Thêm sản phẩm
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tạo sản phẩm mới
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <CustomDataTable />
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session || !session.user || (session.user as { role?: string }).role !== "admin") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { user: session.user as { role: string } } };
}