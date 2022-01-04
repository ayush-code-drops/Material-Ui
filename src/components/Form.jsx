import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Styles.module.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}));
const useStyles = makeStyles({
  paper: {
    //width: "100px",
    height: "100px"
  }
});
export function Form() {
  const nameref = createRef();
  const passref = createRef();
  const [value, setValue] = useState(2);
  const [state, setState] = useState(true);
  const handleClick = () => {
    if (
      nameref.current.value === "admin" &&
      passref.current.value === "admin"
    ) {
      alert("Welcome");
    } else {
      alert("Wrong Credentials");
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" classes={{ root: styles.container }}>
        <Box>
          <TextField inputRef={nameref} label="Name" />
        </Box>
        <Box>
          <TextField inputRef={passref} label="Password" type="password" />
        </Box>
        <Box>
          <Checkbox {...label} defaultChecked color="success"></Checkbox>
        </Box>
        <Box>
          <Modal open={state} onClose={() => setState(false)}>
            <Paper className={classes.paper}>Hii!</Paper>
          </Modal>
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Submit
          </Button>
        </Box>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <Rating value={value} onChange={(e) => setValue(e.target.value)} />
      </Container>
    </div>
  );
}

export function GridLayout() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>1</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>2</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>3</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>4</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>5</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>6</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>7</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>8</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>9</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>10</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>11</Paper>
      </Grid>
      <Grid xs="12" sm="6" md="4" lg="3" xl="2">
        <Paper className={classes.paper}>12</Paper>
      </Grid>
    </Grid>
  );
}
