export interface NavBackProps {
  path?: string;
  label?: string;
  color?: boolean;
}

export interface CardProps {
  title: string;
  children: React.ReactNode;
  href: string;
}
