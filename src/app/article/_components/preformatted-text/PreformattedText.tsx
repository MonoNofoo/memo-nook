import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import * as styles from '@src/app/article/_components/preformatted-text/PreformattedText.css';

export type PreformattedTextProps = {
  children: ReactNode;
  className?: string | undefined;
};

const PreformattedText: FC<PreformattedTextProps> = ({
  children,
  className = undefined,
}) => {
  return (
    <pre data-testid="PreformattedText" className={clsx(styles.pre, className)}>
      {children}
    </pre>
  );
};

export default PreformattedText;
