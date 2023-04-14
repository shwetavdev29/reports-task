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

interface IChartsData {
  label: string;
  value: number;
}

interface ITransaction{
  amount: number;
created: string;
gatewayId: string;
modified: string;
paymentId: string;
projectId: string;
userIds: string[];
}

interface IFormatterReportData {
  description: string;
  gatewayIds: string[];
  image: string;
  industry: string;
  name: string;
  projectId: string;
  rule: string;
  structure: string;
  totalAmount: string;
  transactions: ITransaction[];
  userIds: string[];
  website: string;
}
export type {
  ReportsApiData,
  IProjectData,
  IGateWayData,
  IReportData,
  IChartsData,
  IFormatterReportData,
  ITransaction,
};
