export interface CareerResponse{
  status: number;
  careers: Career[];
}

export interface Career {
  id: number;
  category_id: number;
  category_name: string;
  location: string;
  title: string;
  description: string;
}
