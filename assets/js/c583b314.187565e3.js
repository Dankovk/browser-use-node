"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[922],{1259:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"examples/network-interception","title":"Network Interception","description":"This example demonstrates how to intercept and modify network requests using browser-use-node.","source":"@site/docs/examples/network-interception.md","sourceDirName":"examples","slug":"/examples/network-interception","permalink":"/browser-use-node/examples/network-interception","draft":false,"unlisted":false,"editUrl":"https://github.com/dankovk/browser-use-node/tree/main/docs/docs/examples/network-interception.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3}}');var r=s(4848),o=s(8453);const i={sidebar_position:3},a="Network Interception",c={},l=[{value:"Basic Request Interception",id:"basic-request-interception",level:2},{value:"Modifying Requests",id:"modifying-requests",level:2},{value:"Response Modification",id:"response-modification",level:2},{value:"Mock API Responses",id:"mock-api-responses",level:2},{value:"Error Simulation",id:"error-simulation",level:2},{value:"Next Steps",id:"next-steps",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"network-interception",children:"Network Interception"})}),"\n",(0,r.jsx)(n.p,{children:"This example demonstrates how to intercept and modify network requests using browser-use-node."}),"\n",(0,r.jsx)(n.h2,{id:"basic-request-interception",children:"Basic Request Interception"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { BrowserUse } from 'browser-use-node';\n\nasync function main() {\n  const browser = new BrowserUse();\n\n  try {\n    // Set up request interception\n    await browser.interceptRequests(async (request) => {\n      // Log all requests\n      console.log(`${request.method()} ${request.url()}`);\n\n      // Continue with the request\n      await request.continue();\n    });\n\n    // Navigate to a page\n    await browser.goto('https://example.com');\n  } finally {\n    await browser.close();\n  }\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"modifying-requests",children:"Modifying Requests"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"async function modifyRequests() {\n  const browser = new BrowserUse();\n\n  try {\n    // Modify specific requests\n    await browser.interceptRequests(async (request) => {\n      if (request.resourceType() === 'image') {\n        // Block image loading\n        await request.abort();\n      } else if (request.url().includes('api')) {\n        // Modify API requests\n        const headers = request.headers();\n        headers['custom-header'] = 'modified';\n        await request.continue({ headers });\n      } else {\n        // Continue other requests normally\n        await request.continue();\n      }\n    });\n\n    await browser.goto('https://example.com');\n  } finally {\n    await browser.close();\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"response-modification",children:"Response Modification"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"async function modifyResponses() {\n  const browser = new BrowserUse();\n\n  try {\n    // Modify responses\n    await browser.interceptResponses(async (response) => {\n      if (response.url().includes('api/data')) {\n        const originalJson = await response.json();\n        const modifiedJson = {\n          ...originalJson,\n          modified: true\n        };\n        return modifiedJson;\n      }\n      return response;\n    });\n\n    await browser.goto('https://example.com');\n  } finally {\n    await browser.close();\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mock-api-responses",children:"Mock API Responses"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"async function mockApi() {\n  const browser = new BrowserUse();\n\n  try {\n    // Mock API responses\n    await browser.mockRoute('**/api/data', async (route) => {\n      await route.fulfill({\n        status: 200,\n        contentType: 'application/json',\n        body: JSON.stringify({\n          message: 'Mocked response',\n          data: [1, 2, 3]\n        })\n      });\n    });\n\n    await browser.goto('https://example.com');\n  } finally {\n    await browser.close();\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"error-simulation",children:"Error Simulation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"async function simulateErrors() {\n  const browser = new BrowserUse();\n\n  try {\n    // Simulate network errors\n    await browser.interceptRequests(async (request) => {\n      if (request.url().includes('api/critical')) {\n        await request.abort('failed'); // Simulate network failure\n      } else if (request.url().includes('api/timeout')) {\n        await new Promise(resolve => setTimeout(resolve, 30000)); // Simulate timeout\n        await request.continue();\n      } else {\n        await request.continue();\n      }\n    });\n\n    await browser.goto('https://example.com');\n  } finally {\n    await browser.close();\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Learn about ",(0,r.jsx)(n.a,{href:"/browser-use-node/examples/screenshot-pdf",children:"Screenshots and PDFs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Try the ",(0,r.jsx)(n.a,{href:"./multiple-agents.md",children:"Multiple Agents Example"})]}),"\n",(0,r.jsxs)(n.li,{children:["Explore ",(0,r.jsx)(n.a,{href:"./performance.md",children:"Performance Optimization"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);