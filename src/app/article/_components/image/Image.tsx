import { FC } from 'react';
import * as styles from '@src/app/article/_components/image/Image.css';

export type ImageProps = {
  src: string | undefined;
  alt: string | undefined;
};

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

export default Image;
