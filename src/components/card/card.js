import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "../../App.css";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    maxWidth: 300,
    backgroundColor: "#eeedf2",
    alignItems: "center",
    // "&:hover": {
    //   webkitTransform: "scale(1.1)",
    //   transform: "scale(1.1)",
    //   webkitTransition: "0.3s ease-in-out",
    //   transition: "0.3s ease-in-out",
    // },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
    "&::before": {
      position: "absolute",
      content: "''",
      display: "block",
      height: "10%",
      width: "302px",
      borderRadius: "50% 50% 0 0",
      bottom: "calc(100% - 100)",
      right: 0,
      left: "10px",
      top: 230,
      backgroundColor: "#eeedf2",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PetCard({ p, user, handlepetlove }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { pics, petname, petstory, petdiet, slug, petlove } = p;
  let history = useHistory();
  const handleMoreInfo = () => {
    history.push(`/pets/${slug}`);
  };

  return (
    <Card className={classes.root}>
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
        title={<h4 className="textwioiuw">{petname}</h4>}
        // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={pics[0].url}
        title={petname}
        onClick={handleMoreInfo}
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {petstory}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={() => handlepetlove(p)} /> {petlove}
        </IconButton>

        <span style={{ position: "relative", left: "100px" }}>
          <Button onClick={handleMoreInfo} variant="contained">
            Adopt Me
          </Button>
        </span>

        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Pet Diet:</Typography>
          <Typography paragraph>{petdiet}</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
