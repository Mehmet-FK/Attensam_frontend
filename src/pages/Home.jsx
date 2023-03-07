import { Box } from "@mui/material";
import React from "react";
import FilterPanel from "../components/FilterPanel";
import Navbar from "../components/Navbar";
import DataTable from "../components/Table";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Navbar />
        <FilterPanel />
        <DataTable />
      </Box>
    </>
  );
};

export default Home;
