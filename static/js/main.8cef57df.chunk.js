(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),c=n.n(s),o=(n(14),n(2)),l=n(3),r=n(5),d=n(4),m=n(1),h=n(6),u=(n(15),n(16),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("ul",{id:"groceries"},this.props.items.map((function(t){return i.a.createElement(f,{key:t.id,id:t.id,text:t.text,completed:t.done,onItemCheckedOff:e.props.onItemCheckedOff,onDeleteItem:e.props.onDeleteItem})}))))}}]),t}(i.a.Component)),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).checkOffItem=n.checkOffItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"checkOffItem",value:function(e){this.props.onItemCheckedOff(this.props.id)}},{key:"deleteItem",value:function(e){this.props.onDeleteItem(this.props.id)}},{key:"render",value:function(){var e=this,t="groceryItem"+(this.props.completed?"done":"undone");return i.a.createElement("li",{className:t,ref:function(t){return e._listItem=t}},i.a.createElement("button",{type:"button",className:"btn deleteButton btn-sm",onClick:this.deleteItem},"X"),i.a.createElement("label",{className:"checkbox"},i.a.createElement("input",{type:"checkbox",onChange:this.checkOffItem}),i.a.createElement("span",null),this.props.text))}}]),t}(i.a.Component),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={items:[{id:1,text:"bananas",done:!1},{id:2,text:"milk",done:!1},{id:3,text:"bread",done:!1},{id:4,text:"cheese",done:!1}],text:"",ascending:!0},n.handleNewText=n.handleNewText.bind(Object(m.a)(n)),n.addItem=n.addItem.bind(Object(m.a)(n)),n.handleCheckOff=n.handleCheckOff.bind(Object(m.a)(n)),n.handleDeleteItem=n.handleDeleteItem.bind(Object(m.a)(n)),n.sortList=n.sortList.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleNewText",value:function(e){this.setState({text:e.target.value})}},{key:"addItem",value:function(e){e.preventDefault();var t={id:Date.now(),text:this.state.text,done:!1};this.setState((function(e){return{items:e.items.concat(t),text:""}}))}},{key:"handleCheckOff",value:function(e){var t=this.state.items.map((function(t){return e===t.id&&(t.done=!t.done),t}));this.setState({items:[].concat(t)})}},{key:"handleDeleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.id!==e}));this.setState({items:[].concat(t)})}},{key:"sortList",value:function(e){var t=this,n=this.state.items.sort((function(e,n){return t.state.ascending&&e.text>n.text?1:-1}));this.setState({ascending:!this.state.ascending,items:n})}},{key:"render",value:function(){return i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("form",null,i.a.createElement("input",{type:"text",name:"item",id:"textBox",className:"form-control",onChange:this.handleNewText,value:this.state.text,autocomplete:"off"}),i.a.createElement("button",{id:"addButton",className:"btn",onClick:this.addItem,disabled:!this.state.text},"Add Item")),i.a.createElement("div",{id:"postIt"},i.a.createElement("h1",null,"Shopping List"),i.a.createElement(u,{items:this.state.items,onItemCheckedOff:this.handleCheckOff,onDeleteItem:this.handleDeleteItem}),i.a.createElement("button",{id:"sortButton",className:"btn",onClick:this.sortList},"Alphabetize")))}}]),t}(i.a.Component);c.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.8cef57df.chunk.js.map