import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: '0 auto',
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  siteName: {
    fontWeight: 'bold',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.root} >
      <Typography className={classes.siteName} variant="subtitle1">Nucleus Technology</Typography>
    </header>
  )
}

export default Header
