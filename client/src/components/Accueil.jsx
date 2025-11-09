import { Box, AppBar, Toolbar, Typography, Button, Link, Container, Grid, Paper } from "@mui/material";

const Accueil = ({isDark, heroImageURL}) => {
    
    const nav = [
        { key: 0, label: "Accueil", link: "/accueil" },
        { key: 1, label: "A propos", link: "/a-propos" },
        { key: 2, label: "Nouveautés", link: "/nouveautes" },
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
            {/* Header */}
            <AppBar
            sx={{
                bgcolor: "primary.main",
                py: 1
                }}
                >
            <Toolbar
                variant="dense"
                sx={{
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}
                >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Paroisse Saint François de Sales
                </Typography>

                <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    width: { xs: "100%", md: "auto" }
                    }}
                    >
                {nav.map((item) => (
                    <Button
                    key={item.key}
                    component={Link}
                    to={item.link}
                    target={
                        item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                            item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        sx={{
                            color: "white",
                            textTransform: "none",
                            "&:hover": { bgcolor: "primary.dark" }
                        }}
                        >
                    {item.label}
                    </Button>
                ))}
                </Box>
            </Toolbar>
            </AppBar>

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
                    mt: 8,
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
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    À Propos
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                    Nous sommes une communauté accueillante de croyants engagés à
                    suivre Jésus-Christ et à servir nos voisins. Notre mission est
                    de répandre le message d'espoir et d'amour par le culte, la
                    sensibilisation et la formation spirituelle.
                </Typography>
                <Button variant="contained" sx={{ borderRadius: 2 }}>
                    En savoir plus
                </Button>
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
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Nous visiter
                </Typography>
                <Typography>7070 Bd des Mille-Îles</Typography>
                <Typography>Laval, QC H7A 4B3</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                    Horaire:
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
            <Typography variant="body2">
                © {new Date().getFullYear()} Paroisse Saint François de Sales à
                Laval. Tous droits réservés.
            </Typography>
            </Box>
        </Box>
    )
}
export default Accueil;