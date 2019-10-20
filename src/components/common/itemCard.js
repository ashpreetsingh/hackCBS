import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    
    width:"450px",
    margin:"5%",
    textAlign:"center",
    transition:'transform 0.2s',
    '&:hover' :{
        transform: 'scale(1.05,1.05)'
        
    },
    cursor:"pointer",
    borderRadius:"10%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
          <img src={props.data.image} width={100} height={180} />
        <Typography variant="h6" >
          {props.data.name}
        </Typography>
        
        
        <Typography variant="body2" component="p">
        ₹ {props.price}
          
        </Typography>
        <Button variant="outlined" style={{color:"#e63d05",borderRadius:"20px",borderColor:"#e63d05"}} >Add to Cart</Button>
      </CardContent>
      
    </Card>
  );
}