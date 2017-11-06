/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.7.0
 * Copyright (C) 2016 Oliver Nightingale
 * MIT Licensed
 * @license
 */

!function(){var t=function(e){var n=new t.Index;return n.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),e&&e.call(n,n),n};t.version="0.7.0",t.utils={},t.utils.warn=function(t){return function(e){t.console&&console.warn&&console.warn(e)}}(this),t.utils.asString=function(t){return void 0===t||null===t?"":t.toString()},t.EventEmitter=function(){this.events={}},t.EventEmitter.prototype.addListener=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),n=t;if("function"!=typeof e)throw new TypeError("last argument must be a function");n.forEach(function(t){this.hasHandler(t)||(this.events[t]=[]),this.events[t].push(e)},this)},t.EventEmitter.prototype.removeListener=function(t,e){if(this.hasHandler(t)){var n=this.events[t].indexOf(e);this.events[t].splice(n,1),this.events[t].length||delete this.events[t]}},t.EventEmitter.prototype.emit=function(t){if(this.hasHandler(t)){var e=Array.prototype.slice.call(arguments,1);this.events[t].forEach(function(t){t.apply(void 0,e)})}},t.EventEmitter.prototype.hasHandler=function(t){return t in this.events},t.tokenizer=function(e){return arguments.length&&null!=e&&void 0!=e?Array.isArray(e)?e.map(function(e){return t.utils.asString(e).toLowerCase()}):e.toString().trim().toLowerCase().split(t.tokenizer.seperator):[]},t.tokenizer.seperator=/[\s\-]+/,t.tokenizer.load=function(t){var e=this.registeredFunctions[t];if(!e)throw new Error("Cannot load un-registered function: "+t);return e},t.tokenizer.label="default",t.tokenizer.registeredFunctions={"default":t.tokenizer},t.tokenizer.registerFunction=function(e,n){n in this.registeredFunctions&&t.utils.warn("Overwriting existing tokenizer: "+n),e.label=n,this.registeredFunctions[n]=e},t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions={},t.Pipeline.registerFunction=function(e,n){n in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+n),e.label=n,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){var n=e.label&&e.label in this.registeredFunctions;n||t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},t.Pipeline.load=function(e){var n=new t.Pipeline;return e.forEach(function(e){var i=t.Pipeline.registeredFunctions[e];if(!i)throw new Error("Cannot load un-registered function: "+e);n.add(i)}),n},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){t.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},t.Pipeline.prototype.after=function(e,n){t.Pipeline.warnIfFunctionNotRegistered(n);var i=this._stack.indexOf(e);if(-1==i)throw new Error("Cannot find existingFn");i+=1,this._stack.splice(i,0,n)},t.Pipeline.prototype.before=function(e,n){t.Pipeline.warnIfFunctionNotRegistered(n);var i=this._stack.indexOf(e);if(-1==i)throw new Error("Cannot find existingFn");this._stack.splice(i,0,n)},t.Pipeline.prototype.remove=function(t){var e=this._stack.indexOf(t);-1!=e&&this._stack.splice(e,1)},t.Pipeline.prototype.run=function(t){for(var e=[],n=t.length,i=this._stack.length,r=0;n>r;r++){for(var o=t[r],s=0;i>s&&(o=this._stack[s](o,r,t),void 0!==o&&""!==o);s++);void 0!==o&&""!==o&&e.push(o)}return e},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})},t.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},t.Vector.Node=function(t,e,n){this.idx=t,this.val=e,this.next=n},t.Vector.prototype.insert=function(e,n){this._magnitude=void 0;var i=this.list;if(!i)return this.list=new t.Vector.Node(e,n,i),this.length++;if(e<i.idx)return this.list=new t.Vector.Node(e,n,i),this.length++;for(var r=i,o=i.next;void 0!=o;){if(e<o.idx)return r.next=new t.Vector.Node(e,n,o),this.length++;r=o,o=o.next}return r.next=new t.Vector.Node(e,n,o),this.length++},t.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t,e=this.list,n=0;e;)t=e.val,n+=t*t,e=e.next;return this._magnitude=Math.sqrt(n)},t.Vector.prototype.dot=function(t){for(var e=this.list,n=t.list,i=0;e&&n;)e.idx<n.idx?e=e.next:e.idx>n.idx?n=n.next:(i+=e.val*n.val,e=e.next,n=n.next);return i},t.Vector.prototype.similarity=function(t){return this.dot(t)/(this.magnitude()*t.magnitude())},t.SortedSet=function(){this.length=0,this.elements=[]},t.SortedSet.load=function(t){var e=new this;return e.elements=t,e.length=t.length,e},t.SortedSet.prototype.add=function(){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],~this.indexOf(e)||this.elements.splice(this.locationFor(e),0,e);this.length=this.elements.length},t.SortedSet.prototype.toArray=function(){return this.elements.slice()},t.SortedSet.prototype.map=function(t,e){return this.elements.map(t,e)},t.SortedSet.prototype.forEach=function(t,e){return this.elements.forEach(t,e)},t.SortedSet.prototype.indexOf=function(t){for(var e=0,n=this.elements.length,i=n-e,r=e+Math.floor(i/2),o=this.elements[r];i>1;){if(o===t)return r;t>o&&(e=r),o>t&&(n=r),i=n-e,r=e+Math.floor(i/2),o=this.elements[r]}return o===t?r:-1},t.SortedSet.prototype.locationFor=function(t){for(var e=0,n=this.elements.length,i=n-e,r=e+Math.floor(i/2),o=this.elements[r];i>1;)t>o&&(e=r),o>t&&(n=r),i=n-e,r=e+Math.floor(i/2),o=this.elements[r];return o>t?r:t>o?r+1:void 0},t.SortedSet.prototype.intersect=function(e){for(var n=new t.SortedSet,i=0,r=0,o=this.length,s=e.length,a=this.elements,h=e.elements;;){if(i>o-1||r>s-1)break;a[i]!==h[r]?a[i]<h[r]?i++:a[i]>h[r]&&r++:(n.add(a[i]),i++,r++)}return n},t.SortedSet.prototype.clone=function(){var e=new t.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},t.SortedSet.prototype.union=function(t){var e,n,i;this.length>=t.length?(e=this,n=t):(e=t,n=this),i=e.clone();for(var r=0,o=n.toArray();r<o.length;r++)i.add(o[r]);return i},t.SortedSet.prototype.toJSON=function(){return this.toArray()},t.Index=function(){this._fields=[],this._ref="id",this.pipeline=new t.Pipeline,this.documentStore=new t.Store,this.tokenStore=new t.TokenStore,this.corpusTokens=new t.SortedSet,this.eventEmitter=new t.EventEmitter,this.tokenizerFn=t.tokenizer,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},t.Index.prototype.on=function(){var t=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,t)},t.Index.prototype.off=function(t,e){return this.eventEmitter.removeListener(t,e)},t.Index.load=function(e){e.version!==t.version&&t.utils.warn("version mismatch: current "+t.version+" importing "+e.version);var n=new this;return n._fields=e.fields,n._ref=e.ref,n.tokenizer=t.tokenizer.load(e.tokenizer),n.documentStore=t.Store.load(e.documentStore),n.tokenStore=t.TokenStore.load(e.tokenStore),n.corpusTokens=t.SortedSet.load(e.corpusTokens),n.pipeline=t.Pipeline.load(e.pipeline),n},t.Index.prototype.field=function(t,e){var e=e||{},n={name:t,boost:e.boost||1};return this._fields.push(n),this},t.Index.prototype.ref=function(t){return this._ref=t,this},t.Index.prototype.tokenizer=function(e){var n=e.label&&e.label in t.tokenizer.registeredFunctions;return n||t.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"),this.tokenizerFn=e,this},t.Index.prototype.add=function(e,n){var i={},r=new t.SortedSet,o=e[this._ref],n=void 0===n?!0:n;this._fields.forEach(function(t){var n=this.pipeline.run(this.tokenizerFn(e[t.name]));i[t.name]=n;for(var o=0;o<n.length;o++){var s=n[o];r.add(s),this.corpusTokens.add(s)}},this),this.documentStore.set(o,r);for(var s=0;s<r.length;s++){for(var a=r.elements[s],h=0,u=0;u<this._fields.length;u++){var l=this._fields[u],c=i[l.name],f=c.length;if(f){for(var d=0,p=0;f>p;p++)c[p]===a&&d++;h+=d/f*l.boost}}this.tokenStore.add(a,{ref:o,tf:h})}n&&this.eventEmitter.emit("add",e,this)},t.Index.prototype.remove=function(t,e){var n=t[this._ref],e=void 0===e?!0:e;if(this.documentStore.has(n)){var i=this.documentStore.get(n);this.documentStore.remove(n),i.forEach(function(t){this.tokenStore.remove(t,n)},this),e&&this.eventEmitter.emit("remove",t,this)}},t.Index.prototype.update=function(t,e){var e=void 0===e?!0:e;this.remove(t,!1),this.add(t,!1),e&&this.eventEmitter.emit("update",t,this)},t.Index.prototype.idf=function(t){var e="@"+t;if(Object.prototype.hasOwnProperty.call(this._idfCache,e))return this._idfCache[e];var n=this.tokenStore.count(t),i=1;return n>0&&(i=1+Math.log(this.documentStore.length/n)),this._idfCache[e]=i},t.Index.prototype.search=function(e){var n=this.pipeline.run(this.tokenizerFn(e)),i=new t.Vector,r=[],o=this._fields.reduce(function(t,e){return t+e.boost},0),s=n.some(function(t){return this.tokenStore.has(t)},this);if(!s)return[];n.forEach(function(e,n,s){var a=1/s.length*this._fields.length*o,h=this,u=this.tokenStore.expand(e).reduce(function(n,r){var o=h.corpusTokens.indexOf(r),s=h.idf(r),u=1,l=new t.SortedSet;if(r!==e){var c=Math.max(3,r.length-e.length);u=1/Math.log(c)}o>-1&&i.insert(o,a*s*u);for(var f=h.tokenStore.get(r),d=Object.keys(f),p=d.length,v=0;p>v;v++)l.add(f[d[v]].ref);return n.union(l)},new t.SortedSet);r.push(u)},this);var a=r.reduce(function(t,e){return t.intersect(e)});return a.map(function(t){return{ref:t,score:i.similarity(this.documentVector(t))}},this).sort(function(t,e){return e.score-t.score})},t.Index.prototype.documentVector=function(e){for(var n=this.documentStore.get(e),i=n.length,r=new t.Vector,o=0;i>o;o++){var s=n.elements[o],a=this.tokenStore.get(s)[e].tf,h=this.idf(s);r.insert(this.corpusTokens.indexOf(s),a*h)}return r},t.Index.prototype.toJSON=function(){return{version:t.version,fields:this._fields,ref:this._ref,tokenizer:this.tokenizerFn.label,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},t.Index.prototype.use=function(t){var e=Array.prototype.slice.call(arguments,1);e.unshift(this),t.apply(this,e)},t.Store=function(){this.store={},this.length=0},t.Store.load=function(e){var n=new this;return n.length=e.length,n.store=Object.keys(e.store).reduce(function(n,i){return n[i]=t.SortedSet.load(e.store[i]),n},{}),n},t.Store.prototype.set=function(t,e){this.has(t)||this.length++,this.store[t]=e},t.Store.prototype.get=function(t){return this.store[t]},t.Store.prototype.has=function(t){return t in this.store},t.Store.prototype.remove=function(t){this.has(t)&&(delete this.store[t],this.length--)},t.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},t.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},e={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",i="[aeiouy]",r=n+"[^aeiouy]*",o=i+"[aeiou]*",s="^("+r+")?"+o+r,a="^("+r+")?"+o+r+"("+o+")?$",h="^("+r+")?"+o+r+o+r,u="^("+r+")?"+i,l=new RegExp(s),c=new RegExp(h),f=new RegExp(a),d=new RegExp(u),p=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,g=/^(.+?)eed$/,m=/^(.+?)(ed|ing)$/,y=/.$/,S=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),k=new RegExp("^"+r+i+"[^aeiouwxy]$"),x=/^(.+?[^aeiou])y$/,b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,F=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,_=/^(.+?)(s|t)(ion)$/,z=/^(.+?)e$/,O=/ll$/,P=new RegExp("^"+r+i+"[^aeiouwxy]$"),T=function(n){var i,r,o,s,a,h,u;if(n.length<3)return n;if(o=n.substr(0,1),"y"==o&&(n=o.toUpperCase()+n.substr(1)),s=p,a=v,s.test(n)?n=n.replace(s,"$1$2"):a.test(n)&&(n=n.replace(a,"$1$2")),s=g,a=m,s.test(n)){var T=s.exec(n);s=l,s.test(T[1])&&(s=y,n=n.replace(s,""))}else if(a.test(n)){var T=a.exec(n);i=T[1],a=d,a.test(i)&&(n=i,a=S,h=w,u=k,a.test(n)?n+="e":h.test(n)?(s=y,n=n.replace(s,"")):u.test(n)&&(n+="e"))}if(s=x,s.test(n)){var T=s.exec(n);i=T[1],n=i+"i"}if(s=b,s.test(n)){var T=s.exec(n);i=T[1],r=T[2],s=l,s.test(i)&&(n=i+t[r])}if(s=E,s.test(n)){var T=s.exec(n);i=T[1],r=T[2],s=l,s.test(i)&&(n=i+e[r])}if(s=F,a=_,s.test(n)){var T=s.exec(n);i=T[1],s=c,s.test(i)&&(n=i)}else if(a.test(n)){var T=a.exec(n);i=T[1]+T[2],a=c,a.test(i)&&(n=i)}if(s=z,s.test(n)){var T=s.exec(n);i=T[1],s=c,a=f,h=P,(s.test(i)||a.test(i)&&!h.test(i))&&(n=i)}return s=O,a=c,s.test(n)&&a.test(n)&&(s=y,n=n.replace(s,"")),"y"==o&&(n=o.toLowerCase()+n.substr(1)),n};return T}(),t.Pipeline.registerFunction(t.stemmer,"stemmer"),t.generateStopWordFilter=function(t){var e=t.reduce(function(t,e){return t[e]=e,t},{});return function(t){return t&&e[t]!==t?t:void 0}},t.stopWordFilter=t.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter"),t.trimmer=function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"")},t.Pipeline.registerFunction(t.trimmer,"trimmer"),t.TokenStore=function(){this.root={docs:{}},this.length=0},t.TokenStore.load=function(t){var e=new this;return e.root=t.root,e.length=t.length,e},t.TokenStore.prototype.add=function(t,e,n){var n=n||this.root,i=t.charAt(0),r=t.slice(1);return i in n||(n[i]={docs:{}}),0===r.length?(n[i].docs[e.ref]=e,void(this.length+=1)):this.add(r,e,n[i])},t.TokenStore.prototype.has=function(t){if(!t)return!1;for(var e=this.root,n=0;n<t.length;n++){if(!e[t.charAt(n)])return!1;e=e[t.charAt(n)]}return!0},t.TokenStore.prototype.getNode=function(t){if(!t)return{};for(var e=this.root,n=0;n<t.length;n++){if(!e[t.charAt(n)])return{};e=e[t.charAt(n)]}return e},t.TokenStore.prototype.get=function(t,e){return this.getNode(t,e).docs||{}},t.TokenStore.prototype.count=function(t,e){return Object.keys(this.get(t,e)).length},t.TokenStore.prototype.remove=function(t,e){if(t){for(var n=this.root,i=0;i<t.length;i++){if(!(t.charAt(i)in n))return;n=n[t.charAt(i)]}delete n.docs[e]}},t.TokenStore.prototype.expand=function(t,e){var n=this.getNode(t),i=n.docs||{},e=e||[];return Object.keys(i).length&&e.push(t),Object.keys(n).forEach(function(n){"docs"!==n&&e.concat(this.expand(t+n,e))},this),e},t.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.lunr=e()}(this,function(){return t})}();
/*!
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */

