import React from "react";
import Layout from "../Components/Layout/Layout";
import DashboardDatacomp from "../Components/Dashboard/DashboardDatacomp";

const DashboardAdmin = () => {
  return (
    <>
      <Layout DashboardData={<DashboardDatacomp />}></Layout>
    </>
  );
};

export default DashboardAdmin;
