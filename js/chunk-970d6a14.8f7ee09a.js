(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-970d6a14"],{1799:function(e,t,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},n={class:"pagination d-flex justify-content-center"},r=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function l(e,t,c,l,d,s){return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])("nav",o,[Object(a["createVNode"])("ul",n,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(t){return e.$emit("get-data",c.page.current_page-1)}),["prevent"]))},[r])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.page.total_pages,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:t===c.page.current_page}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(c){return e.$emit("get-data",t)}),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(t){return e.$emit("get-data",c.page.current_page+1)}),["prevent"]))},[i])],2)])])])}var d={props:["page"]};d.render=l;t["a"]=d},"2d08":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"container"},n={class:"table mt-3 align-middle"},r=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{class:"text-center"},"分類"),Object(a["createVNode"])("th",{class:"text-center"},"產品名稱"),Object(a["createVNode"])("th",{class:"text-center"},"原價"),Object(a["createVNode"])("th",{class:"text-center"},"優惠價"),Object(a["createVNode"])("th",{class:"text-center"},"是否啟用"),Object(a["createVNode"])("th",{class:"text-center"},"編輯"),Object(a["createVNode"])("th",{class:"text-center",width:"80"},"刪除")])],-1),i={class:"text-center"},l={class:"text-center"},d={class:"text-center"},s={class:"text-center"},p={key:0},u={key:1},b={class:"text-center"},O={key:0,class:"text-success"},m={key:1,class:"text-secondary"},j={class:"text-center"},g=Object(a["createVNode"])("span",{class:"material-icons"}," edit ",-1),h={class:"text-center"},f=Object(a["createVNode"])("span",{class:"material-icons"}," delete_outline ",-1);function N(e,t,c,N,V,v){var k=Object(a["resolveComponent"])("Loading"),y=Object(a["resolveComponent"])("Pagination"),x=Object(a["resolveComponent"])("ProductModal"),D=Object(a["resolveComponent"])("DeleteModal");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])(k,{active:V.isLoading},null,8,["active"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary mt-3",onClick:t[1]||(t[1]=function(e){return v.getInfo(!0)})}," 新增產品 "),Object(a["createVNode"])("table",n,[r,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(V.products,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{ref:t.id,key:t},[Object(a["createVNode"])("td",i,Object(a["toDisplayString"])(t.category),1),Object(a["createVNode"])("td",l,Object(a["toDisplayString"])(t.title),1),Object(a["createVNode"])("td",d,Object(a["toDisplayString"])(e.$toCurrency(t.origin_price)),1),Object(a["createVNode"])("td",s,[t.price?(Object(a["openBlock"])(),Object(a["createBlock"])("span",p,Object(a["toDisplayString"])(e.$toCurrency(t.price)),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("span",u,Object(a["toDisplayString"])(e.$toCurrency(t.origin_price)),1))]),Object(a["createVNode"])("td",b,[t.is_enabled?(Object(a["openBlock"])(),Object(a["createBlock"])("span",O,"啟用")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",m,"未啟用"))]),Object(a["createVNode"])("td",j,[Object(a["createVNode"])("button",{type:"button",class:"btn text-primary",onClick:function(e){return v.getInfo(!1,t)}},[g],8,["onClick"])]),Object(a["createVNode"])("td",h,[Object(a["createVNode"])("button",{class:"btn text-danger",onClick:function(e){return v.openDeleteModal(t)}},[f],8,["onClick"])])],512)})),128))])]),Object(a["createVNode"])(y,{page:V.pagination,onGetData:v.getData},null,8,["page","onGetData"]),Object(a["createVNode"])(x,{ref:"productModal",info:V.productInfo,"is-new":V.isNew,onGet:v.getData},null,8,["info","is-new","onGet"]),Object(a["createVNode"])(D,{product:V.productInfo,ref:"deleteModal",onGetData:v.getData},null,8,["product","onGetData"])])}c("99af");var V=c("1799"),v=(c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",ref:"productModal",tabindex:"-1"}),k={class:"modal-dialog modal-lg"},y={class:"modal-content"},x={class:"modal-header"},D={key:0,class:"modal-title"},w={key:1,class:"modal-title"},M=Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body"},C={class:"row"},U={class:"col-4"},$={class:"input-group"},_=Object(a["createVNode"])("span",{class:"input-group-text bg-light m-0",id:"mainPicture"},[Object(a["createVNode"])("small",null,"主要圖片")],-1),L={key:0},T={key:1},S={class:"col-8"},P={class:"input-group"},I=Object(a["createVNode"])("span",{class:"input-group-text bg-light",id:"productTitle"},"產品名稱 ",-1),J={class:"row mt-3"},G={class:"col-6"},F={class:"input-group"},A=Object(a["createVNode"])("span",{class:"input-group-text bg-light",id:"productCategory"},"分類",-1),E={class:"col-6"},q={class:"input-group"},z=Object(a["createVNode"])("span",{class:"input-group-text bg-light",id:"productUnit"},"單位",-1),H={class:"row mt-3"},K={class:"col-6"},Q={class:"input-group"},R=Object(a["createVNode"])("span",{class:"input-group-text bg-light",id:"productOriginPrice"},"原價",-1),W={class:"col-md-6"},X={class:"input-group"},Y=Object(a["createVNode"])("span",{class:"input-group-text bg-light",id:"productOriginPrice"},"優惠價",-1),Z=Object(a["createVNode"])("hr",null,null,-1),ee={class:"form-group"},te=Object(a["createVNode"])("label",{for:"description"},"產品描述",-1),ce={class:"form-group"},ae=Object(a["createVNode"])("label",{for:"content"},"說明內容",-1),oe={class:"form-group"},ne={class:"form-check"},re=Object(a["createVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ie={class:"modal-footer"},le=Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function de(e,t,c,o,n,r){var i=Object(a["resolveComponent"])("Loading");return Object(a["openBlock"])(),Object(a["createBlock"])("div",v,[Object(a["createVNode"])(i,{active:n.isLoading},null,8,["active"]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",x,[c.isNew?(Object(a["openBlock"])(),Object(a["createBlock"])("h4",D,"新增商品")):(Object(a["openBlock"])(),Object(a["createBlock"])("h4",w,"編輯商品")),M]),Object(a["createVNode"])("div",B,[Object(a["createVNode"])("div",C,[Object(a["createVNode"])("div",U,[Object(a["createVNode"])("div",$,[_,Object(a["withDirectives"])(Object(a["createVNode"])("input",{"aria-describedby":"mainPicture",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.tempData.imageUrl=e})},null,512),[[a["vModelText"],n.tempData.imageUrl]])]),Object(a["createVNode"])("img",{class:"img-fluid mt-1",src:n.tempData.imageUrl,alt:""},null,8,["src"]),void 0!=n.tempData.imagesUrl?(Object(a["openBlock"])(),Object(a["createBlock"])("div",L,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(n.tempData.imagesUrl,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"form-group",key:e+t},[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-control mt-4",type:"text",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(e){return n.tempData.imagesUrl[t]=e}},null,8,["onUpdate:modelValue"]),[[a["vModelText"],n.tempData.imagesUrl[t]]]),Object(a["createVNode"])("img",{src:n.tempData.imagesUrl[t],class:"img-fluid mt-1",alt:""},null,8,["src"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger w-100 mt-1",onClick:function(e){return n.tempData.imagesUrl.splice(t,1)}}," 刪除圖片 ",8,["onClick"])])})),128)),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-100 mt-3",onClick:t[2]||(t[2]=function(e){return n.tempData.imagesUrl.push("")})}," 新增圖片 ")])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",T,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary w-100 mt-4",onClick:t[3]||(t[3]=function(e){return n.tempData.imagesUrl=[""]})}," 新增圖片 ")]))]),Object(a["createVNode"])("div",S,[Object(a["createVNode"])("div",P,[I,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","aria-describedby":"productTitle","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.tempData.title=e})},null,512),[[a["vModelText"],n.tempData.title]])]),Object(a["createVNode"])("div",J,[Object(a["createVNode"])("div",G,[Object(a["createVNode"])("div",F,[A,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","aria-describedby":"productCategory","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.tempData.category=e})},null,512),[[a["vModelText"],n.tempData.category]])])]),Object(a["createVNode"])("div",E,[Object(a["createVNode"])("div",q,[z,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","aria-describedby":"productUnit","onUpdate:modelValue":t[6]||(t[6]=function(e){return n.tempData.unit=e})},null,512),[[a["vModelText"],n.tempData.unit]])])])]),Object(a["createVNode"])("div",H,[Object(a["createVNode"])("div",K,[Object(a["createVNode"])("div",Q,[R,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","aria-describedby":"productOriginPrice","onUpdate:modelValue":t[7]||(t[7]=function(e){return n.tempData.origin_price=e})},null,512),[[a["vModelText"],n.tempData.origin_price,void 0,{number:!0}]])])]),Object(a["createVNode"])("div",W,[Object(a["createVNode"])("div",X,[Y,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","aria-describedby":"productPrice","onUpdate:modelValue":t[8]||(t[8]=function(e){return n.tempData.price=e})},null,512),[[a["vModelText"],n.tempData.price,void 0,{number:!0}]])])])]),Z,Object(a["createVNode"])("div",ee,[te,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":t[9]||(t[9]=function(e){return n.tempData.description=e})},"\n                ",512),[[a["vModelText"],n.tempData.description]])]),Object(a["createVNode"])("div",ce,[ae,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[10]||(t[10]=function(e){return n.tempData.content=e})},"\n                ",512),[[a["vModelText"],n.tempData.content]])]),Object(a["createVNode"])("div",oe,[Object(a["createVNode"])("div",ne,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[11]||(t[11]=function(e){return n.tempData.is_enabled=e})},null,512),[[a["vModelCheckbox"],n.tempData.is_enabled]]),re])])])])]),Object(a["createVNode"])("div",ie,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[12]||(t[12]=function(){return r.updateData&&r.updateData.apply(r,arguments)})}," 儲存並送出 "),le])])])],512)}var se=c("7b17"),pe={props:["info","isNew"],data:function(){return{isLoading:!1,modal:"",tempData:{price:0}}},methods:{openModal:function(){this.modal.show()},updateData:function(){var e=this;this.isLoading=!0;var t="",c="",a={data:this.tempData};this.isNew?(t="post",c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/product")):(t="put",c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/product/").concat(this.tempData.id)),this.$http[t](c,a).then((function(t){console.log(t),e.$emit("get"),e.isLoading=!1})).catch((function(e){console.log(e)}))}},watch:{info:function(){this.tempData=JSON.parse(JSON.stringify(this.info))}},mounted:function(){this.modal=new se["a"](this.$refs.productModal)}};pe.render=de;var ue=pe,be={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"deleteModal"},Oe={class:"modal-dialog"},me={class:"modal-content"},je=Object(a["createVNode"])("div",{class:"modal-header bg-danger text-light"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除產品"),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ge={class:"modal-body"},he=Object(a["createTextVNode"])("確定要刪除 "),fe={class:"h5"},Ne=Object(a["createTextVNode"])(" 嗎?"),Ve=Object(a["createVNode"])("p",null,"(刪除後無法恢復)",-1),ve={class:"modal-footer"},ke=Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ye(e,t,c,o,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("div",be,[Object(a["createVNode"])("div",Oe,[Object(a["createVNode"])("div",me,[je,Object(a["createVNode"])("div",ge,[Object(a["createVNode"])("p",null,[he,Object(a["createVNode"])("span",fe,Object(a["toDisplayString"])(c.product.title),1),Ne]),Ve]),Object(a["createVNode"])("div",ve,[ke,Object(a["createVNode"])("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=function(e){return r.deleteItem(c.product.id)})}," 確認刪除 ")])])])],512)}var xe={props:["product"],data:function(){return{modal:""}},methods:{deleteItem:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/product/").concat(e);this.$http.delete(c).then((function(){t.$emit("getData")})).catch((function(e){console.log(e)}))},openModal:function(){this.modal.show()}},mounted:function(){this.modal=new se["a"](this.$refs.deleteModal)}};xe.render=ye;var De=xe,we={components:{Pagination:V["a"],ProductModal:ue,DeleteModal:De},data:function(){return{isNew:!0,products:[],pagination:{},isLoading:!1,productInfo:{}}},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/products?page=").concat(t);this.$http.get(c).then((function(t){t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1)})).catch((function(e){console.log(e)}))},getInfo:function(e,t){this.isNew=e,this.productInfo=e?{}:JSON.parse(JSON.stringify(t)),this.$refs.productModal.openModal()},openDeleteModal:function(e){this.$refs.deleteModal.openModal(),this.productInfo=JSON.parse(JSON.stringify(e))},check:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.post(t).then((function(t){t.data.success||e.$router.push("/login")})).catch((function(e){console.log(e)}))}},mounted:function(){this.getData()}};we.render=N;t["default"]=we},a434:function(e,t,c){"use strict";var a=c("23e7"),o=c("23cb"),n=c("a691"),r=c("50c4"),i=c("7b0b"),l=c("65f0"),d=c("8418"),s=c("1dde"),p=s("splice"),u=Math.max,b=Math.min,O=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var c,a,s,p,j,g,h=i(this),f=r(h.length),N=o(e,f),V=arguments.length;if(0===V?c=a=0:1===V?(c=0,a=f-N):(c=V-2,a=b(u(n(t),0),f-N)),f+c-a>O)throw TypeError(m);for(s=l(h,a),p=0;p<a;p++)j=N+p,j in h&&d(s,p,h[j]);if(s.length=a,c<a){for(p=N;p<f-a;p++)j=p+a,g=p+c,j in h?h[g]=h[j]:delete h[g];for(p=f;p>f-a+c;p--)delete h[p-1]}else if(c>a)for(p=f-a;p>N;p--)j=p+a-1,g=p+c-1,j in h?h[g]=h[j]:delete h[g];for(p=0;p<c;p++)h[p+N]=arguments[p+2];return h.length=f-a+c,s}})}}]);
//# sourceMappingURL=chunk-970d6a14.8f7ee09a.js.map