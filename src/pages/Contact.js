import React from "react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Salary Calculator - Contact";
  }, []);

  return <div>Contact</div>;
};

export default Contact;
