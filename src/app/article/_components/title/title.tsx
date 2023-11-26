import { FC, ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Title;
