import React, { FC, CSSProperties } from 'react';
import './styles.scss';

interface IProps {
  /**
   * The text of the button
   */
  text?: string;
  backgroud?: string;
  disabled?: boolean;
  onClick?: () => any;
}

const Button: FC<IProps> = ({ text, backgroud, disabled = false }) => {
  const styles: CSSProperties = backgroud ? { background: backgroud } : {};

  return (
    <button style={styles} disabled={disabled} className="sha-btn">
      {text}
    </button>
  );
};

export default Button;
