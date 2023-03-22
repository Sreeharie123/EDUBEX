export interface SecondResponseModel {
  status: number;
  banners: Banner1[];
}

export interface Banner1 {
  id: string;
  title: string;
  description: string;
  image: string;
  image_alt?: any;
  meta_title: string;
  meta_description: string;
}
