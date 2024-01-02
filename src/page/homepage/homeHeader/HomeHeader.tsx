import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import UpLink from "@/ui-component/UpLink/UpLink";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <UpLink href='/sign-up'>SignUp</UpLink>
        <UpLink href='/sign-in'>SignIn</UpLink>
      </Toolbar>
    </AppBar>
  );
}
