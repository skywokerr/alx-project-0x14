import React from 'react';

interface LayoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'nav' | 'action' | 'cta';
  className?: string;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({
  children,
  onClick,
  variant = 'nav',
  className = ''
}) => {
  const baseStyles = 'transition-colors duration-200 font-medium';
  
  const variantStyles = {
    nav: 'text-gray-300 hover:text-white',
    action: 'bg-gray-700 text-white hover:bg-gray-600 px-4 py-2 rounded-lg',
    cta: 'bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold'
  };

  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${className}
  `.trim();

  return (
    <button
      onClick={onClick}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default LayoutButton;