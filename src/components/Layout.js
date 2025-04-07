import * as React from 'react';
import { Box,  Container } from '@mui/material';
const Layout =({children}) => {
    return (

        <Box>
            <Container className="container">

                {children}

            </Container>
        </Box>
    );
}

export default Layout;
