import { useState } from "react";
import Header from "./Header";

function Homework() {
  const [data, setData] = useState("");

  const fetchData = async (route) => {
    const res = await fetch(`http://localhost:5000/${route}`);
    const result = await res.json();
    setData(Object.values(result)[0]);
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-semibold mb-8">Work with Node.js</h2>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => fetchData("total-memory")}
            className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
          >
            Total Memory
          </button>

          <button
            onClick={() => fetchData("free-memory")}
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
          >
            Free Memory
          </button>

          <button
            onClick={() => fetchData("user-info")}
            className="bg-purple-500 text-white px-6 py-3 rounded shadow hover:bg-purple-600 transition"
          >
            User Info
          </button>

          <button
            onClick={() => fetchData("platform")}
            className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600 transition"
          >
            Platform
          </button>
        </div>

        {data && (
          <div className="mt-10 bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold">Result:</h3>
            <p className="mt-2 text-gray-700 break-all">{data}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Homework;
