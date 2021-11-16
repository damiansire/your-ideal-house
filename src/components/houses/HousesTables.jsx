import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CarouselDiv from "../CarouselDiv";

function GetRowHtml(houseData) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right" component="th" scope="row">
          {houseData.title}
        </TableCell>
        <TableCell align="right"> {houseData.price} </TableCell>
        <TableCell align="right"> {houseData.location} </TableCell>
        <TableCell align="right"> {houseData.link} </TableCell>
        <TableCell align="right"> {houseData.superficietotal} </TableCell>
        <TableCell align="right"> {houseData.superficie} </TableCell>
        <TableCell align="right"> {houseData.baños} </TableCell>
        <TableCell align="right"> {houseData.dormitorios} </TableCell>
        <TableCell align="right"> {houseData.ambientes} </TableCell>
        <TableCell align="right"> {houseData.tipo} </TableCell>
        <TableCell align="right"> {houseData.calle} </TableCell>
        <TableCell align="right"> {houseData.barrio} </TableCell>
        <TableCell align="right"> {houseData.ciudad} </TableCell>
        <TableCell align="right"> {houseData.gastoscomunes} </TableCell>
        <TableCell align="right"> {houseData.disposicion} </TableCell>
        <TableCell align="right"> {houseData.antiguedad} </TableCell>
        <TableCell align="right"> {houseData.orientacion} </TableCell>
        <TableCell align="right"> {houseData.pricecurrency} </TableCell>
        <TableCell align="right"> {houseData.cocheras} </TableCell>
        <TableCell align="right">{houseData.numerodepisodellaunidad}</TableCell>
        <TableCell align="right"> {houseData.admitemascotas} </TableCell>
        <TableCell align="right"> {houseData.apartamentosporpiso} </TableCell>
        <TableCell align="right"> {houseData.cantidaddepisos} </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Imagenes
              </Typography>
              <CarouselDiv houseId={houseData.id} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const tableColumns = [
  { originalName: "title", showName: "Titulos" },
  { originalName: "price", showName: "Precio" },
  { originalName: "location", showName: "Direccion" },
  { originalName: "link", showName: "Enlace" },
  { originalName: "superficietotal", showName: "Superficie Total" },
  { originalName: "superficie", showName: "Superficie" },
  { originalName: "baños", showName: "Baños" },
  { originalName: "dormitorios", showName: "Dormitorios" },
  { originalName: "ambientes", showName: "Ambientes" },
  { originalName: "tipo", showName: "Tipo" },
  { originalName: "calle", showName: "Calle" },
  { originalName: "barrio", showName: "Barrio" },
  { originalName: "ciudad", showName: "Ciudad" },
  { originalName: "gastoscomunes", showName: "Gastos Comunes" },
  { originalName: "disposicion", showName: "Disposición" },
  { originalName: "antiguedad", showName: "Antiguedad" },
  { originalName: "orientacion", showName: "Orientacion" },
  { originalName: "pricecurrency", showName: "Moneda del Precio" },
  { originalName: "cocheras", showName: "Cocheras" },
  {
    originalName: "numerodepisodellaunidad",
    showName: "Numero de Piso",
  },
  { originalName: "admitemascotas", showName: "Mascotas" },
  { originalName: "apartamentosporpiso", showName: "Apartamentos por piso" },
  { originalName: "cantidaddepisos", showName: "Cantidad de pisos" },
];

export default function HousesTables({ housesData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {tableColumns.map((columnsObj) => {
              return (
                <TableCell align="right" key={columnsObj.originalName}>
                  {columnsObj.showName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {housesData.length > 0 &&
            housesData.map((houseData) => {
              return GetRowHtml(houseData);
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
