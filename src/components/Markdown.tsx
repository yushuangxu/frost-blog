import React from 'react'
import type { MarkdownProps } from '../types/components';
import MarkdownIt from "markdown-it";
// import itCopy from 'markdown-it-copy';
import styles from './pc/markdown.module.scss'
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
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) { }
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';

    },
})
const MarkdownWithLatex: React.FC<MarkdownProps> = ({ markdownContent }) => {
    return <div className={styles.content}>
        <div
            className={'markdown-body'}
            dangerouslySetInnerHTML={{
                __html: md?.render(markdownContent),
            }} />
    </div>
}

export default MarkdownWithLatex