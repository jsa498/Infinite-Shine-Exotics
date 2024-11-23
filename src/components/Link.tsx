// src/components/Link.tsx

import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children, className = '', ...props }: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={`text-white hover:text-purple-400 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
}