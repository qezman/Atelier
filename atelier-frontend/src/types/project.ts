export interface SanityImage {
  asset?: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt: string;
}

export type ProjectCategory = 'Residential' | 'Commercial' | 'Interior' | 'Landscape';

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category: ProjectCategory;
  location?: string;
  year?: number;
  coverImage: SanityImage;
  gallery?: SanityImage[];
  summary?: string;
  body?: any[];
  featured?: boolean;
  orderRank?: number;
}
