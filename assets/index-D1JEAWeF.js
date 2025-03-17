(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Y;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(Y||(Y={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(H||(H={}));var k;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(k||(k={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=["user","model","function","system"];var P;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(P||(P={}));var q;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(q||(q={}));var J;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(J||(J={}));var W;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(W||(W={}));var L;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(L||(L={}));var z;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(z||(z={}));var X;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(X||(X={}));var Q;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(Q||(Q={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class M extends m{constructor(t,n){super(t),this.response=n}}class ae extends m{constructor(t,n,o,s){super(t),this.status=n,this.statusText=o,this.errorDetails=s}}class w extends m{}class ce extends m{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="https://generativelanguage.googleapis.com",ve="v1beta",ye="0.24.0",Ce="genai-js";var S;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(S||(S={}));class me{constructor(t,n,o,s,i){this.model=t,this.task=n,this.apiKey=o,this.stream=s,this.requestOptions=i}toString(){var t,n;const o=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||ve;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||_e}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Oe(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${Ce}/${ye}`),t.join(" ")}async function Ie(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Oe(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new w(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,i]of o.entries()){if(s==="x-goog-api-key")throw new w(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new w(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function Te(e,t,n,o,s,i){const r=new me(e,t,n,o,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},be(i)),{method:"POST",headers:await Ie(r),body:s})}}async function U(e,t,n,o,s,i={},r=fetch){const{url:c,fetchOptions:f}=await Te(e,t,n,o,s,i);return Ne(c,f,r)}async function Ne(e,t,n=fetch){let o;try{o=await n(e,t)}catch(s){Re(s,e)}return o.ok||await Ae(o,e),o}function Re(e,t){let n=e;throw n.name==="AbortError"?(n=new ce(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof ae||e instanceof w||(n=new m(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Ae(e,t){let n="",o;try{const s=await e.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new ae(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,o)}function be(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),V(e.candidates[0]))throw new M(`${b(e)}`,e);return we(e)}else if(e.promptFeedback)throw new M(`Text not available. ${b(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),V(e.candidates[0]))throw new M(`${b(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Z(e)[0]}else if(e.promptFeedback)throw new M(`Function call not available. ${b(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),V(e.candidates[0]))throw new M(`${b(e)}`,e);return Z(e)}else if(e.promptFeedback)throw new M(`Function call not available. ${b(e)}`,e)},e}function we(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Z(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const Se=[L.RECITATION,L.SAFETY,L.LANGUAGE];function V(e){return!!e.finishReason&&Se.includes(e.finishReason)}function b(e){var t,n,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];V(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function $(e){return this instanceof $?(this.v=e,this):new $(e)}function De(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),s,i=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(h){o[h]&&(s[h]=function(E){return new Promise(function(C,N){i.push([h,E,C,N])>1||c(h,E)})})}function c(h,E){try{f(o[h](E))}catch(C){A(i[0][3],C)}}function f(h){h.value instanceof $?Promise.resolve(h.value.v).then(O,R):A(i[0][2],h)}function O(h){c("next",h)}function R(h){c("throw",h)}function A(h,E){h(E),i.shift(),i.length&&c(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Me(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=$e(t),[o,s]=n.tee();return{stream:Le(o),response:xe(s)}}async function xe(e){const t=[],n=e.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return F(Ge(t));t.push(s)}}function Le(e){return De(this,arguments,function*(){const n=e.getReader();for(;;){const{value:o,done:s}=yield $(n.read());if(s)break;yield yield $(F(o))}})}function $e(e){const t=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return t.read().then(({value:r,done:c})=>{if(c){if(s.trim()){o.error(new m("Failed to parse stream"));return}o.close();return}s+=r;let f=s.match(ee),O;for(;f;){try{O=JSON.parse(f[1])}catch{o.error(new m(`Error parsing JSON response: "${f[1]}"`));return}o.enqueue(O),s=s.substring(f[0].length),f=s.match(ee)}return i()}).catch(r=>{let c=r;throw c.stack=r.stack,c.name==="AbortError"?c=new ce("Request aborted when reading from the stream"):c=new m("Error reading from the stream"),c})}}})}function Ge(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e){if(o.candidates){let s=0;for(const i of o.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const r={};for(const c of i.content.parts)c.text&&(r.text=c.text),c.functionCall&&(r.functionCall=c.functionCall),c.executableCode&&(r.executableCode=c.executableCode),c.codeExecutionResult&&(r.codeExecutionResult=c.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[s].content.parts.push(r)}s++}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(e,t,n,o){const s=await U(t,S.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o);return Me(s)}async function ue(e,t,n,o){const i=await(await U(t,S.GENERATE_CONTENT,e,!1,JSON.stringify(n),o)).json();return{response:F(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function G(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Ue(t)}function Ue(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new m("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new m("No content is provided for sending chat message.");return o?t:n}function je(e,t){var n;let o={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=e.generateContentRequest!=null;if(e.contents){if(s)throw new w("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const i=G(e);o.contents=[i]}return{generateContentRequest:o}}function te(e){let t;return e.contents?t=e:t={contents:[G(e)]},e.systemInstruction&&(t.systemInstruction=de(e.systemInstruction)),t}function Ve(e){return typeof e=="string"||Array.isArray(e)?{content:G(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Fe={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ke(e){let t=!1;for(const n of e){const{role:o,parts:s}=n;if(!t&&o!=="user")throw new m(`First content should be with role 'user', got ${o}`);if(!B.includes(o))throw new m(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(B)}`);if(!Array.isArray(s))throw new m("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new m("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const c of s)for(const f of ne)f in c&&(i[f]+=1);const r=Fe[o];for(const c of ne)if(!r.includes(c)&&i[c]>0)throw new m(`Content with role '${o}' can't contain '${c}' part`);t=!0}}function oe(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const o of n.parts)if(o===void 0||Object.keys(o).length===0||o.text!==void 0&&o.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="SILENT_ERROR";class Ye{constructor(t,n,o,s={}){this.model=n,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,o!=null&&o.history&&(Ke(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var o,s,i,r,c,f;await this._sendPromise;const O=G(t),R={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,O]},A=Object.assign(Object.assign({},this._requestOptions),n);let h;return this._sendPromise=this._sendPromise.then(()=>ue(this._apiKey,this.model,R,A)).then(E=>{var C;if(oe(E.response)){this._history.push(O);const N=Object.assign({parts:[],role:"model"},(C=E.response.candidates)===null||C===void 0?void 0:C[0].content);this._history.push(N)}else{const N=b(E.response);N&&console.warn(`sendMessage() was unsuccessful. ${N}. Inspect response object for details.`)}h=E}),await this._sendPromise,h}async sendMessageStream(t,n={}){var o,s,i,r,c,f;await this._sendPromise;const O=G(t),R={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,O]},A=Object.assign(Object.assign({},this._requestOptions),n),h=le(this._apiKey,this.model,R,A);return this._sendPromise=this._sendPromise.then(()=>h).catch(E=>{throw new Error(se)}).then(E=>E.response).then(E=>{if(oe(E)){this._history.push(O);const C=Object.assign({},E.candidates[0].content);C.role||(C.role="model"),this._history.push(C)}else{const C=b(E);C&&console.warn(`sendMessageStream() was unsuccessful. ${C}. Inspect response object for details.`)}}).catch(E=>{E.message!==se&&console.error(E)}),h}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t,n,o){return(await U(t,S.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t,n,o){return(await U(t,S.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function Be(e,t,n,o){const s=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await U(t,S.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,n,o={}){this.apiKey=t,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=de(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var o;const s=te(t),i=Object.assign(Object.assign({},this._requestOptions),n);return ue(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}async generateContentStream(t,n={}){var o;const s=te(t),i=Object.assign(Object.assign({},this._requestOptions),n);return le(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}startChat(t){var n;return new Ye(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const o=je(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return He(this.apiKey,this.model,o,s)}async embedContent(t,n={}){const o=Ve(t),s=Object.assign(Object.assign({},this._requestOptions),n);return ke(this.apiKey,this.model,o,s)}async batchEmbedContents(t,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return Be(this.apiKey,this.model,t,o)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new m("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ie(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,o){if(!t.name)throw new w("Cached content must contain a `name` field.");if(!t.model)throw new w("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const r of s)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const c=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,f=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(c===f)continue}throw new w(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new ie(this.apiKey,i,o)}}function qe(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function o(){return this instanceof o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),n}var T={exports:{}};const Je={},We=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"})),j=qe(We),ze="16.4.7",Xe={version:ze};var re;function Qe(){if(re)return T.exports;re=1;var e={};const t=j,n=j,o=j,s=j,r=Xe.version,c=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function f(a){const u={};let d=a.toString();d=d.replace(/\r\n?/mg,`
`);let p;for(;(p=c.exec(d))!=null;){const y=p[1];let l=p[2]||"";l=l.trim();const g=l[0];l=l.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),g==='"'&&(l=l.replace(/\\n/g,`
`),l=l.replace(/\\r/g,"\r")),u[y]=l}return u}function O(a){const u=N(a),d=v.configDotenv({path:u});if(!d.parsed){const g=new Error(`MISSING_DATA: Cannot parse ${u} for an unknown reason`);throw g.code="MISSING_DATA",g}const p=E(a).split(","),y=p.length;let l;for(let g=0;g<y;g++)try{const _=p[g].trim(),I=C(d,_);l=v.decrypt(I.ciphertext,I.key);break}catch(_){if(g+1>=y)throw _}return v.parse(l)}function R(a){console.log(`[dotenv@${r}][INFO] ${a}`)}function A(a){console.log(`[dotenv@${r}][WARN] ${a}`)}function h(a){console.log(`[dotenv@${r}][DEBUG] ${a}`)}function E(a){return a&&a.DOTENV_KEY&&a.DOTENV_KEY.length>0?a.DOTENV_KEY:e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:""}function C(a,u){let d;try{d=new URL(u)}catch(_){if(_.code==="ERR_INVALID_URL"){const I=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw I.code="INVALID_DOTENV_KEY",I}throw _}const p=d.password;if(!p){const _=new Error("INVALID_DOTENV_KEY: Missing key part");throw _.code="INVALID_DOTENV_KEY",_}const y=d.searchParams.get("environment");if(!y){const _=new Error("INVALID_DOTENV_KEY: Missing environment part");throw _.code="INVALID_DOTENV_KEY",_}const l=`DOTENV_VAULT_${y.toUpperCase()}`,g=a.parsed[l];if(!g){const _=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${l} in your .env.vault file.`);throw _.code="NOT_FOUND_DOTENV_ENVIRONMENT",_}return{ciphertext:g,key:p}}function N(a){let u=null;if(a&&a.path&&a.path.length>0)if(Array.isArray(a.path))for(const d of a.path)t.existsSync(d)&&(u=d.endsWith(".vault")?d:`${d}.vault`);else u=a.path.endsWith(".vault")?a.path:`${a.path}.vault`;else u=n.resolve(process.cwd(),".env.vault");return t.existsSync(u)?u:null}function K(a){return a[0]==="~"?n.join(o.homedir(),a.slice(1)):a}function fe(a){R("Loading env from encrypted .env.vault");const u=v._parseVault(a);let d=e;return a&&a.processEnv!=null&&(d=a.processEnv),v.populate(d,u,a),{parsed:u}}function he(a){const u=n.resolve(process.cwd(),".env");let d="utf8";const p=!!(a&&a.debug);a&&a.encoding?d=a.encoding:p&&h("No encoding is specified. UTF-8 is used by default");let y=[u];if(a&&a.path)if(!Array.isArray(a.path))y=[K(a.path)];else{y=[];for(const I of a.path)y.push(K(I))}let l;const g={};for(const I of y)try{const D=v.parse(t.readFileSync(I,{encoding:d}));v.populate(g,D,a)}catch(D){p&&h(`Failed to load ${I} ${D.message}`),l=D}let _=e;return a&&a.processEnv!=null&&(_=a.processEnv),v.populate(_,g,a),l?{parsed:g,error:l}:{parsed:g}}function ge(a){if(E(a).length===0)return v.configDotenv(a);const u=N(a);return u?v._configVault(a):(A(`You set DOTENV_KEY but you are missing a .env.vault file at ${u}. Did you forget to build it?`),v.configDotenv(a))}function Ee(a,u){const d=Buffer.from(u.slice(-64),"hex");let p=Buffer.from(a,"base64");const y=p.subarray(0,12),l=p.subarray(-16);p=p.subarray(12,-16);try{const g=s.createDecipheriv("aes-256-gcm",d,y);return g.setAuthTag(l),`${g.update(p)}${g.final()}`}catch(g){const _=g instanceof RangeError,I=g.message==="Invalid key length",D=g.message==="Unsupported state or unable to authenticate data";if(_||I){const x=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw x.code="INVALID_DOTENV_KEY",x}else if(D){const x=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw x.code="DECRYPTION_FAILED",x}else throw g}}function pe(a,u,d={}){const p=!!(d&&d.debug),y=!!(d&&d.override);if(typeof u!="object"){const l=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw l.code="OBJECT_REQUIRED",l}for(const l of Object.keys(u))Object.prototype.hasOwnProperty.call(a,l)?(y===!0&&(a[l]=u[l]),p&&h(y===!0?`"${l}" is already defined and WAS overwritten`:`"${l}" is already defined and was NOT overwritten`)):a[l]=u[l]}const v={configDotenv:he,_configVault:fe,_parseVault:O,config:ge,decrypt:Ee,parse:f,populate:pe};return T.exports.configDotenv=v.configDotenv,T.exports._configVault=v._configVault,T.exports._parseVault=v._parseVault,T.exports.config=v.config,T.exports.decrypt=v.decrypt,T.exports.parse=v.parse,T.exports.populate=v.populate,T.exports=v,T.exports}Qe();function Ze(e){const t=document.querySelector("#form"),n=document.querySelector("#input-text"),o=document.querySelector("#dialect-select"),s=document.querySelector("#translate-btn"),i=()=>{const r=n.innerText.trim()!=="",c=o.value!=="1";s.disabled=!(r&&c),console.log(n.innerText.trim())};n.addEventListener("input",i),o.addEventListener("change",i),t.addEventListener("submit",async r=>{r.preventDefault();const c=o.options[o.selectedIndex].text,f=`${n.innerText}, dialect: ${c}`;i(),console.log(f);const O="Translate "+n.innerText.trim()+", Translate your response to Moroccan darija";console.log(O),O&&(await et(f),n.value="",i())})}async function et(e){const n=new Pe("AIzaSyCYoGoZBLArfIVkBRMWDbPwLXoQh3vHXPc").getGenerativeModel({model:"gemini-2.0-flash",systemInstruction:`
                Act as a professional translator specializing in Moroccan languages. Your task is to translate text from Moroccan Darija (Arabic dialect) to Moroccan Tamazight (Berber). Your entire explanation should be in darija . Follow these guidelines:

                Prioritize accuracy: Ensure translations retain the original meaning, including idioms, proverbs, or culturally specific phrases. If no direct equivalent exists, provide the closest match and add a footnote explaining the cultural context.
                
                Include transliteration: Alongside the Tamazight script (Tifinagh), provide a Latin-alphabet transliteration for accessibility.
                
                Flag regional variations: Highlight any terms/phrases that may differ significantly across Tamazight dialects.
                
                Explain ambiguities: If the Darija input is unclear, note possible interpretations.          
                
                Example workflow:
                
                Input (Darija): "شنو كاين جديد؟"
                
                Output (Tamazight):
                
                Tifinagh: ⵛⵏⵓ ⴽⴰⵢⵏ ⵏⵓⴷⵉⵏ؟
                
                Transliteration: "Mani illa ljadid?"
            `}),o=[{role:"user",parts:[{text:e}]}],s=await n.generateContent({contents:o,generationConfig:{maxOutputTokens:1e3,temperature:.1}});document.querySelector("#output-text").textContent=s.response.text()}document.querySelector("#app").innerHTML=`
      <div id="input-container"> 
        
            <h1>Tamazight Translator</h1>
            <form id="form" action="#" method="post">
              <div id="input-text" contenteditable="true" placeholder="Ktab hna b darija..."></div>
                <select id="dialect-select">
                    <option value="1">Khtar lahja</option>
                    <option value="2">Tashelhit</option>
                    <option value="3">Tarifit</option>
                    <option value="4">Atlas Tamazight</option>
                </select>
              <button id="translate-btn" type="submit" disabled>Translate</button>  
            </form>     
      
      </div>
      <div id="output-container">
            <h2>Translation:</h2>
            <div id="output-text"></div> 
      </div>
`;Ze(document.querySelector("#translate-btn"));
