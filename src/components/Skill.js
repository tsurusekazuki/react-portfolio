import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import kotlin from '../assets/kt.jpeg';
import javascript from '../assets/js.jpeg';
import python from '../assets/python.png';
import c from '../assets/c.png';
import html_css from '../assets/htmlcss.jpg'

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


const cards = [
    { url: kotlin, language: 'Kotlin', desc: '所属プロジェクトでのチーム開発、インターンでクライアントサイドの開発の際に使用' },
    { url: python, language: 'Python', desc: '機械学習・DjangoでのAPI開発、競技プログラミングに参加するときに用いている' },
    { url: javascript, language: 'javascript', desc: 'ReactやVueなどフレームワークを用いてポートフォリオ作成・開発などにも使用している' },
    { url: c, language: 'C', desc: '学校の授業で2年間、使用していました。現在はまっったく書ける気がしません'},
    { url: html_css, language: 'HTML/CSS', desc: '基本的な構文は習得済み、プロジェクトに所属してから最初に学習した言語' }
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
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )    
}