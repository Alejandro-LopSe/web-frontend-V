var c="61d83e141278a15b52ad6a55a43a48b3185fc9bb";var m="/_frsh",a="__frsh_c",b=typeof document<"u";function i(s){if(!s.startsWith("/")||s.startsWith("//"))return s;try{let t=new URL(s,"https://freshassetcache.local");return t.protocol!=="https:"||t.host!=="freshassetcache.local"||t.searchParams.has(a)?s:(t.searchParams.set(a,c),t.pathname+t.search+t.hash)}catch(t){return console.warn(`Failed to create asset() URL, falling back to regular path ('${s}'):`,t),s}}function g(s){if(s.includes("("))return s;let t=s.split(","),o=[];for(let n of t){let r=n.trimStart(),f=n.length-r.length;if(r==="")return s;let e=r.indexOf(" ");e===-1&&(e=r.length);let l=n.substring(0,f),u=r.substring(0,e),h=r.substring(e);o.push(l+i(u)+h)}return o.join(",")}function _(s){if(s.type==="img"||s.type==="source"){let{props:t}=s;if(t["data-fresh-disable-lock"])return;typeof t.src=="string"&&(t.src=i(t.src)),typeof t.srcset=="string"&&(t.srcset=g(t.srcset))}}export{m as a,b,_ as c};