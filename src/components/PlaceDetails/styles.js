import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  placeName: {
    fontFamily: 'Handlee',
    fontSize: '24px',
  },
  reviewsFont: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
  },
  priceFont: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
  },
}));
