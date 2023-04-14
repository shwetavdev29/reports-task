import { IProjectData, IReportData, ITransaction } from "../../models";

const useLogicReport = () => {

  const getFilteredData = (reportsList: IReportData[])=> {
    let obj: any = {};
    reportsList.map((report : IReportData) => {
      let filteredData = reportsList.filter(
        (_report: IReportData) => _report.projectId === report.projectId
      );
      obj[report.projectId] = filteredData;
      return filteredData;
    });
    return obj;
  }

  const formatReport = (projectsList: IProjectData[], reportsList: IReportData[]) => {
  let filteredDataObj:any = getFilteredData(reportsList)

    let finalProjectData = Object.keys(filteredDataObj).map((element)=> {
        let totalAmount = 0;
        let projectDetails: IProjectData | undefined = projectsList.find((project: IProjectData)=> project.projectId === element);
        filteredDataObj[element].map((transaction: ITransaction)=> totalAmount += transaction.amount)
        return {...projectDetails, transactions: filteredDataObj[element], totalAmount: totalAmount.toFixed(0)}
    })
    
    return finalProjectData;
  };

  const formatChartData = (projectsList: IProjectData[], reportsList: IReportData[])=> {
    let filteredDataObj:any = getFilteredData(reportsList)
    let finalChartData = Object.keys(filteredDataObj).map((element)=> {
        let totalAmount = 0;
        let projectDetails: IProjectData | undefined = projectsList.find((project)=> project.projectId === element);
        filteredDataObj[element].map((transaction: ITransaction)=> totalAmount += transaction.amount)
        return {label: !!projectDetails && projectDetails.name , value:  Math.round(totalAmount)};
    })
    return finalChartData
  }

  return { formatReport, formatChartData };
};

export { useLogicReport };
