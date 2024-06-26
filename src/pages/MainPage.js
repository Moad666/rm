// src/pages/MainPage.js
import React from "react";
import SideBar from "../components/SideBar";

function MainPage() {
  return (
    <div className="flex">
      <div className="ml-64 w-full">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white">
          <div className="flex-1 text-center flex flex-col mr-96">
            <span className="text-lg mr-96">
              <b>Rules</b>
            </span>
            <span className="ml-16 mr-96">
              <small>
                <b>Main Page</b> &gt;{" "}
                <span className="text-blue-500">Rules</span>
              </small>
            </span>
          </div>
          <div className="flex-1 text-right relative">
            <div className="relative inline-block w-80">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="p-2 pl-10 border border-gray-400 rounded w-full"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Filter & Create Rules */}
        <div className="content p-4">
          <div className="flex justify-end space-x-4 mt-20">
            <button
              type="button"
              className="flex items-center text-blue-500 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 01.707 1.707L13 9.414V14a1 1 0 01-.293.707l-2 2A1 1 0 019 16V9.414l-3.707-3.707A1 1 0 015 5z"
                  clipRule="evenodd"
                />
              </svg>
              Filter
            </button>
            <button
              type="button"
              className="flex items-center text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.7 2.3a1 1 0 0 1 1.5 1.4l-1.8 1.8a3 3 0 0 0-3.6 4.5L7 14l-1.7-1.7a1 1 0 1 0-1.4 1.4L6.3 16l-2.6 2.6a1 1 0 0 1-1.4-1.4L4 13.7l1.8 1.8a3 3 0 0 0 4.5-3.6l1.8-1.8A1 1 0 0 1 14.7 2.3zM9.3 7.3a1 1 0 0 1 0-1.4l4.6-4.6a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1-1.4 1.4L12 4.4l-1.3 1.3a1 1 0 0 1-1.4 0L9.3 7.3z" />
              </svg>
              Create Rules
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="Table mt-8 ml-28 mr-5">
          <div className="relative overflow-x-auto bg-white border border-gray-300 rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Loan Approval Rules
                  </th>
                  <td className="px-6 py-4">
                    Criteria and rules for approving loan applications
                  </td>
                  <td className="px-6 py-4">2024-01-15</td>
                  <td className="px-6 py-4 relative">
                    2024-05-10
                    <button type="button" className="absolute right-0 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 9a2 2 0 100-4 2 2 0 000 4zM8 9a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Loan Approval Rules
                  </th>
                  <td className="px-6 py-4">
                    Criteria and rules for approving loan applications
                  </td>
                  <td className="px-6 py-4">2024-01-15</td>
                  <td className="px-6 py-4 relative">
                    2024-05-10
                    <button type="button" className="absolute right-0 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 9a2 2 0 100-4 2 2 0 000 4zM8 9a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Loan Approval Rules
                  </th>
                  <td className="px-6 py-4">
                    Criteria and rules for approving loan applications
                  </td>
                  <td className="px-6 py-4">2024-01-15</td>
                  <td className="px-6 py-4 relative">
                    2024-05-10
                    <button type="button" className="absolute right-0 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 9a2 2 0 100-4 2 2 0 000 4zM8 9a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
