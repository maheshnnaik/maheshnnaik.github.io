window.__require=function r(e,n,o){function t(u,c){if(!n[u]){if(!e[u]){var f=u.split("/");if(f=f[f.length-1],!e[f]){var l="function"==typeof __require&&__require;if(!c&&l)return l(f,!0);if(i)return i(f,!0);throw new Error("Cannot find module '"+u+"'")}u=f}var p=n[u]={exports:{}};e[u][0].call(p.exports,function(r){return t(e[u][1][r]||r)},p,p.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof __require&&__require,u=0;u<o.length;u++)t(o[u]);return t}({HelloWorld:[function(r,e){"use strict";cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},update:function(){}}),cc._RF.pop()},{}]},{},["HelloWorld"]);