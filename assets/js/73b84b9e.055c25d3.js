"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[875],{4917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"examples/multi-tab","title":"Multi-Tab Example","description":"This example shows how to work with multiple browser tabs using browser-use-node.","source":"@site/docs/examples/multi-tab.md","sourceDirName":"examples","slug":"/examples/multi-tab","permalink":"/browser-use-node/examples/multi-tab","draft":false,"unlisted":false,"editUrl":"https://github.com/dankovk/browser-use-node/tree/main/docs/docs/examples/multi-tab.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2}}');var s=t(4848),r=t(8453);const o={sidebar_position:2},i="Multi-Tab Example",l={},c=[{value:"Working with Multiple Tabs",id:"working-with-multiple-tabs",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"multi-tab-example",children:"Multi-Tab Example"})}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to work with multiple browser tabs using browser-use-node."}),"\n",(0,s.jsx)(n.h2,{id:"working-with-multiple-tabs",children:"Working with Multiple Tabs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { BrowserUse } from 'browser-use-node';\n\nasync function main() {\n  const browser = new BrowserUse();\n\n  try {\n    // Open first tab and navigate\n    await browser.goto('https://example.com');\n\n    // Open a new tab\n    const tab2 = await browser.newTab();\n    await tab2.goto('https://another-example.com');\n\n    // Switch between tabs\n    await browser.switchToTab(0); // Switch to first tab\n    await browser.interact('Click the about link');\n\n    await browser.switchToTab(1); // Switch to second tab\n    await browser.interact('Find and click the contact button');\n\n    // Extract information from both tabs\n    await browser.switchToTab(0);\n    const tab1Info = await browser.extract('Get the main heading');\n\n    await browser.switchToTab(1);\n    const tab2Info = await browser.extract('Get the contact information');\n\n    console.log('Tab 1:', tab1Info);\n    console.log('Tab 2:', tab2Info);\n\n    // Take screenshots of both tabs\n    await browser.switchToTab(0);\n    await browser.screenshot('tab1.png');\n\n    await browser.switchToTab(1);\n    await browser.screenshot('tab2.png');\n  } finally {\n    await browser.close();\n  }\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Opening multiple tabs"}),"\n",(0,s.jsx)(n.li,{children:"Switching between tabs"}),"\n",(0,s.jsx)(n.li,{children:"Performing actions in different tabs"}),"\n",(0,s.jsx)(n.li,{children:"Extracting information from multiple tabs"}),"\n",(0,s.jsx)(n.li,{children:"Taking screenshots of different tabs"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsx)(n.p,{children:"You can also perform parallel operations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"async function parallelExample() {\n  const browser = new BrowserUse();\n\n  try {\n    // Open multiple tabs\n    const tabs = await Promise.all([\n      browser.goto('https://example1.com'),\n      browser.newTab().then(tab => tab.goto('https://example2.com')),\n      browser.newTab().then(tab => tab.goto('https://example3.com'))\n    ]);\n\n    // Perform parallel operations\n    const results = await Promise.all(tabs.map((tab, index) =>\n      browser.switchToTab(index).then(() =>\n        browser.extract('Get the page title')\n      )\n    ));\n\n    console.log('Results:', results);\n  } finally {\n    await browser.close();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"Always handle tab-related errors:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"try {\n  await browser.switchToTab(999); // Invalid tab index\n} catch (error) {\n  console.error('Failed to switch tabs:', error);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Check out ",(0,s.jsx)(n.a,{href:"/browser-use-node/examples/network-interception",children:"Network Interception"})]}),"\n",(0,s.jsxs)(n.li,{children:["Learn about ",(0,s.jsx)(n.a,{href:"/browser-use-node/examples/screenshot-pdf",children:"Screenshots and PDFs"})]}),"\n",(0,s.jsxs)(n.li,{children:["See the ",(0,s.jsx)(n.a,{href:"./web-voyager.md",children:"Web Voyager Example"})," for advanced navigation"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);