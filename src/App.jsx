import React from "react";
import WebRoute from "./Routes/WebRoute";
import AdminRoute from "./Routes/AdminRoute";

const App = () => {
  return (
    <>
      <div className="">
        <WebRoute />
        <AdminRoute />
      </div>
    </>
  );
};

export default App;
