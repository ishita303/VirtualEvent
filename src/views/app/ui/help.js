import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const BlankPage = ({ match }) => {
  const image1={
    height: "720px", width: "1320px"
   }
   const constyle={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '21.13%',left: '12.17%',
   }
   const lounge={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '20.67%',left: '80.17%'
   }
   const speaker={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.07%', height: '11.3%',
                    top: '33.19%',left: '12.17%'
   }
   const agenda={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '47.15%',left: '11.90%'
   }
   const doc={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.7%', height: '11.3%',
                    top: '31.98%',left: '80.17%'
   }
   const support={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '46.53%',left: '80.47%'
   }
    return (
    <div>
     <img style={image1} src="https://ficci-capam.framez.sg/images/helpdesk.jpg" />
     <div style={constyle}>
       <span className="blinkingdot"></span>
     </div>
     <div style={lounge}>
       <span className="blinkingdot"></span>
     </div>
     <div style={speaker}>
       <span className="blinkingdot"></span>
     </div>
     <div style={agenda}>
       <span className="blinkingdot"></span>
     </div>
     <div style={doc}>
       <span className="blinkingdot"></span>
     </div>
     <div style={support}>
       <span className="blinkingdot"></span>
     </div>
    </div>
    );
};

export default BlankPage;
