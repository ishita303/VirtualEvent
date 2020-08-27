import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;

const image={
  height: "660px", width: "1410px" 
}

  return (
   <img style={image} src="https://ficci-capam.framez.sg/images/lobby.jpg" />
  );
};
export default injectIntl(DefaultDashboard);
