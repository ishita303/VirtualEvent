import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DashboardAnalytics = ({ intl, match }) => {
  const { messages } = intl;
  return (
   <>
     <div style={{
       backgroundImage: `url("https://ficci-capam.framez.sg/images/lounge.jpg")`,
       backgroundRepeat: 'no-repeat',height:'600px', width:'1800px',
       backgroundSize: 'contain',
     }}>
     </div>
  </>
);
};
export default injectIntl(DashboardAnalytics);
