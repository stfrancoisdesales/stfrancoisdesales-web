import { Box, Typography } from "@mui/material";

const Cimetiere = ({ isDark, cemeteryImage }) => {
    return (
        <>
            <Box
                component="img"
                sx={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, ${isDark ? 0.6 : 0.3}),
                        rgba(0, 0, 0, ${isDark ? 0.6 : 0.3})
                        ), url('${cemeteryImage}')`,
                    // backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    // mt: 1,
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                    width: "100%",
                }}>
                
            </Box>
        </>
    )
}
export default Cimetiere;