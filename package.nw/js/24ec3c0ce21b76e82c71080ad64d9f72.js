'use strict';!function(require,directRequire){const a=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),b=require('fs');var c;module.exports={playVoice:async function(d,e){const f=global.windowMap.get('MAIN').window;let g=e.args,h=g.filePath,i=a.getFileRealPath(h),j=i.fileRealPath;if(c&&c.dataset.filePath!==h)c.remove();else if(c&&c.dataset.filePath===h)return void c.play();return c=document.createElement('audio'),f.document.body.appendChild(c),new Promise((a)=>{b.readFile(j,'utf8',(b,d)=>{b?a({errMsg:`${e.api}:fail read ${h} error`}):(c.src=d,c.play(),c.dataset.filePath=h,a({errMsg:`${e.api}:ok`}))})})},pauseVoice:async function(a,b){return c&&c.pause(),{errMsg:`${b.api}:ok`}},stopVoice:async function(a,b){return c&&c.remove(),c=void 0,{errMsg:`${b.api}:ok`}}}}(require('lazyload'),require);