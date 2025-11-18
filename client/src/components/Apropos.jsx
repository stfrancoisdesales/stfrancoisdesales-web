import { Box, Container, Typography, Grid } from "@mui/material";

const Apropos = ({isDark, priestImageURL, churchImageURL}) => {
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


            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid container spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src={`${priestImageURL}`}
                            alt="Image de l'église"
                            sx={{
                                margin: "auto",
                                maxHeight: "150px",
                                borderRadius: "100%"
                            }}
                        >
                        </Box>

                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
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
                    </Grid>
                    
                    <Grid container spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src={`${churchImageURL}`}
                            alt="Image de l'église"
                            sx={{
                                margin: "auto",
                                alignSelf: "center",
                                maxWidth: "95%"
                            }}
                        >
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                                Histoire
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
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default Apropos;