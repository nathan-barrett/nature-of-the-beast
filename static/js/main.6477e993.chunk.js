(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports=[{slug:"old_knife",descriptions:["many objects carry with them anonymity.","This knife does not: it was loved as deeply as an object could be loved."],locationSlug:"inside"},{slug:"shovel",descriptions:["mom bought me this mini shovel when I turned fifteen","from the hardware store in town.","this was just before her desperation and sadness blossomed and eventually bore its devastating fruit","like water damage worming through a photo album.","The handle of this shovel is yellow fiberglass and maybe two feet long","And though it has spent years in damp neglect","the galvanized scoop has not rusted deeply.","I recall that the scoop is also sometimes called a blade","and feel the weapon's comfortable heft in my hand"],locationSlug:"trash_heap"}]},19:function(e){e.exports=[{slug:"a_quiet_forest",descriptions:["it is early morning.","cold rain is melting the what remaining empty and wet snow hangs from the boughs of the surrounding trees","I am surrounded by evergreens.","douglas fir.","I can make out a path heading into the fog."]},{slug:"a_path",descriptions:["somewhere in my brain, I am sure","this path is etched deeply and indelible. I could walk it in my sleep.","the ground sucks at my boots","and the moss beckons"]},{slug:"in_front_of_the_cabin",descriptions:["I am standing in front of the house I grew up in","it's been years since I've been back","I experience a strange mixture of feelings","melancholy, though maybe that's just the weather","pride, for leaving","apprehension, for what I know is inside"]},{slug:"side_yard",descriptions:["I tried to start a garden here once","I dreamt, specifically, of rhubarb in winter and tomatillos in summer","I dreamt of bringing these things to the dinner table and sharing them with my parents","it was a na\xefve aspiration, but who could fault a child for such a desire?","the side yard has been unused and unvisited since","a space ceded to the damp clamor of the pacific northwest.","The gate creaks in the wind.","And by it is a pile of cans and other refuse."]},{slug:"trash_heap",descriptions:["Towards the end, dad talked a lot about how the Oregon government was scamming us","by making us pay for can and bottle deposits they knew we'd never redeem","he started hoarding his empties, bragging about the big dinner he'd take us out on when he took them to the place.","over time, this project grew and consumed my garden.","I pick through the moss-covered aluminum like an archaeologist","and I find several parts of my childhood I had tried to forget."]},{slug:"backyard",descriptions:["a mockery of the suburban backyard, with a pool and everything","mom wanted a pool but she hated to swim","dad hated the suburbs but loved pool maintenance","their charade worked until it didn't.","a relic of multicolored plastic survives in the swampy remains of the pool","I am unsettled.","the damp sets into your bones.","I do not wish to stay."]},{slug:"inside",descriptions:["it is a cold cabin.","diffuse light flows and pools and illuminates","why did I return?"]}]},20:function(e){e.exports=[["a_quiet_forest","a_path"],["in_front_of_the_cabin","a_path"],["side_yard","in_front_of_the_cabin"],["side_yard","backyard"],["side_yard","trash_heap"],["in_front_of_the_cabin","inside"],["inside","backyard"]]},24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),i=n.n(r),c=(n(29),n(1)),s=n(2),u=n(4),l=n(3),h=n(5),d=n(13);function p(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,p)}var m=n(7),f=n(8),v=n(12),O=function e(t){var n=t.descriptions,a=t.slug;Object(c.a)(this,e),this.itemSlugs=[],this.neighborSlugs=[],this.descriptions=n,this.slug=a},y=n(19),b=n(20),g=n(11),w=new O({slug:"loading",descriptions:["loading"]}),j={loading:w},k=!1;var _,S=j;!function(e){e.SET_LOCATION="SET_LOCATION",e.POP_LOCATION_STACK="POP_LOCATION_STACK",e.PUSH_LOCATION_STACK="PUSH_LOCATION_STACK",e.LOCK_CONSOLE="LOCK_CONSOLE",e.RELEASE_CONSOLE="RELEASE_CONSOLE",e.ADD_TO_INVENTORY="ADD_TO_INVENTORY",e.ADD_TO_HISTORY="ADD_TO_HISTORY",e.TOGGLE_SOUND="TOGGLE_SOUND"}(_||(_={}));var E={location:w.slug,previousLocationStack:[],consoleInteractive:!0,inventory:[],history:[],soundOn:!0};var I=Object(v.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.SET_LOCATION:return Object(m.a)({},e,{location:t.value});case _.PUSH_LOCATION_STACK:return Object(m.a)({},e,{previousLocationStack:[t.value].concat(Object(f.a)(e.previousLocationStack))});case _.POP_LOCATION_STACK:return Object(m.a)({},e,{previousLocationStack:e.previousLocationStack.slice(1)});case _.LOCK_CONSOLE:return Object(m.a)({},e,{consoleInteractive:!1});case _.RELEASE_CONSOLE:return Object(m.a)({},e,{consoleInteractive:!0});case _.ADD_TO_INVENTORY:return Object(m.a)({},e,{inventory:Object(f.a)(e.inventory).concat([t.value])});case _.ADD_TO_HISTORY:return Object(m.a)({},e,{history:Object(f.a)(e.history).concat([t.value])});case _.TOGGLE_SOUND:return Object(m.a)({},e,{soundOn:!e.soundOn});default:return e}}),T=I;function A(){return S[I.getState().location]}var C=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"getRevocableOutputter",value:function(){var t=!1,n={revoke:function(){t=!0},output:function(n){return t?Promise.resolve(null):e.output(n)}};return e.revocableOutputters.push(n),n.output}},{key:"output",value:function(t){var n=t.content,a=t.speak,o=null;if(a&&"string"!==typeof n)throw'cannot "speak" a component';a&&"string"===typeof n&&(o=function(e){var t=new SpeechSynthesisUtterance(e);return t.rate=.9,t.pitch=.8,t.volume=T.getState().soundOn?1:0,window.speechSynthesis.speak(t),new Promise(function(e){t.onend=function(){window.setTimeout(e,300)}})}(n));var r={id:p(),content:n};return e.historyManifest[r.id]=r.content,T.dispatch({type:_.ADD_TO_HISTORY,value:r.id}),o||Promise.resolve(null)}},{key:"revokeOutputters",value:function(){e.revocableOutputters.forEach(function(e){e.revoke()}),this.revocableOutputters=[]}},{key:"stopOutput",value:function(){this.revokeOutputters(),window.speechSynthesis.cancel(),T.dispatch({type:_.RELEASE_CONSOLE})}}]),e}();C.historyManifest={},C.revocableOutputters=[];var L=function(){function e(){Object(c.a)(this,e),this.command="",this.helpDescription=""}return Object(s.a)(e,[{key:"run",value:function(e){var t=C.getRevocableOutputter();return this._run(Object(m.a)({},e,{output:t}))}},{key:"_run",value:function(e){throw"not implemented"}}]),e}(),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="echo",n.helpDescription="Use echo to say something out loud. Example:\n\necho Is anyone there?",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){var t=e.args;return(0,e.output)({content:t.join(" ")}),Promise.resolve(null)}}]),t}(L),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="help",n.helpDescription="Use help to make sense of the world.",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){var t=e.output,n=e.args;if(n.length>=1){var a=$[n[0]];t({content:a?a.helpDescription:"I don't know much about ".concat(n.join(" "),".")})}else t({content:"The following utilities are available: ".concat(Object.keys($).join(", "),'.\n\nFor help with any particular utility, write "help <utility name>".\n\nTo stop a dialogue, hit escape or ctrl+c')});return Promise.resolve(null)}}]),t}(L);function P(e){return o.a.createElement("span",null,e.places.map(function(e){return o.a.createElement("span",{key:e,className:"place"},e,oe)}),e.items.map(function(e){return o.a.createElement("span",{key:e,className:"item"},e,oe)}))}var H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="ls",n.helpDescription="ls lists the locations and objects you can reach from where you are now.",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){return(0,e.output)({content:o.a.createElement(P,{places:A().neighborSlugs.sort(),items:A().itemSlugs.sort()})}),Promise.resolve(null)}}]),t}(L),K=["I don't remember","But I am glad you asked. I am glad you are here.","I don't know who you are","I'm sorry for that...","To the best of my knowledge, you are an echo.","You were a mistake","insofar as any human being could be a mistake."],U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="whoami",n.helpDescription="Ask a difficult question. Get a difficult response",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){var t=e.output;return K.reduce(function(e,n){return e.then(function(){return t({content:n,speak:!0})})},Promise.resolve(null))}}]),t}(L),R=function e(t){var n=t.descriptions,a=t.slug,o=t.locationSlug;Object(c.a)(this,e),this.descriptions=n,this.slug=a,this.locationSlug=o},V={},x=!1;var G=V,Y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="look",n.helpDescription="Use look to take some time, to see where you are. Some things take longer to see than others.",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){var t=e.output,n=e.args;return n.length>0&&("at"!==n[0]||!G[n[1]])?t({content:"invalid ".concat(this.command," argument ").concat(n.join(" "),".")}):("at"===n[0]&&G[n[1]]?G[n[1]].descriptions:A().descriptions).reduce(function(e,n){return e.then(function(){return t({content:n,speak:!0})})},Promise.resolve(null))}}]),t}(L),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="cd",n.helpDescription="Use cd to move to a new location. For example:\n\ncd a_cold_cabin",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"goToPreviousLocation",value:function(){var e=T.getState().previousLocationStack[0];T.dispatch({type:_.POP_LOCATION_STACK}),e&&T.dispatch({type:_.SET_LOCATION,value:e})}},{key:"_run",value:function(e){var t=e.args,n=e.output,a=Promise.resolve(null);if(t[0].indexOf("..")>=0)for(var o=(t[0].match(/../g)||[]).length,r=0;r<o;r++)this.goToPreviousLocation();else{var i=A().neighborSlugs.find(function(e){return e===t[0]});i?(T.dispatch({type:_.PUSH_LOCATION_STACK,value:T.getState().location}),T.dispatch({type:_.SET_LOCATION,value:i})):n({content:"invalid location ".concat(t[0])})}return q({location:T.getState().location}),a}}]),t}(L);function q(e){e.location}var F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).interval=0,n.state={content:(new Date).getTime().toString()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=window.setInterval(function(){e.setState({content:(new Date).getTime().toString()})},1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement("span",null,this.state.content)}}]),t}(o.a.Component),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="time",n.helpDescription="time tells you the time",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){return(0,e.output)({content:o.a.createElement(F,null)}),Promise.resolve(null)}}]),t}(L),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="pickup",n.helpDescription="pickup will allow you to add an object to your inventory",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){var t=e.args,n=e.output,a=t[0];return G[a]&&A().itemSlugs.indexOf(a)>-1?(A().itemSlugs=A().itemSlugs.filter(function(e){return e!==a}),T.dispatch({type:_.ADD_TO_INVENTORY,value:a}),n({content:"I have picked up the ".concat(a)})):n({content:"There is no ".concat(a," here")}),Promise.resolve(null)}}]),t}(L),J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="inv",n.helpDescription='List all the items currently in your inventory. To use an item, write "use <item>"',n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){return(0,e.output)({content:T.getState().inventory.join(oe)}),Promise.resolve(null)}}]),t}(L),z=n(22),Q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).command="mute",n.helpDescription="smash the mute button",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"_run",value:function(e){return Object(z.a)(e),T.dispatch({type:_.TOGGLE_SOUND}),Promise.resolve(null)}}]),t}(L),X={},Z=!1;var $=X,ee=n(9);var te=Object(ee.b)(function(e){return{terminalHistory:e.history}})(function(e){var t=e.terminalHistory;return o.a.createElement("div",{className:"terminal-buffer"},t.map(function(e){return o.a.createElement(o.a.Fragment,{key:e},C.historyManifest[e]," ",o.a.createElement("br",null))}))}),ne=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={commandHistory:[],currentPlaceInHistory:-1,inputValue:""},n.focusInput=function(){n.inputEl.current&&n.inputEl.current.focus()},n.goBackInHistory=function(){n.setState(function(e){return e.currentPlaceInHistory===e.commandHistory.length-1?null:{currentPlaceInHistory:e.currentPlaceInHistory+1}},function(){var e=n.state.commandHistory[n.state.currentPlaceInHistory];e&&n.setState({inputValue:e.content})})},n.goForwardInHistory=function(){n.setState(function(e){return-1===e.currentPlaceInHistory?null:{currentPlaceInHistory:e.currentPlaceInHistory-1}},function(){-1===n.state.currentPlaceInHistory&&n.setState({inputValue:""});var e=n.state.commandHistory[n.state.currentPlaceInHistory];e&&n.setState({inputValue:e.content})})},n.moveCursorToEnd=function(){window.setTimeout(function(){n.inputEl.current&&(n.inputEl.current.selectionStart=1e3)},0)},n.handleChange=function(e){n.setState({inputValue:e.target.value})},n.handleKeyDown=function(e){switch(e.key){case"ArrowUp":n.goBackInHistory(),n.moveCursorToEnd();break;case"ArrowDown":n.goForwardInHistory(),n.moveCursorToEnd();break;case"Tab":e.preventDefault(),n.tabComplete();break;case"Enter":e.preventDefault(),n.addToCommandHistory(n.state.inputValue),n.props.handleSubmit(n.state.inputValue),n.setState({inputValue:""})}},n.addToCommandHistory=function(e){n.setState(function(t){return{commandHistory:[{content:e,id:p()}].concat(Object(f.a)(t.commandHistory)),currentPlaceInHistory:-1}})},n.tabComplete=function(){if(""!==n.state.inputValue){var e=n.state.inputValue.split(" "),t=Object(d.a)(e),a=t[0],o=t.slice(1),r=o[o.length-1];"undefined"===typeof r&&(r="");var i=Object(f.a)(A().neighborSlugs).concat(Object(f.a)(A().itemSlugs),Object(f.a)(T.getState().inventory)).filter(function(e){return 0===e.indexOf(r)});switch(i.length){case 0:break;case 1:var c=[a].concat(Object(f.a)(o.slice(0,o.length-1)),[i[0]]).join(" ");n.setState({inputValue:c});break;default:C.output({content:i.reduce(function(e,t){return"".concat(e).concat(oe).concat(t)})})}}},n.inputEl=o.a.createRef(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.focusInput)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.focusInput)}},{key:"render",value:function(){return o.a.createElement("input",{className:"input",type:"text",onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.inputEl,value:this.state.inputValue})}}]),t}(o.a.Component);function ae(){return"~/".concat(T.getState().location," > ")}var oe="    ",re=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={terminalHistory:[{content:"you are in a cold and quiet forest",id:p()},{content:"rain has recently fallen",id:p()},{content:'type "help", then press enter, to get started',id:p()}]},n.handleKeydown=function(e){var t=e,n=t.key;("Escape"===n||t.ctrlKey&&["c","C","d","D"].indexOf(n)>=0)&&C.stopOutput()},n.runCommand=function(e){var t=e.split(" "),n=Object(d.a)(t),a=n[0],o=n.slice(1),r=$[a];C.output({content:"".concat(ae()).concat(e)}),r?(T.dispatch({type:_.LOCK_CONSOLE}),r.run({args:o}).then(function(){T.dispatch({type:_.RELEASE_CONSOLE})}).catch(console.error)):C.output({content:"I don't know how to ".concat(a)})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props.consoleInteractive;return o.a.createElement("div",{className:"terminal"},o.a.createElement(te,null),o.a.createElement("form",{className:"input-form ".concat(e?"active":"")},o.a.createElement("span",{className:"input-prompt"},ae()),o.a.createElement(ne,{handleSubmit:this.runCommand})))}}]),t}(o.a.Component);var ie=Object(ee.b)(function(e){return{consoleInteractive:e.consoleInteractive}})(re),ce="a_quiet_forest",se=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e)),k||(k=!0,y.forEach(function(e){j[e.slug]=new O(e)}),b.forEach(function(e){j[e[0]].neighborSlugs.push(e[1]),j[e[1]].neighborSlugs.push(e[0])}),g.forEach(function(e){if("undefined"===typeof j[e.locationSlug])throw"".concat(e.slug," has location ").concat(e.locationSlug,", which does not exist");j[e.locationSlug].itemSlugs.push(e.slug)})),Z||(Z=!0,[new D,new N,new H,new U,new M,new Y,new B,new W,new J,new Q].forEach(function(e){X[e.command]=e})),x||(x=!0,g.forEach(function(e){V[e.slug]=new R(e)})),q({location:ce}),T.dispatch({type:_.SET_LOCATION,value:ce}),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement(ie,null))}}]),t}(o.a.Component);i.a.render(o.a.createElement(ee.a,{store:T},o.a.createElement(se,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.6477e993.chunk.js.map