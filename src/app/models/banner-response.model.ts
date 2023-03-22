export interface BannerResponse {
  status: number;
  banners: Banner[];
}

export interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  image_alt?: any;
  meta_title: string;
  meta_description: string;
}
