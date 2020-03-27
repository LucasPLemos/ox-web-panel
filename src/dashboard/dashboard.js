import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';


import { makeStyles } from '@material-ui/core/styles';

import { Title } from 'react-admin';

const useStyles = makeStyles({
    media: {
        height: '18em',
    },
});


const mediaUrl = `https://marmelab.com/posters/beard-${parseInt(
    (Math.random() * 10).toString(),
    10
) + 1}.jpeg`;

export const Dashboard = () => {
    const classes = useStyles();

    return (
    <Card>
        <Title title="Welcome Open-Xchange Administration Panel" />
        <CardMedia image={mediaUrl} className={classes.media} />
        <CardContent>Welcome to OX Administration Panel</CardContent>
        <CardContent>Click in the button below access OX</CardContent>
        <CardActions>
            <Button href="https://inova.dev.xion.oxcs.net/appsuite/">
                    <HomeIcon style={{ paddingRight: '0.5em' }} />
                    Access Webmail
            </Button>
            <Button href="https://inova.dev.xion.oxcs.net/appsuite/">
                    <CodeIcon style={{ paddingRight: '0.5em' }} />
                    REST API
            </Button>
        </CardActions>
    </Card>

);
};