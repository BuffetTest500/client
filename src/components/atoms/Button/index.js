import React from 'react';

const Button = ({
  className,
  onClick,
  text,
  children,
  ...attributes
}) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      name={text}
      {...attributes}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
