import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '80.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function Cards(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}
                            image={props.url}
                            title={props.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography>
                                {props.desc}
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </React.Fragment>
    )    
}