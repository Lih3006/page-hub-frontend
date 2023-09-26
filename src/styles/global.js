import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`


:root {
  --color-primary: #FF577F;
  --color-primary-focus:#FF427F;
  --color-primary-negative: #59323F;
  --color-gray-4:#121214;
  --color-gray-3: #212529;
  --color-gray-2: #343B41;
  --color-gray-1: #868E96;
  --color-gray-0: #F8F9FA;
  


  --color-feedback-sucess:#3FE864;
  --color-feedback-negativ:#E83F5B;

  --background-color-gray: #121214;

  --font-primary:'Inter', sans-serif;

   --font-title:  1rem; /* 16px */
   --font-headline: 0.75rem; /* 12px */

  --font-weight-bold: 700;
  --font-weight-SemiBold: 600;
  --font-weight-regular: 400;
 

  --line-height-1: 2.125rem /* 34px */;
  --line-height-2: 1.5rem /* 24px */;
  --line-height-3: 1rem /*  16px */;

  --border-radius-1: 4px;
  --border-radius-2: 8px;
}

body {  
  font-family: var(--font-primary);
  font-size: 16px;
  margin: 0 auto ;
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  padding: 0;
 background-color: var(--color-gray-4); 
 
  
}


  h1,h2,h3,h4,legend {
    text-align: center;
    color:var( --color-gray-0) ;   
    font-size: var(--font-title);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-2);
  }

    small {
    text-align: center;
    color:var( --color-gray-1) ;   
    font-size: var(--font-headline);
    font-weight: var( --font-weight-SemiBold);
    line-height: var(--line-height-3);
  }
 
`;
