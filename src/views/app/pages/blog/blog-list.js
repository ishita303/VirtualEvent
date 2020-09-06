import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

const BlogList = ({ match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLong, setModalLong] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [modalRight, setModalRight] = useState(false);
  const [modalNestedContainer, setModalNestedContainer] = useState(false);
  const [modalNested, setModalNested] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalSmall, setModalSmall] = useState(false);
  return (
    <div style={{padding:"20px"}}>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="Document Library" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12">
        <Card className="mb-4">
          <CardBody>
            <CardTitle>
              SPONSORS
            </CardTitle>
            <div>
              <Button
                color="primary"
                outline
                onClick={() => setModalBasic(true)}
              >
                View
              </Button>
              <Modal
                isOpen={modalBasic}
                toggle={() => setModalBasic(!modalBasic)}
              >
                <ModalHeader>
                  SPONSORS
                </ModalHeader>
                <ModalBody>
                  <img src=''/>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalBasic(false)}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                FICCI EOS - July 2020
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalBasic(true)}
                >
                  View
                </Button>
                <Modal
                  isOpen={modalBasic}
                  toggle={() => setModalBasic(!modalBasic)}
                >
                  <ModalHeader>
                    FICCI EOS - July 2020
                  </ModalHeader>
                  <ModalBody>
                    <img src=''/>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      onClick={() => setModalBasic(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>
        </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  MANUFACTURING SURVEY REPORT
                </CardTitle>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    View
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      MANUFACTURING SURVEY REPORT
                    </ModalHeader>
                    <ModalBody>
                      <img src=''/>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </CardBody>
            </Card>
          </Colxx>
          </Row>

          <Row>
            <Colxx xxs="12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>
                    FICCI Dhruva Survey
                  </CardTitle>
                  <div>
                    <Button
                      color="primary"
                      outline
                      onClick={() => setModalBasic(true)}
                    >
                      View
                    </Button>
                    <Modal
                      isOpen={modalBasic}
                      toggle={() => setModalBasic(!modalBasic)}
                    >
                      <ModalHeader>
                        FICCI Dhruva Survey
                      </ModalHeader>
                      <ModalBody>
                        <img src=''/>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="secondary"
                          onClick={() => setModalBasic(false)}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </CardBody>
              </Card>
            </Colxx>
            </Row>

            <Row>
              <Colxx xxs="12">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle>
                      WOB_Final Report_3103_V12
                    </CardTitle>
                    <div>
                      <Button
                        color="primary"
                        outline
                        onClick={() => setModalBasic(true)}
                      >
                        View
                      </Button>
                      <Modal
                        isOpen={modalBasic}
                        toggle={() => setModalBasic(!modalBasic)}
                      >
                        <ModalHeader>
                          WOB_Final Report_3103_V12
                        </ModalHeader>
                        <ModalBody>
                          <img src=''/>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="secondary"
                            onClick={() => setModalBasic(false)}
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </CardBody>
                </Card>
              </Colxx>
              </Row>

              <Row>
                <Colxx xxs="12">
                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        CAPAM Compendium 2020
                      </CardTitle>
                      <div>
                        <Button
                          color="primary"
                          outline
                          onClick={() => setModalBasic(true)}
                        >
                          View
                        </Button>
                        <Modal
                          isOpen={modalBasic}
                          toggle={() => setModalBasic(!modalBasic)}
                        >
                          <ModalHeader>
                            CAPAM Compendium 2020
                          </ModalHeader>
                          <ModalBody>
                            <img src=''/>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="secondary"
                              onClick={() => setModalBasic(false)}
                            >
                              Cancel
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </CardBody>
                  </Card>
                </Colxx>
                </Row>

                <Row>
                  <Colxx xxs="12">
                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>
                          L&T PROFILE
                        </CardTitle>
                        <div>
                          <Button
                            color="primary"
                            outline
                            onClick={() => setModalBasic(true)}
                          >
                            View
                          </Button>
                          <Modal
                            isOpen={modalBasic}
                            toggle={() => setModalBasic(!modalBasic)}
                          >
                            <ModalHeader>
                              L&T PROFILE
                            </ModalHeader>
                            <ModalBody>
                              <img src=''/>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="secondary"
                                onClick={() => setModalBasic(false)}
                              >
                                Cancel
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>
                  </Row>
    </div>
  );
};

export default BlogList;
