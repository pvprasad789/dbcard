import React from "react";
import "./UsersTable.css";

function UsersTable({ usersData }) {
  const headerColumns = [
    "No",
    "Staff Name",
    "Card Number",
    "Card Status",
    "Login Access",
    "Phone Number",
    "Action",
  ];
  const userData = usersData.map((row) => {
    console.log("**********row", row);
    return (
      <>
        <tr role="row" className="text-center">
          <td className='border border-gray-500'>{row?.state}</td>
          <td className='border border-gray-500'>{row?.fullname}</td>
          <td className='border border-gray-500'>{row?.cardnumber}</td>
          <td className='border border-gray-500'>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td className='border border-gray-500'>
            {row?.state !== 1 ? (
              <span>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-check-circle text-primary"></i>
              </span>
            )}
          </td>
          <td className='border border-gray-500'>{row?.mobilenumber}</td>
          <td className='border border-gray-500'>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr className="text-center">
          <td className='border border-gray-500'>{row?.state}</td>
          <td className='border border-gray-500'>{row?.fullname}</td>
          <td className='border border-gray-500'>{row?.cardnumber}</td>
          <td className='border border-gray-500'>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td className='border border-gray-500'>
            {row?.state !== 1 ? (
              <span>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-check-circle text-primary"></i>
              </span>
            )}
          </td>
          <td className='border border-gray-500'>{row?.mobilenumber}</td>
          <td className='border border-gray-500'>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td className='border border-gray-500'>{row?.state}</td>
          <td className='border border-gray-500'> {row?.fullname}</td>
          <td className='border border-gray-500'>{row?.cardnumber}</td>
          <td className='border border-gray-500'>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td className='border border-gray-500'>
            {row?.state !== 1 ? (
              <span>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-check-circle text-primary"></i>
              </span>
            )}
          </td>
          <td className='border border-gray-500'>{row?.mobilenumber}</td>
          <td className='border border-gray-500'>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td className='border border-gray-500'>{row?.state}</td>
          <td className='border border-gray-500'>{row?.fullname}</td>
          <td className='border border-gray-500'>{row?.cardnumber}</td>
          <td className='border border-gray-500'>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td className='border border-gray-500'>
            {row?.state !== 1 ? (
              <span>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-check-circle text-primary"></i>
              </span>
            )}
          </td>
          <td className='border border-gray-500'>{row?.mobilenumber}</td>
          <td className='border border-gray-500'>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td className='border border-gray-500'>{row?.state}</td>
          <td className='border border-gray-500'>{row?.fullname}</td>
          <td className='border border-gray-500'>{row?.cardnumber}</td>
          <td className='border border-gray-500'>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td className='border border-gray-500'>
            {row?.state === 1 ? (
              <span>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-check-circle text-primary"></i>
              </span>
            )}
          </td>
          <td className='border border-gray-500'>{row?.mobilenumber}</td>
          <td className='border border-gray-500'>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div className="m-2">
      <table className="table-auto w-full bg-white border border-gray-200">
        <thead className="border bg-blue-800 text-white">
          <tr>
            {headerColumns.map((headerColumn) => {
              return <th className='font-light border border-gray-500'>{headerColumn}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {userData}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;