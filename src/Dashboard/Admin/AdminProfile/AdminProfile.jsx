import { useEffect, useState } from "react";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import { MdAdminPanelSettings, MdPostAdd } from "react-icons/md";
import { Helmet } from "react-helmet";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useQuery } from "@tanstack/react-query";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [showRole, setShowRole] = useState();

  // pie Chart
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
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
  // ===============Admin Role Play================
  useEffect(() => {
    axiosPublic.get(`/Role/${user?.email}`).then((res) => {
      setShowRole(res?.data);
    });
  }, [axiosPublic, user?.email]);

  // All Data loade
  const { refetch, data: loadData = [] } = useQuery({
    queryKey: ["alldata"],
    queryFn: async () => {
      const result = await axiosPublic.get("/allData", {
        withCredentials: true,
      });

      return result?.data;
    },
  });
  console.log(loadData, "66");

  return (
    <div className=" averia-serif lg:mx-10">
      <Helmet>
        <title>Talk Town || Admin Profile</title>
      </Helmet>
      <div className="flex items-center justify-evenly">
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 shadow-lg rounded-lg border mx-auto mt-8 lg:-mr-5">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user.photoURL}
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              <span className="text-sm dark:text-gray-900 font-bold underline  tracking-wide flex items-center">
                <MdAdminPanelSettings className="text-orange-500" size={24} />
                {showRole?.role}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">{user.email}</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">+25 381 77 983</span>
              </span>
            </div>
          </div>
        </div>
        {/* ====================pieChart======================= */}
        <div className="lg:mr-32">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {loadData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="lg:ml-56 mt-2 mb-8">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <MdPostAdd size={28} />
            </div>
            <div className="stat-title">Total Posts</div>
            <div className="stat-value text-primary">{loadData[0]}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Comments</div>
            <div className="stat-value text-secondary">15+</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">{loadData[1]}</div>
            <div className="stat-title">Total Users</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
