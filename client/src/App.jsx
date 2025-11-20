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
import Apropos from "./components/Apropos";
import Archives from "./components/Archives";

const App = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  
  const heroImageURL ="https://imgs.search.brave.com/Q32aNIwA3m5uAh6FcBZhmGoKv2HpzWucELvdOPGuPbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW5h/dHVyZS5jYS9hcHAv/dXBsb2Fkcy8yMDI1/LzA4L2plc3VzNDgz/LmpwZw";
  const cemeteryImage = "https://imgs.search.brave.com/lPBdsMbNdsfUgVfTbEjvf5WCAGSgtJlmb9zxgJzydNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/OTUyLzk2Ni9zbWFs/bC9mb2dneS1jZW1l/dGVyeS13aXRoLXdl/YXRoZXJlZC10b21i/c3RvbmVzLW15c3Rl/cmlvdXMtYXRtb3Nw/aGVyZS1waG90by5q/cGc";
  const churchImageURL = "https://imgs.search.brave.com/6Bteffw97cOBnksHiHRMS21OBIVh-trJsvFH0OwUrms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzY1NzY3/NDIyNTAtMTI5M2M5/NGMxYTY1P2l4bGli/PXJiLTQuMS4wJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRkOGZHTm9k/WEpqYUNVeU1HSjFh/V3hrYVc1bmZHVnVm/REI4ZkRCOGZId3cm/Zm09anBnJnE9NjAm/dz0zMDAw";
  const priestImageURL = "https://imgs.search.brave.com/TR2o3lW8r-ymTYw7BngFq1ZLzWtGLLXeBLCCQYieaok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzYxLzkyLzMy/LzM2MF9GXzE2NjE5/MjMyNTBfaDBnNDBV/aFNxdEsxcFFTYmoz/bTI4RWNsYU1oOTJn/bk0uanBn";
  
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
    { key: 4, label: "Archives", link: "/archives" },
    { key: 5, label: "Cimetière", link: "/cimetiere" }
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
              Paroisse Saint François de Sales
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

        <Box
            sx={{
                width: "100%",
                fontFamily: "sans-serif",
                bgcolor: isDark ? "background.default" : "#f9fafb",
                color: "primary",
                transition: "background-color 0.3s ease, color 0.3s ease"
            }}
        >
          <Routes>
            <Route path="/" element={<Accueil isdark={isDark} heroImageURL={heroImageURL} />} />
            <Route path="/accueil" element={<Accueil isdark={isDark} heroImageURL={heroImageURL} />} />
            <Route path="/cimetiere" element={<Cimetiere isdark={isDark} cemeteryImage={cemeteryImage}/>} />
            <Route path="/a-propos" element={<Apropos isDark={isDark} churchImageURL={churchImageURL} priestImageURL={priestImageURL}/>} />
            <Route path="/archives" element={<Archives churchImageURL={churchImageURL}/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;