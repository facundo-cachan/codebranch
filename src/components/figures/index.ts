import type { ThemeProps } from '../../styles/theme';
import Circle from './circle';
import Badge from './badge';
export { Badge, Circle };

export interface FigureProps {
  children?: JSX.Element | JSX.Element[];
  size?: ThemeProps['size'];
  borderColor?: ThemeProps['color'];
  color?: ThemeProps['color'];
}
