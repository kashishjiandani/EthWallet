import React, { useEffect, useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import "../index.css";
import Loader from "../components/Loader";

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);
  
  // Filter posts by user ID 1
  const filteredPosts = posts.filter((post) => post.userId === 1);

  // Data for the pie chart
  const pieChartData = [
    { name: "User 1 Posts", value: filteredPosts.length },
    { name: "Other Posts", value: posts.length - filteredPosts.length },
  ];

  // Colors for the pie chart segments
  const COLORS = ["#ff80bd", "#6AD9C5"];

  return (
    <div class="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div class="mt-20 container mx-auto p-6 font-mono">
        {loading ? ( // Render loader while data is being fetched
          <Loader/>
        ) : (
          <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th class="px-4 py-3">ID</th>
                  <th class="px-4 py-3">Title</th>
                  <th class="px-4 py-3">Body</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">{post.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {post.title}
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {post.body}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>
    

      <div className="w-full flex flex-col items-center justify-start mb-6">
        {/* Pie Chart */}
        {loading ? null : ( // Render Pie Chart only when data is fetched
          <>
            <p className="font-semibold text-2xl mb-2 text-black">
              Pie Chart: User ID 1's Contribution to Total Posts
            </p>
            <div className="mx-[156px] flex flex-col min-w-0 break-words w-1/4 shadow-lg rounded-lg bg-white text-gray-900">
              <PieChart width={400} height={400}>
                 {/* Pie Chart Segments */}
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              {/* Label for each Pie Chart Segment */}
              <Label
                content={({ value, name, percent }) =>
                  `${name}: ${value} (${(percent * 100).toFixed(2)}%)`
                }
                position="outside"
                fill="#000"
              />
            </Pie>
              </PieChart>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Data;
