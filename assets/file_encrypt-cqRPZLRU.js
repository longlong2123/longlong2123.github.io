import{_ as J,r as a,a as D,d as l,w as n,G as Z,H as Q,o as w,b as U,t as i,s as x,i as C,n as P,v as y,M as X,l as Y,N as ee,z as te,m as le,f as ne,O as oe,A as ae}from"./index-CBiQ7PuV.js";/* empty css                     *//* empty css                 */import{C as E}from"./index-DPbzdMkA.js";const se={class:"container"},re={class:"title"},ce={class:"el-upload__text"},ie={key:0},F=1024*1024,ue={__name:"file_encrypt",setup(de){const v=a({key:""}),p=a(null),_=a(""),j=a([]),$=a(!1),L=a(!1);a("");const H=a(""),I=a(""),B=a(""),N=a(""),r=a(!1),R=a(null),q={key:[{required:!0,message:"Key is required",trigger:"blur"}]},M=e=>{const t=e.raw;p.value=t,_.value=t.name},V=e=>e.substring(0,e.lastIndexOf(".")),K=e=>e.substring(e.lastIndexOf(".")),T=()=>E.lib.WordArray.random(16),O=e=>E.SHA256(e),z=e=>{R.value.validate(t=>{if(t)e==="encrypt"?W():e==="decrypt"&&G();else return y.error("Please fill in the required fields"),!1})},W=()=>{if(!v.value.key){y.error("Please input your key for encryption");return}$.value=!1,r.value=!0;const e=T(),t=O(v.value.key),c=new FileReader,g=p.value.size;let u=0,m=[];const s=()=>{const d=p.value.slice(u,u+F);c.readAsArrayBuffer(d)};c.onload=function(d){const k=d.target.result,f=E.lib.WordArray.create(new Uint8Array(k)),b=E.AES.encrypt(f,t,{iv:e}).toString();if(m.push(b),u+=F,u<g)s();else{const h=e.toString(E.enc.Hex),o=new Blob([h,...m],{type:"application/octet-stream"}),A=V(_.value),S=K(_.value);B.value=`${A}.enc${S}`,H.value=URL.createObjectURL(o),y.success("文件加密成功"),r.value=!1,$.value=!0}},c.onerror=function(){y.error("文件加密过程中出错"),r.value=!1},s()},G=()=>{if(!v.value.key){y.error("Please input your key for decryption");return}r.value=!0;const e=new FileReader;let t=p.value.size-32,c=0,g=[];const u=()=>{const d=p.value.slice(c,c+F);e.readAsText(d)};let m,s;e.onload=function(d){const k=d.target.result;if(c===0){const f=k.slice(0,32);m=E.enc.Hex.parse(f),s=k.slice(32)}c+=F;try{const f=O(v.value.key),b=E.AES.decrypt(s,f,{iv:m}),h=new Uint8Array(b.sigBytes);for(let o=0;o<b.sigBytes;o++)h[o]=b.words[o>>>2]>>>24-o%4*8&255;if(g.push(h),c<t)console.log(t),u();else{console.log("文件读取完毕，生成解密后的 Blob");const o=new Blob(g,{type:p.value.type}),A=V(_.value.replace(".enc","")),S=K(_.value);N.value=`${A}.dec${S}`,I.value=URL.createObjectURL(o),y.success("文件解密成功"),r.value=!1,L.value=!0}}catch{y.error("解密失败，请检查密钥或文件内容"),r.value=!1}},e.onerror=function(){y.error("文件解密过程中出错"),r.value=!1},u()};return(e,t)=>{const c=Z,g=X("upload-filled"),u=Y,m=ee,s=te,d=le,k=ne,f=oe,b=ae,h=Q;return w(),D("div",se,[l(c,null,{default:n(()=>[U("div",re,i(e.$t("fileEncryption.title")),1)]),_:1}),l(h,null,{default:n(()=>[l(b,{model:v.value,rules:q,ref_key:"formRef",ref:R,"label-position":"top"},{default:n(()=>[l(s,{label:e.$t("fileEncryption.uploadFile")},{default:n(()=>[l(m,{class:"upload",drag:"",action:"","on-change":M,"file-list":j.value,"show-file-list":!1,"auto-upload":!1},{default:n(()=>[l(u,{class:"el-icon--upload"},{default:n(()=>[l(g)]),_:1}),U("div",ce,[U("em",null,i(e.$t("fileEncryption.dragOrClick")),1)])]),_:1},8,["file-list"])]),_:1},8,["label"]),l(s,null,{default:n(()=>[_.value?(w(),D("p",ie,i(e.$t("fileEncryption.selectedFile"))+"："+i(_.value),1)):x("",!0)]),_:1}),l(s,{label:e.$t("fileEncryption.encryptionKey"),prop:"key"},{default:n(()=>[l(d,{modelValue:v.value.key,"onUpdate:modelValue":t[0]||(t[0]=o=>v.value.key=o),placeholder:e.$t("fileEncryption.enterKey")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,null,{default:n(()=>[l(k,{type:"primary",class:"encode-btn",onClick:t[1]||(t[1]=o=>z("encrypt")),disabled:!p.value||r.value,loading:r.value,icon:"Lock"},{default:n(()=>[C(i(e.$t("fileEncryption.encryptFile")),1)]),_:1},8,["disabled","loading"]),l(k,{type:"success",class:"decode-btn",onClick:t[2]||(t[2]=o=>z("decrypt")),disabled:!p.value||r.value,loading:r.value,icon:"Unlock"},{default:n(()=>[C(i(e.$t("fileEncryption.decryptFile")),1)]),_:1},8,["disabled","loading"])]),_:1}),$.value?(w(),P(s,{key:0},{default:n(()=>[l(f,{type:"primary",href:H.value,download:B.value},{default:n(()=>[C(i(e.$t("fileEncryption.downloadEncryptedFile"))+" "+i(B.value),1)]),_:1},8,["href","download"])]),_:1})):x("",!0),L.value?(w(),P(s,{key:1},{default:n(()=>[l(f,{type:"success",href:I.value,download:N.value},{default:n(()=>[C(i(e.$t("fileEncryption.downloadDecryptedFile"))+" "+i(N.value),1)]),_:1},8,["href","download"])]),_:1})):x("",!0)]),_:1},8,["model"])]),_:1})])}}},_e=J(ue,[["__scopeId","data-v-27923694"]]);export{_e as default};