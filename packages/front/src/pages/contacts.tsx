import { getLayout } from "components/Layout";
import * as ui from "modules/ui/uiState";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartialState } from "util/getPartialState";

export default function Contacts() {
  const menuIsOpen = useSelector(ui.selectors.menuIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuIsOpen) dispatch(ui.actions.toggle());
  }, []);

  return <h1>Contacts page</h1>;
}

Contacts.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: { state: await getPartialState({ req }) },
});
