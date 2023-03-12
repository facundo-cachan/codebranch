import { StyleProp } from '@components';
import Default from './default';

export { Default };

export type Image = { id: number; url: string; text?: string };
export interface SwiperProps {
  images: Image[];
  textStyle?: StyleProp;
  height: number;
}
