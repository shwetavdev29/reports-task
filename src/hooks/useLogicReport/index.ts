import { IProjectData, IReportData } from "../../models";

const useLogicReport = () => {

  const formatReport = (projectsList: IProjectData[], reportsList: IReportData[]) => {
    let obj: any = {};
    reportsList.map(ele => {
      let filteredData = reportsList.filter(
        ele2 => ele2.projectId === ele.projectId
      );
      obj[ele.projectId] = filteredData;
      return filteredData;
    });

    let finalProjectData = Object.keys(obj).map((element)=> {
        let totalAmount = 0;
        let projectDetails = projectsList.find((project)=> project.projectId === element);
        obj[element].map((transaction: any)=> totalAmount += transaction.amount)
        return {...projectDetails, transactions: obj[element], totalAmount: totalAmount.toFixed(0)}
    })
    
    return finalProjectData;
  };

  const formatChartData = (projectsList: IProjectData[], reportsList: IReportData[])=> {
    let obj: any = {};
    reportsList.map(ele => {
      let filteredData = reportsList.filter(
        ele2 => ele2.projectId === ele.projectId
      );
      obj[ele.projectId] = filteredData;
      return filteredData;
    });
    let finalChartData = Object.keys(obj).map((element)=> {
        let totalAmount = 0;
        let projectDetails: IProjectData | undefined = projectsList.find((project)=> project.projectId === element);
        obj[element].map((transaction: any)=> totalAmount += transaction.amount)
        return {label: !!projectDetails && projectDetails.name , value:  Math.round(totalAmount)};
    })
    return finalChartData
  }

  return { formatReport, formatChartData };
};

export { useLogicReport };
