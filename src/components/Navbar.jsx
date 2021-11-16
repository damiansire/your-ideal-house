import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Breadcrumbs maxItems={4} aria-label="breadcrumb">
        <Link to="/">Match</Link>
        <Link to="/all-houses">Todas las cosas</Link>
      </Breadcrumbs>
    </nav>
  );
};

export default Navbar;