;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory)
    } else if (typeof exports === 'object') {
        /**
         * Node. Does not work with strict CommonJS, but
         * only CommonJS-like environments that support module.exports,
         * like Node.
         */
        module.exports = factory()
    } else {
        // Browser globals (root is window)
        factory()(root.lunr);
    }
}(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return function(lunr) {
        /* provides utilities for the included stemmers */
        lunr.stemmerSupport = {
            Among: function(s, substring_i, result, method) {
                this.toCharArray = function(s) {
                    var sLength = s.length, charArr = new Array(sLength);
                    for (var i = 0; i < sLength; i++)
                        charArr[i] = s.charCodeAt(i);
                    return charArr;
                };

                if ((!s && s != "") || (!substring_i && (substring_i != 0)) || !result)
                    throw ("Bad Among initialisation: s:" + s + ", substring_i: "
                        + substring_i + ", result: " + result);
                this.s_size = s.length;
                this.s = this.toCharArray(s);
                this.substring_i = substring_i;
                this.result = result;
                this.method = method;
            },
            SnowballProgram: function() {
                var current;
                return {
                    bra : 0,
                    ket : 0,
                    limit : 0,
                    cursor : 0,
                    limit_backward : 0,
                    setCurrent : function(word) {
                        current = word;
                        this.cursor = 0;
                        this.limit = word.length;
                        this.limit_backward = 0;
                        this.bra = this.cursor;
                        this.ket = this.limit;
                    },
                    getCurrent : function() {
                        var result = current;
                        current = null;
                        return result;
                    },
                    in_grouping : function(s, min, max) {
                        if (this.cursor < this.limit) {
                            var ch = current.charCodeAt(this.cursor);
                            if (ch <= max && ch >= min) {
                                ch -= min;
                                if (s[ch >> 3] & (0X1 << (ch & 0X7))) {
                                    this.cursor++;
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    in_grouping_b : function(s, min, max) {
                        if (this.cursor > this.limit_backward) {
                            var ch = current.charCodeAt(this.cursor - 1);
                            if (ch <= max && ch >= min) {
                                ch -= min;
                                if (s[ch >> 3] & (0X1 << (ch & 0X7))) {
                                    this.cursor--;
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    out_grouping : function(s, min, max) {
                        if (this.cursor < this.limit) {
                            var ch = current.charCodeAt(this.cursor);
                            if (ch > max || ch < min) {
                                this.cursor++;
                                return true;
                            }
                            ch -= min;
                            if (!(s[ch >> 3] & (0X1 << (ch & 0X7)))) {
                                this.cursor++;
                                return true;
                            }
                        }
                        return false;
                    },
                    out_grouping_b : function(s, min, max) {
                        if (this.cursor > this.limit_backward) {
                            var ch = current.charCodeAt(this.cursor - 1);
                            if (ch > max || ch < min) {
                                this.cursor--;
                                return true;
                            }
                            ch -= min;
                            if (!(s[ch >> 3] & (0X1 << (ch & 0X7)))) {
                                this.cursor--;
                                return true;
                            }
                        }
                        return false;
                    },
                    eq_s : function(s_size, s) {
                        if (this.limit - this.cursor < s_size)
                            return false;
                        for (var i = 0; i < s_size; i++)
                            if (current.charCodeAt(this.cursor + i) != s.charCodeAt(i))
                                return false;
                        this.cursor += s_size;
                        return true;
                    },
                    eq_s_b : function(s_size, s) {
                        if (this.cursor - this.limit_backward < s_size)
                            return false;
                        for (var i = 0; i < s_size; i++)
                            if (current.charCodeAt(this.cursor - s_size + i) != s
                                .charCodeAt(i))
                                return false;
                        this.cursor -= s_size;
                        return true;
                    },
                    find_among : function(v, v_size) {
                        var i = 0, j = v_size, c = this.cursor, l = this.limit, common_i = 0, common_j = 0, first_key_inspected = false;
                        while (true) {
                            var k = i + ((j - i) >> 1), diff = 0, common = common_i < common_j
                                ? common_i
                                : common_j, w = v[k];
                            for (var i2 = common; i2 < w.s_size; i2++) {
                                if (c + common == l) {
                                    diff = -1;
                                    break;
                                }
                                diff = current.charCodeAt(c + common) - w.s[i2];
                                if (diff)
                                    break;
                                common++;
                            }
                            if (diff < 0) {
                                j = k;
                                common_j = common;
                            } else {
                                i = k;
                                common_i = common;
                            }
                            if (j - i <= 1) {
                                if (i > 0 || j == i || first_key_inspected)
                                    break;
                                first_key_inspected = true;
                            }
                        }
                        while (true) {
                            var w = v[i];
                            if (common_i >= w.s_size) {
                                this.cursor = c + w.s_size;
                                if (!w.method)
                                    return w.result;
                                var res = w.method();
                                this.cursor = c + w.s_size;
                                if (res)
                                    return w.result;
                            }
                            i = w.substring_i;
                            if (i < 0)
                                return 0;
                        }
                    },
                    find_among_b : function(v, v_size) {
                        var i = 0, j = v_size, c = this.cursor, lb = this.limit_backward, common_i = 0, common_j = 0, first_key_inspected = false;
                        while (true) {
                            var k = i + ((j - i) >> 1), diff = 0, common = common_i < common_j
                                ? common_i
                                : common_j, w = v[k];
                            for (var i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
                                if (c - common == lb) {
                                    diff = -1;
                                    break;
                                }
                                diff = current.charCodeAt(c - 1 - common) - w.s[i2];
                                if (diff)
                                    break;
                                common++;
                            }
                            if (diff < 0) {
                                j = k;
                                common_j = common;
                            } else {
                                i = k;
                                common_i = common;
                            }
                            if (j - i <= 1) {
                                if (i > 0 || j == i || first_key_inspected)
                                    break;
                                first_key_inspected = true;
                            }
                        }
                        while (true) {
                            var w = v[i];
                            if (common_i >= w.s_size) {
                                this.cursor = c - w.s_size;
                                if (!w.method)
                                    return w.result;
                                var res = w.method();
                                this.cursor = c - w.s_size;
                                if (res)
                                    return w.result;
                            }
                            i = w.substring_i;
                            if (i < 0)
                                return 0;
                        }
                    },
                    replace_s : function(c_bra, c_ket, s) {
                        var adjustment = s.length - (c_ket - c_bra), left = current
                            .substring(0, c_bra), right = current.substring(c_ket);
                        current = left + s + right;
                        this.limit += adjustment;
                        if (this.cursor >= c_ket)
                            this.cursor += adjustment;
                        else if (this.cursor > c_bra)
                            this.cursor = c_bra;
                        return adjustment;
                    },
                    slice_check : function() {
                        if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit
                            || this.limit > current.length)
                            throw ("faulty slice operation");
                    },
                    slice_from : function(s) {
                        this.slice_check();
                        this.replace_s(this.bra, this.ket, s);
                    },
                    slice_del : function() {
                        this.slice_from("");
                    },
                    insert : function(c_bra, c_ket, s) {
                        var adjustment = this.replace_s(c_bra, c_ket, s);
                        if (c_bra <= this.bra)
                            this.bra += adjustment;
                        if (c_bra <= this.ket)
                            this.ket += adjustment;
                    },
                    slice_to : function() {
                        this.slice_check();
                        return current.substring(this.bra, this.ket);
                    },
                    eq_v_b : function(s) {
                        return this.eq_s_b(s.length, s);
                    }
                };
            }
        };
    }
}));
/*!
 * Lunr languages, `Spanish` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */

;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory)
  } else if (typeof exports === 'object') {
    /**
     * Node. Does not work with strict CommonJS, but
     * only CommonJS-like environments that support module.exports,
     * like Node.
     */
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    factory()(root.lunr);
  }
}(this, function() {
  /**
   * Just return a value to define the module export.
   * This example returns an object, but the module
   * can return a function as the exported value.
   */
  return function(lunr) {
    /* throw error if lunr is not yet included */
    if ('undefined' === typeof lunr) {
      throw new Error('Lunr is not present. Please include / require Lunr before this script.');
    }

    /* throw error if lunr stemmer support is not yet included */
    if ('undefined' === typeof lunr.stemmerSupport) {
      throw new Error('Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.');
    }

    /* register specific locale function */
    lunr.es = function() {
      this.pipeline.reset();
      this.pipeline.add(
        lunr.es.stopWordFilter,
        lunr.es.stemmer
      );
    };

    /* lunr stemmer function */
    lunr.es.stemmer = (function() {
      /* create the wrapped stemmer object */
      var Among = lunr.stemmerSupport.Among,
        SnowballProgram = lunr.stemmerSupport.SnowballProgram,
        st = new function SpanishStemmer() {
          var a_0 = [new Among("", -1, 6), new Among("\u00E1", 0, 1),
              new Among("\u00E9", 0, 2), new Among("\u00ED", 0, 3),
              new Among("\u00F3", 0, 4), new Among("\u00FA", 0, 5)
            ],
            a_1 = [
              new Among("la", -1, -1), new Among("sela", 0, -1),
              new Among("le", -1, -1), new Among("me", -1, -1),
              new Among("se", -1, -1), new Among("lo", -1, -1),
              new Among("selo", 5, -1), new Among("las", -1, -1),
              new Among("selas", 7, -1), new Among("les", -1, -1),
              new Among("los", -1, -1), new Among("selos", 10, -1),
              new Among("nos", -1, -1)
            ],
            a_2 = [new Among("ando", -1, 6),
              new Among("iendo", -1, 6), new Among("yendo", -1, 7),
              new Among("\u00E1ndo", -1, 2), new Among("i\u00E9ndo", -1, 1),
              new Among("ar", -1, 6), new Among("er", -1, 6),
              new Among("ir", -1, 6), new Among("\u00E1r", -1, 3),
              new Among("\u00E9r", -1, 4), new Among("\u00EDr", -1, 5)
            ],
            a_3 = [
              new Among("ic", -1, -1), new Among("ad", -1, -1),
              new Among("os", -1, -1), new Among("iv", -1, 1)
            ],
            a_4 = [
              new Among("able", -1, 1), new Among("ible", -1, 1),
              new Among("ante", -1, 1)
            ],
            a_5 = [new Among("ic", -1, 1),
              new Among("abil", -1, 1), new Among("iv", -1, 1)
            ],
            a_6 = [
              new Among("ica", -1, 1), new Among("ancia", -1, 2),
              new Among("encia", -1, 5), new Among("adora", -1, 2),
              new Among("osa", -1, 1), new Among("ista", -1, 1),
              new Among("iva", -1, 9), new Among("anza", -1, 1),
              new Among("log\u00EDa", -1, 3), new Among("idad", -1, 8),
              new Among("able", -1, 1), new Among("ible", -1, 1),
              new Among("ante", -1, 2), new Among("mente", -1, 7),
              new Among("amente", 13, 6), new Among("aci\u00F3n", -1, 2),
              new Among("uci\u00F3n", -1, 4), new Among("ico", -1, 1),
              new Among("ismo", -1, 1), new Among("oso", -1, 1),
              new Among("amiento", -1, 1), new Among("imiento", -1, 1),
              new Among("ivo", -1, 9), new Among("ador", -1, 2),
              new Among("icas", -1, 1), new Among("ancias", -1, 2),
              new Among("encias", -1, 5), new Among("adoras", -1, 2),
              new Among("osas", -1, 1), new Among("istas", -1, 1),
              new Among("ivas", -1, 9), new Among("anzas", -1, 1),
              new Among("log\u00EDas", -1, 3), new Among("idades", -1, 8),
              new Among("ables", -1, 1), new Among("ibles", -1, 1),
              new Among("aciones", -1, 2), new Among("uciones", -1, 4),
              new Among("adores", -1, 2), new Among("antes", -1, 2),
              new Among("icos", -1, 1), new Among("ismos", -1, 1),
              new Among("osos", -1, 1), new Among("amientos", -1, 1),
              new Among("imientos", -1, 1), new Among("ivos", -1, 9)
            ],
            a_7 = [
              new Among("ya", -1, 1), new Among("ye", -1, 1),
              new Among("yan", -1, 1), new Among("yen", -1, 1),
              new Among("yeron", -1, 1), new Among("yendo", -1, 1),
              new Among("yo", -1, 1), new Among("yas", -1, 1),
              new Among("yes", -1, 1), new Among("yais", -1, 1),
              new Among("yamos", -1, 1), new Among("y\u00F3", -1, 1)
            ],
            a_8 = [
              new Among("aba", -1, 2), new Among("ada", -1, 2),
              new Among("ida", -1, 2), new Among("ara", -1, 2),
              new Among("iera", -1, 2), new Among("\u00EDa", -1, 2),
              new Among("ar\u00EDa", 5, 2), new Among("er\u00EDa", 5, 2),
              new Among("ir\u00EDa", 5, 2), new Among("ad", -1, 2),
              new Among("ed", -1, 2), new Among("id", -1, 2),
              new Among("ase", -1, 2), new Among("iese", -1, 2),
              new Among("aste", -1, 2), new Among("iste", -1, 2),
              new Among("an", -1, 2), new Among("aban", 16, 2),
              new Among("aran", 16, 2), new Among("ieran", 16, 2),
              new Among("\u00EDan", 16, 2), new Among("ar\u00EDan", 20, 2),
              new Among("er\u00EDan", 20, 2), new Among("ir\u00EDan", 20, 2),
              new Among("en", -1, 1), new Among("asen", 24, 2),
              new Among("iesen", 24, 2), new Among("aron", -1, 2),
              new Among("ieron", -1, 2), new Among("ar\u00E1n", -1, 2),
              new Among("er\u00E1n", -1, 2), new Among("ir\u00E1n", -1, 2),
              new Among("ado", -1, 2), new Among("ido", -1, 2),
              new Among("ando", -1, 2), new Among("iendo", -1, 2),
              new Among("ar", -1, 2), new Among("er", -1, 2),
              new Among("ir", -1, 2), new Among("as", -1, 2),
              new Among("abas", 39, 2), new Among("adas", 39, 2),
              new Among("idas", 39, 2), new Among("aras", 39, 2),
              new Among("ieras", 39, 2), new Among("\u00EDas", 39, 2),
              new Among("ar\u00EDas", 45, 2), new Among("er\u00EDas", 45, 2),
              new Among("ir\u00EDas", 45, 2), new Among("es", -1, 1),
              new Among("ases", 49, 2), new Among("ieses", 49, 2),
              new Among("abais", -1, 2), new Among("arais", -1, 2),
              new Among("ierais", -1, 2), new Among("\u00EDais", -1, 2),
              new Among("ar\u00EDais", 55, 2), new Among("er\u00EDais", 55, 2),
              new Among("ir\u00EDais", 55, 2), new Among("aseis", -1, 2),
              new Among("ieseis", -1, 2), new Among("asteis", -1, 2),
              new Among("isteis", -1, 2), new Among("\u00E1is", -1, 2),
              new Among("\u00E9is", -1, 1), new Among("ar\u00E9is", 64, 2),
              new Among("er\u00E9is", 64, 2), new Among("ir\u00E9is", 64, 2),
              new Among("ados", -1, 2), new Among("idos", -1, 2),
              new Among("amos", -1, 2), new Among("\u00E1bamos", 70, 2),
              new Among("\u00E1ramos", 70, 2), new Among("i\u00E9ramos", 70, 2),
              new Among("\u00EDamos", 70, 2), new Among("ar\u00EDamos", 74, 2),
              new Among("er\u00EDamos", 74, 2), new Among("ir\u00EDamos", 74, 2),
              new Among("emos", -1, 1), new Among("aremos", 78, 2),
              new Among("eremos", 78, 2), new Among("iremos", 78, 2),
              new Among("\u00E1semos", 78, 2), new Among("i\u00E9semos", 78, 2),
              new Among("imos", -1, 2), new Among("ar\u00E1s", -1, 2),
              new Among("er\u00E1s", -1, 2), new Among("ir\u00E1s", -1, 2),
              new Among("\u00EDs", -1, 2), new Among("ar\u00E1", -1, 2),
              new Among("er\u00E1", -1, 2), new Among("ir\u00E1", -1, 2),
              new Among("ar\u00E9", -1, 2), new Among("er\u00E9", -1, 2),
              new Among("ir\u00E9", -1, 2), new Among("i\u00F3", -1, 2)
            ],
            a_9 = [
              new Among("a", -1, 1), new Among("e", -1, 2),
              new Among("o", -1, 1), new Among("os", -1, 1),
              new Among("\u00E1", -1, 1), new Among("\u00E9", -1, 2),
              new Among("\u00ED", -1, 1), new Among("\u00F3", -1, 1)
            ],
            g_v = [17,
              65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10
            ],
            I_p2, I_p1, I_pV, sbp = new SnowballProgram();
          this.setCurrent = function(word) {
            sbp.setCurrent(word);
          };
          this.getCurrent = function() {
            return sbp.getCurrent();
          };

          function habr1() {
            if (sbp.out_grouping(g_v, 97, 252)) {
              while (!sbp.in_grouping(g_v, 97, 252)) {
                if (sbp.cursor >= sbp.limit)
                  return true;
                sbp.cursor++;
              }
              return false;
            }
            return true;
          }

          function habr2() {
            if (sbp.in_grouping(g_v, 97, 252)) {
              var v_1 = sbp.cursor;
              if (habr1()) {
                sbp.cursor = v_1;
                if (!sbp.in_grouping(g_v, 97, 252))
                  return true;
                while (!sbp.out_grouping(g_v, 97, 252)) {
                  if (sbp.cursor >= sbp.limit)
                    return true;
                  sbp.cursor++;
                }
              }
              return false;
            }
            return true;
          }

          function habr3() {
            var v_1 = sbp.cursor,
              v_2;
            if (habr2()) {
              sbp.cursor = v_1;
              if (!sbp.out_grouping(g_v, 97, 252))
                return;
              v_2 = sbp.cursor;
              if (habr1()) {
                sbp.cursor = v_2;
                if (!sbp.in_grouping(g_v, 97, 252) || sbp.cursor >= sbp.limit)
                  return;
                sbp.cursor++;
              }
            }
            I_pV = sbp.cursor;
          }

          function habr4() {
            while (!sbp.in_grouping(g_v, 97, 252)) {
              if (sbp.cursor >= sbp.limit)
                return false;
              sbp.cursor++;
            }
            while (!sbp.out_grouping(g_v, 97, 252)) {
              if (sbp.cursor >= sbp.limit)
                return false;
              sbp.cursor++;
            }
            return true;
          }

          function r_mark_regions() {
            var v_1 = sbp.cursor;
            I_pV = sbp.limit;
            I_p1 = I_pV;
            I_p2 = I_pV;
            habr3();
            sbp.cursor = v_1;
            if (habr4()) {
              I_p1 = sbp.cursor;
              if (habr4())
                I_p2 = sbp.cursor;
            }
          }

          function r_postlude() {
            var among_var;
            while (true) {
              sbp.bra = sbp.cursor;
              among_var = sbp.find_among(a_0, 6);
              if (among_var) {
                sbp.ket = sbp.cursor;
                switch (among_var) {
                  case 1:
                    sbp.slice_from("a");
                    continue;
                  case 2:
                    sbp.slice_from("e");
                    continue;
                  case 3:
                    sbp.slice_from("i");
                    continue;
                  case 4:
                    sbp.slice_from("o");
                    continue;
                  case 5:
                    sbp.slice_from("u");
                    continue;
                  case 6:
                    if (sbp.cursor >= sbp.limit)
                      break;
                    sbp.cursor++;
                    continue;
                }
              }
              break;
            }
          }

          function r_RV() {
            return I_pV <= sbp.cursor;
          }

          function r_R1() {
            return I_p1 <= sbp.cursor;
          }

          function r_R2() {
            return I_p2 <= sbp.cursor;
          }

          function r_attached_pronoun() {
            var among_var;
            sbp.ket = sbp.cursor;
            if (sbp.find_among_b(a_1, 13)) {
              sbp.bra = sbp.cursor;
              among_var = sbp.find_among_b(a_2, 11);
              if (among_var && r_RV())
                switch (among_var) {
                  case 1:
                    sbp.bra = sbp.cursor;
                    sbp.slice_from("iendo");
                    break;
                  case 2:
                    sbp.bra = sbp.cursor;
                    sbp.slice_from("ando");
                    break;
                  case 3:
                    sbp.bra = sbp.cursor;
                    sbp.slice_from("ar");
                    break;
                  case 4:
                    sbp.bra = sbp.cursor;
                    sbp.slice_from("er");
                    break;
                  case 5:
                    sbp.bra = sbp.cursor;
                    sbp.slice_from("ir");
                    break;
                  case 6:
                    sbp.slice_del();
                    break;
                  case 7:
                    if (sbp.eq_s_b(1, "u"))
                      sbp.slice_del();
                    break;
                }
            }
          }

          function habr5(a, n) {
            if (!r_R2())
              return true;
            sbp.slice_del();
            sbp.ket = sbp.cursor;
            var among_var = sbp.find_among_b(a, n);
            if (among_var) {
              sbp.bra = sbp.cursor;
              if (among_var == 1 && r_R2())
                sbp.slice_del();
            }
            return false;
          }

          function habr6(c1) {
            if (!r_R2())
              return true;
            sbp.slice_del();
            sbp.ket = sbp.cursor;
            if (sbp.eq_s_b(2, c1)) {
              sbp.bra = sbp.cursor;
              if (r_R2())
                sbp.slice_del();
            }
            return false;
          }

          function r_standard_suffix() {
            var among_var;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_6, 46);
            if (among_var) {
              sbp.bra = sbp.cursor;
              switch (among_var) {
                case 1:
                  if (!r_R2())
                    return false;
                  sbp.slice_del();
                  break;
                case 2:
                  if (habr6("ic"))
                    return false;
                  break;
                case 3:
                  if (!r_R2())
                    return false;
                  sbp.slice_from("log");
                  break;
                case 4:
                  if (!r_R2())
                    return false;
                  sbp.slice_from("u");
                  break;
                case 5:
                  if (!r_R2())
                    return false;
                  sbp.slice_from("ente");
                  break;
                case 6:
                  if (!r_R1())
                    return false;
                  sbp.slice_del();
                  sbp.ket = sbp.cursor;
                  among_var = sbp.find_among_b(a_3, 4);
                  if (among_var) {
                    sbp.bra = sbp.cursor;
                    if (r_R2()) {
                      sbp.slice_del();
                      if (among_var == 1) {
                        sbp.ket = sbp.cursor;
                        if (sbp.eq_s_b(2, "at")) {
                          sbp.bra = sbp.cursor;
                          if (r_R2())
                            sbp.slice_del();
                        }
                      }
                    }
                  }
                  break;
                case 7:
                  if (habr5(a_4, 3))
                    return false;
                  break;
                case 8:
                  if (habr5(a_5, 3))
                    return false;
                  break;
                case 9:
                  if (habr6("at"))
                    return false;
                  break;
              }
              return true;
            }
            return false;
          }

          function r_y_verb_suffix() {
            var among_var, v_1;
            if (sbp.cursor >= I_pV) {
              v_1 = sbp.limit_backward;
              sbp.limit_backward = I_pV;
              sbp.ket = sbp.cursor;
              among_var = sbp.find_among_b(a_7, 12);
              sbp.limit_backward = v_1;
              if (among_var) {
                sbp.bra = sbp.cursor;
                if (among_var == 1) {
                  if (!sbp.eq_s_b(1, "u"))
                    return false;
                  sbp.slice_del();
                }
                return true;
              }
            }
            return false;
          }

          function r_verb_suffix() {
            var among_var, v_1, v_2, v_3;
            if (sbp.cursor >= I_pV) {
              v_1 = sbp.limit_backward;
              sbp.limit_backward = I_pV;
              sbp.ket = sbp.cursor;
              among_var = sbp.find_among_b(a_8, 96);
              sbp.limit_backward = v_1;
              if (among_var) {
                sbp.bra = sbp.cursor;
                switch (among_var) {
                  case 1:
                    v_2 = sbp.limit - sbp.cursor;
                    if (sbp.eq_s_b(1, "u")) {
                      v_3 = sbp.limit - sbp.cursor;
                      if (sbp.eq_s_b(1, "g"))
                        sbp.cursor = sbp.limit - v_3;
                      else
                        sbp.cursor = sbp.limit - v_2;
                    } else
                      sbp.cursor = sbp.limit - v_2;
                    sbp.bra = sbp.cursor;
                  case 2:
                    sbp.slice_del();
                    break;
                }
              }
            }
          }

          function r_residual_suffix() {
            var among_var, v_1;
            sbp.ket = sbp.cursor;
            among_var = sbp.find_among_b(a_9, 8);
            if (among_var) {
              sbp.bra = sbp.cursor;
              switch (among_var) {
                case 1:
                  if (r_RV())
                    sbp.slice_del();
                  break;
                case 2:
                  if (r_RV()) {
                    sbp.slice_del();
                    sbp.ket = sbp.cursor;
                    if (sbp.eq_s_b(1, "u")) {
                      sbp.bra = sbp.cursor;
                      v_1 = sbp.limit - sbp.cursor;
                      if (sbp.eq_s_b(1, "g")) {
                        sbp.cursor = sbp.limit - v_1;
                        if (r_RV())
                          sbp.slice_del();
                      }
                    }
                  }
                  break;
              }
            }
          }
          this.stem = function() {
            var v_1 = sbp.cursor;
            r_mark_regions();
            sbp.limit_backward = v_1;
            sbp.cursor = sbp.limit;
            r_attached_pronoun();
            sbp.cursor = sbp.limit;
            if (!r_standard_suffix()) {
              sbp.cursor = sbp.limit;
              if (!r_y_verb_suffix()) {
                sbp.cursor = sbp.limit;
                r_verb_suffix();
              }
            }
            sbp.cursor = sbp.limit;
            r_residual_suffix();
            sbp.cursor = sbp.limit_backward;
            r_postlude();
            return true;
          }
        };

      /* and return a function that stems a word for the current locale */
      return function(word) {
        st.setCurrent(word);
        st.stem();
        return st.getCurrent();
      }
    })();

    lunr.Pipeline.registerFunction(lunr.es.stemmer, 'stemmer-es');

    /* stop word filter function */
    lunr.es.stopWordFilter = function(token) {
      if (lunr.es.stopWordFilter.stopWords.indexOf(token) === -1) {
        return token;
      }
    };

    lunr.es.stopWordFilter.stopWords = new lunr.SortedSet();
    lunr.es.stopWordFilter.stopWords.length = 309;

    // The space at the beginning is crucial: It marks the empty string
    // as a stop word. lunr.js crashes during search when documents
    // processed by the pipeline still contain the empty string.
    lunr.es.stopWordFilter.stopWords.elements = ' a al algo algunas algunos ante antes como con contra cual cuando de del desde donde durante e el ella ellas ellos en entre era erais eran eras eres es esa esas ese eso esos esta estaba estabais estaban estabas estad estada estadas estado estados estamos estando estar estaremos estará estarán estarás estaré estaréis estaría estaríais estaríamos estarían estarías estas este estemos esto estos estoy estuve estuviera estuvierais estuvieran estuvieras estuvieron estuviese estuvieseis estuviesen estuvieses estuvimos estuviste estuvisteis estuviéramos estuviésemos estuvo está estábamos estáis están estás esté estéis estén estés fue fuera fuerais fueran fueras fueron fuese fueseis fuesen fueses fui fuimos fuiste fuisteis fuéramos fuésemos ha habida habidas habido habidos habiendo habremos habrá habrán habrás habré habréis habría habríais habríamos habrían habrías habéis había habíais habíamos habían habías han has hasta hay haya hayamos hayan hayas hayáis he hemos hube hubiera hubierais hubieran hubieras hubieron hubiese hubieseis hubiesen hubieses hubimos hubiste hubisteis hubiéramos hubiésemos hubo la las le les lo los me mi mis mucho muchos muy más mí mía mías mío míos nada ni no nos nosotras nosotros nuestra nuestras nuestro nuestros o os otra otras otro otros para pero poco por porque que quien quienes qué se sea seamos sean seas seremos será serán serás seré seréis sería seríais seríamos serían serías seáis sido siendo sin sobre sois somos son soy su sus suya suyas suyo suyos sí también tanto te tendremos tendrá tendrán tendrás tendré tendréis tendría tendríais tendríamos tendrían tendrías tened tenemos tenga tengamos tengan tengas tengo tengáis tenida tenidas tenido tenidos teniendo tenéis tenía teníais teníamos tenían tenías ti tiene tienen tienes todo todos tu tus tuve tuviera tuvierais tuvieran tuvieras tuvieron tuviese tuvieseis tuviesen tuvieses tuvimos tuviste tuvisteis tuviéramos tuviésemos tuvo tuya tuyas tuyo tuyos tú un una uno unos vosotras vosotros vuestra vuestras vuestro vuestros y ya yo él éramos'.split(' ');

    lunr.Pipeline.registerFunction(lunr.es.stopWordFilter, 'stopWordFilter-es');
  };
}))
;




