import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="container-fluid">
          <Row>
            <Colxx className="col-sm-6 d-none d-sm-block">
              <p className="mb-0 text-muted">FICCI-CAPAM 2020</p>
            </Colxx>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
