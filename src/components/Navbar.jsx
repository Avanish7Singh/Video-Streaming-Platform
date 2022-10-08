import React from 'react';
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../Utilities/constants"
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack alignItems="center"
        // onSubmit = {() => ()}
        direction="row"
        p={2}
        sx={{ backgroundColor: "#000", position: "sticky", top: 0, justifyContent: "space-between" }}
    >
        <Link to="/" style={{ alignItems: "center", display: "flex" }} >
            <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar/>
    </Stack>
)

export default Navbar