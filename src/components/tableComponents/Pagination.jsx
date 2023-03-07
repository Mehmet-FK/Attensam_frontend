import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { rows } from "../../fakeData";

const Pagination = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  handlePagination,
}) => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      showFirstButton={true}
      showLastButton={true}
      component="div"
      count={rows.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default Pagination;
