(this.webpackJsonpexptracker=this.webpackJsonpexptracker||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),s=n(6),o=n.n(s),i=n(46),l=n(21),j=n(30),d=n(37),u=n(81),b=n(43),O=n.n(b),p=n(80),x=function(e){var t=Object(a.useState)({amount:"",type:""}),n=Object(l.a)(t,2),r=n[0],s=n[1],o=function(e){e.preventDefault();var t=e.target,n=t.name,c=t.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,c))}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"TakeExpense",children:[Object(c.jsx)("input",{type:"number",min:"0",id:"amountInput",placeholder:"Enter Expense..",value:r.amount,name:"amount",onChange:o}),Object(c.jsxs)("select",{id:"dropdown",name:"type",onChange:o,value:r.type,children:[Object(c.jsx)("option",{children:"SelectCatagory"}),Object(c.jsx)("option",{value:"Food",children:"Food"}),Object(c.jsx)("option",{value:"Travel",children:"Travel"}),Object(c.jsx)("option",{value:"Petrol",children:"Petrol"})]}),Object(c.jsx)(p.a,{title:Object(c.jsx)("span",{className:"tt",children:"Add Expense"}),arrow:!0,placement:"bottom",children:Object(c.jsx)(u.a,{onClick:function(){""!==r.amount&&""!==r.type?r.amount>=0?(e.passExpense(r),s({amount:"",type:""})):alert("Please Enter Positive Amount"):alert("Please Enter Amount and its Expense-Type!")},id:"addBtn",children:Object(c.jsx)(O.a,{id:"addIconBtn"})})})]})})},h=n(44),m=n.n(h),f=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.amount}),Object(c.jsx)("td",{children:e.type}),Object(c.jsx)("td",{children:Object(c.jsx)(p.a,{title:Object(c.jsx)("span",{className:"tt",children:"Delete Expense"}),arrow:!0,placement:"left",children:Object(c.jsx)(u.a,{className:"btn",style:{marginLeft:"10px"},onClick:function(){e.deleteItem(e.id,e.amount)},children:Object(c.jsx)(m.a,{id:"deleteIcon"})})})})]})})},v=n(45),g=n.n(v);n(61);var E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),d=j[0],b=j[1],O=Object(a.useState)(0),h=Object(l.a)(O,2),m=h[0],v=h[1],E=function(e,t){v((function(e){return e-Number.parseInt(t)})),s((function(t){return t.filter((function(t,n){return n!==e}))}))};return r.a.useEffect((function(){var e=localStorage.getItem("expenses");e&&s(JSON.parse(e))}),[]),r.a.useEffect((function(){localStorage.setItem("expenses",JSON.stringify(n))})),r.a.useEffect((function(){var e=localStorage.getItem("totalAmount");e&&v(JSON.parse(e))}),[]),r.a.useEffect((function(){localStorage.setItem("totalAmount",JSON.stringify(m))})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{id:"header",children:"Expense Tracker"}),Object(c.jsxs)("h2",{id:"totalExpense",children:["Total Expense : ",Object(c.jsx)("span",{style:{fontSize:"3.5rem"},children:m})]}),Object(c.jsx)(x,{passExpense:function(e){v((function(t){return t+Number.parseInt(e.amount)})),s((function(t){return[].concat(Object(i.a)(t),[e])}))}}),Object(c.jsxs)("div",{className:"selectCat",children:[Object(c.jsxs)("select",{name:"cat",id:"dropdown2",onChange:function(e){var t=e.target.value;b(t)},value:d,children:[Object(c.jsx)("option",{value:"",children:"SelectCatagory"}),Object(c.jsx)("option",{value:"Food",children:"FOOD"}),Object(c.jsx)("option",{value:"Travel",children:"Travel"}),Object(c.jsx)("option",{value:"Petrol",children:"Petrol"})]}),Object(c.jsx)(p.a,{title:Object(c.jsx)("span",{className:"tt",children:"Clear Catagory"}),arrow:!0,placement:"bottom",children:Object(c.jsx)(u.a,{onClick:function(){b("")},className:"btn",children:Object(c.jsx)(g.a,{id:"clearIcon"})})})]}),Object(c.jsx)("div",{id:"expenseList",children:Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"AMOUNT"}),Object(c.jsx)("th",{children:"TYPE"}),Object(c.jsx)("th",{})]}),n.map((function(e,t){return e.type===d?Object(c.jsx)(f,{amount:e.amount,type:e.type,id:t,deleteItem:E},t):""}))]})}),Object(c.jsx)("p",{id:"footer",children:"Made With REACT"})]})};o.a.render(Object(c.jsx)(E,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.da1f56e2.chunk.js.map