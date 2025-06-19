import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-2.5">{children}</div>;
};
