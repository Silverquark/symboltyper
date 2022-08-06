interface BigTextProps {
  className?: string;
  children: React.ReactNode;
}

export const BigText = ({ children, className }: BigTextProps) => {
  return <h1 className={`text-gray-300 ${className}`}>{children}</h1>;
};
