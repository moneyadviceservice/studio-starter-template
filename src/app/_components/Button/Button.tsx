// src/components/Button.tsx

import React from 'react';
import { Button as F36Button } from '@contentful/f36-components';

type Props = {
  text: string;
  variant: 'primary' | 'secondary';
};

export const Button: React.FC<Props> = ({ text, variant, ...experienceProps }) => {
  return (
    <F36Button variant={variant} {...experienceProps}>
      {text}
    </F36Button>
  );
};