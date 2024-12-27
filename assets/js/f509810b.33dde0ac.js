"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3926],{1521:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"examples/amazon-search","title":"Amazon Search Example","description":"This example shows how to automate an Amazon product search using browser-use-node.","source":"@site/docs/examples/amazon-search.md","sourceDirName":"examples","slug":"/examples/amazon-search","permalink":"/browser-use-node/examples/amazon-search","draft":false,"unlisted":false,"editUrl":"https://github.com/dankovk/browser-use-node/tree/main/docs/docs/examples/amazon-search.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2}}');var t=r(4848),a=r(8453);const o={sidebar_position:2},i="Amazon Search Example",c={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Important Notes",id:"important-notes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"amazon-search-example",children:"Amazon Search Example"})}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to automate an Amazon product search using browser-use-node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { BrowserUse } from 'browser-use-node';\n\nasync function main() {\n  const browser = new BrowserUse();\n\n  try {\n    // Navigate to Amazon\n    await browser.goto('https://www.amazon.com');\n\n    // Search for a product\n    await browser.interact('Search for \"wireless headphones\"');\n\n    // Filter results\n    await browser.interact('Filter by 4 stars and up');\n\n    // Get the first product's details\n    const details = await browser.interact('Tell me the name and price of the first product');\n    console.log(details);\n\n  } finally {\n    await browser.close();\n  }\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complex site navigation"}),"\n",(0,t.jsx)(n.li,{children:"Form interaction"}),"\n",(0,t.jsx)(n.li,{children:"Filter application"}),"\n",(0,t.jsx)(n.li,{children:"Data extraction"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requires proper error handling"}),"\n",(0,t.jsx)(n.li,{children:"May need to handle captchas"}),"\n",(0,t.jsx)(n.li,{children:"Consider rate limiting"}),"\n",(0,t.jsx)(n.li,{children:"Respect website's terms of service"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);