interface ReportsApiData {
    from?: string;
    to?: string;
    projectId?: string;
    gatewayId?: string;
  }
  
  interface IProjectData {
    description: string;
    gatewayIds: string[];
    image: string;
    industry: string;
    name: string;
    projectId: string;
    rule: string;
    structure: string;
    userIds: string[];
    website: string;
  }
  
  interface IGateWayData {
    apiKey: string;
    description: string;
    gatewayId: string;
    name: string;
    secondaryApiKey: string;
    type: string;
  }
  
  interface IReportData {
    amount: number;
    created: string;
    gatewatId: string;
    modified: string;
    paymentId: string;
    projectId: string;
  }

  export type {ReportsApiData, IProjectData, IGateWayData, IReportData}