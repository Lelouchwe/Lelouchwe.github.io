exports.ids=[9,1],exports.modules={109:function(t,e,d){"use strict";d.r(e);var n=d(41),r=d(4),o={components:{PMBtn:n.default},computed:{item(){let t=this.$route.params.id.split("-"),e=t[1],d=t[0];return this.$store.getters.getProductByName(e,d)}},methods:{...Object(r.mapActions)("cart",["addProductToCart"]),addToBasket(){let t,e=this.$route.params.id.split("-"),d=e[1],n=e[0];t=this.$store.getters.getProductByName(d,n),console.log("adding: "+t),this.$store.dispatch("addProductToCart",t)}}},c=d(1);var component=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-container"},[this._ssrNode('<div class="main" data-v-027df06e><div class="item" style="flex: 4" data-v-027df06e><div class="container" data-v-027df06e><div class="product_wrap" data-v-027df06e><div class="product" data-v-027df06e><h1 data-v-027df06e>'+this._ssrEscape(" Product "+this._s(this.$route.params.id))+'</h1> <div data-v-027df06e>ТУТ ИМАГА</div></div></div> <div class="product_nav" data-v-027df06e><div class="btns_minplus" data-v-027df06e></div></div></div></div> <div class="item-description_wrapper" style="flex: 8" data-v-027df06e><div class="descr-header" data-v-027df06e>'+this._ssrEscape(this._s(this.$route.params.id))+'</div> <div class="descr-text" data-v-027df06e>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, commodi, quis? Accusamus aspernatur assumenda consectetur debitis dignissimos, exercitationem, harum id ipsam nesciunt, nulla quaerat quasi quia reiciendis temporibus voluptatum. Animi.</div> <div class="actions_wrapper" data-v-027df06e><div class="descr-header" data-v-027df06e>27 500 ₽</div> <div style="display: flex;flex-direction: row;align-items: center" data-v-027df06e><div class="btn_incart" data-v-027df06e>\n                            В корзину\n                        </div></div></div></div></div>')])},[],!1,function(t){var e=d(77);e.__inject__&&e.__inject__(t)},"027df06e","46a91266");e.default=component.exports},37:function(t,e,d){var content=d(39);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=d(3).default;t.exports.__inject__=function(t){n("6b6d8da6",content,!0,t)}},38:function(t,e,d){"use strict";d.r(e);var n=d(37),r=d.n(n);for(var o in n)"default"!==o&&function(t){d.d(e,t,function(){return n[t]})}(o);e.default=r.a},39:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,"input[data-v-7076db40]::-webkit-inner-spin-button,input[data-v-7076db40]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-7076db40]{-moz-appearance:textfield}.btn-container[data-v-7076db40]{display:flex;flex-direction:row;justify-content:flex-start}.pm-child[data-v-7076db40]{color:#303030;height:30px;text-align:center;border-radius:2px;background-color:transparent;border-width:1px}input[data-v-7076db40]{width:50px}button[data-v-7076db40]{width:30px}",""])},41:function(t,e,d){"use strict";d.r(e);var n=d(4),r={name:"PlusMinusBtn",props:{item:Object},data:()=>({count:0}),methods:{...Object(n.mapMutations)("cart",{plus:"incrementItemCount",minus:"decrementItemCount"})},computed:{cnt:{get(){return this.$store.state.cart.items.find(t=>t.id===this.item.id).count},set(t){this.$store.commit("cart/setItemCount",{id:this.item.id,count:+t})}}},mounted(){this.count=this.item.count}},o=d(1);var component=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"btn-container"},[this._ssrNode('<button type="button" class="pm-child" data-v-7076db40>-</button> <input type="number" name="count-input"'+this._ssrAttr("value",this.cnt)+' class="pm-child" data-v-7076db40> <button type="button" class="pm-child" data-v-7076db40>+</button>')])},[],!1,function(t){var e=d(38);e.__inject__&&e.__inject__(t)},"7076db40","2c3cde34");e.default=component.exports},50:function(t,e,d){var content=d(78);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=d(3).default;t.exports.__inject__=function(t){n("320b5d4d",content,!0,t)}},77:function(t,e,d){"use strict";d.r(e);var n=d(50),r=d.n(n);for(var o in n)"default"!==o&&function(t){d.d(e,t,function(){return n[t]})}(o);e.default=r.a},78:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,".btn-container[data-v-027df06e]{display:flex;flex-direction:row;justify-content:flex-start}.pm-child[data-v-027df06e]{color:#303030;height:30px;text-align:center;border-radius:2px;background-color:transparent;border-width:1px}input[data-v-027df06e]{width:50px}button[data-v-027df06e]{width:30px}.actions_wrapper[data-v-027df06e]{border:1px solid #e2e2e2;border-radius:6px;padding:15px;height:40%;min-height:100px}.item-description_wrapper[data-v-027df06e]{padding:10px 10px 10px 10%}.descr-header[data-v-027df06e]{font-size:25px;margin-bottom:30px}.descr-text[data-v-027df06e]{opacity:.7;margin-bottom:40px}.page-container[data-v-027df06e]{width:100%;padding:100px 20px 20px}*[data-v-027df06e]{box-sizing:border-box;font-family:Roboto,sans-serif}.body_cat[data-v-027df06e]{background-color:#fff;width:100%}.body_cat h1[data-v-027df06e]{position:relative;text-align:left;margin-left:65px;color:#000;top:80px;font-size:37px}.wraper[data-v-027df06e]{display:flex;flex-direction:row;justify-content:space-between;margin-top:7%;min-height:100vh}.sidebar[data-v-027df06e],.wraper[data-v-027df06e]{position:relative}.sidebar[data-v-027df06e]{flex:1}.main[data-v-027df06e]{margin:0 auto;width:60%}.all_items[data-v-027df06e],.main[data-v-027df06e]{display:flex;flex-direction:row}.all_items[data-v-027df06e]{width:100%}.item[data-v-027df06e]{display:block;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important;border-radius:6px}.container[data-v-027df06e]{height:420px;display:flex;flex-direction:column}.btn_incart[data-v-027df06e]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border:none;outline:inherit;padding:13px 20px;font-family:Roboto,sans-serif;background-color:#4fc3f8;color:#fff;border-radius:3px;margin:10px;text-align:center;cursor:pointer;font-size:18px;font-weight:600}.btn_incart[data-v-027df06e]:hover{opacity:.85;transition:.4s ease-in-out}.product_wrap[data-v-027df06e]{position:relative;flex:6}.product_nav[data-v-027df06e]{position:relative;flex:1;display:flex;flex-direction:row}.btns_minplus[data-v-027df06e]{flex:1;position:relative;margin:15px auto 15px 18px;text-align:center}",""])}};
//# sourceMappingURL=6300d25f3ecb45560d60.js.map