interface TitleProps {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Title = ({ size, children }: TitleProps) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};
