import React from "react";

const ContactRead = ({ details }) => {
  return (
    <div className="container">
      <h2 className="text-center my-4">User Messages</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {details && details.length > 0 ? (
            details.map((each, index) => (
              <tr key={index}>
                <td>{each.name}</td>
                <td>{each.mobile}</td>
                <td>{each.email}</td>
                <td>{each.date}</td>
                <td>{each.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                {/* No data available */}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactRead;
