import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import kotlin from '../assets/kt.jpeg';
import javascript from '../assets/js.jpeg';
import python from '../assets/python.png';
import react from '../assets/react.png';

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
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));


const cards = [
    { url: react, language: 'React.js', desc: 'ポートフォリオ作成1'},
    { url: react, language: 'React.js', desc: 'ポートフォリオ作成2'},
    { url: react, language: 'React.js', desc: 'ポートフォリオ作成3'},
    { url: react, language: 'React.js', desc: 'ポートフォリオ作成4'},
];

export default function Skill() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                    image={card.url}
                                    title={card.language}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.language}
                                    </Typography>
                                    <Typography>
                                        {card.desc}
                                    </Typography> 
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )    
}