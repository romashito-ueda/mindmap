import React from 'react';

import { CheckboxProps } from './CheckboxType';
import { CheckboxContainer, CheckboxLabel, CustomCheckbox } from './CheckboxStyle';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
	disabled = false,
  ...props
}: CheckboxProps) => {
  return (
		<CheckboxContainer disabled={disabled} label={label}>
      <CustomCheckbox primary={primary} size={size} disabled={disabled} label={label} {...props} />
      <CheckboxLabel size={size} label={label} disabled={disabled}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};
