import { getLayout } from "components/Layout";
import { Main } from "components/Main";
import * as ui from "modules/ui/uiState";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const menuIsOpen = useSelector(ui.selectors.menuIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuIsOpen) dispatch(ui.actions.toggle());
  }, []);

  return <Main />;
};

Home.getLayout = getLayout;

export default Home;
