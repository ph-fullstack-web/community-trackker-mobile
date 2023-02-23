export type ChartLayout = 'vertical' | 'horizontal';

export type dataProps = {
  data: Array<number>;
  colors: Array<string>;
};

export type layoutProps = {
  height: number;
  strokeWidth: number;
  radius: number;
  width: number;
};
export type RequestProps = {
  approved: number;
  pending: number;
  draft: number;
  rejected: number;
};

export type CecCardChartProps = {
  data: dataProps;
  layoutSetting: layoutProps;
  layout: ChartLayout;
  percentage: number;
};

export type CecCardRequestDetails = {
  requests: RequestProps;
};

export type CecCardProps = {
  percentage: number;
  fillColor: string;
  layout: ChartLayout;
  cecRequests: RequestProps;
};
