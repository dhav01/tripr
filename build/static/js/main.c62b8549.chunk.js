(this.webpackJsonptriprtrail=this.webpackJsonptriprtrail||[]).push([[0],{149:function(e,t,s){},452:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s.n(a),i=s(140),c=s.n(i),r=(s(149),s(20)),l=s(21),o=s(23),d=s(22),h=s(143).a.initializeApp({apiKey:"AIzaSyDxLEJxUWajTUH8pegqm4ZoZeehM6lEuko",authDomain:"tripr-56117.firebaseapp.com",projectId:"tripr-56117",storageBucket:"tripr-56117.appspot.com",messagingSenderId:"842337251375",appId:"1:842337251375:web:3172203f36889b3273d6da",measurementId:"G-NH9970P07Y"}),j=s(36),b=s(144),u=(s(48),s(2)),p=[{}],O=[],m=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleSubmit=function(e){null!=h.auth().currentUser&&console.log("user"+h.auth().currentUser.uid),e.preventDefault();for(var t=0;t<p.length;t++)p[t].deptDate===a.props.departureDate&&p[t].destination===a.props.destination&&p[t].source===a.props.source?(O[t]=p[t],console.log("data found at: "+t)):console.log("different data");console.log("size of temp: "+O.length),a.setState({flight:O}),O=[]},a.renderMap=function(){return console.log("length: "+a.state.flight.length),Object.entries(a.state.flight).map((function(e){var t=Object(b.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"cardview",children:[Object(u.jsx)("div",{class:"source",children:n.airlines}),Object(u.jsxs)("div",{class:"timing",children:[n.deptTime,"-",n.arrivalTime]}),Object(u.jsx)("div",{class:"duration",children:n.duration}),Object(u.jsx)("div",{class:"source",children:n.source}),Object(u.jsx)("div",{class:"destination",children:n.destination}),Object(u.jsx)("div",{class:"departure",children:n.deptDate}),Object(u.jsx)("div",{class:"price",children:n.price}),Object(u.jsx)("button",{class:"info-btn",hidden:null==n.seats,onClick:function(e){e.preventDefault(),a.handleInfo(s)},children:"More info"}),Object.keys(a.state.showMore).length>0&&a.state.showMore[s]&&Object(u.jsx)("div",{class:"cardview2",children:Object(u.jsxs)("div",{class:"more-info",id:"id-".concat(s),children:[" ",Object(u.jsxs)("div",{class:"seatsavailable",children:[Object(u.jsx)("p",{children:"Seats Available: "})," ",n.seats]}),Object(u.jsxs)("div",{class:"airports",children:[Object(u.jsxs)("div",{class:"airport",children:[Object(u.jsx)("p",{children:"Source: "}),n.dept]}),Object(u.jsxs)("div",{class:"airport",children:[Object(u.jsx)("p",{children:"Destination: "}),n.arrival]}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{class:"book-btn",href:n.link,target:"_blank",rel:"noopener noreferrer",children:"Book"})})]})]})})]})},s)}))},a.state={flight:[],showMore:{}},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){console.log("ComponentDidMount method called"),h.database().ref().child("FlightsData").on("value",(function(e){p=e.val(),console.log(p)}))}},{key:"handleInfo",value:function(e){this.setState((function(t){return{showMore:Object(j.a)({},e,!(Object.keys(t.showMore).length>0&&t.showMore[e]))}}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{class:"sub-btn",onClick:this.handleSubmit,children:"Submit Data"}),this.renderMap()]})}}]),s}(a.Component),x=s.p+"static/media/pic1.7bde9ebb.svg",v=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this)).handleInfo=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={source:"",destination:"",departuredate:"",adults:0,children:0,infants:0},a}return Object(l.a)(s,[{key:"tryDate",value:function(){if("Round Trip"==this.state.journeyType)return Object(u.jsx)("input",{type:"date",name:"returnDate",value:this.state.returnDate,onChange:this.handleInfo})}},{key:"foo",value:function(){console.log("baz"),window.scrollTo(0,600)}},{key:"render",value:function(){var e=this;this.state.flights;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{class:"main",children:Object(u.jsxs)("div",{class:"main-container",children:[Object(u.jsxs)("div",{class:"main-content",children:[Object(u.jsx)("h1",{children:"Book your Tickets!"}),Object(u.jsx)("p",{children:"Tripr allows you to find the best way to reach your Destination"}),Object(u.jsx)("button",{class:"main-btn",onClick:function(){return e.foo()},children:Object(u.jsx)("a",{children:"Get Started"})})]}),Object(u.jsx)("div",{class:"main-img-container",children:Object(u.jsx)("img",{src:x,alt:"Error",id:"main-img"})})]})}),Object(u.jsx)("div",{class:"canvas",children:Object(u.jsxs)("div",{class:"center",children:[Object(u.jsxs)("div",{class:"property-card",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("div",{class:"property-image"})}),Object(u.jsx)("div",{class:"property-image-title",children:Object(u.jsx)("h5",{children:"Try Searching"})}),Object(u.jsxs)("div",{class:"property-description",children:[Object(u.jsx)("h5",{children:" Accurate Flight Search "}),Object(u.jsx)("p",{children:"Here at Tripr we make sure that our Users get accurate data about the flights that are available as per Users demand."})]}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("div",{class:"property-social-icons"})})]}),Object(u.jsxs)("div",{class:"property-card",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("div",{class:"property-image1"})}),Object(u.jsx)("div",{class:"property-image-title",children:Object(u.jsx)("h5",{children:"Let's Check"})}),Object(u.jsxs)("div",{class:"property-description",children:[Object(u.jsx)("h5",{children:" Latest Flight Status "}),Object(u.jsx)("p",{children:"Tripr makes sure that our Users gets latest status for the Flight they choose."})]}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("div",{class:"property-social-icons"})})]}),Object(u.jsxs)("div",{class:"property-card",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("div",{class:"property-image2"})}),Object(u.jsx)("div",{class:"property-image-title",children:Object(u.jsx)("h5",{children:"Free to use"})}),Object(u.jsxs)("div",{class:"property-description",children:[Object(u.jsx)("h5",{children:" Free Platform "}),Object(u.jsx)("p",{children:"Tripr is a free platform, developed for helping the Society. If you want to support us you can Donate!"})]}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("div",{class:"property-social-icons"})})]})]})}),Object(u.jsx)("div",{class:"search",id:"search",children:Object(u.jsxs)("div",{class:"search__container",children:[Object(u.jsx)("div",{class:"search__content",children:Object(u.jsx)("h1",{children:"Search here"})}),Object(u.jsx)("div",{class:"form",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsxs)("div",{class:"data-form",children:[Object(u.jsx)("h1",{children:"Let's find a Flight as per your convenience"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"Source",name:"source",value:this.state.source,onChange:this.handleInfo})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"Destination",name:"destination",value:this.state.destination,onChange:this.handleInfo})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"date",placeholder:"select Date",name:"departuredate",value:this.state.departuredate,onChange:this.handleInfo})}),Object(u.jsx)("div",{children:this.tryDate()}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",placeholder:"No. of Adults",name:"adults",value:this.state.adults,onChange:this.handleInfo})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",placeholder:"No. of Children",name:"children",value:this.state.children,onChange:this.handleInfo})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",placeholder:"No. of Infants",name:"infants",value:this.state.infants,onChange:this.handleInfo})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{source:this.state.source,destination:this.state.destination,departureDate:this.state.departuredate.toString()})})]})})]})}),Object(u.jsxs)("div",{class:"footer__container",children:[Object(u.jsx)("div",{class:"footer__links",children:Object(u.jsxs)("div",{class:"footer__link--wrapper",children:[Object(u.jsxs)("div",{class:"footer__link--items",children:[Object(u.jsx)("h2",{children:"About Website"}),Object(u.jsx)("a",{href:"mailto:tripperplan2020@gmail.com",children:"Email Us!"}),Object(u.jsx)("a",{href:"/t&c",children:"Terms & Conditions"})]}),Object(u.jsxs)("div",{class:"footer__link--items",children:[Object(u.jsx)("h2",{children:"About Developers"}),Object(u.jsx)("a",{href:"mailto:agrawaldhaval45@gmail.com",children:"Email"}),Object(u.jsx)("a",{href:"/instagram",children:"Instagram"})]})]})}),Object(u.jsx)("div",{class:"rights",children:Object(u.jsx)("p",{children:"Copyrights Tripr 2021. All rights reserved"})})]})]})}}]),s}(a.Component),f=(s(153),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleLogin=function(){h.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then((function(e){console.log("Sign In successful")})).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":a.setState({errorMessage:e.message});break;case"auth/wrong-password":a.setState({pwdError:e.message})}}))},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.selectForm=function(){return a.setState((function(e){return{loginDisabled:!e.loginDisabled}})),Object(u.jsxs)("div",{class:"main",children:[Object(u.jsx)("div",{class:"signup",children:Object(u.jsxs)("form",{action:"#",class:"signup_form",children:[Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",placeholder:"email",name:"email",value:a.state.email,onChange:a.handleChange})]}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"password",children:"Password"}),Object(u.jsx)("input",{id:"password",type:"password",placeholder:"password",name:"password",value:a.state.password,onChange:a.handleChange})]})]})}),Object(u.jsx)("button",{onClick:a.handleLogin,children:"Login"})]})},a.state={email:"",password:"",currentUser:null,loginDisabled:!0},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{class:"toggle",children:[Object(u.jsx)("button",{class:"btn",id:"toggle-btn",onClick:this.selectForm,disabled:this.state.loginDisabled,children:"login"}),Object(u.jsx)("button",{class:"btn",id:"toggle-btn",onClick:this.selectForm,disabled:!this.state.loginDisabled,children:"Sign Up"})]}),this.state.loginDisabled?Object(u.jsx)("div",{class:"main",children:Object(u.jsx)("div",{class:"signup",children:Object(u.jsxs)("form",{action:"#",class:"signup_form",children:[Object(u.jsx)("div",{class:"img-overlay"}),Object(u.jsx)("h1",{children:"Login"}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"password",children:"Password"}),Object(u.jsx)("input",{id:"password",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(u.jsx)("button",{class:"btn",id:"login-btn",onClick:this.handleLogin,children:"Login"})]})})}):Object(u.jsx)(g,{})]})}}]),s}(a.Component)),g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleSignUp=function(e){e.preventDefault();var t=h.database().ref().child("users");if(a.state.password!==a.state.confirmPassword)console.log("password Do not Match");else{a.state.name,a.state.email;h.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then((function(e){var s=h.auth().currentUser.uid;t.child(s).set({name:a.state.name,email:a.state.email});var n={};a.state.name||(!1,n.name="*Please enter your username."),a.state.email||(!1,n.email="*Please enter your email-ID."),a.state.password||(!1,n.password="*Please enter your password."),a.state.confirmPassword||(!1,n.confirmPassword="*Please enter your confirm password."),a.state.password.match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)?(console.log("Sign up Successful: "+e),a.setState({user:e}),console.log(e.email)):(!1,n.password="*Please enter secure and strong password.",console.log("fail")),a.setState({errors:n})})).catch((function(e){console.log("Error: "+e.toString())}))}},a.handleData=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={name:"",email:"",password:"",confirmPassword:"",user:null,errors:{}},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{class:"main",children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{class:"signup",children:Object(u.jsxs)("form",{action:"#",class:"signup_form",children:[Object(u.jsx)("div",{class:"img-overlay"}),Object(u.jsx)("h1",{children:"Join our platform to make your search easy"}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"name",children:"Name"}),Object(u.jsx)("input",{id:"name",type:"name",placeholder:"name",name:"name",value:this.state.name,onChange:this.handleData})]}),Object(u.jsx)("p",{children:this.state.errors.name}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleData})]}),Object(u.jsx)("p",{children:this.state.errors.email}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"password",children:"Password"}),Object(u.jsx)("input",{id:"password",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleData})]}),Object(u.jsx)("p",{children:this.state.errors.password}),Object(u.jsxs)("div",{class:"inputs",children:[Object(u.jsx)("label",{for:"password2",children:"Confirm Password"}),Object(u.jsx)("input",{id:"password2",type:"password",placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleData})]}),Object(u.jsx)("p",{children:this.state.errors.confirmPassword}),Object(u.jsx)("button",{class:"btn",onClick:this.handleSignUp,children:"Sign Up"}),Object(u.jsxs)("p",{id:"question",children:["Already a User ? ",Object(u.jsx)("span",{children:"Login Tripr"})]})]})})})})})}}]),s}(a.Component),w=s(47),y=s(10),k=s.p+"static/media/pic2.41742d6d.svg",C=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleLogOut=function(){h.auth().signOut(),console.log("logged out successfully")},a.state={name:""},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().child("users").child(h.auth().currentUser.uid).on("value",(function(t){e.setState({name:t.val().name})}))}},{key:"render",value:function(){return Object(u.jsx)("div",{class:"main",children:Object(u.jsxs)("div",{class:"main-container",children:[Object(u.jsxs)("div",{class:"main-content",children:[Object(u.jsxs)("h1",{children:["Hello ",this.state.name.toUpperCase()," "]}),Object(u.jsx)("button",{class:"btn",id:"logout",onClick:this.handleLogOut,children:"LogOut"}),Object(u.jsx)("p",{children:"Welcome to TRIPR "}),Object(u.jsx)("p",{children:"Tripr allows you to find the best way to reach your Destination"})]}),Object(u.jsx)("div",{class:"main-img-container",children:Object(u.jsx)("img",{src:k,alt:"Error",id:"main-img"})})]})})}}]),s}(a.Component),S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).authListener=function(){h.auth().onAuthStateChanged((function(e){e?a.setState({user:e}):a.setState({user:null})}))},a.state={user:null},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"foo",value:function(){console.log("baz"),window.scrollTo(0,730)}},{key:"render",value:function(){var e=this;return Object(u.jsx)(w.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("nav",{class:"navbar",children:[Object(u.jsx)("div",{class:"navbar__container",children:Object(u.jsx)(w.b,{id:"navbar__logo",exact:!0,to:"/",children:"TRIPR"})}),Object(u.jsxs)("ul",{class:"navbar__menu",children:[Object(u.jsx)("li",{class:"navbar__item",children:Object(u.jsx)(w.b,{class:"navbar__links",id:"home-page",exact:!0,to:"/",children:"Home"})}),Object(u.jsx)("li",{class:"navbar__item",children:Object(u.jsx)("a",{onClick:function(){return e.foo()},class:"navbar__links",id:"search-page",children:"Search Flight"})}),Object(u.jsx)("li",{class:"navbar__item",children:null==this.state.user?Object(u.jsx)(w.b,{class:"navbar__links",id:"user-page",to:"/user",children:"User"}):Object(u.jsx)(w.b,{class:"navbar__links",id:"user-logout-page",exact:!0,to:"/user",children:"User"})})]})]}),Object(u.jsxs)(y.c,{children:[null==this.state.user?Object(u.jsx)(y.a,{path:"/user",component:f}):Object(u.jsx)(y.a,{path:"/user",component:C}),Object(u.jsx)(y.a,{exact:!0,path:"/",component:v})]})]})})}}]),s}(a.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,453)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),D()},48:function(e,t,s){}},[[452,1,2]]]);
//# sourceMappingURL=main.c62b8549.chunk.js.map