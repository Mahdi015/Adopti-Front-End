import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { Button } from '@mui/material';
import {Row,Col} from 'react-bootstrap'
import '../../App.css' 
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    backgroundColor: '#6504B5',
    alignItems:'center',
    "&:hover": {
        webkitTransform: 'scale(1.1)',
        transform:'scale(1.1)',
        webkitTransition: "0.3s ease-in-out",
        transition:"0.3s ease-in-out",
      }
  },
}));

export default function ViewPetCard({p,handlepetlove,button}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {pics,petname,petstory,petdiet,slug,petlove} = p
  let history = useHistory()
  const handleMoreInfo =() =>{
      history.push(`/pets/${slug}`)
  }


  return (
    <Card className={classes.root}  >
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={<h4 style={{color:'white'}} className='textwioiuw'>Think you and {petname} might be a match?</h4>}
        // subheader="September 14, 2016"
      />
      <CardMedia
     
      />
      <CardContent>
     <center>
     <Button  disabled={button} onClick={()=>history.push(`/pets/${petname}/introduce-myself`)} style={{ borderRadius: 50 }} color='inherit' variant="contained"><span>Intreduce MySelf</span></Button> <br/>
      <div  className='pt-3'><Button style={{ borderRadius: 50 }} color='inherit'  variant="outlined"><span>Read {petname} FaQ's</span></Button></div>
     </center>

      </CardContent>
      <CardActions >
     
         
          
          
        <div>
        <center>
      
        <IconButton  className='pr-5 ml-2   '  aria-label="add to favorites">
          <FavoriteIcon onClick={()=>handlepetlove(p)} /> {petlove}
        </IconButton>
        
       
        
           <Button style={{ borderRadius: 50 }} className='customb pr-4 ml-2   '  size='large'  color='secondary' onClick={handleMoreInfo} variant="contained"><span><center><i class="fas fa-share"></i> Share</center></span></Button>
         
           </center>
        </div>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        
        
     
   
   
      </CardActions>
   
    </Card>
  );
}
