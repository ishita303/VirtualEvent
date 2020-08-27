import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;
  const imagepath = "https://ficci-capam.framez.sg/images/lobby.jpg";
  return (
   <>
     <div style={{
         height:'1200px',
         width:'1100px',
     }}>
      <img src= {imagepath} />
     </div>
  </>
  );
};
export default injectIntl(DefaultDashboard);
