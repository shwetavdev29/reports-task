import { axiosInstance } from "../../axiosInstance";
import { IGateWayData, IProjectData, IReportData, ReportsApiData } from "../../models";


const getProjectsListApi = async (
  successCallback?: (data: IProjectData[]) => void,
  errorCallback?: (error: any) => void
) => {
  let response: any = await axiosInstance.get("/projects")
  const { data } = response;
  const { code } = data;
  if (code === '200') {
    const { data: projects } = data;
    successCallback && successCallback(projects);
    return projects;
  } else {
    errorCallback && errorCallback([])
    return []
  }
};

const getGatewaysListApi = (
  successCallback: (data: IGateWayData[]) => void,
  errorCallback: (error: any) => void
) => {
  axiosInstance
    .get("/gateways")
    .then((response: any) => {
      const { data } = response;
      const { data: gateways } = data;
      successCallback(gateways);
    })
    .catch((error: any) => {
      errorCallback(error);
    });
};

const getReportApi = async (
  body: ReportsApiData,
  successCallback?: (data: IReportData[]) => void,
  errorCallback?: (error: any) => void
) => {
  let response: any = await axiosInstance
  .post("/report", body)
  const { data } = response;
  const { code } = data;
  if (code === '200') {
    const { data: reportData } = data;
    successCallback && successCallback(reportData);
    return reportData;
  } else {
    errorCallback && errorCallback([])
    return []
  }
};

export { getProjectsListApi, getGatewaysListApi, getReportApi };
