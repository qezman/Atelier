import type { SanityImage } from './project';

export interface StudioMember {
  _id: string;
  name: string;
  role?: string;
  photo?: SanityImage;
  bio?: string;
  orderRank?: number;
}
