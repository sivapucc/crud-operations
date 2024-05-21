import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Home({ datas, setDatas }) {
  const handleEve = async (e, idx) => {
    // e.preventDefault();
    let res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${idx}`
    );
    console.log("record deleted,res.data");

    setDatas(datas.filter((p) => p.id !== idx));
    console.log(res);
  };
  return (
    <div style={{ width: "90vw", height: "100vh" }}>
      <h1>List of Users</h1>
      <TableContainer component={Paper}>
        <div
          style={{
            textAlign: "right",
            height: "50px",
            position: "relative",
            right: "80px",
          }}
        >
          <Link to="/create">
            <Button variant="outlined" color="success">
              Add +
            </Button>
          </Link>
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID </StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Phone&nbsp;</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((ele, i) => (
              <StyledTableRow key={ele.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{ele.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {ele.email}&nbsp;
                </StyledTableCell>
                <StyledTableCell align="center">
                  {ele.phone}&nbsp;
                </StyledTableCell>
                <StyledTableCell align="center">
                  {ele.address.city}&nbsp;
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StyledTableCell align="right">
                    {" "}
                    <Stack direction="row" spacing={2}>
                      {/* <Button variant="contained" color="secondary">
                        Read
                      </Button> */}
                      <Link to={`/edit/${i + 1}`}>
                        <Button variant="contained" color="success">
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={(e) => handleEve(e, ele.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
