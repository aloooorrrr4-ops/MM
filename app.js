const SITE_DATA={
restaurants:{
title:"نماذج المطاعم",desc:"ثلاثة اتجاهات مختلفة فعليًا: مطعم فاخر، تطبيق طلب سريع، ومجلة بصرية راقية.",
templates:[
{id:1,name:"ليالي",style:"Fine Dining فاخر",layout:"luxury",tags:["Hero سينمائي","منيو راقٍ","هوية فاخرة"],img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"},
{id:2,name:"Quick Bite",style:"تطبيق طلب سريع",layout:"delivery",tags:["بحث","تصنيفات","سلة"],img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85"},
{id:3,name:"سُفرة",style:"Editorial / مجلة",layout:"editorial",tags:["قصة المطعم","صور كبيرة","عرض راقٍ"],img:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85"}],
items:[
["ستيك مشوي","قطعة لحم مختارة مع صوص خاص.","79 ر.س","https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"],
["ريزوتو","أرز كريمي مع الفطر والبارميزان.","48 ر.س","https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80"],
["برجر كلاسيك","لحم مشوي، جبنة وصوص المنزل.","24 ر.س","https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"],
["بيتزا خاصة","موزاريلا، طماطم وإضافات مختارة.","31 ر.س","https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"],
["لاتيه بارد","إسبريسو مع الحليب والثلج.","16 ر.س","https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"],
["تشيز كيك","كريمي مع صوص التوت.","19 ر.س","https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"]
]},
buffets:{
title:"نماذج البوفيهات",desc:"واجهات مناسبة للوجبات السريعة والفطور والمشروبات.",
templates:[
{id:1,name:"السريع",style:"Fast Food",tags:["وجبات","عروض","طلب"],img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=82"},
{id:2,name:"لقمة",style:"Clean Menu",tags:["فطور","ساندوتشات"],img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=82"},
{id:3,name:"صباح",style:"Breakfast",tags:["فطور","قهوة"],img:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=82"}],
items:[
["ساندوتش دجاج","دجاج متبل وخضار وصوص خاص.","12 ر.س","https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80"],
["برجر دجاج","دجاج مقرمش مع جبنة.","15 ر.س","https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80"],
["عصير مانجو","مانجو طازج.","8 ر.س","https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80"],
["فطور عربي","بيض، جبنة وفول.","18 ر.س","https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80"]
]},
salons:{
title:"نماذج الصوالين",desc:"خدمات وأسعار وحجز مباشر بصور وهوية قوية.",
templates:[
{id:1,name:"لمسة",style:"Beauty",tags:["خدمات","حجز"],img:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=82"},
{id:2,name:"ستايل",style:"Barbershop",tags:["قص","عناية"],img:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=82"},
{id:3,name:"Serenity",style:"Spa",tags:["باقات","عناية"],img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=82"}],
items:[
["قص وتصفيف","جلسة قص وتصفيف كاملة.","60 ر.س","https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=80"],
["عناية بالشعر","ترطيب وعناية مكثفة.","85 ر.س","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"],
["صبغة كاملة","استشارة واختيار لون.","180 ر.س","https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=80"],
["باقة مناسبة","تجهيز كامل للمناسبة.","220 ر.س","https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=700&q=80"]
]},
groceries:{
title:"نماذج البقالات",desc:"متجر مصغر وعروض يومية وطلب سريع.",
templates:[
{id:1,name:"الخير",style:"Storefront",tags:["منتجات","عروض"],img:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=82"},
{id:2,name:"ماركت 24",style:"Quick Shop",tags:["أقسام","طلب"],img:"https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=82"},
{id:3,name:"سلة",style:"Deals",tags:["عروض","خصومات"],img:"https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=82"}],
items:[
["مياه","كرتون مياه شرب.","12 ر.س","https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=700&q=80"],
["حليب","حليب كامل الدسم.","7 ر.س","https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80"],
["قهوة","قهوة محمصة.","22 ر.س","https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=80"],
["منظف","متعدد الاستخدام.","14 ر.س","https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=80"]
]},
tailors:{
title:"نماذج الخياطة",desc:"Lookbook وخدمات وحجز قياس.",
templates:[
{id:1,name:"إبرة وخيط",style:"Lookbook",tags:["موديلات","قياس"],img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=82"},
{id:2,name:"الثوب الراقي",style:"Luxury",tags:["أقمشة","تفصيل"],img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=82"},
{id:3,name:"خياط المدينة",style:"Service",tags:["خدمات","أسعار"],img:"https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=82"}],
items:[
["تفصيل ثوب","تفصيل حسب المقاس.","180 ر.س","https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80"],
["تعديل مقاس","تقصير وتوسيع.","35 ر.س","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80"],
["تفصيل بدلة","بدلة حسب القياس.","450 ر.س","https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80"],
["موعد قياس","حجز موعد قياس.","مجاني","https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80"]
]}};

function q(n){return new URLSearchParams(location.search).get(n)}
function dataFor(t){return SITE_DATA[t]||SITE_DATA.restaurants}

function renderCategoryPage(){
 const type=q("type")||"restaurants",d=dataFor(type);
 document.title=d.title+" | MM Studio";
 document.getElementById("catTitle").textContent=d.title;
 document.getElementById("catDesc").textContent=d.desc;
 document.getElementById("templatesGrid").innerHTML=d.templates.map(t=>`
 <article class="template-card ${type==="restaurants"?"restaurant-card layout-"+t.layout:""}">
   <div class="template-preview" style="background-image:url('${t.img}')">
     <div><h3>${t.name}</h3><p>${t.style}</p></div>
   </div>
   <div class="template-body">
     <div class="template-tags">${t.tags.map(x=>`<span>${x}</span>`).join("")}</div>
     <a class="template-btn" href="demo.html?type=${type}&style=${t.id}">معاينة التصميم كاملًا</a>
   </div>
 </article>`).join("");
}

function luxuryRestaurant(d){
 const items=d.items.slice(0,4);
 return `<section class="demo-site luxury-site">
 <div class="luxury-nav"><span>RESERVATIONS</span><b>L A Y A L I</b><span>JAZAN • KSA</span></div>
 <div class="luxury-hero" style="background-image:url('${d.templates[0].img}')">
  <div class="luxury-copy"><small>FINE ARABIAN DINING</small><h1>ليالي</h1><p>تجربة طعام هادئة، قائمة مختارة، وتفاصيل مصممة بذوق.</p></div>
 </div>
 <div class="luxury-menu">
  <div class="luxury-menu-head"><div><small>THE MENU</small><h2>اختيارات الشيف</h2></div><p>قائمة موسمية — الأسعار تشمل الضريبة</p></div>
  <div class="luxury-grid">${items.map(it=>`<article class="luxury-item"><img src="${it[3]}"><div><h3>${it[0]}</h3><p>${it[1]}</p></div><strong>${it[2]}</strong></article>`).join("")}</div>
 </div></section>`;
}

function deliveryRestaurant(d){
 return `<section class="demo-site delivery-site">
 <header class="delivery-head"><div class="delivery-head-inner"><div class="delivery-logo"><i>Q</i><div><b>Quick Bite</b><div style="font-size:10px;color:#888">برجر • بيتزا • مشروبات</div></div></div><span class="delivery-status">● مفتوح الآن</span></div></header>
 <main class="delivery-main">
  <section class="delivery-banner"><div><small>عرض اليوم</small><h1>وجبتك المفضلة<br>أسرع مما تتوقع.</h1><p>خصم 20% على الوجبات المختارة.</p></div><img src="${d.items[2][3]}"></section>
  <div class="search-box">⌕ ابحث عن برجر، بيتزا، مشروب…</div>
  <div class="app-chips"><span>🔥 الأكثر طلبًا</span><span>🍔 برجر</span><span>🍕 بيتزا</span><span>🥤 مشروبات</span><span>🍰 حلويات</span></div>
  <div class="delivery-grid">${d.items.map(it=>`<article class="delivery-product"><img src="${it[3]}"><div><h3>${it[0]}</h3><p>${it[1]}</p><footer><strong>${it[2]}</strong><button>+</button></footer></div></article>`).join("")}</div>
 </main>
 <div class="floating-cart"><span>2 أصناف</span><b>عرض السلة • 55 ر.س</b></div>
 </section>`;
}

function editorialRestaurant(d){
 const items=d.items.slice(0,4);
 return `<section class="demo-site editorial-site">
 <div class="editorial-cover">
  <div class="editorial-copy"><small>EST. 2026 • JAZAN</small><h1>سُفرة</h1><p>ليس مجرد منيو. مساحة تحكي قصة المكان، المكونات، والأطباق قبل أن تصل إلى الطاولة.</p></div>
  <div class="editorial-cover-img" style="background-image:url('${d.templates[2].img}')"></div>
 </div>
 <section class="editorial-story"><h2>نكهة لها<br>قصة.</h2><p>نختار المكونات بعناية، ونقدم وصفات عربية بروح حديثة. هذا النوع من المواقع مناسب للمطاعم التي تريد أن تبيع التجربة والهوية، وليس فقط قائمة الأسعار.</p></section>
 <section class="editorial-dishes">${items.map((it,i)=>`<article class="editorial-dish"><span>0${i+1}</span><h3>${it[0]}</h3><p>${it[1]}</p><strong>${it[2]}</strong></article>`).join("")}</section>
 </section>`;
}

function genericDemo(type,d,style){
 const t=d.templates[(style-1)%d.templates.length];
 return `<section class="demo-site generic-site">
 <div class="generic-hero" style="background-image:url('${t.img}')"><div><small>${t.style}</small><h1>${t.name}</h1><p>${d.desc}</p></div></div>
 <div class="generic-content"><div class="generic-grid">${d.items.map(it=>`<article class="generic-item"><img src="${it[3]}"><div><h3>${it[0]}</h3><p>${it[1]}</p><strong>${it[2]}</strong></div></article>`).join("")}</div></div>
 </section>`;
}

function renderDemoPage(){
 const type=q("type")||"restaurants",style=Number(q("style")||1),d=dataFor(type),t=d.templates[(style-1)%d.templates.length];
 document.title=t.name+" | MM Studio";
 document.getElementById("demoToolbarTitle").textContent=t.name+" — "+t.style;
 let html="";
 if(type==="restaurants"&&style===1) html=luxuryRestaurant(d);
 else if(type==="restaurants"&&style===2) html=deliveryRestaurant(d);
 else if(type==="restaurants"&&style===3) html=editorialRestaurant(d);
 else html=genericDemo(type,d,style);
 document.getElementById("demoRoot").innerHTML=html;
}