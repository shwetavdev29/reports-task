import React from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import styles from "./Reports.module.css";

const Reports = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col xs={4}>
            <h3 className={styles.pageTitle}> Reports</h3>
            <p className={styles.reportDetail}>
              Easily generate a report of your transactions
            </p>
          </Col>
          <Col xs={8} className={styles.dropmain}>
            <Dropdown>
              <Dropdown.Toggle
                className={styles.reportDetailDropdown}
                variant="success"
                id="dropdown-basic"
              >
                All projects
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.dropmenu}>
                <Dropdown.Item className={styles.dropitem} href="#/action-1">
                  All projects
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-2">
                  Project 1
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-3">
                  Project 2
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-2">
                  Project 3
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-3">
                  Project 4
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                className={styles.reportDetailDropdown}
                variant="success"
                id="dropdown-basic"
                value={"123"}
              >
                Gateway 1
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.dropmenu}>
                <Dropdown.Item className={styles.dropitem} href="#/action-1">
                  All gateways
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-2">
                  Gateway 1
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-3">
                  Gateway 2
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-2">
                  Gateway 3
                </Dropdown.Item>
                <Dropdown.Item className={styles.dropitem} href="#/action-3">
                  Gateway 4
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup className={styles.reportDateSelect}>
              <Form.Control type="date" />
            </InputGroup>
            <InputGroup className={styles.reportDateSelect}>
              <Form.Control type="date" />
            </InputGroup>
            <button className={styles.generateReportBtn}>
              Generate report
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className={styles.reportCard}>
              <h3 className={styles.cardTitle}>All projects | All gateways</h3>
              <Accordion
                className={styles.projectAccordion}
                defaultActiveKey={["0"]}
                alwaysOpen
              >
                <Accordion.Item
                  className={styles.projectAccordionItem}
                  eventKey="0"
                >
                  <Accordion.Header className={styles.projectAccordionHeader}>
                    <span>Project 1</span> <span>TOTAL: 10,065 USD</span>
                  </Accordion.Header>
                  <Accordion.Body className={styles.projectAccordionBody}>
                    <Table responsive="sm" className="borderless">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Gateway 1</th>
                          <th>Transaction ID</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01/21/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/24/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/27/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className={styles.projectAccordionItem}
                  eventKey="1"
                >
                  <Accordion.Header className={styles.projectAccordionHeader}>
                    <span>Project 2</span> <span>TOTAL: 4,000 USD</span>
                  </Accordion.Header>
                  <Accordion.Body className={styles.projectAccordionBody}>
                    <Table responsive="sm" className="borderless">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Gateway 1</th>
                          <th>Transaction ID</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01/21/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/24/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/27/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className={styles.projectAccordionItem}
                  eventKey="2"
                >
                  <Accordion.Header className={styles.projectAccordionHeader}>
                    <span>Project 3</span> <span>TOTAL: 4,000 USD</span>
                  </Accordion.Header>
                  <Accordion.Body className={styles.projectAccordionBody}>
                    <Table responsive="sm" className="borderless">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Gateway 1</th>
                          <th>Transaction ID</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01/21/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/24/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/27/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className={styles.projectAccordionItem}
                  eventKey="3"
                >
                  <Accordion.Header className={styles.projectAccordionHeader}>
                    <span>Project 4</span> <span>TOTAL: 4,000 USD</span>
                  </Accordion.Header>
                  <Accordion.Body className={styles.projectAccordionBody}>
                    <Table responsive="sm" className="borderless">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Gateway 1</th>
                          <th>Transaction ID</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01/21/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/24/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                        <tr>
                          <td>01/27/2021 </td>
                          <td>Gateway 2</td>
                          <td>a732b</td>
                          <td>3964 USD</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Card className={styles.reportCard}>
              <h3 className={styles.cardTitle}>TOTAL: 14,065 USD</h3>
            </Card>
          </Col>
          <Col xs={12}>
            <p className={styles.termstext}>
              Terms&Conditions | Privacy policy
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Reports };
