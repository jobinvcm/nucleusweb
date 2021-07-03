import { Grid, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  imageContainer: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80")',
    height: '500px',
    width: '400px',
    backgroundSize: 'cover',
    position: 'relative',
    margin: '0 auto',

    '&::after': {
      content: '""',
      backgroundColor: theme.palette.grey[200],
      position: 'absolute',
      top: theme.spacing(2),
      left: theme.spacing(2),
      height: '100%',
      width: '100%',
      display: 'block',
      zIndex: '-1',
      border: `1px dashed ${theme.palette.grey[400]}`
    }
  },
  contentContainer: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

const PromotionalGrid = () => {
  const classes = useStyles()

  return(
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.contentContainer} alignItems="center">
          <Typography variant="h3" component="h1">Nucleus Technology</Typography>
          <Typography variant="body1">Australia's most affordable software consultants</Typography>
        </Grid>

        <Grid item xs={12} md={6} alignItems="center">
          <div className={classes.imageContainer} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default PromotionalGrid
