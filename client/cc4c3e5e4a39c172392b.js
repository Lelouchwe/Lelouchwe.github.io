(window.webpackJsonp=window.webpackJsonp||[]).push([[0,1,14],{194:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6b6d8da6",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";var r=n(194);n.n(r).a},196:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"input[data-v-7076db40]::-webkit-inner-spin-button,input[data-v-7076db40]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-7076db40]{-moz-appearance:textfield}.btn-container[data-v-7076db40]{display:flex;flex-direction:row;justify-content:flex-start}.pm-child[data-v-7076db40]{color:#303030;height:30px;text-align:center;border-radius:2px;background-color:transparent;border-width:1px}input[data-v-7076db40]{width:50px}button[data-v-7076db40]{width:30px}",""])},197:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("04806b2a",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";n.r(e);n(58),n(23),n(24),n(14),n(41),n(78);var r=n(25),o=n(26);function c(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}var d={name:"PlusMinusBtn",props:{item:Object},data:function(){return{count:0}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.d)("cart",{plus:"incrementItemCount",minus:"decrementItemCount"})),computed:{cnt:{get:function(){var t=this;return this.$store.state.cart.items.find(function(e){return e.id===t.item.id}).count},set:function(t){this.$store.commit("cart/setItemCount",{id:this.item.id,count:+t})}}},mounted:function(){this.count=this.item.count}},l=(n(195),n(11)),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-container"},[n("button",{staticClass:"pm-child",attrs:{type:"button"},on:{click:function(e){return t.minus(t.item)}}},[t._v("-")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cnt,expression:"cnt"}],staticClass:"pm-child",attrs:{type:"number",name:"count-input"},domProps:{value:t.cnt},on:{input:function(e){e.target.composing||(t.cnt=e.target.value)}}}),t._v(" "),n("button",{staticClass:"pm-child",attrs:{type:"button"},on:{click:function(e){return t.plus(t.item)}}},[t._v("+")])])},[],!1,null,"7076db40",null);e.default=component.exports},212:function(t,e,n){"use strict";var r=n(197);n.n(r).a},213:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,'.link-to-catalog[data-v-5cc1846e]{font-weight:600;color:#344c6c}.btn-container[data-v-5cc1846e]{display:flex;flex-direction:row;justify-content:flex-start}.pm-child[data-v-5cc1846e]{color:#303030;height:30px;text-align:center;border-radius:2px;background-color:transparent;border-width:1px}.btn-container input[data-v-5cc1846e]{width:50px}.btn-container button[data-v-5cc1846e]{width:30px}*[data-v-5cc1846e]{color:#303030}[dir=ltr] ul[data-v-5cc1846e]{padding-left:0}[dir=rtl] ul[data-v-5cc1846e]{padding-right:0}ul[data-v-5cc1846e]{list-style:none;padding-left:0}.contact-basket-btn[data-v-5cc1846e]{border-radius:4px;padding:30px}.basket-totals[data-v-5cc1846e]{background-color:#fff;border-radius:4px;border:1px dashed rgba(48,48,48,.3);padding:20px;overflow:hidden}.basket-totals>ul>li[data-v-5cc1846e]{padding-bottom:10px;padding-top:10px;border-bottom:1px solid rgba(48,48,48,.15)}.form-container[data-v-5cc1846e]{display:flex;flex-direction:column}.form-container>input[data-v-5cc1846e]{margin-bottom:20px;border-radius:4px;height:40px;border:none;box-shadow:0 1px 5px 5px rgba(0,0,0,.1)}.card-header[data-v-5cc1846e]{padding:30px 0;display:flex;flex-direction:row;justify-content:space-between;align-items:center;align-content:center;border-bottom:1px solid #dedede;margin-bottom:20px}.card-title[data-v-5cc1846e]{position:relative;color:rgba(22,22,22,.9);font-size:1.5em;font-weight:600}.card-title[data-v-5cc1846e],h4[data-v-5cc1846e]{text-align:left}h4[data-v-5cc1846e]{color:#000;font-weight:400;font-size:36px;line-height:1.2;padding-left:20px}.close_btn[data-v-5cc1846e]{color:#68657b;font-size:25px;cursor:pointer}.Cart[data-v-5cc1846e]{position:fixed;right:0;top:0;width:576px;height:100vh;z-index:1000;background-color:#f3f3f3;transition:.5s;color:#303030;padding:0 25px}.card-footer[data-v-5cc1846e]{position:relative;padding-top:15px;bottom:0;width:100%}.app1[data-v-5cc1846e]{content:"";top:0;left:0;right:0;bottom:0;background-color:rgba(12,12,12,.7);z-index:1000;position:fixed}.items[data-v-5cc1846e]{overflow:auto;height:65%;display:flex;flex-direction:column;justify-content:space-between;position:relative;padding-bottom:20px}.item[data-v-5cc1846e]{display:flex;flex-direction:row;width:100%;min-height:250px;background-color:#f2f2f2;border-radius:6px;color:#303030;padding:20px 0;border-bottom:1px solid #dedede}.summ[data-v-5cc1846e]{position:relative;padding:0 25px}.summ div[data-v-5cc1846e],.summ span[data-v-5cc1846e]{color:#68657b;display:inline-block}.summ div[data-v-5cc1846e]{font-size:20px;font-weight:700;float:right}.form__nav[data-v-5cc1846e]{position:relative;display:flex;align-items:center;margin:60px 30px 0}.form__next[data-v-5cc1846e]{margin-left:auto}.btn_size_big[data-v-5cc1846e]{font-size:18px;line-height:24px}.btn_size_big[data-v-5cc1846e],.btn_size_mid[data-v-5cc1846e]{padding:9px 18px 10px}.btn_type_flat[data-v-5cc1846e]{font-size:16px;line-height:18px;padding:8px 14px 9px;color:#000}.btn[data-v-5cc1846e]{border:none;outline:0;font-family:Roboto,sans-serif;font-weight:400;line-height:1;cursor:pointer;word-wrap:break-word;text-decoration:none;box-sizing:border-box;text-align:center;background-color:#4f4f4f;transition:color .25s linear,background-color .25s linear;color:#f5f5f5;padding:10px 20px;width:100%;margin:0 auto}.card-form[data-v-5cc1846e]{display:flex;flex-direction:column;height:70%;padding:30px 20px 0;justify-content:space-between;overflow:auto}.submit[data-v-5cc1846e]{padding:10px 20px}.back[data-v-5cc1846e]{cursor:pointer;text-align:left;width:5%}.cart-fade-enter[data-v-5cc1846e],.cart-fade-leave-active[data-v-5cc1846e]{opacity:0;transition:.5s ease}.cart-fade-enter-active[data-v-5cc1846e],.cart-fade-leave-active[data-v-5cc1846e]{transition:opacity .5s ease}.cartin-enter-active[data-v-5cc1846e]{-webkit-animation:slidein-data-v-5cc1846e 1s;animation:slidein-data-v-5cc1846e 1s}.cartin-leave-active[data-v-5cc1846e]{animation:slidein-data-v-5cc1846e 1s reverse}@-webkit-keyframes slidein-data-v-5cc1846e{0%{opacity:0;transform:translateX(-100%)}to{transform:translateX(50%);opacity:1}}@keyframes slidein-data-v-5cc1846e{0%{opacity:0;transform:translateX(-100%)}to{transform:translateX(50%);opacity:1}}@media (max-width:600px){.Cart[data-v-5cc1846e]{width:85%}}',""])},214:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("217160e3",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";n.r(e);n(58),n(23),n(24),n(14),n(41),n(78);var r=n(25),o=n(198),c=n(26);function d(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var v={name:"Cart",components:{PMBtn:o.default},data:function(){return{isBuyble:!1}},computed:l({},Object(c.c)("cart",{products:"cartProducts",total:"cartTotalPrice",basketProds:"shortCartProductsList"}),{},Object(c.e)({cartItems:function(t){return t.cart.items}}),{preparedToBuy:function(){}}),methods:l({},Object(c.d)("cart",{remove:"removeCartItem"}),{close:function(){this.$emit("close")},plusCount:function(t){console.log(t),this.products.find(function(t){return t})},amoutPerItems:function(t,e){return t*e}})},f=(n(212),n(11)),component=Object(f.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"cart-fade"}},[n("div",{staticClass:"app1",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("transition",{attrs:{name:"cartin"}},[n("div",{staticClass:"Cart"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-title"},[t._v("Корзина")]),t._v(" "),n("div",[n("svg",{staticStyle:{height:"28px",width:"28px",cursor:"pointer"},attrs:{"aria-hidden":"true",focusable:"false",viewBox:"0 0 64 64"},on:{click:t.close}},[n("path",{staticStyle:{fill:"none",stroke:"#000","stroke-miterlimit":"10","stroke-width":"2px"},attrs:{d:"M19 17.61l27.12 27.13m0-27.12L19 44.74"}})])])]),t._v(" "),t.isBuyble?t._e():n("div",{staticClass:"items"},[0===t.cartItems.length?n("div",[n("p",{staticStyle:{"padding-bottom":"15px"}},[t._v("Ваша корзина пуста...")]),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/catalog",exact:"","no-prefetch":""}},[n("span",{staticClass:"link-to-catalog"},[t._v("Выбрать товар")])])],1)]):t._e(),t._v(" "),t._l(t.cartItems,function(e,i){return n("div",{key:i,staticClass:"item"},[n("div",{staticStyle:{flex:"1"}},[n("img",{attrs:{src:e.img}})]),t._v(" "),n("div",{staticStyle:{flex:"1",display:"flex","flex-direction":"column","justify-content":"space-between"}},[n("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},[n("div",[t._v("\r\n                                "+t._s(e.name)+"\r\n                            ")]),t._v(" "),n("svg",{staticStyle:{"margin-bottom":"2px",cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:function(n){return t.remove(e.id)}}},[n("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),t._v(" "),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])]),t._v(" "),n("div",[t._v(t._s(e.description))]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center"}},[n("div",[n("p-m-btn",{attrs:{item:e}})],1),t._v(" "),n("div",{staticStyle:{"padding-left":"10px"}},[t._v("x "+t._s(e.price))])]),t._v(" "),n("div",{staticStyle:{"align-self":"flex-end"}},[t._v("Сумма за товар: "+t._s(e.count*e.price)+"₽")])])])})],2),t._v(" "),t.isBuyble?n("div",{staticClass:"card-form"},[n("div",{staticClass:"back",on:{click:function(e){t.isBuyble=!1}}},[t._v("Назад")]),t._v(" "),n("div",{staticClass:"basket-totals"},[n("ul",t._l(t.basketProds,function(e,i){return n("li",{key:i},[t._v("\r\n                            "+t._s(e.name)+": "+t._s(e.count)+" x "+t._s(e.price)+" = "+t._s(+e.count*+e.price)+"₽\r\n                        ")])}),0)]),t._v(" "),n("form",{staticClass:"form-container"},[n("input",{attrs:{type:"text",name:"name",placeholder:" Ваше имя...",required:""}}),t._v(" "),n("input",{attrs:{type:"email",name:"email",placeholder:" Ваша почта..."}}),t._v(" "),n("input",{attrs:{type:"text",name:"phone",required:"",placeholder:" Номер телефона..."}}),t._v(" "),n("button",{staticClass:"btn btn_type_flat btn_size_big contact-basket-btn",attrs:{type:"submit"},on:{click:function(t){}}},[t._v("Оставить заявку")])])]):t._e(),t._v(" "),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"summ"},[n("span",[t._v("Итоговая стоимость:")]),t._v(" "),n("div",[t._v(t._s(t.total)+"₽")])]),t._v(" "),t.isBuyble?t._e():n("div",{staticClass:"form__nav"},[n("div",{staticClass:"form__next"},[n("button",{staticClass:"btn btn_type_flat btn_size_big",attrs:{disabled:0===t.cartItems.length,type:"submit"},on:{click:function(e){t.isBuyble=!0}}},[t._v("Продолжить")])])])])])])],1)])},[],!1,null,"5cc1846e",null);e.default=component.exports},245:function(t,e,n){"use strict";var r=n(214);n.n(r).a},246:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,'[data-v-7fe4709a]:root{--primary-color:rgba(13,110,139,0.75);--overlay-color:rgba(24,39,51,0.85);--menu-speed:0.75s}*[data-v-7fe4709a]{box-sizing:border-box;color:#fff;font-family:Roboto,sans-serif}nav[data-v-7fe4709a]{position:fixed;width:100%;z-index:999;opacity:1}.container[data-v-7fe4709a]{padding:0 4%;background-color:#344d6d}.header__nav[data-v-7fe4709a]{flex-direction:row;justify-content:space-between;height:62px}.header__menu[data-v-7fe4709a],.header__nav[data-v-7fe4709a]{display:flex;align-items:center}.header__menu[data-v-7fe4709a]{justify-content:space-evenly;width:100%;font-size:17px;font-weight:600;list-style-type:none;text-decoration:none}.header__nav .logo img[data-v-7fe4709a]{width:240px;padding:1% 0}.header__menu a[data-v-7fe4709a]{opacity:.9;color:#fff;text-decoration:none}.header__menu a[data-v-7fe4709a]:hover{text-decoration:none;opacity:1;transition:.5s;font-size:18px;cursor:pointer}.header__menu a.nuxt-link-active[data-v-7fe4709a],.header__menu a[data-v-7fe4709a]:active,.header__menu a[data-v-7fe4709a]:hover{color:#fff;border-bottom:2px solid #f8f4f4;padding:20px 0}.header__nav-block[data-v-7fe4709a]{flex:1;justify-content:space-between;align-items:center}.phone[data-v-7fe4709a]{padding-right:25px}.cart[data-v-7fe4709a],.phone[data-v-7fe4709a]{position:relative;display:inline-block}.cart[data-v-7fe4709a]{cursor:pointer}.cart span[data-v-7fe4709a]{float:right;padding-left:10px;line-height:23px}.phone img[data-v-7fe4709a]{height:20px;margin-right:10px}.phone img[data-v-7fe4709a],.phone span[data-v-7fe4709a]{float:right}.header__nav-blockk[data-v-7fe4709a]{width:30%;position:relative;text-align:right;flex:1}.header__nav-blockk-active[data-v-7fe4709a]{display:none}.header__nav .header__nav-block[data-v-7fe4709a]:nth-of-type(2){width:60%;align-content:center;flex:2}.header__nav-block[data-v-7fe4709a]:last-child{width:15%}.header__nav-block span[data-v-7fe4709a]{font-size:18px}.menu-wrap[data-v-7fe4709a]{position:absolute;top:0;left:0;z-index:1}.menu-wrap .toggler[data-v-7fe4709a]{position:absolute;top:0;left:0;z-index:2;cursor:pointer;width:50px;height:50px;opacity:0}.menu-wrap .hamburger[data-v-7fe4709a]{position:absolute;top:0;left:0;z-index:1;width:60px;height:60px;padding:1rem;visibility:hidden}.menu-wrap .hamburger[data-v-7fe4709a],.menu-wrap .hamburger>div[data-v-7fe4709a]{display:flex;align-items:center;justify-content:center}.menu-wrap .hamburger>div[data-v-7fe4709a]{position:relative;width:100%;height:2px;background-color:#fff;transition:all .4s ease}.menu-wrap .hamburger>div[data-v-7fe4709a]:after,.menu-wrap .hamburger>div[data-v-7fe4709a]:before{content:"";position:absolute;z-index:1;top:-10px;width:100%;height:2px;background:inherit}.menu-wrap .hamburger>div[data-v-7fe4709a]:after{top:10px}.menu-wrap .toggler:checked+.hamburger>div[data-v-7fe4709a]{transform:rotate(135deg)}.menu-wrap .toggler:checked+.hamburger>div[data-v-7fe4709a]:after,.menu-wrap .toggler:checked+.hamburger>div[data-v-7fe4709a]:before{top:0;transform:rotate(90deg)}.menu-wrap .toggler:checked:hover+.hamburger>div[data-v-7fe4709a]{transform:rotate(225deg)}.menu-wrap .toggler:checked~.menu[data-v-7fe4709a]{visibility:visible}.menu-wrap .toggler:checked~.menu>div[data-v-7fe4709a]{transform:scale(1);transition-duration:.75s}.menu-wrap .toggler:checked~.menu>div>div[data-v-7fe4709a]{opacity:1;transition:opacity .4 ease}.menu-wrap .menu[data-v-7fe4709a]{position:fixed;top:0;left:0;width:100%;height:100%;visibility:hidden;overflow:hidden}.menu-wrap .menu[data-v-7fe4709a],.menu-wrap .menu>div[data-v-7fe4709a]{display:flex;align-items:center;justify-content:center}.menu-wrap .menu>div[data-v-7fe4709a]{background:rgba(0,0,0,.76);border-radius:50%;width:300vw;height:300vw;flex:none;transform:scale(0);transition:all .4s ease}.menu-wrap .menu>div>div[data-v-7fe4709a]{text-align:center;max-width:90vw;max-height:100vh;opacity:0;transition:opacity .4s ease}.menu-wrap .menu>div>div>ul>li[data-v-7fe4709a]{list-style:none;color:#fff;font-size:1.5rem;padding:1rem}.menu-wrap .menu>div>div>ul>li>a[data-v-7fe4709a]{color:inherit;text-decoration:none;transition:color .4s ease}@media (max-width:1150px){.header__nav-block[data-v-7fe4709a]{display:none}.menu-wrap .hamburger[data-v-7fe4709a]{visibility:visible}}@media (max-width:450px){.phone img[data-v-7fe4709a]{display:none}.header__nav[data-v-7fe4709a]{height:53px}}',""])},267:function(t,e,n){"use strict";n.r(e);n(58),n(23),n(24),n(14),n(41);var r=n(25),o=n(26);function c(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}var d={components:{Cart:n(221).default},name:"Navbar",data:function(){return{isCartVisible:!1,prods:[]}},methods:{closeCart:function(){this.isCartVisible=!1,document.getElementsByTagName("body")[0].style.overflow="auto"},showCart:function(){this.isCartVisible=!0,document.getElementsByTagName("body")[0].style.overflow="hidden"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.c)("cart",{cartLen:"cartTotalLen"})),mounted:function(){}},l=(n(245),n(11)),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("cart",{directives:[{name:"show",rawName:"v-show",value:t.isCartVisible,expression:"isCartVisible"}],on:{close:t.closeCart}}),t._v(" "),n("nav",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"menu-wrap"},[n("input",{staticClass:"toggler",attrs:{type:"checkbox"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"menu"},[n("div",[n("div",[n("ul",{staticClass:"burger_list"},[n("li",[n("nuxt-link",{attrs:{exact:"","no-prefetch":"",to:"/"}},[t._v("Главная")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/catalog",exact:"","no-prefetch":""}},[t._v("Каталог")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])]),t._v(" "),n("div",{staticClass:"header__nav"},[t._m(3),t._v(" "),n("div",{staticClass:"header__nav-block"},[n("ul",{staticClass:"header__menu"},[n("li",[n("nuxt-link",{attrs:{exact:"","no-prefetch":"",to:"/"}},[t._v("Главная")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/catalog",exact:"","no-prefetch":""}},[t._v("Каталог")])],1),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),t._m(6)]),t._v(" "),n("div",{staticClass:"header__nav-blockk"},[t._m(7),t._v(" "),n("div",{staticClass:"cart",on:{click:t.showCart}},[n("img",{attrs:{src:"/img/Cart.png",alt:""}}),t._v(" "),n("span",{staticStyle:{"font-weight":"600"}},[t._v("[ "+t._s(t.cartLen)+" ]")])])])])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hamburger"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#advantages"}},[this._v("O Компании")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#how-work"}},[this._v("Наш Сервис")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header__nav-block"},[e("a",{attrs:{href:"/"}},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/img/logo1.png",alt:"технические решения"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#advantages"}},[this._v("O Компании")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#how-work"}},[this._v("Наш Сервис")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-btn"},[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"phone"},[e("span",[this._v("8(8332) 555-55-55")]),this._v(" "),e("img",{attrs:{src:"/img/phone.png"}})])}],!1,null,"7fe4709a",null);e.default=component.exports}}]);