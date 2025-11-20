import { Box, Grid, Container, Typography } from "@mui/material";

const Archives = ({churchImageURL}) => {
    return (
        <Container sx={{ py: { xs: 8, md: 10 } }}>
            <Grid container spacing={8} alignItems="center">
                <Grid container spacing={2} alignItems="center">
                    <Box
                        component="img"
                        src={`${churchImageURL}`}
                        alt="Image de l'église"
                        sx={{
                            margin: "auto",
                            alignSelf: "center",
                            maxWidth: { xs: "95%", md: "550px" }
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
    )
}

export default Archives;