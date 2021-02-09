import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, name, description }) => {
  // const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {name}
          </Typography>
          <Typography className={classes.subtitle}>{description}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

function HeroCard({hero}) {
  const gridStyles = useGridStyles();
  console.log(hero);
  const styles = useStyles({ color: "#203f52" });

  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            name={hero.name}
            description={hero.description}
            image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HeroCard;
