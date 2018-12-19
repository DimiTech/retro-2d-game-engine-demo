!function(e){var t={};function o(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=o(1),i=o(2),n=document.getElementById("canvas");n.width=s.CANVAS_WIDTH,n.height=s.CANVAS_HEIGHT,n.style.width=1!==s.SCALE?s.SCALE*s.CANVAS_WIDTH+"px":"auto",n.style.height=1!==s.SCALE?s.SCALE*s.CANVAS_HEIGHT+"px":"auto";const a=n.getContext("2d");class r{static clear(){a.clearRect(0,0,n.width,n.height)}static drawBox(e){a.strokeStyle=e.color,a.lineWidth=1,a.beginPath(),a.moveTo(.5+e.col*s.TILE_SIZE,.5+e.row*s.TILE_SIZE),a.lineTo(e.col*s.TILE_SIZE-.5+s.TILE_SIZE,.5+e.row*s.TILE_SIZE),a.lineTo(e.col*s.TILE_SIZE-.5+s.TILE_SIZE,e.row*s.TILE_SIZE-.5+s.TILE_SIZE),a.lineTo(.5+e.col*s.TILE_SIZE,e.row*s.TILE_SIZE-.5+s.TILE_SIZE),a.lineTo(.5+e.col*s.TILE_SIZE,.5+e.row*s.TILE_SIZE),a.moveTo(.5+e.col*s.TILE_SIZE,.5+e.row*s.TILE_SIZE),a.lineTo(e.col*s.TILE_SIZE-.5+s.TILE_SIZE,e.row*s.TILE_SIZE-.5+s.TILE_SIZE),a.moveTo(e.col*s.TILE_SIZE-.5+s.TILE_SIZE,.5+e.row*s.TILE_SIZE),a.lineTo(.5+e.col*s.TILE_SIZE,e.row*s.TILE_SIZE-.5+s.TILE_SIZE),a.stroke()}static drawPlayer(e){a.beginPath(),a.fillStyle="#00AA00",a.font="10px Monospace",a.fillText(`p (${e.x}, ${e.y})`,50,50);const t=i.default.x-n.offsetLeft,o=i.default.y-n.offsetTop;a.fillText(`m (${t}, ${o})`,50,62);const s=t-e.x,r=o-e.y;a.fillText(`d (${s}, ${r})`,50,74);const l=Math.atan2(r,s);a.fillText(`θ = ${l}`,50,86),a.strokeStyle="#523DA5",a.lineWidth=2,a.moveTo(e.x,e.y),a.lineTo(e.x+e.sightLineLength*Math.cos(l),e.y+e.sightLineLength*Math.sin(l)),a.stroke()}static drawCrosshair(){const e=i.default.x-n.offsetLeft,t=i.default.y-n.offsetTop;let o,s;a.strokeStyle="#FFFFFF",a.lineWidth=.5,a.beginPath(),o=.5,s=-1.5,a.moveTo(e+o,t+s),s=-3.5,a.lineTo(e+o,t+s),s=2.5,a.moveTo(e+o,t+s),s=4.5,a.lineTo(e+o,t+s),s=.5,o=-3.5,a.moveTo(e+o,t+s),o=-1.5,a.lineTo(e+o,t+s),o=2.5,a.moveTo(e+o,t+s),o=4.5,a.lineTo(e+o,t+s),a.stroke()}static drawPlayerVisionRay(e){const t=r.getCanvasMouseX(),o=r.getCanvasMouseY();a.strokeStyle="#FF4444",a.lineWidth=.2,a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(t,o),a.stroke()}static drawProjectiles(e){a.fillStyle="#FFFFFF",a.lineWidth=1,e.forEach(e=>{a.beginPath(),a.arc(e.x,e.y,2,0,2*Math.PI),a.stroke()})}}r.getCanvasDomElement=(()=>n),r.getCanvasMouseX=(()=>i.default.x-n.offsetLeft+.5),r.getCanvasMouseY=(()=>i.default.y-n.offsetTop+.5),t.default=r},function(e){e.exports={CANVAS_WIDTH:480,CANVAS_HEIGHT:320,TILE_SIZE:32,SCALE:1}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=o(0);class i{static init(e){this.hijackRightClick(),this.trackMouseOnCanvas(),this.listenForLeftClicks(e)}static hijackRightClick(){window.addEventListener("contextmenu",e=>{e.preventDefault()},!1)}static trackMouseOnCanvas(){s.default.getCanvasDomElement().addEventListener("mousemove",e=>{this.x=e.pageX,this.y=e.pageY},!1)}static listenForLeftClicks(e){const t=s.default.getCanvasDomElement();t.addEventListener("mousedown",t=>{e.setShooting(!0)},!1),t.addEventListener("mouseup",t=>{e.setShooting(!1)},!1)}}i.x=0,i.y=0,t.default=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(new(o(4).default)).start()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=o(0),i=o(2),n=o(5),a=o(6),r=o(7),l=o(9),c=new a.default,d=new r.default(c),u=new l.default(100,100);n.default.init(u),i.default.init(u);t.default=class{start(){window.requestAnimationFrame(()=>this.gameLoop())}gameLoop(){this.update(),this.render(),window.requestAnimationFrame(()=>this.gameLoop())}update(){u.update()}render(){s.default.clear(),d.draw(),u.draw()}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{static init(e){document.addEventListener("keydown",t=>{switch(t.keyCode){case 87:e.moving.up=!0;break;case 65:e.moving.left=!0;break;case 83:e.moving.down=!0;break;case 68:e.moving.right=!0}}),document.addEventListener("keyup",t=>{switch(t.keyCode){case 87:e.moving.up=!1;break;case 65:e.moving.left=!1;break;case 83:e.moving.down=!1;break;case 68:e.moving.right=!1}})}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=o(1);t.default=class{constructor(){this.rows=s.CANVAS_HEIGHT/s.TILE_SIZE,this.cols=s.CANVAS_WIDTH/s.TILE_SIZE}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=o(0),i=o(8);t.default=class{constructor(e){this.grid=e,this.boxes=[],this.loadMap(i)}draw(){this.boxes.forEach(e=>{s.default.drawBox(e)})}loadMap(e){if(this.grid.rows*this.grid.cols!==e.length)throw console.error(`Expected - columns: ${this.grid.cols}, rows: ${this.grid.rows}`),new Error(`Invalid Map file: ${e}`);let t,o;for(let s=0;s<e.length;++s)switch(o=s%this.grid.cols,t=Math.floor(s/this.grid.cols),e[s]){case 1:this.boxes.push({color:"#572F17",col:o,row:t});break;case 2:this.boxes.push({color:"#403550",col:o,row:t});break;case 3:this.boxes.push({color:"#27531B",col:o,row:t})}}}},function(e){e.exports=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=o(1),i=o(0),n=o(10);t.default=class{constructor(e,t){this.x=e,this.y=t,this.rotation=0,this.maxSpeed=3,this.moving={left:!1,right:!1,up:!1,down:!1},this.sightLineLength=10,this.shooting=!1,this.shootingCooldown=6,this.projectiles=[]}update(){this.move(),this.shoot(),this.updateProjectiles()}move(){this.moving.left&&(this.x-=this.maxSpeed),this.moving.right&&(this.x+=this.maxSpeed),this.moving.up&&(this.y-=this.maxSpeed),this.moving.down&&(this.y+=this.maxSpeed)}shoot(){if(this.shooting&&this.shootingCooldown<=0){const e=i.default.getCanvasMouseX(),t=i.default.getCanvasMouseY(),o=e-this.x,s=t-this.y;let a=o/(Math.abs(o)+Math.abs(s)),r=s/(Math.abs(o)+Math.abs(s));const l=.1*Math.random()-.05,c=.1*Math.random()-.05;a+=l,r+=c,this.projectiles.push(new n.default(this.x,this.y,a,r)),this.shootingCooldown=6}else--this.shootingCooldown}updateProjectiles(){this.projectiles.forEach((e,t)=>{e.x+=e.directionX*e.speed,e.y+=e.directionY*e.speed,(e.x<0||e.x>s.CANVAS_WIDTH||e.y<0||e.y>s.CANVAS_HEIGHT)&&this.projectiles.splice(t,1)})}draw(){i.default.drawPlayer(this),i.default.drawPlayerVisionRay(this),i.default.drawCrosshair(),i.default.drawProjectiles(this.projectiles)}setShooting(e){this.shooting=e}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t,o,s){this.x=e,this.y=t,this.directionX=o,this.directionY=s,this.speed=14}}}]);
//# sourceMappingURL=app.js.map