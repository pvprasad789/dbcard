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
          <td>{row?.state}</td>
          <td>{row?.fullname}</td>
          <td>{row?.cardnumber}</td>
          <td>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td>
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
          <td>{row?.mobilenumber}</td>
          <td>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td>{row?.state}</td>
          <td>{row?.fullname}</td>
          <td>{row?.cardnumber}</td>
          <td>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td>
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
          <td>{row?.mobilenumber}</td>
          <td>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td>{row?.state}</td>
          <td>{row?.fullname}</td>
          <td>{row?.cardnumber}</td>
          <td>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td>
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
          <td>{row?.mobilenumber}</td>
          <td>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td>{row?.state}</td>
          <td>{row?.fullname}</td>
          <td>{row?.cardnumber}</td>
          <td>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td>
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
          <td>{row?.mobilenumber}</td>
          <td>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
				<tr role="row" className="text-center">
          <td>{row?.state}</td>
          <td>{row?.fullname}</td>
          <td>{row?.cardnumber}</td>
          <td>{row?.cstatus === 1 ? "Enabled" : "Disabled"}</td>
          <td>
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
          <td>{row?.mobilenumber}</td>
          <td>
            <i className="bi bi-three-dots text-primary"></i>
          </td>
        </tr>
      </>
    );
  });
  return (
    <table className="table table-bordered dataTable no-footer dtr-inline mt-2">
      <thead>
        <tr role="row">
          {headerColumns.map((headerColumn) => {
            return <th className={headerColumn !== 'No'? 'col-2' : ''}>{headerColumn}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {userData}
      </tbody>
    </table>
  );
}

export default UsersTable;
