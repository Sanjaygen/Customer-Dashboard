import { AppBar, styled } from "@mui/material"

export const AppBarWrapper = styled(AppBar)<{ issidebar: boolean }>`
    zindex: 1;
    background-color: transparent;
    box-shadow: none; 
    width: 81%;
    height: 20%;
    padding: 20px;
    border-bottom: 2px solid black;

`;