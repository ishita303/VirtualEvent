import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DefaultConference = ({ intl, match }) => {
  const image2={
    height: "720px", width: "1320px"
   }
    return (
     <img style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
    );
};
export default injectIntl(DefaultConference);
