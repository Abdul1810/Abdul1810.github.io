import styled, { DefaultTheme, createGlobalStyle } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: "#3b82f6",
    primaryHover: "",
    primaryActive: "",
    secondary: "",
    secondaryHover: "",
    secondaryActive: "",
    textLight: "#E6F1FF",
    textDim: "#919BA8",
    blobColor: "#282541",
    textDark: "",
    background: "#0b1726",
    raisinBlack: "#2b2745", // Foreground circle
    raisinBlackShade1: "rgba(44, 39, 69, .3)", // Shade 1
    raisinBlackShade2: "rgba(53, 39, 69, .1)", // Shade 2
  },
  shading: {
    soft: 'box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);',
    hard: 'box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.4);'
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    letter-spacing: 0.5px;
    text-decoration: none;
    cursor: auto;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(17, 17, 31);
    height: 100%;
    color: #E6F1FF;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #919BA8; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #E6F1FF; 
  }
`;

export const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
`;

interface MarginTop {
  readonly mt?: string;
}

export const Container = styled.div<MarginTop>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: ${({ mt }) => mt || "0"} auto 0;
  padding-top: 100px;
`;

export const Split = styled.span`

`;

export const H1 = styled.h1`
  letter-spacing: 0.2px;
  font-size: 48px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 20px;
    ${Split} {
    }
  }
`;

interface PaddingPos {
  readonly work?: boolean;
  readonly hover?: boolean;
  readonly loc?: string;
}

export const H2 = styled.h2<PaddingPos>`
  font-size: 36px;
  letter-spacing: 0.2px;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  text-decoration-thickness: 4px;
  text-underline-offset: 2px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.3s ease;

  @media screen and (max-width: 600px) {
    ${({ loc }) =>
      loc === "Contact" ? `font-size: 38px;` : `font-size: 20px;`};
  }
`;

export { theme };
