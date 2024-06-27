import styled, { css } from 'styled-components';
import { CheckboxProps } from './CheckboxType';

const sizeStyles = {
  small: css`
    width: 12px;
    height: 12px;
    font-size: 12px;
  `,
  medium: css`
    width: 16px;
    height: 16px;
    font-size: 14px;
  `,
  large: css`
    width: 20px;
    height: 20px;
    font-size: 16px;
  `,
};

export const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
	${({ size }) => size && sizeStyles[size]}
	${({ primary }) =>
		primary &&
		css`
			&:checked {
				background-color: #1ea7fd;
				border-color: #1ea7fd;
			}
		`}
	cursor: pointer;
	margin: none;
	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export const CheckboxLabel = styled.span<CheckboxProps>`
  margin-left: 8px;
	display: flex;
	align-items: center;
  ${({ size }) => size && sizeStyles[size]}
  ${({ disabled }) =>
    disabled &&
    css`
      color: #a9a9a9; // グレー色に変更
    `}
	width: unset;
`;

export const CheckboxContainer = styled.label<CheckboxProps>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;