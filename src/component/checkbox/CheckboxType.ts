export interface CheckboxProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  label: string;
  disabled?: boolean;
  onChange?: () => void;
}

export interface CutomButtonType {
	/**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}