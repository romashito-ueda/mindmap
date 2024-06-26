import React from 'react';

import { ButtonProps } from './ButtonType';
import CustomButton from './ButtonStyle';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <CustomButton
      type="button"
      primary={primary}
			size={size}
      style={{ backgroundColor }}
      {...props}
			onClick={props.onClick}
    >
      {label}
    </CustomButton>
  );
};
