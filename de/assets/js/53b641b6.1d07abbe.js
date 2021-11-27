"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6046],{9613:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=d(t),c=l,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,i(i({ref:n},o),{},{components:t})):a.createElement(k,i({ref:n},o))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2437:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>d,toc:()=>o,default:()=>u});var a=t(2245),l=t(5903),r=(t(9496),t(9613)),i=["components"],p={id:"installation",title:"Installation"},s=void 0,d={unversionedId:"installation",id:"version-6.x/installation",isDocsHomePage:!1,title:"Installation",description:"Unabh\xe4ngiges Standalone-Skript verwenden",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/de/installation",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"6.x",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-6.x/docs",previous:{title:"Motivation",permalink:"/de/motivation"},next:{title:"pnpm CLI",permalink:"/de/pnpm-cli"}},o=[{value:"Unabh\xe4ngiges Standalone-Skript verwenden",id:"unabh\xe4ngiges-standalone-skript-verwenden",children:[{value:"Node.js ist nicht vorinstalliert",id:"nodejs-ist-nicht-vorinstalliert",children:[],level:3},{value:"Node.js ist vorinstalliert",id:"nodejs-ist-vorinstalliert",children:[],level:3}],level:2},{value:"Corepack verwenden",id:"corepack-verwenden",children:[],level:2},{value:"Npm verwenden",id:"npm-verwenden",children:[],level:2},{value:"Mittels npx-Aufl\xf6sung",id:"mittels-npx-aufl\xf6sung",children:[],level:2},{value:"Upgrade durchf\xfchren",id:"upgrade-durchf\xfchren",children:[],level:2},{value:"Kompatibilit\xe4t",id:"kompatibilit\xe4t",children:[],level:2},{value:"Fehlerbehebung",id:"fehlerbehebung",children:[],level:2},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",children:[],level:2}],m={toc:o};function u(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"unabh\xe4ngiges-standalone-skript-verwenden"},"Unabh\xe4ngiges Standalone-Skript verwenden"),(0,r.kt)("h3",{id:"nodejs-ist-nicht-vorinstalliert"},"Node.js ist nicht vorinstalliert"),(0,r.kt)("p",null,"Auf POSIX-Systemen k\xf6nnen Sie pnpm mit dem folgenden Skript installieren, auch wenn Node.js nicht installiert ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Wenn curl nicht installiert ist, kann wget verwendet werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"On Windows (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,"Sie k\xf6nnen den Befehl ",(0,r.kt)("a",{parentName:"p",href:"/de/cli/env"},"pnpm env")," verwenden, um dann Node.js zu installieren."),(0,r.kt)("h3",{id:"nodejs-ist-vorinstalliert"},"Node.js ist vorinstalliert"),(0,r.kt)("p",null,"Unter Linux oder macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"On Windows (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js\n")),(0,r.kt)("p",null,"Das Standalone-Skript ist signiert. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"So \xfcberpr\xfcfen Sie es"),"."),(0,r.kt)("h2",{id:"corepack-verwenden"},"Corepack verwenden"),(0,r.kt)("p",null,"Seit v16.13 liefert Node.js ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," f\xfcr die Verwaltung von Paketmanagern aus. Dies ist eine experimentelle Funktion, daher m\xfcssen Sie sie aktivieren, indem Sie Folgendes ausf\xfchren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"Dadurch wird pnpm automatisch auf Ihrem System installiert. Allerdings wird es wahrscheinlich nicht die neueste Version von pnpm sein. Um ein Upgrade durchzuf\xfchren, \xfcberpr\xfcfen Sie, was die neueste pnpm-Version ist, und f\xfchren Sie Folgendes aus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@6.22.2 --activate\n")),(0,r.kt)("h2",{id:"npm-verwenden"},"Npm verwenden"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"mittels-npx-aufl\xf6sung"},"Mittels npx-Aufl\xf6sung"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"upgrade-durchf\xfchren"},"Upgrade durchf\xfchren"),(0,r.kt)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/de/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"kompatibilit\xe4t"},"Kompatibilit\xe4t"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"fehlerbehebung"},"Fehlerbehebung"),(0,r.kt)("p",null,"Wenn pnpm defekt ist und Sie es nicht durch Neuinstallation beheben k\xf6nnen, m\xfcssen Sie es m\xf6glicherweise manuell aus dem PATH entfernen."),(0,r.kt)("p",null,"Nehmen wir an, Sie haben den folgenden Fehler, wenn Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-"),"ausf\xfchren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"Versuchen Sie zun\xe4chst, das Verzeichnis von pnpm zu finden, indem Sie Folgendes ausf\xfchren: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Wenn Sie Windows verwenden, f\xfchren Sie diesen Befehl in Git Bash aus. Sie erhalten das Verzeichnis des Befehls pnpm, zum Beispiel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Nachdem Sie nun wissen, wo sich die pnpm-CLI befindet, \xf6ffnen Sie dieses Verzeichnis und entfernen Sie alle pnpm-bezogenen Dateien (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"usw.). Wenn Sie fertig sind, installieren Sie pnpm erneut und es sollte wie erwartet funktionieren."),(0,r.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,r.kt)("p",null,"Wenn Sie die pnpm-CLI und alle Dateien, die auf Ihre Festplatte geschrieben wurden, von Ihrem System entfernen m\xfcssen, finden Sie weitere Informationen unter ",(0,r.kt)("a",{parentName:"p",href:"/de/uninstall"},"Deinstallieren von pnpm"),"."))}u.isMDXComponent=!0}}]);