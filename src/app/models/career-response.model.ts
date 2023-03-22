export interface CareerResponse{
  status: number;
  careers: Career[];
  data: CareerData;
}

export interface Career {
  id: number;
  category_id: number;
  category_name: string;
  location: string;
  title: string;
  description: string;
}

export interface CareerData {
  id: number;
  location: string;
  title: string;
  description: string;
  seniority_level?: any;
  industry: string;
  employment_type: string;
  job_functions?: any;
  meta_title: string;
  meta_description: string;
}
