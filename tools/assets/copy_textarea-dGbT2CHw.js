import{_ as h,u as V,r as n,K as u,o as r,a as C,d,h as w,n as b,s as B,v as p,m as E,f as k,C as S,L as T}from"./index-HGKGR7DO.js";/* empty css                 */const g={class:"copytextarea"},I={__name:"copy_textarea",props:{modelValue:{type:String,required:!0},rows:{type:Number,default:5},placeholder:{type:String,default:"Type or paste your text here..."},readonly:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:m}){const{t:s}=V(),c=a,i=m,t=n(c.modelValue);u(()=>c.modelValue,e=>{t.value=e}),u(t,e=>{i("update:modelValue",e)});const l=n(!1),y=async()=>{if(!t.value)return;const e=navigator.clipboard;if(e)e.writeText(t.value).then(()=>{p.success(s("textCopySuccess"))}),l.value=!0;else{const o=document.createElement("textarea");o.value=t.value,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),p.success(s("textCopySuccess")),l.value=!0}setTimeout(()=>{l.value=!1},2e3)};return(e,o)=>{const v=E,_=k,f=S;return r(),C("div",g,[d(v,{readonly:a.readonly,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=x=>t.value=x),type:"textarea",rows:a.rows,placeholder:a.placeholder},null,8,["readonly","modelValue","rows","placeholder"]),d(_,{size:"small",type:"success",onClick:y,icon:w(T)},null,8,["icon"]),l.value?(r(),b(f,{key:0,type:"success",title:e.$t("copySuccess"),"show-icon":""},null,8,["title"])):B("",!0)])}}},z=h(I,[["__scopeId","data-v-77eeb855"]]);export{z as C};
