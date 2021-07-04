import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
}));

const OurServicesGrid = () => {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
    <Container>
    <Grid container>
      <Grid xs={12} md={4} alignItems="center">
        <Typography variant="h5" component="h2" align="center">Web Design</Typography>
      </Grid>
      <Grid xs={12} md={4}>
        <Typography variant="h5" component="h2" align="center">Website Development</Typography>
      </Grid>
      <Grid xs={12} md={4}>
        <Typography variant="h5" component="h2" align="center">Application Development</Typography>
      </Grid>
    </Grid>
    </Container>
    </div>
    
  );
};

export default OurServicesGrid;
