import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10'
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-70 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 