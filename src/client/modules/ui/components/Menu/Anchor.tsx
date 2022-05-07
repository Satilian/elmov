import React, { HTMLProps, SyntheticEvent, forwardRef } from 'react';

type IAnchorProps = HTMLProps<HTMLAnchorElement> & {
  onMenuOpen?: (e: SyntheticEvent<HTMLAnchorElement>) => void;
};

export const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>(
  ({ children, onClick, onMenuOpen, ...props }, ref) => {
    return (
      <a {...props} onClick={onMenuOpen || onClick} ref={ref}>
        {children}
      </a>
    );
  },
);
