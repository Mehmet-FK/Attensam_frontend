import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const DateInput = ({ label }) => {
  const Input = styled("input")({
    border: "0.5px solid #bbbb",
    borderRadius: "4px",
    padding: "0.66rem",
    width: "100%",
    position: "relative",
    overflow: "auto",
    color: "transparent",
  });
  const Label = styled("div")({
    width: "auto",
    paddingInline: "10px",
    position: "absolute",
    zIndex: "5",
    backgroundColor: "#fff",
    color: "#666",
    top: "20%",
    left: "2px",

    "&:focus": {
      border: "2px solid #1976d2",
    },
    "&:active": {
      border: "2px solid #1976d2",
      outline: "none",
    },
  });

  const wrapperStyle = {
    position: "relative",
    // border: "1px solid red",
  };
  /* const wrapperStyle = {
    position: "relative",
    zIndex: "5",
    "&:focus": {
      border: "2px solid #1976d2",
      outline: "none",
    },
    "&:active": {
      border: "2px solid #1976d2",
      outline: "none",
    },
    "&:hover": {
      border: "0.5px solid #000",
    },
    "&::before": {
      content: `"${label}"`,
      height: "1rem",
      width: "50%",
      position: "absolute",
      backgroundColor: "#f00",
      border: "1ps solid red",
      zIndex: "8",
      transition: "all 1s",
    },
    "&:focus::before": {
      transform: "translateY(-150%)",
      zIndex: "8",
    },
  }; */

  return (
    <Box sx={wrapperStyle}>
      <Input type={"datetime-local"} />
      <Label>{label}</Label>
    </Box>
  );
};

export default DateInput;
