import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import{Container, Grow, Grid, Typography, createMuiTheme, ThemeProvider, Button, Stepper, Step, StepLabel, StepContent, Paper, StepConnector, withStyles, makeStyles, LinearProgress, IconButton  } from '@material-ui/core';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import StartSVG from '../../images/Start.tsx'











const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `rotate(${rotation}deg)`
      : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  

   React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;