import { axiosInstance } from "../../axiosInstance";
import { IGateWayData, IProjectData, IReportData, ReportsApiData } from "../../models";


const getProjectsListApi = (
  successCallback: (data: IProjectData[]) => void,
  errorCallback: (error: any) => void
) => {
  axiosInstance
    .get("/projects")
    .then((response: any) => {
      const {data} = response;
      const {data: projects} = data;
      successCallback(projects);
    })
    .catch((error: any) => {
      errorCallback(error);
    });
};

const getGatewaysListApi = (
  successCallback: (data: IGateWayData[]) => void,
  errorCallback: (error: any) => void
) => {
  axiosInstance
    .get("/gateways")
    .then((response: any) => {
      const {data} = response;
      const {data: gateways} = data;
      successCallback(gateways);
    })
    .catch((error: any) => {
      errorCallback(error);
    });
};

const getReportApi = (
  data: ReportsApiData,
  successCallback: (data: IReportData[]) => void,
  errorCallback: (error: any) => void
) => {
  axiosInstance
    .post("/report", data)
    .then((response: any) => {
      const {data} = response;
      const {data: reportData} = data;
      successCallback(reportData);
    })
    .catch((error: any) => {
      errorCallback(error);
    });
};

export { getProjectsListApi, getGatewaysListApi, getReportApi };
