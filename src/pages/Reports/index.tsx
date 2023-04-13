import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import DonutChart from "react-donut-chart";
import {
  getGatewaysListApi,
  getProjectsListApi,
  getReportApi,
} from "../../apis";
import { useLogicReport } from "../../hooks";
import { IGateWayData, IProjectData, IReportData } from "../../models";
import styles from "./Reports.module.css";
interface Iparams {
  projectId?: string;
  gatewayId?: string;
  to?: string;
  from?: string;
}

const Reports = () => {
  const [projectsList, setProjectsList] = useState<IProjectData[]>([]);
  const [gatewaysList, setGatewaysList] = useState<IGateWayData[]>([]);
  const [showChart, setShowChart] = useState<boolean>(false);
  const [report, setReport] = useState<IReportData[]>([]);
  const [params, setParams] = useState<Iparams>({
    projectId: "",
    gatewayId: "",
    to: "",
    from: "",
  });
  const [formattedReports, setFormattedReports] = useState<any[]>([]);
  const [chartsData, setChartsData] = useState<any[]>([]);

  const { formatReport, formatChartData } = useLogicReport();
  useEffect(() => {
    getProjectsListApi(
      data => {
        setProjectsList(data);
      },
      () => {}
    );
    getGatewaysListApi(
      data => {
        setGatewaysList(data);
      },
      () => {}
    );
  }, []);

  useEffect(() => {
    fetchReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const fetchReports = () => {
    let _params: Iparams = {};
    if (params.projectId !== "") {
      _params["projectId"] = params.projectId;
    }
    if (params.gatewayId !== "") {
      _params["gatewayId"] = params.gatewayId;
    }
    if (params.from !== "") {
      _params["from"] = params.from;
    }
    if (params.to !== "") {
      _params["to"] = params.to;
    }
    getReportApi(
      _params,
      data => {
        setReport(data);
      },
      () => {}
    );
  };

  useEffect(() => {
    if (projectsList && report) {
      let formattedData: any = formatReport(projectsList, report);
      let chartDataFormatted: any = formatChartData(projectsList, report);
      setFormattedReports(formattedData);
      setChartsData(chartDataFormatted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsList, report]);

  const getProjectName = (projectId: string) => {
    let projectDetail = projectsList.find(
      project => project.projectId === projectId
    );
    return projectDetail?.name;
  };

  const getGatewayname = (gatewayId: string) => {
    let gatewayDetail: IGateWayData | undefined = gatewaysList.find(
      gateway => gateway.gatewayId === gatewayId
    );
    if (gatewayDetail) {
      return gatewayDetail.name;
    } else {
      return "";
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    formattedReports.map(_report => {
      return (totalAmount += +_report.totalAmount);
    });
    return totalAmount;
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={4}>
          <h3 className={styles.pageTitle}> Reports</h3>
          <p className={styles.reportDetail}>
            Easily generate a report of your transactions
          </p>
        </Col>
        <Col xs={8} className={styles.dropmain}>
          <Form.Select
            onChange={event => {
              setParams({ ...params, projectId: event.target.value });
            }}
            className={styles.reportDetailDropdown}
          >
            <option value={""} className={styles.dropitem}>
              All Projects
            </option>
            {projectsList?.map(project => {
              return (
                <option
                  key={project.projectId}
                  className={styles.dropitem}
                  value={project.projectId}
                >
                  {project.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            onChange={event => {
              setParams({ ...params, gatewayId: event.target.value });
            }}
            className={styles.reportDetailDropdown}
          >
            <option value={""} className={styles.dropitem}>
              All Gateways
            </option>
            {gatewaysList?.map(gateway => {
              return (
                <option
                  key={gateway.gatewayId}
                  className={styles.dropitem}
                  value={gateway.gatewayId}
                >
                  {gateway.name}
                </option>
              );
            })}
          </Form.Select>
          <InputGroup className={styles.reportDateSelect}>
            <Form.Control
              onChange={event => {
                setParams({
                  ...params,
                  from: event.target.value
                    ? moment(event.target.value).format("YYYY-MM-DD")
                    : "",
                });
              }}
              type="date"
            />
          </InputGroup>
          <InputGroup className={styles.reportDateSelect}>
            <Form.Control
              onChange={event => {
                setParams({
                  ...params,
                  to: event.target.value
                    ? moment(event.target.value).format("YYYY-MM-DD")
                    : "",
                });
              }}
              type="date"
            />
          </InputGroup>
          <button
            onClick={() => setShowChart(!showChart)}
            className={styles.generateReportBtn}
          >
            Generate report
          </button>
        </Col>
      </Row>
      <Row className="pe-3">
        <Col sm={12} md={showChart ? 6 : 12}>
          <Card className={styles.reportCard}>
            <h3 className={styles.cardTitle}>
              {!!params.projectId
                ? getProjectName(params.projectId)
                : "All Projects"}{" "}
              |{" "}
              {!!params.gatewayId
                ? getGatewayname(params.gatewayId)
                : "All Gateways"}
            </h3>
            <Accordion
              className={styles.projectAccordion}
              defaultActiveKey={["0"]}
              alwaysOpen
            >
              {formattedReports.map((formattedReport, index) => {
                return (
                  <Accordion.Item
                    className={styles.projectAccordionItem}
                    eventKey={`${index}`}
                  >
                    <Accordion.Header className={styles.projectAccordionHeader}>
                      <span>{getProjectName(formattedReport.projectId)}</span>{" "}
                      <span>TOTAL: {formattedReport.totalAmount} USD</span>
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
                          {formattedReport?.transactions?.map(
                            (transaction: any) => {
                              return (
                                <tr>
                                  <td>{transaction.created}</td>
                                  <td>
                                    {getGatewayname(transaction.gatewayId)}
                                  </td>
                                  <td>{transaction.paymentId}</td>
                                  <td>{transaction.amount} USD</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Card>
        </Col>
        {showChart && (
          <Col
            className={`${styles.reportCard} ${styles.donutCard}`}
            md={6}
            sm={12}
          >
            <div className={styles.chartWrapper}>
              <DonutChart
                innerRadius={0.5}
                width={300}
                height={300}
                legend={false}
                colors={["#A259FF", "#F24E1E", "#FFC107", "#6497B1"]}
                className={styles.donutChart}
                data={chartsData}
              />
            </div>
          </Col>
        )}
      </Row>
      <Row>
        <Col xs={12}>
          <Card className={styles.amountCard}>
            <h3 className={styles.cardTitle}>TOTAL: {getTotalAmount()} USD</h3>
          </Card>
        </Col>
        <Col xs={12}>
          <p className={styles.termstext}>Terms&Conditions | Privacy policy</p>
        </Col>
      </Row>
    </Container>
  );
};

export { Reports };
