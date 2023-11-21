import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { BiSolidComponent } from "react-icons/bi";
import { FaMoneyBills, FaTruck, FaUserGroup } from "react-icons/fa6";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import { AuthContext } from "../../../Components/AuthProvider";
import useAxios from "../../../Hooks/useAxios";

const AdminHome = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const { data: chartData, isLoading } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosInstance.get("/order-stat");
      return res.data;
    },
  });
  const { data: stat, isLoading: statLoading } = useQuery({
    queryKey: ["stat-data"],
    queryFn: async () => {
      const res = await axiosInstance.get("/admin-stat");
      return res.data;
    },
  });
  const barChartColors = [
    "#1F77B4",
    "#FF7F0E",
    "#2CA02C",
    "#CA2526",
    "#00C49F",
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //! Pie Chart
  const PieChartColors = [
    // "#0088FE",
    // "#00C49F",
    // "#FFBB28",
    // "#FF8042",
    // "#D62728",
    "#1F77B4",
    "#FF7F0E",
    "#2CA02C",
    "#CA2526",
    "#00C49F",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <p className="text-3xl my-4 font-semibold">Hi, {user?.displayName}</p>
      <div className="grid grid-cols-4 gap-6">
        <div className="rounded-lg px-10 py-8 flex items-center gap-6 bg-gradient-to-r border from-[#BD38F5] to-white to-[140%] ">
          <FaMoneyBills className="text-5xl text-white" />
          <div className="">
            <p className="font-inter text-white font-bold text-4xl">
              {statLoading || stat.revenue}
            </p>
            <p className="font-inter text-white text-xl">Revenue</p>
          </div>
        </div>
        <div className="rounded-lg px-10 py-8 flex items-center gap-6 bg-gradient-to-r border from-[#D4A358] to-white to-[140%] ">
          <FaUserGroup className="text-5xl text-white" />
          <div className="">
            <p className="font-inter text-white font-bold text-4xl">
              {statLoading || stat.customer}
            </p>
            <p className="font-inter text-white text-xl">Customer</p>
          </div>
        </div>
        <div className="rounded-lg px-10 py-8 flex items-center gap-6 bg-gradient-to-r border from-[#FE4B83] to-white to-[140%] ">
          <BiSolidComponent className="text-5xl text-white" />
          <div className="">
            <p className="font-inter text-white font-bold text-4xl">
              {statLoading || stat.items}
            </p>
            <p className="font-inter text-white text-xl">Items</p>
          </div>
        </div>
        <div className="rounded-lg px-10 py-8 flex items-center gap-6 bg-gradient-to-r border from-[#6CB0FF] to-white to-[140%] ">
          <FaTruck className="text-5xl text-white" />
          <div className="">
            <p className="font-inter text-white font-bold text-4xl">
              {statLoading || stat.orders}
            </p>
            <p className="font-inter text-white text-xl">Orders</p>
          </div>
        </div>
      </div>
      <div className="bg-white mt-8 flex items-center justify-between">
        <BarChart
          width={600}
          height={350}
          data={chartData}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar
            dataKey="sold"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {isLoading ||
              chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barChartColors[index % 20]} />
              ))}
          </Bar>
          <Legend />
        </BarChart>
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="totalRevenue"
          >
            {isLoading ||
              chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PieChartColors[index % PieChartColors.length]}
                />
              ))}
          </Pie>
          <Legend verticalAlign="top" iconType="diamond"></Legend>
          {/* <Tooltip /> */}
        </PieChart>
      </div>
    </div>
  );
};

export default AdminHome;
