(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"65a0":function(e,t,r){"use strict";var s=r("e9aa"),a=r.n(s);a.a},bad1:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"tab_head"},[r("div",{staticClass:"tab_head_item",on:{click:e.routeToLogin}},[r("svg",{staticClass:"icon tab-icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-login"}})]),r("h2",{staticClass:"title"},[e._v("登录")])]),r("div",{staticClass:"tab_head_item tab-selected"},[r("svg",{staticClass:"icon tab-icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-signup"}})]),r("h2",{staticClass:"title"},[e._v("注册")])])]),r("el-form",{ref:"sigupForm",staticClass:"form_container",attrs:{model:e.form,rules:e.rules,"label-width":"0px","status-icon":""}},[r("el-form-item",{staticClass:"form_item",attrs:{prop:"email"}},[r("el-input",{staticClass:"form_input",attrs:{placeholder:"邮箱",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{staticClass:"form_item",attrs:{prop:"code"}},[r("el-input",{staticClass:"code_input",attrs:{placeholder:"验证码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),r("code-btn",{staticClass:"send_btn",attrs:{type:"primary"},on:{"send-code":e.sendCode}})],1),r("el-form-item",{staticClass:"form_item",attrs:{prop:"password"}},[r("el-input",{staticClass:"form_input",attrs:{placeholder:"密码",type:"password",autocomplete:"off","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"form_item",attrs:{prop:"checkPass"}},[r("el-input",{staticClass:"form_input",attrs:{placeholder:"确认密码",type:"password",autocomplete:"off","show-password":""},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass",t)},expression:"form.checkPass"}})],1),r("el-form-item",{staticClass:"form_item"},[r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:e.signup}},[e._v("Sign Up")])],1)],1)],1)},a=[],i=(r("96cf"),r("3b8d")),n=r("365c"),o=r("e116"),c={data:function(){var e=this,t=function(e,t,r){var s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(""===t)return r(new Error("邮箱不能为空"));s.test(t)?r():r(new Error("请输入正确的邮箱格式"))},r=function(t,r,s){""===r?s(new Error("请输入密码")):(""!==e.form.checkPass&&e.$refs.sigupForm.validateField("checkPass"),s())},s=function(t,r,s){""===r?s(new Error("请再次输入密码")):r!==e.form.password?s(new Error("两次密码不一致！")):s()};return{form:{email:"",password:"",code:"",checkPass:""},rules:{email:[{validator:t,trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:6,max:6,message:"验证码长度为 6 个字符",trigger:"blur"}],password:[{validator:r,trigger:"blur"},{min:6,max:20,message:"密码长度为 6-20 个字符",trigger:"blur"}],checkPass:[{validator:s,trigger:"blur"},{min:6,max:20,message:"密码长度为 6-20 个字符",trigger:"blur"}]}}},components:{codeBtn:o["a"]},methods:{routeToLogin:function(){this.$router.push({name:"login",query:{redirect:this.$route.query.redirect}})},sendCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["g"])({email:this.form.email});case 2:t=e.sent,0===t.code?this.$message.success("验证码已发送，请前往邮箱查看"):this.$message.error("验证码发送失败，请重试");case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),signup:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.sigupForm.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(r){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,Object(n["h"])({email:t.form.email,code:t.form.code,password:t.form.password});case 3:s=e.sent,0===s.code?(t.$message.success("注册成功，现在可以去登录啦"),t.$router.push({name:"login",query:{redirect:t.$route.query.redirect}})):t.$message.error("注册失败, 原因：".concat(s.msg)),e.next=9;break;case 7:return t.$message.success("请检验全部填写项是否符合要求"),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},l=c,u=(r("65a0"),r("2877")),m=Object(u["a"])(l,s,a,!1,null,null,null);t["default"]=m.exports},e116:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-button",{attrs:{type:"primary",disabled:e.isDisabled},on:{click:e.sendCodeClick}},[e._v(e._s(e.btnName))])},a=[],i={data:function(){return{btnName:"获取验证码",isDisabled:!1,time:60}},methods:{sendCodeClick:function(){var e=this;e.isDisabled=!0;var t=setInterval(function(){e.btnName="(".concat(e.time,"秒）后重新获取"),--e.time,e.time<0&&(e.btnName="获取验证码",e.time=10,e.isDisabled=!1,clearInterval(t))},1e3);this.$emit("send-code")}}},n=i,o=r("2877"),c=Object(o["a"])(n,s,a,!1,null,"3f4883aa",null);t["a"]=c.exports},e9aa:function(e,t,r){}}]);
//# sourceMappingURL=signup.ecc412d7.js.map