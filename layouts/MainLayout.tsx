import { Header } from "@/components/Header";
import { ReactElement } from "react";

interface IMainLayout {
  children: ReactElement;
}
export const MainLayot = ({ children }: IMainLayout): JSX.Element => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
