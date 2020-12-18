import React from 'react';

const Modal = ({
  className,
  children,
  ...attributes
}) => {
  return (
    <div
      className={className}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Modal;
