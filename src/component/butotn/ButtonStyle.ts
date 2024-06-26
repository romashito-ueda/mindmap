import styled, { css } from 'styled-components';
import { CutomButtonType } from './ButtonType';

const baseButtonStyles = css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

const primaryButtonStyles = css`
  color: white;
  background-color: #1ea7fd;
`;

const secondaryButtonStyles = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};

export const CustomButton = styled.button<CutomButtonType>`
  ${baseButtonStyles}

  ${({ primary }) => primary ? primaryButtonStyles : secondaryButtonStyles}
  ${({ size }) => size && sizeStyles[size]}
`;

export default CustomButton;
