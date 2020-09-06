import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DashboardAnalytics = ({ intl, match }) => {
  const image1={
    position: "relative"
   }
    return (
     <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" />
    );
};
export default injectIntl(DashboardAnalytics);
