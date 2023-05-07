import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      title: string;
      backgroundColor: string;
      backgroundColorSidebar: string;
      backgroundColorWeak: string;
      textColor: string;
      border: string;
    };
  }
}
