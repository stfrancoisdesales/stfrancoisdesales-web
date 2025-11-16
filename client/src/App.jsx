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
  useMediaQuery,
  Stack,
  CssBaseline,
  // New imports:
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Cimetiere from "./components/Cimetiere";
import Annonces from "./components/Annonces";

const App = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const heroImageURL =
    "https://imgs.search.brave.com/Q32aNIwA3m5uAh6FcBZhmGoKv2HpzWucELvdOPGuPbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW5h/dHVyZS5jYS9hcHAv/dXBsb2Fkcy8yMDI1/LzA4L2plc3VzNDgz/LmpwZw";
  const cemeteryImage = 
    "https://imgs.search.brave.com/MiStwlzeltjjTcf6pwRATYTJR-EWxPZ7XpZEIQFTvPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wbGFudHMtZ3Jv/d2luZy1jZW1ldGVy/eS1hZ2FpbnN0LXNr/eV8xMDQ4OTQ0LTE0/NjQxODIwLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA";
  // This is the key variable we'll use
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  // This state now controls the mobile menu
  const [drawerOpen, setDrawerOpen] = useState(false);

  const nav = [
    { key: 0, label: "Accueil", link: "/accueil" },
    { key: 1, label: "A propos", link: "/a-propos" },
    // { key: 2, label: "Annonces", link: "/annonces" },
    {
      key: 3,
      label: "Semainier",
      link: "https://www.semainierparoissial.com/semainiers/193.pdf"
    },
    // { key: 4, label: "Archives", link: "/archives" },
    { key: 5, label: "Cimetière", link: "/cimetiere" },
    { key: 6, label: "Contact", link: "/contact" }
  ];

  // Helper function to create links (re-used for desktop and mobile)
  const createNavLink = (item, onClickHandler) => {
    const isExternal = item.link.startsWith("http");
    
    // Use 'a' tag for external links, 'Link' for internal router links
    const component = isExternal ? "a" : Link;
    
    const props = {
      key: item.key,
      component: component,
      ...(isExternal 
        ? { href: item.link } // 'a' tags use href
        : { to: item.link }   // 'Link' tags use to
      ),
      target: isExternal ? "_blank" : "_self",
      rel: isExternal ? "noopener noreferrer" : undefined,
      ...(onClickHandler && { onClick: onClickHandler }) // Add click handler if provided
    };
    
    return props;
  };

  // This is the content for the mobile drawer
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)} // Close drawer when an item is clicked
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {nav.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton {...createNavLink(item)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // Router must wrap everything that uses 'Link'
    <Router>
      <Box sx={{ width: "100%", m: 0, p: 0 }}>
        <CssBaseline />
        {/* Header */}
        <AppBar
          sx={{
            bgcolor: "primary.main",
            m: 0,
            py: 1
          }}
          position="static"
        >
          <Toolbar
            variant="dense"
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Paroisse St François de Sales
            </Typography>

            {/* === Conditional Rendering === */}
            {isMobile ? (
              // --- MOBILE VIEW ---
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              // --- DESKTOP VIEW ---
              <Stack direction="row" spacing={1}>
                {nav.map((item) => (
                  <Button
                    {...createNavLink(item)} // Use the helper to create link props
                    sx={{
                      color: "white",
                      textTransform: "none",
                      "&:hover": { bgcolor: "primary.dark" }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}
          </Toolbar>
        </AppBar>

        {/* The Mobile Drawer Component */}
        <Drawer
          anchor="right" // Opens from the right
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)} // Closes when clicking backdrop
        >
          {drawer}
        </Drawer>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Accueil isdark={isDark} heroImageURL={heroImageURL} />} />
          <Route path="/accueil" element={<Accueil isdark={isDark} heroImageURL={heroImageURL} />} />
          <Route path="/cimetiere" element={<Cimetiere isdark={isDark} cemeteryImage={cemeteryImage}/>} />
          {/* <Route path="/annonces" element={ <Annonces /> } /> */}
        </Routes>
      </Box>
    </Router>
  );
};

export default App;