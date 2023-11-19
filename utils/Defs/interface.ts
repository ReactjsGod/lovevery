import { MockData } from "src/app/useData";

export interface ThemeContext{
    theme: string;
    toggleTheme: () => void;
  }

  export interface CharlesProps {
    isOpen: boolean;
    onCloseModal: () => void;
    text?: string;
  }

  export interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    btnType?: "button" | "reset" | "submit";
  }

  export interface ItemsContainerProps {
    data: MockData | undefined;
  }

  export interface PackageCardProps {
    imgurl: string;
    header: string;
    description: string;
    url: string;
  }
  

  export interface PackagesProps {
    packages: Array<PackageCardProps>;
  }