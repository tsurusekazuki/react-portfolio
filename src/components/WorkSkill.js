import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import choice from '../assets/choice.png'
import kanayado from '../assets/kanayado.png'
import youture from '../assets/youture.png'

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
    { url: youture, title: 'YouTure', desc: 'インターンの際、チーム揮発で作成しました。動画の予測再生数・予測高評価数を表示するWebアプリです。自分の役割はクライアントサイド、モデル作成です。' },
    { url: choice, title: 'Choice', desc: '特定slackチャンネル内にいるactiveメンバーをランダムにソートして表示するBotです。個人開発です。' },
    { url: kanayado, title: 'カナヤド', desc: '金沢の観光地と宿泊地を一目で丸わかりできるモバイルアプリです。初速組織でのチーム開発で作成しました。自分の役割は、企画・UI設計・アプリケーションの各画面の実装、画面遷移時のデータの受け渡し' },
];



export default function WorkSkill() {
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
                                    title={card.title}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
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