"use strict";var Popups=function(){function t(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof t?(this.t=t,this.live=0,this.config=Object.assign({initShow:!0,addClass:"",bg:!0,closeHtml:!1,timeOut:0,append:document.body,created:function(){},show:function(){},close:function(){}},i),this._init_()):console.error("[Popups] contentString error")}var i=t.prototype;return i._init_=function(){this.nDocument=document.createElement("div"),this.nClose=document.createElement("big"),this.nBody=document.createElement("div"),this.nClose.className="popups-closebtn",this.config.closeHtml&&(this.nClose.innerHTML=this.config.closeHtml),this.nBody.className="popups-body",this.updateHtml(this.t),this.nDocument.className="popups-document "+this.config.addClass,this.nDocument.appendChild(this.nClose),this.nDocument.appendChild(this.nBody),this.config.bg&&(this.bombBg=document.createElement("div"),this.bombBg.className="popups-bg "+this.config.addClass);var i=this;this.nClose.addEventListener("click",function(t){i.close.call(i,i)},!1),"function"==typeof t.createdBefer&&t.createdBefer(this),this.config.created.call(this,this),this.config.initShow&&this.show.call(this,this)},i.show=function(){if(!this.live){var i=this;return this.live=1,this.config.append.appendChild(this.nDocument),this.config.bg&&this.config.append.appendChild(this.bombBg),0<this.config.timeOut&&setTimeout(function(t){i.close.call(i,this)},this.config.timeOut),"function"==typeof t.showBefer&&t.showBefer(this),this.config.show.call(this,this),this}},i.close=function(){return 1===this.live&&(this.live=0,this.config.append.removeChild(this.nDocument),this.config.bg&&this.config.append.removeChild(this.bombBg),"function"==typeof t.closeBefer&&t.closeBefer(this),this.config.close.call(this,this)),this},i.updateHtml=function(t,i){return this.t=t,this.nBody.innerHTML=this.t,i&&i(this),this},i.html=function(t){this.updateHtml(t)},t}();Popups.createdBefer=function(){},Popups.showBefer=function(){},Popups.closeBefer=function(){},module.exports=Popups;
