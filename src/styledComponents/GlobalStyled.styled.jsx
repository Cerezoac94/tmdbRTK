import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

:root{
   /* Dark Mode */
    --backgroundColorDark: #1e1e1e;
    --colorLight: #f0f0f0;
    --colorGray: #BABABA;
    --colorFooter: #2E2E2E;
    --colorPurple: #7b27b6;
    
    /* Light Mode */
    --backgroundColorLight: #F6F6F6;
    --colorDarkModeLight: #1e1e1e;
    --colorLightGreen: #6b9080;
    --colorLightFooter: #455c52;    
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body, #root{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--backgroundColorDark);
    color: var(--colorLight);
    font-family: 'DM Sans', sans-serif;
}
body{
    position: relative;
}
`;
export default GlobalStyled;