var lunrIndex = null;
var lunrData  = null;

// Download index data
$.ajax({
  url: '/search.json',
  cache: true,
  method: 'GET',
  dataType: "json",
  success: function(data) {
    lunrData = data;
    lunrIndex = lunr.Index.load(lunrData.index);
  }
});

$(document).ready(function () { 
  
  $('#search-button').click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#search-overlay').fadeIn("fast"); 
    $('#search-overlay input').focus();
    $('#search-overlay input').val("");
    $('body').addClass('no-scroll');
    
    // Reset results 
    var searchresults = $('.search-results');
    var resultcount = $('#result-count');
    searchresults.hide();
    resultcount.hide();
  });

  $('#close-search-overlay').click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('body').removeClass('no-scroll');
    $('#search-overlay').fadeOut("fast");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      event.preventDefault();
      $('body').removeClass('no-scroll');
      $('#search-overlay').fadeOut("fast");
    }
  });

  $('input#search').on('keyup', function () {
    // Get query
    var query = $(this).val();
    // Search for it
    var result = lunrIndex.search(query);
    // Output it
    var searchresults = $('.search-results');
    var resultcount = $('#result-count');
    if (result.length === 0) {
      
      // Hide results
      searchresults.hide();
      resultcount.hide();

    } else {
      // Show results
      resultcount.html(result.length + " results");
      searchresults.empty();
      for (var item in result) {
        // A result only gives us a reference to a document
        var ref = result[item].ref;
        // Using the reference get the document
        var doc = lunrData.docs[ref];

        // Get Breadcrumbs 
        var breadcrumbs = "<p>" + doc.breadcrumbs + "</p>";

        // Get Title 
        var title = "<p><a href='" + doc.url + "'>" + doc.title + "</a></p>";

        // Get Summary 
        if(!doc.summary) {
          var summary = "<p class='summary'><em>Page has no summary </em></p>"; 
        } else {
          var summary = "<p class='summary'>" + doc.summary + "</p>";
        }

        // Create search result 

        var searchitem = "<div class='search-result'>" + breadcrumbs + 
                          title + summary + "</div>"; 

        searchresults.append(searchitem);
      }
      resultcount.show();
      searchresults.show();
    }
  });
});
