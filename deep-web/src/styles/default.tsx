import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        line-height: 1;
        font-family: Pretendard;
        -webkit-font-smoothing: antialiased;
        color: rgb(33, 37, 41);
        font-size: 14px;
        background: #fafafa;
        overflow-x: hidden;
    }
    ol, ul {
        padding-left: 1.5rem;
    }

    div::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    div {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        word-break: break-word;
        border: none;
    }
    code, pre, code[class*="language-"], pre[class*="language-"] {
        font-family: inherit;
    }

    textarea {
        font-family: inherit;
        resize: none;
    }
`