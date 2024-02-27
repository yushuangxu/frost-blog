import React from 'react'
import type { MarkdownProps } from '../types/components';
import MarkdownIt from "markdown-it";
// import itCopy from 'markdown-it-copy';
import hljs from 'highlight.js';
import 'katex/dist/katex.min.css'; // 导入KaTeX的样式
import 'highlight.js/styles/default.css'; // 导入highlight.js的样式
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }

        return ''; // 使用默认的代码块样式
    },
})
const MarkdownWithLatex: React.FC<MarkdownProps> = ({ markdownContent }) => {
    console.log(markdownContent)
    return <div dangerouslySetInnerHTML={{
        __html: md?.render(markdownContent),
    }} />
}

export default MarkdownWithLatex