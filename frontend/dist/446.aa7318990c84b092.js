"use strict";(self.webpackChunkfinsweet_project=self.webpackChunkfinsweet_project||[]).push([[446],{1446:(p,l,c)=>{c.r(l),c.d(l,{LayoutComponent:()=>k});var o=c(1896),a=c(6223),f=c(9947),m=c(6814),n=c(5879),u=c(6427);function b(e,g){1&e&&(n.TgZ(0,"span",29),n._uU(1,"enter is valid email"),n.qZA())}function h(e,g){1&e&&(n.TgZ(0,"span",29),n._uU(1,"email is requerid"),n.qZA())}function x(e,g){if(1&e&&(n.TgZ(0,"div",27),n.YNc(1,b,2,0,"span",28),n.YNc(2,h,2,0,"span",28),n.qZA()),2&e){const r=n.oxw();n.xp6(1),n.Q6J("ngIf",r.form.get("email").hasError("pattern")),n.xp6(1),n.Q6J("ngIf",r.form.get("email").hasError("required"))}}function C(e,g){1&e&&(n.TgZ(0,"span",30),n._uU(1,"Send Successfully \u2714"),n.qZA())}let P=(()=>{class e{constructor(r){this.reqServ=r,this.isSendSuccessfully=!1,this.form=new a.cw({email:new a.NI("",[a.kI.required,a.kI.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])})}timeOutSendSuccessfully(){this.isSendSuccessfully=!0,setTimeout(()=>{this.isSendSuccessfully=!1},3e3)}save(){this.reqServ.addData(f.N.subscribe.get,this.form.value).subscribe(()=>{this.timeOutSendSuccessfully()}),this.form.reset()}static#n=this.\u0275fac=function(i){return new(i||e)(n.Y36(u.s))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-footer"]],standalone:!0,features:[n.jDz],decls:41,vars:6,consts:[[1,"footer_block"],[1,"footer_container"],[1,"about_block_footer"],["src","assets/Images/logos/logo.png","alt","this is logo",2,"display","block"],["routerLink","",1,"links_footer"],["routerLink","blog",1,"links_footer"],["routerLink","about-us",1,"links_footer"],["routerLink","contact",1,"links_footer"],["routerLink","privacy-policy",1,"links_footer"],[1,"subscribe_block_footer"],[1,"footer_enter_email"],[3,"formGroup","ngSubmit"],["formControlName","email","name","email","placeholder","Enter Your Email","type","email"],["class","email-validator-text-box",4,"ngIf"],[1,"global_button",2,"border","none",3,"disabled"],["class","send-successfully",4,"ngIf"],[1,"finstreet_and_social_sites"],[1,"mail_and_phone"],[1,"social_sites"],["target","_blank","href","https://www.facebook.com/"],["src","assets/Images/icons/facebook_gray.png","alt","this is icon facebook"],["target","_blank","href","https://twitter.com/"],["src","assets/Images/icons/twitter_gray.png","alt","this is icon twitter",2,"margin-left","26.67px"],["target","_blank","href","https://www.instagram.com/?hl=en"],["src","assets/Images/icons/instagram_gray.png","alt","this is icon instagram",2,"margin-left","26.67px"],["target","_blank","href","https://am.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"],["src","assets/Images/icons/linkedin_gray.png","alt","this is icon linkedin",2,"margin-left","26.67px"],[1,"email-validator-text-box"],["style","color: red;",4,"ngIf"],[2,"color","red"],[1,"send-successfully"]],template:function(i,t){1&i&&(n.TgZ(0,"footer")(1,"div",0)(2,"div",1)(3,"div",2),n._UZ(4,"img",3),n.TgZ(5,"div")(6,"a",4),n._uU(7,"Home"),n.qZA(),n.TgZ(8,"a",5),n._uU(9,"Blog"),n.qZA(),n.TgZ(10,"a",6),n._uU(11,"About us"),n.qZA(),n.TgZ(12,"a",7),n._uU(13,"Contact us"),n.qZA(),n.TgZ(14,"a",8),n._uU(15,"Privacy Policy"),n.qZA()()(),n.TgZ(16,"div",9)(17,"h2"),n._uU(18," Subscribe to our news letter to get latest updates and news "),n.qZA(),n.TgZ(19,"div",10)(20,"form",11),n.NdJ("ngSubmit",function(){return t.save()}),n._UZ(21,"input",12),n.YNc(22,x,3,2,"div",13),n.TgZ(23,"button",14),n._uU(24,"Subscribe"),n.qZA()(),n.YNc(25,C,2,0,"span",15),n.qZA()(),n.TgZ(26,"div",16)(27,"div",17)(28,"p"),n._uU(29,"Finstreet 118 2561 Fintown"),n.qZA(),n.TgZ(30,"p"),n._uU(31,"Hello@finsweet.com 020 7993 2905"),n.qZA()(),n.TgZ(32,"div",18)(33,"a",19),n._UZ(34,"img",20),n.qZA(),n.TgZ(35,"a",21),n._UZ(36,"img",22),n.qZA(),n.TgZ(37,"a",23),n._UZ(38,"img",24),n.qZA(),n.TgZ(39,"a",25),n._UZ(40,"img",26),n.qZA()()()()()()),2&i&&(n.xp6(20),n.Q6J("formGroup",t.form),n.xp6(1),n.Udp("border",t.form.invalid&&(t.form.touched||t.form.dirty)?"1px solid red":"1px solid #4C4C4C"),n.xp6(1),n.Q6J("ngIf",t.form.touched||t.form.dirty),n.xp6(1),n.Q6J("disabled",t.form.invalid),n.xp6(2),n.Q6J("ngIf",t.isSendSuccessfully))},dependencies:[a.UX,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,o.Bz,o.rH,m.O5],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.footer_block[_ngcontent-%COMP%]{background:#232536;display:flex;flex-direction:column}.footer_container[_ngcontent-%COMP%]{width:1280px;padding:59px 0 56px;margin:auto}.send-successfully[_ngcontent-%COMP%]{color:#0cbd37;display:block;margin-top:10px;text-align:center}.about_block_footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.about_block_footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.links_footer[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px;transition:scale .2s}.links_footer[_ngcontent-%COMP%]:hover{color:#8cc9ff}.links_footer[_ngcontent-%COMP%]:active{scale:.9}.subscribe_block_footer[_ngcontent-%COMP%]{background:rgba(255,255,255,.05);padding:80px 64px;margin-top:54.65px;display:flex;align-items:flex-start;justify-content:space-between}.subscribe_block_footer[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{color:#fff;font-family:Sen;font-size:36px;font-style:normal;font-weight:700;line-height:48px;letter-spacing:-2px;max-width:562px;margin-right:30px}.footer_enter_email[_ngcontent-%COMP%]{margin-top:7px;position:relative}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;align-items:center}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{transition:.3s scale;border:1px solid #4C4C4C;background-color:transparent;padding:13px 24.92px;width:323px;color:wheat;font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus{scale:1.05;outline:none;background-color:#5a5a5a5b}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::placeholder{color:#6d6e76;font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px}.finstreet_and_social_sites[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:48px}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > .global_button[_ngcontent-%COMP%]{margin-left:24px}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > .global_button[_ngcontent-%COMP%]:disabled{opacity:.4}.about_block_footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-left:24px}.finstreet_and_social_sites[_ngcontent-%COMP%] > .mail_and_phone[_ngcontent-%COMP%]{display:flex;flex-direction:column}.finstreet_and_social_sites[_ngcontent-%COMP%] > .mail_and_phone[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff;font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px;opacity:.7}.email-validator-text-box[_ngcontent-%COMP%]{position:absolute;bottom:-30px}.finstreet_and_social_sites[_ngcontent-%COMP%] > .social_sites[_ngcontent-%COMP%]{display:flex}@media screen and (max-width: 1330px){.footer_container[_ngcontent-%COMP%]{width:95%}}@media screen and (max-width: 1205px){.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{flex-direction:column;align-items:end}.email-validator-text-box[_ngcontent-%COMP%]{top:60px}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{margin:0 0 30px 40px}}@media screen and (max-width: 783px){.subscribe_block_footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.subscribe_block_footer[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-right:0}.email-validator-text-box[_ngcontent-%COMP%]{top:90px}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{align-items:center}.subscribe_block_footer[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{text-align:center}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{margin:30px 0}.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > .global_button[_ngcontent-%COMP%]{margin-left:0}}@media screen and (max-width: 889px){.subscribe_block_footer[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:30px;line-height:35px}}@media screen and (max-width: 650px){.about_block_footer[_ngcontent-%COMP%]{flex-direction:column}.about_block_footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:20px}}@media screen and (max-width: 490px){.about_block_footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:99%;justify-content:space-between}.about_block_footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin:0}.finstreet_and_social_sites[_ngcontent-%COMP%]{flex-direction:column}.finstreet_and_social_sites[_ngcontent-%COMP%] > .social_sites[_ngcontent-%COMP%]{margin-top:20px}.finstreet_and_social_sites[_ngcontent-%COMP%] > .mail_and_phone[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}}@media screen and (max-width: 420px){.about_block_footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:99%;justify-content:space-between;flex-direction:column}.subscribe_block_footer[_ngcontent-%COMP%]{padding:30px 24px}}@media screen and (max-width: 385px){.footer_enter_email[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%}.footer_container[_ngcontent-%COMP%]{padding:20px 0}}"]})}return e})();var _=c(617);const d=function(){return{exact:!0}};let O=(()=>{class e{constructor(){this.navBarScrollPosition=!1,this.innerWidth=innerWidth}scroll(){if(window.scrollY<200)this.navBarScrollPosition=!1;else{this.navBarScrollPosition=!0;let r=document.getElementsByTagName("footer")[0];window.scrollY>r.offsetTop-500&&(this.navBarScrollPosition=!1)}}scrollToElement(){document.getElementsByTagName("footer")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}static#n=this.\u0275fac=function(i){return new(i||e)};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-header"]],hostBindings:function(i,t){1&i&&n.NdJ("scroll",function(){return t.scroll()},!1,n.Jf7)},standalone:!0,features:[n.jDz],decls:45,vars:14,consts:[[1,"header_container"],["routerLink","","src","assets/Images/logos/logo.png","alt","this is header logo",1,"header_logo"],[1,"nav_block"],["routerLink","","routerLinkActive","router-active",1,"nav_links",3,"routerLinkActiveOptions"],["routerLink","blog","routerLinkActive","router-active",1,"nav_links",2,"margin-left","24px"],["routerLink","about-us","routerLinkActive","router-active",1,"nav_links",2,"margin-left","24px"],["routerLink","contact","routerLinkActive","router-active",1,"nav_links",2,"margin-right","32px","margin-left","24px"],["routerLink","/admin/login",1,"sign-in-button"],[1,"btn_sub_header",3,"click"],[1,"mobile-nav_block"],["src","assets/Images/icons/header-mobile-menu.png","alt","this icon mobile menu",1,"header-mobile-menu"],["id","chackbox","type","checkbox",1,"mobile_menu_checkbox"],[1,"mobile_menu"],["routerLink","/","routerLinkActive","router-active-mobile",1,"nav_links-mobile",3,"routerLinkActiveOptions"],[2,"margin-right","10px"],["routerLink","blog","routerLinkActive","router-active-mobile",1,"nav_links-mobile"],["routerLink","about-us","routerLinkActive","router-active-mobile",1,"nav_links-mobile"],["routerLink","contact","routerLinkActive","router-active-mobile",1,"nav_links-mobile"],[1,"btn_sub_header-mobile",3,"click"],["routerLink","/admin/login",1,"sign-in-button-mobile"]],template:function(i,t){1&i&&(n.TgZ(0,"header")(1,"div")(2,"div",0),n._UZ(3,"img",1),n.TgZ(4,"nav")(5,"div",2)(6,"a",3),n._uU(7,"Home"),n.qZA(),n.TgZ(8,"a",4),n._uU(9,"Blog"),n.qZA(),n.TgZ(10,"a",5),n._uU(11,"About Us"),n.qZA(),n.TgZ(12,"a",6),n._uU(13,"Contact us"),n.qZA(),n.TgZ(14,"a",7),n._uU(15,"Sign In"),n.qZA(),n.TgZ(16,"a",8),n.NdJ("click",function(){return t.scrollToElement()}),n._uU(17,"Subscribe"),n.qZA()(),n.TgZ(18,"div",9)(19,"label"),n._UZ(20,"img",10)(21,"input",11),n.TgZ(22,"div",12)(23,"a",13)(24,"mat-icon",14),n._uU(25,"home"),n.qZA(),n._uU(26," Home "),n.qZA(),n.TgZ(27,"a",15)(28,"mat-icon",14),n._uU(29,"event_list"),n.qZA(),n._uU(30," Blog "),n.qZA(),n.TgZ(31,"a",16)(32,"mat-icon",14),n._uU(33,"group"),n.qZA(),n._uU(34," About Us "),n.qZA(),n.TgZ(35,"a",17)(36,"mat-icon",14),n._uU(37,"construction"),n.qZA(),n._uU(38," Contact us "),n.qZA(),n.TgZ(39,"a",18),n.NdJ("click",function(){return t.scrollToElement()}),n._uU(40,"Subscribe"),n.qZA(),n.TgZ(41,"a",19),n._uU(42," Sign In "),n.TgZ(43,"mat-icon"),n._uU(44,"login"),n.qZA()()()()()()()()()),2&i&&(n.xp6(1),n.Tol(t.navBarScrollPosition?"header_block header-anim":"header_block"),n.Udp("-webkit-backdrop-filter",t.navBarScrollPosition&&t.innerWidth>850?"blur(10px)":"0")("backdrop-filter",t.navBarScrollPosition&&t.innerWidth>850?"blur(10px)":"0")("background-color",t.navBarScrollPosition?"rgba(35, 37, 54, 0.69)":"rgba(35, 37, 54, 1)")("position",t.navBarScrollPosition?"fixed":"absolute"),n.xp6(5),n.Q6J("routerLinkActiveOptions",n.DdM(12,d)),n.xp6(17),n.Q6J("routerLinkActiveOptions",n.DdM(13,d)))},dependencies:[o.Bz,o.rH,o.Od,_.Ps,_.Hw],styles:['.header_block[_ngcontent-%COMP%]{padding:12px 0;background:#232536;position:absolute;left:0;right:0;z-index:999}.header-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_header-anim 2s alternate}@keyframes _ngcontent-%COMP%_header-anim{0%{top:-200px;opacity:0}to{top:0;opacity:1}}*[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.header_container[_ngcontent-%COMP%]{width:1280px;margin:auto;display:flex;align-items:center;justify-content:space-between}.header_logo[_ngcontent-%COMP%]{display:block;width:140px;height:28.354px}.mobile-nav_block[_ngcontent-%COMP%]{display:none}.header-mobile-menu[_ngcontent-%COMP%]{width:35px;height:25px;display:block;position:relative;transition:.2s scale}.header-mobile-menu[_ngcontent-%COMP%]:active{scale:.92}.mobile_menu_checkbox[_ngcontent-%COMP%]{display:none}.mobile_menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:50px 30px;width:250px;height:100vh;z-index:99;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);justify-content:flex-start;align-items:center;box-shadow:#00000059 0 5px 15px;position:absolute;opacity:0;right:0;transform:translate(250px);top:0;background-color:#000000a6;transition:.3s ease}.mobile_menu_checkbox[_ngcontent-%COMP%]:hover + .mobile_menu[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.mobile_menu[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:100%;margin-bottom:-10px;padding:0;text-align:center}.mobile_menu[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff;font-weight:bolder;font-size:60px;display:block;width:100%;background-color:#ff000040;border-radius:10px;margin:20px 0}.nav_links[_ngcontent-%COMP%]{color:#fff;font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px;text-decoration:none;transition:.2s;display:inline-block}.mobile_menu[_ngcontent-%COMP%] > .nav_links[_ngcontent-%COMP%]{margin-top:20px;width:84%;text-align:center}.mobile_menu[_ngcontent-%COMP%] > .btn_sub_header-mobile[_ngcontent-%COMP%]{margin-top:20px;width:100%}.nav_links[_ngcontent-%COMP%]:active{scale:.91}.nav_links[_ngcontent-%COMP%]:hover{color:#578cff}.btn_sub_header-mobile[_ngcontent-%COMP%]{padding:16px 28px;background:#ffffff;border-radius:10px;display:inline-block;text-decoration:none;color:#232536;font-family:Sen;font-size:15px;text-align:center;font-style:normal;font-weight:700;transition:.2s}.btn_sub_header-mobile[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.btn_sub_header-mobile[_ngcontent-%COMP%]:active{scale:.95}.btn_sub_header[_ngcontent-%COMP%]{padding:16px 48px;background:#FFF;display:inline-block;text-decoration:none;color:#232536;font-family:Sen;font-size:18px;font-style:normal;font-weight:700;line-height:24px;transition:.2s background-color;cursor:pointer}.btn_sub_header[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.btn_sub_header[_ngcontent-%COMP%]:active{scale:.95}@media screen and (max-width: 1300px){.header_container[_ngcontent-%COMP%]{width:1200px}}@media screen and (max-width: 1234px){.header_container[_ngcontent-%COMP%]{width:1150px}}@media screen and (max-width: 1180px){.header_container[_ngcontent-%COMP%]{width:88.68%}}@media screen and (max-width: 850px){.mobile-nav_block[_ngcontent-%COMP%]{display:block}.nav_block[_ngcontent-%COMP%]{display:none}.nav_links[_ngcontent-%COMP%]:hover{color:#0058ff}}@media screen and (max-width: 480px){.mobile_menu[_ngcontent-%COMP%]{width:200px}}.router-active[_ngcontent-%COMP%]{color:#ffc834;border-radius:0;outline-offset:30px;height:100%;font-weight:bolder;position:relative}.router-active[_ngcontent-%COMP%]:after{content:"";width:100%;height:5px;display:block;position:absolute;bottom:-26px;background-color:#ffc834;border-radius:20px 20px 0 0}.router-active[_ngcontent-%COMP%]:active{scale:1}.router-active[_ngcontent-%COMP%]:hover{color:#ffc834}.sign-in-button[_ngcontent-%COMP%]{font-weight:bolder;text-decoration:none;margin-right:20px;padding:10px;background-color:#494949;color:#fff;border-radius:10px}.router-active-mobile[_ngcontent-%COMP%]:after{content:"";width:10px;height:40px;background-color:#ffc834;border-radius:7px 0 0 7px;position:absolute;display:block;right:-30px}.sign-in-button-mobile[_ngcontent-%COMP%]{font-weight:bolder;text-decoration:none;margin-top:20px;padding:10px;width:100%;text-align:center;display:flex;align-items:center;justify-content:space-between;background-color:#494949;color:#fff;border-radius:10px}.nav_links-mobile[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;margin-bottom:50px;width:100%;color:#fff;font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px;text-decoration:none;transition:.2s}.router-active-mobile[_ngcontent-%COMP%]{color:#ffc834;position:relative}']})}return e})(),k=(()=>{class e{constructor(){this.navBarScrollPosition=!1,this.window=window,this.innerWidth=innerWidth}scroll(){this.navBarScrollPosition=!(window.scrollY<100)}static#n=this.\u0275fac=function(i){return new(i||e)};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-layout"]],hostBindings:function(i,t){1&i&&n.NdJ("scroll",function(){return t.scroll()},!1,n.Jf7)},standalone:!0,features:[n.jDz],decls:4,vars:2,template:function(i,t){1&i&&(n._UZ(0,"app-header"),n.TgZ(1,"div"),n._UZ(2,"router-outlet"),n.qZA(),n._UZ(3,"app-footer")),2&i&&(n.xp6(1),n.Udp("padding-top",t.innerWidth>850?"80px":"50px"))},dependencies:[o.Bz,o.lC,O,P]})}return e})()},9947:(p,l,c)=>{c.d(l,{N:()=>a});const o="https://finsweet.adaptable.app/api/",a={category:{get:o+"category"},login:{get:o+"login"},register:{get:o+"register"},subscribe:{get:o+"subscribe"},host:{get:o},author:{get:o+"user"},logos:{get:o+"logos"},privacyPolicy:{get:o+"privacy-policy"},contactUs:{get:o+"contact-us"},posts:{get:o+"post"}}}}]);