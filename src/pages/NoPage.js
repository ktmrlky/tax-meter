import React, { useEffect } from "react";

const NoPage = () => {
  useEffect(() => {
    document.title = "Salary Calculator - 404";
  }, []);

  return (
    <div className="text-center" style={{ height: "80vh", overflow: "auto" }}>
      <div className="mt-5">
        <h1>404 Not Found</h1>
        <p>Oops. :( </p>
      </div>
    </div>
  );
};

export default NoPage;
