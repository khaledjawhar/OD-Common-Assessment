"use strict";var services=function(){function e(e){var t="1kOOvztwbY1RNm545RKG8Ua6bh2GgX-P_wFadPkdH2ig";Tabletop.init({key:t,callback:e,simpleSheet:!1,prettyColumnNames:!1})}return{getData:e}}(),app=function(){function e(e,t,n){var a=new Ractive({el:e,template:t,data:n});return a}function t(t,n){var a=n.sheets("places").elements,i=n.sheets("indicators").elements,r=n.sheets("values").elements;console.log(i);var s=(i.filter(function(e){return"Y"===e.scoring}).map(function(e){return e.id}),a.map(function(e){return e.indicators=[],r.filter(function(t){t["place-id"]===e.id&&e.indicators.push(t)}),e}));console.log(s);e("#table","#template-table",{places:s})}function n(){services.getData(t)}return{start:n}}();