import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body {
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif !important;
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
`;

export const DefaultBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
