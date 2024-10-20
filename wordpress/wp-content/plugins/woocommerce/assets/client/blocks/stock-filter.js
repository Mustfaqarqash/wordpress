(()=>{var e,t,o,r={5364:(e,t,o)=>{"use strict";o.r(t);var r=o(1609);const l=window.wp.blocks;var n=o(7104),s=o(885),c=o(851);const a=window.wp.blockEditor;var i=o(7723),u=o(9491);o(4302);const d=(0,u.withInstanceId)((({className:e,headingLevel:t,onChange:o,heading:l,instanceId:n})=>{const s=`h${t}`;return(0,r.createElement)(s,{className:e},(0,r.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${n}`},(0,i.__)("Block title","woocommerce")),(0,r.createElement)(a.PlainText,{id:`block-title-${n}`,className:"wc-block-editor-components-title",value:l,onChange:o,style:{backgroundColor:"transparent"}}))})),m=window.wp.components;var p=o(195),w=o(224),f=o(6087),g=o(923),b=o.n(g);function h(e){const t=(0,f.useRef)(e);return b()(e,t.current)||(t.current=e),t.current}const _=window.wc.wcBlocksData,k=window.wp.data,v=(0,f.createContext)("page"),y=()=>(0,f.useContext)(v),E=(v.Provider,e=>{const t=y();e=e||t;const o=(0,k.useSelect)((t=>t(_.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:r}=(0,k.useDispatch)(_.QUERY_STATE_STORE_KEY);return[o,(0,f.useCallback)((t=>{r(e,t)}),[e,r])]}),S=(e,t,o)=>{const r=y();o=o||r;const l=(0,k.useSelect)((r=>r(_.QUERY_STATE_STORE_KEY).getValueForQueryKey(o,e,t)),[o,e]),{setQueryValue:n}=(0,k.useDispatch)(_.QUERY_STATE_STORE_KEY);return[l,(0,f.useCallback)((t=>{n(o,e,t)}),[o,e,n])]};var C=o(4717);const x=window.wc.wcTypes;var O=o(5574);const T=({queryAttribute:e,queryPrices:t,queryStock:o,queryRating:r,queryState:l,isEditor:n=!1})=>{let s=y();s=`${s}-collection-data`;const[c]=E(s),[a,i]=S("calculate_attribute_counts",[],s),[u,d]=S("calculate_price_range",null,s),[m,p]=S("calculate_stock_status_counts",null,s),[w,g]=S("calculate_rating_counts",null,s),b=h(e||{}),v=h(t),T=h(o),N=h(r);(0,f.useEffect)((()=>{"object"==typeof b&&Object.keys(b).length&&(a.find((e=>(0,x.objectHasProp)(b,"taxonomy")&&e.taxonomy===b.taxonomy))||i([...a,b]))}),[b,a,i]),(0,f.useEffect)((()=>{u!==v&&void 0!==v&&d(v)}),[v,d,u]),(0,f.useEffect)((()=>{m!==T&&void 0!==T&&p(T)}),[T,p,m]),(0,f.useEffect)((()=>{w!==N&&void 0!==N&&g(N)}),[N,g,w]);const[A,L]=(0,f.useState)(n),[R]=(0,C.d7)(A,200);A||L(!0);const P=(0,f.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,O.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(c)),[c]);return(e=>{const{namespace:t,resourceName:o,resourceValues:r=[],query:l={},shouldSelect:n=!0}=e;if(!t||!o)throw new Error("The options object must have valid values for the namespace and the resource properties.");const s=(0,f.useRef)({results:[],isLoading:!0}),c=h(l),a=h(r),i=(()=>{const[,e]=(0,f.useState)();return(0,f.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,k.useSelect)((e=>{if(!n)return null;const r=e(_.COLLECTIONS_STORE_KEY),l=[t,o,c,a],s=r.getCollectionError(...l);if(s){if(!(0,x.isError)(s))throw new Error("TypeError: `error` object is not an instance of Error constructor");i(s)}return{results:r.getCollection(...l),isLoading:!r.hasFinishedResolution("getCollection",l)}}),[t,o,a,c,n]);return null!==u&&(s.current=u),s.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...l,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...P},shouldSelect:R})},N=window.wc.wcSettings,A=window.wc.blocksComponents;o(1504);const L=({className:e,isLoading:t,disabled:o,
/* translators: Submit button text for filters. */
label:l=(0,i.__)("Apply","woocommerce"),onClick:n,screenReaderLabel:s=(0,i.__)("Apply filter","woocommerce")})=>(0,r.createElement)("button",{type:"submit",className:(0,c.A)("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:o,onClick:n},(0,r.createElement)(A.Label,{label:l,screenReaderLabel:s}));o(8335);const R=({className:e,
/* translators: Reset button text for filters. */
label:t=(0,i.__)("Reset","woocommerce"),onClick:o,screenReaderLabel:l=(0,i.__)("Reset filter","woocommerce")})=>(0,r.createElement)("button",{className:(0,c.A)("wc-block-components-filter-reset-button",e),onClick:o},(0,r.createElement)(A.Label,{label:t,screenReaderLabel:l}));o(1626);const P=({children:e})=>(0,r.createElement)("div",{className:"wc-block-filter-title-placeholder"},e);o(5400);const B=({name:e,count:t})=>(0,r.createElement)(r.Fragment,null,e,null!==t&&Number.isFinite(t)&&(0,r.createElement)(A.Label,{label:t.toString(),screenReaderLabel:(0,i.sprintf)(/* translators: %s number of products. */ /* translators: %s number of products. */
(0,i._n)("%s product","%s products",t,"woocommerce"),t),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}));var j=o(8001);o(243);const F=({className:e,style:t,suggestions:o,multiple:l=!0,saveTransform:n=(e=>e.trim().replace(/\s/g,"-")),messages:s={},validateInput:a=(e=>o.includes(e)),label:i="",...u})=>(0,r.createElement)("div",{className:(0,c.A)("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!l}),style:t},(0,r.createElement)(j.A,{label:i,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:a,saveTransform:n,maxLength:l?void 0:1,suggestions:o,messages:s,...u})),I=window.wp.htmlEntities,q=window.wp.url,M=(0,N.getSettingWithCoercion)("isRenderingPhpTemplate",!1,x.isBoolean);function Q(e){if(M){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,o)=>{o.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(o)})),window.location.href=t.href}else window.history.replaceState({},"",e)}const D=e=>{const t=(0,q.getQueryArgs)(e);return(0,q.addQueryArgs)(e,t)},$=[{value:"preview-1",name:"In Stock",label:(0,r.createElement)(B,{name:"In Stock",count:3}),textLabel:"In Stock (3)"},{value:"preview-2",name:"Out of stock",label:(0,r.createElement)(B,{name:"Out of stock",count:3}),textLabel:"Out of stock (3)"},{value:"preview-3",name:"On backorder",label:(0,r.createElement)(B,{name:"On backorder",count:2}),textLabel:"On backorder (2)"}];o(5837);function Y(){return Math.floor(Math.random()*Date.now())}const W=e=>e.trim().replace(/\s/g,"").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),U=(0,f.createContext)({}),V="filter_stock_status",G=({attributes:e,isEditor:t=!1})=>{const o=(()=>{const{wrapper:e}=(0,f.useContext)(U);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),l=(0,N.getSettingWithCoercion)("isRenderingPhpTemplate",!1,x.isBoolean),[s,a]=(0,f.useState)(!1),{outofstock:u,...d}=(0,N.getSetting)("stockStatusOptions",{}),m=(0,f.useRef)((0,N.getSetting)("hideOutOfStockItems",!1)?d:{outofstock:u,...d}),g=(0,f.useMemo)((()=>((e,t="filter_stock_status")=>{const o=(r=t,window?(0,q.getQueryArg)(window.location.href,r):null);var r;if(!o)return[];const l=(0,x.isString)(o)?o.split(","):o,n=Object.keys(e);return l.filter((e=>n.includes(e)))})(m.current,V)),[]),[_,k]=(0,f.useState)(g),[v,y]=(0,f.useState)(e.isPreview?$:[]),[C]=(0,f.useState)(Object.entries(m.current).map((([e,t])=>({slug:e,name:t}))).filter((e=>!!e.name)).sort(((e,t)=>e.slug.localeCompare(t.slug)))),[O]=E(),[j,M]=S("stock_status",g),{results:G,isLoading:K}=T({queryStock:!0,queryState:O,isEditor:t}),H=(0,f.useCallback)((e=>(0,x.objectHasProp)(G,"stock_status_counts")&&Array.isArray(G.stock_status_counts)?G.stock_status_counts.find((({status:t,count:o})=>t===e&&0!==Number(o))):null),[G]),[J,z]=(0,f.useState)(Y());(0,f.useEffect)((()=>{if(K||e.isPreview)return;const t=C.map((t=>{const o=H(t.slug);if(!(o||_.includes(t.slug)||(l=t.slug,null!=O&&O.stock_status&&O.stock_status.some((({status:e=[]})=>e.includes(l))))))return null;var l;const n=o?Number(o.count):0;return{value:t.slug,name:(0,I.decodeEntities)(t.name),label:(0,r.createElement)(B,{name:(0,I.decodeEntities)(t.name),count:e.showCounts?n:null}),textLabel:e.showCounts?`${(0,I.decodeEntities)(t.name)} (${n})`:(0,I.decodeEntities)(t.name)}})).filter((e=>!!e));y(t),z(Y())}),[e.showCounts,e.isPreview,K,H,_,O.stock_status,C]);const Z="single"!==e.selectType,X=(0,f.useCallback)((e=>{t||(e&&!l&&M(e),(e=>{if(!window)return;if(0===e.length){const e=(0,q.removeQueryArgs)(window.location.href,V);return void(e!==D(window.location.href)&&Q(e))}const t=(0,q.addQueryArgs)(window.location.href,{[V]:e.join(",")});t!==D(window.location.href)&&Q(t)})(e))}),[t,M,l]);(0,f.useEffect)((()=>{e.showFilterButton||X(_)}),[e.showFilterButton,_,X]);const ee=h((0,f.useMemo)((()=>j),[j])),te=function(e,t){const o=(0,f.useRef)();return(0,f.useEffect)((()=>{o.current===e||(o.current=e)}),[e,t]),o.current}(ee);(0,f.useEffect)((()=>{b()(te,ee)||b()(_,ee)||k(ee)}),[_,ee,te]),(0,f.useEffect)((()=>{s||(M(g),a(!0))}),[M,s,a,g]);const oe=(0,f.useCallback)((e=>{const t=e=>{const t=v.find((t=>t.value===e));return t?t.name:null},o=({filterAdded:e,filterRemoved:o})=>{const r=e?t(e):null,l=o?t(o):null;r?(0,p.speak)((0,i.sprintf)(/* translators: %s stock statuses (for example: 'instock'...) */ /* translators: %s stock statuses (for example: 'instock'...) */
(0,i.__)("%s filter added.","woocommerce"),r)):l&&(0,p.speak)((0,i.sprintf)(/* translators: %s stock statuses (for example:'instock'...) */ /* translators: %s stock statuses (for example:'instock'...) */
(0,i.__)("%s filter removed.","woocommerce"),l))},r=_.includes(e);if(!Z){const t=r?[]:[e];return o(r?{filterRemoved:e}:{filterAdded:e}),void k(t)}if(r){const t=_.filter((t=>t!==e));return o({filterRemoved:e}),void k(t)}const l=[..._,e].sort();o({filterAdded:e}),k(l)}),[_,Z,v]);if(!K&&0===v.length)return o(!1),null;const re=`h${e.headingLevel}`,le=!e.isPreview&&!m.current||0===v.length,ne=!e.isPreview&&K;if(!(0,N.getSettingWithCoercion)("hasFilterableProducts",!1,x.isBoolean))return o(!1),null;const se=Z?!le&&_.length<v.length:!le&&0===_.length,ce=(0,r.createElement)(re,{className:"wc-block-stock-filter__title"},e.heading),ae=le?(0,r.createElement)(P,null,ce):ce;return o(!0),(0,r.createElement)(r.Fragment,null,!t&&e.heading&&ae,(0,r.createElement)("div",{className:(0,c.A)("wc-block-stock-filter",`style-${e.displayStyle}`,{"is-loading":le})},"dropdown"===e.displayStyle?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(F,{key:J,className:(0,c.A)({"single-selection":!Z,"is-loading":le}),suggestions:v.filter((e=>!_.includes(e.value))).map((e=>e.value)),disabled:le,placeholder:(0,i.__)("Select stock status","woocommerce"),onChange:e=>{!Z&&e.length>1&&(e=e.slice(-1));const t=[e=e.map((e=>{const t=v.find((t=>t.value===e));return t?t.value:e})),_].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));if(1===t.length)return oe(t[0]);const o=[_,e].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));1===o.length&&oe(o[0])},value:_,displayTransform:e=>{const t=v.find((t=>t.value===e));return t?t.textLabel:e},saveTransform:W,messages:{added:(0,i.__)("Stock filter added.","woocommerce"),removed:(0,i.__)("Stock filter removed.","woocommerce"),remove:(0,i.__)("Remove stock filter.","woocommerce"),__experimentalInvalid:(0,i.__)("Invalid stock filter.","woocommerce")}}),se&&(0,r.createElement)(n.A,{icon:w.A,size:30})):(0,r.createElement)(A.CheckboxList,{className:"wc-block-stock-filter-list",options:v,checked:_,onChange:oe,isLoading:le,isDisabled:ne})),(0,r.createElement)("div",{className:"wc-block-stock-filter__actions"},(_.length>0||t)&&!le&&(0,r.createElement)(R,{onClick:()=>{k([]),X([])},screenReaderLabel:(0,i.__)("Reset stock filter","woocommerce")}),e.showFilterButton&&(0,r.createElement)(L,{className:"wc-block-stock-filter__button",isLoading:le,disabled:le||ne,onClick:()=>X(_)})))};o(5201);const K=({clientId:e,setAttributes:t,filterType:o,attributes:n})=>{const{replaceBlock:s}=(0,k.useDispatch)("core/block-editor"),{heading:c,headingLevel:u}=n;if((0,k.useSelect)((t=>{const{getBlockParentsByBlockName:o}=t("core/block-editor");return o(e,"woocommerce/filter-wrapper").length>0}),[e])||!o)return null;const d=[(0,r.createElement)(m.Button,{key:"convert",onClick:()=>{const r=[(0,l.createBlock)(`woocommerce/${o}`,{...n,heading:""})];c&&""!==c&&r.unshift((0,l.createBlock)("core/heading",{content:c,level:null!=u?u:2})),s(e,(0,l.createBlock)("woocommerce/filter-wrapper",{heading:c,filterType:o},[...r])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,i.__)("Upgrade block","woocommerce"))];return(0,r.createElement)(a.Warning,{actions:d},(0,i.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))},H=(0,m.withSpokenMessages)((({clientId:e,attributes:t,setAttributes:o})=>{const{className:l,heading:n,headingLevel:s,showCounts:u,showFilterButton:p,selectType:w,displayStyle:f}=t,g=(0,a.useBlockProps)({className:(0,c.A)("wc-block-stock-filter",l)});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.InspectorControls,{key:"inspector"},(0,r.createElement)(m.PanelBody,{title:(0,i.__)("Display Settings","woocommerce")},(0,r.createElement)(m.ToggleControl,{label:(0,i.__)("Display product count","woocommerce"),checked:u,onChange:()=>o({showCounts:!u})}),(0,r.createElement)(m.__experimentalToggleGroupControl,{label:(0,i.__)("Allow selecting multiple options?","woocommerce"),value:w||"multiple",onChange:e=>o({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},(0,r.createElement)(m.__experimentalToggleGroupControlOption,{value:"multiple",label:(0,i._x)("Multiple","Number of filters","woocommerce")}),(0,r.createElement)(m.__experimentalToggleGroupControlOption,{value:"single",label:(0,i._x)("Single","Number of filters","woocommerce")})),(0,r.createElement)(m.__experimentalToggleGroupControl,{label:(0,i.__)("Display Style","woocommerce"),value:f,onChange:e=>o({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},(0,r.createElement)(m.__experimentalToggleGroupControlOption,{value:"list",label:(0,i.__)("List","woocommerce")}),(0,r.createElement)(m.__experimentalToggleGroupControlOption,{value:"dropdown",label:(0,i.__)("Dropdown","woocommerce")})),(0,r.createElement)(m.ToggleControl,{label:(0,i.__)("Show 'Apply filters' button","woocommerce"),help:(0,i.__)("Products will update when the button is clicked.","woocommerce"),checked:p,onChange:e=>o({showFilterButton:e})}))),(0,r.createElement)(K,{clientId:e,attributes:t,setAttributes:o,filterType:"stock-filter"}),(0,r.createElement)("div",{...g},n&&(0,r.createElement)(d,{className:"wc-block-stock-filter__title",headingLevel:s,heading:n,onChange:e=>o({heading:e})}),(0,r.createElement)(m.Disabled,null,(0,r.createElement)(G,{attributes:t,isEditor:!0}))))})),J=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}'),z={heading:{type:"string",default:(0,i.__)("Filter by stock status","woocommerce")}},Z=[{attributes:{...J.attributes,showCounts:{type:"boolean",default:!0},...z},save:({attributes:e})=>{const{className:t,showCounts:o,heading:l,headingLevel:n,showFilterButton:s}=e,i={"data-show-counts":o,"data-heading":l,"data-heading-level":n};return s&&(i["data-show-filter-button"]=s),(0,r.createElement)("div",{...a.useBlockProps.save({className:(0,c.A)("is-loading",t)}),...i},(0,r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-stock-filter__placeholder"}))}}];(0,l.registerBlockType)(J,{icon:{src:(0,r.createElement)(n.A,{icon:s.A,className:"wc-block-editor-components-block-icon"})},attributes:{...J.attributes,...z},edit:H,save({attributes:e}){const{className:t}=e;return(0,r.createElement)("div",{...a.useBlockProps.save({className:(0,c.A)("is-loading",t)})})},deprecated:Z})},5400:()=>{},1626:()=>{},8335:()=>{},1504:()=>{},243:()=>{},5201:()=>{},5837:()=>{},4302:()=>{},1609:e=>{"use strict";e.exports=window.React},8468:e=>{"use strict";e.exports=window.lodash},195:e=>{"use strict";e.exports=window.wp.a11y},9491:e=>{"use strict";e.exports=window.wp.compose},4040:e=>{"use strict";e.exports=window.wp.deprecated},8107:e=>{"use strict";e.exports=window.wp.dom},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},8558:e=>{"use strict";e.exports=window.wp.keycodes},5573:e=>{"use strict";e.exports=window.wp.primitives},979:e=>{"use strict";e.exports=window.wp.warning}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,e=[],n.O=(t,o,r,l)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,r,l]=e[u],c=!0,a=0;a<o.length;a++)(!1&l||s>=l)&&Object.keys(n.O).every((e=>n.O[e](o[a])))?o.splice(a--,1):(c=!1,l<s&&(s=l));if(c){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);n.r(l);var s={};t=t||[null,o({}),o([]),o(o)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=o(c))Object.getOwnPropertyNames(c).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,n.d(l,s),l},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=5454,(()=>{var e={5454:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[s,c,a]=o,i=0;if(s.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(a)var u=a(n)}for(t&&t(o);i<s.length;i++)l=s[i],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=n.O(void 0,[94],(()=>n(5364)));s=n.O(s),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["stock-filter"]=s})();