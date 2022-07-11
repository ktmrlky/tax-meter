import React from "react";
import { useEffect } from "react";

const SeverenceNotice = () => {
  useEffect(() => {
    document.title = "Salary Calculator - Severance and Notice Pay";
  }, []);

  return <div>SeverenceNotice</div>;
};

export default SeverenceNotice;
