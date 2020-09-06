import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DefaultConference = ({ intl, match }) => {
  const image2={
    position: "relative"
   }
    return (
     <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
    );
};
export default injectIntl(DefaultConference);
