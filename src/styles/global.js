import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body{
    background-color: #121214;
  }
  
  button{
      cursor: pointer;
      border: none;
      background-color: transparent;
  }

  
:root {
    --color-primary: #ff577f;
    --color-primary-50: #ff427f;
    --color-secondary: #eb5757;
    --grey-: #212529;
    --grey-2: #343b41;
    --grey-0:  #f8f9fa;
    --white: #ffffff;
  }
  
  h1,
  h2,
  p,
  span,
  li,
  input {
    font-family: "Inter", sans-serif;
  }
  
  .title {
    font-size: 1.625rem;
  }
  
  .title.one {
    font-size: 1.375rem;
  }
  
  .title.two {
    font-size: 1.125rem;
  }
  
  
  @media (max-width: 400px) {
      
  
  }
  
  ul,li{
      list-style: none;
  }
  
`;
