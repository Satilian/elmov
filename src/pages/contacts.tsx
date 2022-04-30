import { getLayout } from 'components/Layout';
import { PageType } from 'interfaces/pageType';
import React from 'react';

const Contacts: PageType = () => {
  return <h1>Contacts page</h1>;
};

Contacts.getLayout = getLayout;

export default Contacts;
