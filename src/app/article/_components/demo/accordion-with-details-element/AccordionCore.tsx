import { FC, ReactNode } from 'react';

export type AccordionCoreProps = {
  summary: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  handleToggle: (isOpen: boolean) => void;
};

const AccordionCore: FC<AccordionCoreProps> = ({
  summary,
  children,
  isOpen,
  handleToggle,
}) => {
  return (
    <details
      open={isOpen}
      onToggle={(e) => {
        handleToggle((e.target as HTMLDetailsElement).open);
      }}
    >
      <summary>{summary}</summary>
      <div>{children}</div>
    </details>
  );
};

export default AccordionCore;
