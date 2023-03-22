export interface PerkResponseModel{
  status: number;
  cms: Cms;
}

  export interface Cms {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  video: string;
  image_alt?: any;
}
