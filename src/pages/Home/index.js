import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PlaceIcon from '@material-ui/icons/Place';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {
  Searchbar as CustomizedInputBase,
  ImageGridList,
} from '../../components';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(20, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Trind
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Cari wisata menarik yang ada di sekitarmu!
            </Typography>
            <CustomizedInputBase />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    kunjungi
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    lihat selengkapnya
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Warung J-One
                    </Typography>
                    <Typography
                      gutterBottom
                      fontSize='small'
                      variant='subtitle'
                    >
                      <PlaceIcon fontSize='inherit' />
                      Perumdos ITS, Blok J No.1, Keputih Kota Surabaya, Jawa
                      Timur
                    </Typography>
                  </CardContent>
                  <Divider orientation='horizontal' />
                  <CardActions>
                    <IconButton aria-label='tambahkan ke favorit'>
                      <FavoriteIcon fontSize='small' />
                    </IconButton>
                    <IconButton aria-label='bagikan'>
                      <ShareIcon fontSize='small' />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth='md'>
          <ImageGridList />
        </Container>
      </main>
    </React.Fragment>
  );
}