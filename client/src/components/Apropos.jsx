import { Box, Container, Typography, Grid } from "@mui/material";

const Apropos = ({isDark, priestImageURL, churchImageURL}) => {
    return (
        <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
                    Communauté Chrétienne Saint-Fançois de Sales
                </Typography>
                <Grid container spacing={8} alignItems="center">
                    {/* <Box sx={{border: "1px solid black", margin: "auto"}}> */}
                        <Box display="flex" flexDirection="column">
                            <Box
                                component="img"
                                src={`${priestImageURL}`}
                                alt="Image de l'église"
                                sx={{
                                    maxHeight: "150px",
                                    borderRadius: "100%",
                                    mx: "auto",
                                    my: 2
                                }}
                            >
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}>
                                Curé
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
                        </Box>

                        <Grid container spacing={8}>
                        <Box sx={{ mx: "auto" }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, textDecoration: "underline", textAlign: "center" }}>
                                    Bureau
                                </Typography>
                                <Box display="flex" flexDirection="row" gap={5}>
                                    <Typography>Diane Imbeault, Secrétaire</Typography>
                                    <Typography>450 666-3563</Typography>
                                </Box>
                            </Box>
                            
                            <Box sx={{ mx: "auto" }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, textDecoration: "underline", textAlign: "center" }}>
                                    Conseil de Fabrique
                                </Typography>
                                <Box display="flex" flexDirection="row" gap={5}>
                                    <Grid>
                                        <Typography>Raymond Urbain</Typography>
                                        <Typography>Marcel Bouchard</Typography>
                                        <Typography>Pierre Desrochers</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography>Georges Martin</Typography>
                                        <Typography>Normand Caty</Typography>
                                        <Typography>Ghislain Pouliot</Typography>
                                    </Grid>
                                </Box>
                            </Box>

                            <Box sx={{ mx: "auto" }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, textDecoration: "underline", textAlign: "center" }}>
                                    Comité de liturgie
                                </Typography>
                                <Box display="flex" flexDirection="row" gap={5}>
                                    <Grid>
                                        <Typography>Jean-Claude Lavoie</Typography>
                                        <Typography>André Camirand</Typography>
                                        <Typography>Marie Solange Fortinus</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography>Normand Caty</Typography>
                                        <Typography>Michelle St-Aubin   </Typography>
                                    </Grid>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", flexDirection: "column", mx: "auto", textAlign: "center" }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, textDecoration: "underline", textAlign: "center" }}>
                                    Responsable des catéchèses
                                </Typography>
                                <Box display="flex" flexDirection="row" gap={8}>
                                    <Typography>Michel Lachance</Typography>
                                    <Typography>450 666-3563</Typography>
                                </Box>
                            {/* <Typography>Responsable des catéchèses: Michel Lachance</Typography> */}
                            </Box>
                        </Grid>

                        
                    {/* </Box> */}
                </Grid>

                {/* <Grid container spacing={8} alignItems="center">
                <Grid container spacing={2} alignItems="center">
                    

                   
                </Grid>
            </Grid> */}
        </Container>
    );
}

export default Apropos;