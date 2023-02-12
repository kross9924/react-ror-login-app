import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from "@material-ui/core";
import axios from 'axios'

function MaterialComponentList () {
    const handleClick = () => {
        axios.delete('/users/sign_out')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        });
    }
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flex: 1}}>
              Welcome Home
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );

}

export default MaterialComponentList;
