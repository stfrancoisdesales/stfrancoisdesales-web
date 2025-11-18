import { Box, Typography, Container, Grid, Button } from "@mui/material";

const Cimetiere = ({ isDark, cemeteryImage }) => {
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
            <Box
                sx={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, ${isDark ? 0.6 : 0.3}),
                        rgba(0, 0, 0, ${isDark ? 0.6 : 0.3})
                        ), url('${cemeteryImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, opacity: "0%" }}>
                        Cimetière
                    </Typography>
                </Container>
            </Box>

            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Box item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                            Titre
                        </Typography>
                        <Typography sx={{ mb: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
                </Grid>
            </Container>
        </Box>
    )
}
export default Cimetiere;