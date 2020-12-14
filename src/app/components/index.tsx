import React from "react";
import { useSelector } from "react-redux";
import { BaiduLogo } from "./BaiduLogo";
import { BaiduSearch } from "./BaiduSearch";
import { selectCount } from "../redux/slice";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      textAlign: "center",
    },
    typography: {
      marginTop: "10rem",
    },
  }),
);

/**
 * BaiduDemo
 */
export const BaiduDemo = () => {
  const classes = useStyles();
  //选中Redux中管理的count
  const count = useSelector(selectCount);
  return (
    <Container className={classes.container}>
      <BaiduLogo />
      <BaiduSearch />
      <Box className={classes.typography}>
        <Typography variant="h5">检索次数: {count}</Typography>
      </Box>
    </Container>
  );
};
