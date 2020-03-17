import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const AboutPage = () =>
    <div>
        <Container maxWidth={false}>
            <Typography variant="h3" align="center">About page</Typography>
            <Typography variant="h6" align="center">This is just here for example of routing</Typography>
        </Container>
    </div>;

export default AboutPage;