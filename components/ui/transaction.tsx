"use client";
import React, { useState } from "react";
import { transactions } from "../../app/apis/DummyData/apiList";

const Transaction = () => {
  const [apiType, setApiType] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (apiType ? transaction.apiType === apiType : true) &&
      (status ? transaction.status === status : true) &&
      (date ? transaction.date.includes(date) : true)
    );
  });

  return (
    <div className="p-6">
      {/* Navbar section with filters */}
      <div className="rounded-lg mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold">Transaction Details</h2>
        </div>
      </div>

      {/* Scrollable table container */}
      <div className="overflow-y-auto max-h-96 shadow-md rounded-lg border">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 sticky top-0">
            <tr>
              <th className="py-2 px-4 text-left text-white">Transaction ID</th>
              <th className="py-2 px-4 text-left">
                <select
                  value={apiType}
                  onChange={(e) => setApiType(e.target.value)}
                  className="border bg-primary px-4 py-2 rounded-lg"
                >
                  <option value="">Select API Type</option>
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                  <option value="PATCH">PATCH</option>
                </select>
              </th>
              <th className="py-2 px-4 text-left">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-primary border px-4 py-2 rounded-lg"
                >
                  <option value="">Select Status</option>
                  <option value="SUCCESS">SUCCESS</option>
                  <option value="FAILED">FAILED</option>
                </select>
              </th>
              <th className="py-2 px-4 text-left">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-primary border px-4 py-2 rounded-lg"
                />
              </th>
              <th className="py-2 px-4 text-left text-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className={`hover:bg-gray-100 ${
                    transaction.apiType === "GET" ? "hover:bg-blue-100" : ""
                  } ${
                    transaction.apiType === "POST" ? "hover:bg-green-100" : ""
                  } ${
                    transaction.apiType === "PUT" ? "hover:bg-yellow-100" : ""
                  } ${
                    transaction.apiType === "DELETE" ? "hover:bg-red-100" : ""
                  }`}
                >
                  <td className="py-2 px-4">{transaction.id}</td>
                  <td className="py-2 px-4">{transaction.apiType}</td>
                  <td
                    className={`py-2 px-4 ${
                      transaction.status === "SUCCESS"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.status}
                  </td>
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-4 px-4 text-center text-gray-500"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
