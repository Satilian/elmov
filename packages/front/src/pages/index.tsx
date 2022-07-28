import { getLayout } from "components/Layout";
import { Main } from "components/Main";
import * as ui from "modules/ui/uiState";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartialState } from "util/getPartialState";

export default function HomePage() {
  const menuIsOpen = useSelector(ui.selectors.menuIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuIsOpen) dispatch(ui.actions.toggle());
  }, []);

  return <Main />;
}

HomePage.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: { state: await getPartialState({ req }) },
  };
};
