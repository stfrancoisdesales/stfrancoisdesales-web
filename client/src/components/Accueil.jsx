import { Box, AppBar, Toolbar, Typography, Button, Link, Container, Grid, Paper, IconButton } from "@mui/material";
import { List } from "@mui/icons-material";

const Accueil = ({isDark, heroImageURL}) => {
    
    const nav = [
        { key: 0, label: "Accueil", link: "/accueil" },
        { key: 1, label: "A propos", link: "/a-propos" },
        { key: 2, label: "Annonces", link: "/annonces" },
        {
          key: 3,
          label: "Semainier",
          link: "https://www.semainierparoissial.com/semainiers/193.pdf"
        },
        { key: 4, label: "Archives", link: "/archives" },
        { key: 5, label: "Cimetière", link: "/cimetiere" },
        { key: 6, label: "Contact", link: "/contact" }
      ];

    return (
        <Box
            sx={{
                width: "100%",
                fontFamily: "sans-serif",
                bgcolor: isDark ? "background.default" : "#f9fafb",
                color: "primary",
                transition: "background-color 0.3s ease, color 0.3s ease"
            }}
            >
            
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, ${isDark ? 0.6 : 0.3}),
                    rgba(0, 0, 0, ${isDark ? 0.6 : 0.3})
                    ), url('${heroImageURL}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    // mt: 8,
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                    width: "100%"
                }}
            >
            <Container maxWidth="md">
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Bienvenue à la Paroisse Saint François de Sales
                </Typography>
            </Container>
            </Box>

            {/* About Section */}
            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        {/* A propos */}
                        <Box item sx={{ mb: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                À Propos
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum.
                            </Typography>
                            <Button variant="contained" sx={{ borderRadius: 2 }}>
                                En savoir plus
                            </Button>
                        </Box>

                        {/* Semainier */}
                        <Box item>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                Semainier
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Contact Section */}
            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            p: 4,
                            bgcolor: "primary.light",
                            color: isDark ? "grey.100" : "white",
                            borderRadius: 3
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                            Adresse:
                        </Typography>
                        <Typography>7070 Bd des Mille-Îles</Typography>
                        <Typography>Laval, QC H7A 4B3</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, mb: 1 }}>
                            Horaire des messes:
                        </Typography>
                        <Typography>Dimanche: 10:00 AM</Typography>
                        <Typography>Mardi: 10:00 AM</Typography>
                        <Typography>Jeudi: 10:00 AM</Typography>
                    </Paper>
                </Grid>
            </Container>

            {/* Footer */}
            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: 3,
                    textAlign: "center"
                }}
            >
            <Typography variant="body2" sx={{px: 2}}>
                © {new Date().getFullYear()} Paroisse Saint François de Sales à
                Laval.
            </Typography>
            </Box>
        </Box>
    )
}
export default Accueil;