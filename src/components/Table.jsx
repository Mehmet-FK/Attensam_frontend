import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ColumnSelect from "./tableComponents/ColumnSelect";
import { Box, fontWeight } from "@mui/system";
import { rows } from "../fakeData";
import Pagination from "./tableComponents/Pagination";
import { useEffect, useState } from "react";
import FilterPanel from "./FilterPanel";

// initial columns
const shownColumns = ["Ereignis-ID", "Vertrauen", "Mitarbeitername"];
const cellStyle = {
  maxWidth: "200px",
  fontSize: "0.8rem",
};

const DataTable = () => {
  const [selectedColumns, setSelectedColumns] = useState([...shownColumns]);

  // pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(-1);
  const [shownData, setShownData] = useState([]);
  const handlePagination = () => {
    let currentPage = rowsPerPage * page;
    const newArray = rows.slice(currentPage, currentPage + rowsPerPage);
    return setShownData(newArray);
  };
  useEffect(() => {
    handlePagination();
  }, [page, rowsPerPage]);

  // Columns for dropdown menu
  const columns = [
    "Zeitstempel wird lokalisiert",
    "Zeitstempel wird gemeldet",
    "Vertrauen",
    "Gesendeter Stempel",
    "Mitarbeitername",
    "Kontrollstellenbezeichnung",
  ];

  return (
    <>
      <TableContainer
        sx={{ maxWidth: "90%", backgroundColor: "#ddd" }}
        component={Paper}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ColumnSelect
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
          />
          <Pagination
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            handlePagination={handlePagination}
          />
        </Box>
        <Table
          sx={{ backgroundColor: "#fff" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#ddd" }}>
              <TableCell
                sx={{ ...cellStyle, fontWeight: "600", fontSize: "0.8rem" }}
              >
                Ereignis-ID
              </TableCell>

              {columns
                .filter((x) => selectedColumns.includes(x))
                .map((item, i) => (
                  <TableCell
                    key={i}
                    sx={{ ...cellStyle, fontWeight: "600", fontSize: "0.8rem" }}
                  >
                    {item}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {shownData.map((row, i) => (
              <TableRow
                key={i}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" sx={{ ...cellStyle }}>
                  {row.a}
                </TableCell>

                {selectedColumns.includes(row.b) && (
                  <TableCell sx={{ ...cellStyle }}>{row.b}</TableCell>
                )}
                {selectedColumns.includes(row.c) && (
                  <TableCell sx={{ ...cellStyle }}>{row.c}</TableCell>
                )}
                {selectedColumns.includes(row.d) && (
                  <TableCell sx={{ ...cellStyle }}>{row.d}</TableCell>
                )}
                {selectedColumns.includes(row.e) && (
                  <TableCell sx={{ ...cellStyle }}>{row.e}</TableCell>
                )}
                {selectedColumns.includes(row.f) && (
                  <TableCell sx={{ ...cellStyle }}>{row.f}</TableCell>
                )}
                {selectedColumns.includes(row.g) && (
                  <TableCell sx={{ ...cellStyle }}>{row.g}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default DataTable;
