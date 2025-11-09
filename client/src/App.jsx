import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Paper,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";

const App = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const heroImageURL =
    "https://imgs.search.brave.com/Q32aNIwA3m5uAh6FcBZhmGoKv2HpzWucELvdOPGuPbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW5h/dHVyZS5jYS9hcHAv/dXBsb2Fkcy8yMDI1/LzA4L2plc3VzNDgz/LmpwZw";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil isdark={isDark} heroImageURL={heroImageURL}/>} />
        <Route path="/accueil" element={<Accueil isdark={isDark} heroImageURL={heroImageURL}/>} />
        {/* <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
