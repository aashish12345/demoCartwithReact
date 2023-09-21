import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const Footer = () => {
    const pages = ['Department', 'Services', 'My Items','All Departments','Store Directory','Careers','Our Company'];
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Box>
                            {pages.map((page) => {
                                return (<Button
                                className="btncolor"
                                    key={page}
                                    sx={{ my: 2}}
                                > {page}
                                </Button>)
                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {'2023 Walmart. All Rights Reserved.'}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;