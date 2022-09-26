import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
     *{
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         outline: 0;
         color: #333;
     }
     body{
      background-color: rgb(250, 250, 250);
         -webkit-font-smoothing: antialiased;
     }
     body, input, button {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
     }
     h1,h2,h3,h4,h5,h6, strong{
        font-weight: 500;
     }
     h1{
        font-size: 40px;
        font-weight: 700;
     }
     h2 {
        font-weight: 600;
        font-size: 24px;
     }
     button{
         cursor: pointer;
         border-radius: 5px;
     }
`;

export const sizeScreen = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};
