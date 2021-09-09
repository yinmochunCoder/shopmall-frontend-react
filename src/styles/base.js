import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
      * {
      padding: 0;
      margin: 0;
    }
    
    html {
      font-size: 100px;
      height: 100%;
    }
    
    body {
      font-size: 14px;
      color: #666;
      margin: 0;
      padding: 0;
      font-family: "Microsoft YaHei";
      background: #fafafa;
      height: 100vh;
      width: 100vw;
    }
    
    li { list-style: none }
    
    p {
      margin: 0;
      padding: 0;
    }
    
    
    a {
      color: #7f4baf;
      text-decoration: none
    }
    
    input {
      padding: 0;
      outline: none
    }
    #root, .root {
        height: 100%;
        min-width: 1064px;
    }
    
    .fl { float: left }
    
    .fr { float: right }
`
