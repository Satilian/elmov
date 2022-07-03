import { getLayout } from "components/Layout";
import { PageType } from "interfaces/page";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ui from "modules/ui/uiState";

const Contacts: PageType = () => {
  const menuIsOpen = useSelector(ui.selectors.menuIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuIsOpen) dispatch(ui.actions.toggle());
  }, []);

  return <h1>Contacts page</h1>;
};

Contacts.getLayout = getLayout;

export default Contacts;
