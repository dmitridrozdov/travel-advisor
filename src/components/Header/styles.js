import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    color: 'black',
    padding: '10px 0',
  },
  
  title: {
    display: 'none',
    fontFamily: 'Handlee',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  headerSearch: {
    display: 'none',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    marginTop: '5px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#50C7C7', 0.15),
    '&:hover': { backgroundColor: alpha('#50C7C7', 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },

  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    fontFamily: 'Montserrat',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
}));

