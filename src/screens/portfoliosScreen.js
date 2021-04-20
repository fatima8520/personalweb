import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Title from "../components/title";
import { getTranslate } from "../localization/index";
import Portfolio from "../components/portfolio";
import RnImage from "../assets/images/p1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    padding: 30,
    paddingTop: 60,
    [theme.breakpoints.down("xs")]: {
      paddingright: 10,
      paddingLeft: 10,
    },
  },
}));

const PortfoliosScreen = () => {
  const classes = useStyles();
  const translate = getTranslate();
  const portfolios = [
    {
      id: 1,
      title: "React Dvelpoer",
      desc: "React JS Course",
      image: RnImage,
    },
    {
      id: 2,
      title: "React Dvelpoer",
      desc: "React JS Course",
      image: RnImage,
    },
    {
      id: 3,
      title: "React Dvelpoer",
      desc: "React JS Course",
      image: RnImage,
    },
    {
      id: 4,
      title: "React Dvelpoer",
      desc: "React JS Course",
      image: RnImage,
    },
    {
      id: 5,
      title: "React Dvelpoer",
      desc: "React JS Course",
      image: RnImage,
    },
    {
      id: 6,
      title: "React Dvelpoer",
      desc: "React JS Course",
      image: RnImage,
    },
  ];

  return (
    <div className={classes.root}>
      <Title title={translate.portfolios} />
      <Grid
        container
        xs={12}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        {portfolios.map((item) => (
          <Portfolio
            key={item.is}
            title={item.title}
            desc={item.desc}
            image={item.image}
            href="https://reactdeveloper.ir/courses/react"
          />
        ))}
      </Grid>
    </div>
  );
};
export default PortfoliosScreen;
