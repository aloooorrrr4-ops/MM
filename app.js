
const SITE_DATA = {
  restaurants: {
    title: "نماذج المطاعم",
    singular: "مطعم",
    intro: "كل نموذج هنا موقع مطعم كامل: واجهة، قصة المطعم، أقسام المنيو، الأصناف، العروض، المعرض، آراء العملاء، الموقع والتواصل.",
    sectionLabel: "أقسام المنيو",
    actionLabel: "اطلب عبر واتساب",
    aboutTitle: "قصة المكان",
    aboutText: "نمزج بين الوصفات المألوفة والتقديم العصري، ونبني تجربة تبدأ من أول زيارة للموقع وتستمر حتى آخر لقمة.",
    templates: [
      {id:1,name:"ليالي",style:"Luxury Dining",layout:"luxe",desc:"مطعم راقٍ بهوية داكنة وصور سينمائية.",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=60"},
      {id:2,name:"Quick Bite",style:"Order App",layout:"app",desc:"واجهة سريعة تشبه تطبيقات الطلب والتوصيل.",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=60"},
      {id:3,name:"سُفرة",style:"Editorial Story",layout:"editorial",desc:"موقع بصري يبيع تجربة المطعم وقصته.",img:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=60"},
      {id:4,name:"دونر ستريت",style:"Menu Board",layout:"board",desc:"لوحة منيو سوداء وحمراء تعرض الأقسام والأسعار بكثافة مثل منيو المطاعم السريعة.",img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=60"}
    ],
    categories:["الأكثر طلبًا","المقبلات","الأطباق الرئيسية","البرجر","المشروبات","الحلويات"],
    items:[
      ["حمص الشيف","حمص كريمي بزيت الزيتون والخبز المحمص.","14 ر.س","https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=520&q=45","المقبلات",true],
      ["سلطة سيزر","خس طازج، دجاج، بارميزان وصوص سيزر.","22 ر.س","https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=520&q=45","المقبلات",false],
      ["بطاطس محملة","بطاطس مقرمشة، جبنة وصوص خاص.","18 ر.س","https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=520&q=45","المقبلات",true],

      ["ستيك مشوي","لحم مختار مع صوص خاص وخضار موسمية.","79 ر.س","https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=520&q=45","الأطباق الرئيسية",true],
      ["دجاج مشوي","صدر دجاج متبل مع أرز وخضار.","42 ر.س","https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=520&q=45","الأطباق الرئيسية",false],
      ["بيتزا خاصة","موزاريلا، طماطم وإضافات مختارة.","31 ر.س","https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=520&q=45","الأطباق الرئيسية",true],

      ["برجر كلاسيك","لحم مشوي، جبنة، خس وصوص المنزل.","24 ر.س","https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=520&q=45","البرجر",true],
      ["برجر دبل","قطعتا لحم، جبنة مزدوجة وصوص مدخن.","32 ر.س","https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=520&q=45","البرجر",false],
      ["برجر دجاج كرسبي","دجاج مقرمش، خس ومايونيز حار.","27 ر.س","https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=520&q=45","البرجر",true],

      ["لاتيه بارد","إسبريسو مع الحليب والثلج.","16 ر.س","https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=520&q=45","المشروبات",true],
      ["موهيتو ليمون","ليمون ونعناع وصودا باردة.","15 ر.س","https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=520&q=45","المشروبات",false],
      ["عصير مانجو","مانجو طازج محضر يوميًا.","14 ر.س","https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=520&q=45","المشروبات",false],

      ["تشيز كيك","تشيز كيك كريمي مع صوص التوت.","19 ر.س","https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=520&q=45","الحلويات",true],
      ["براوني شوكولاتة","براوني دافئ مع صوص الشوكولاتة.","18 ر.س","https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=520&q=45","الحلويات",false],
      ["بان كيك","بان كيك هش مع عسل وفواكه.","21 ر.س","https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=520&q=45","الحلويات",false]
    ],
    offer:["عرض العائلة","4 وجبات + بطاطس + مشروبات","99 ر.س"],
    gallery:[
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=55"
    ]
  },

  buffets: {
    title:"نماذج البوفيهات",
    singular:"بوفيه",
    intro:"كل نموذج موقع كامل للبوفيه: فطور، سندوتشات، وجبات سريعة، مشروبات، عروض، معرض وتواصل.",
    sectionLabel:"أقسام البوفيه",
    actionLabel:"اطلب الآن",
    aboutTitle:"سريع، طازج، واضح",
    aboutText:"واجهة مناسبة للطلب اليومي؛ توصل العميل إلى الوجبة والسعر ورقم الطلب بأقل عدد من الخطوات.",
    templates:[
      {id:1,name:"Street Bite",style:"Bold Fast Food",layout:"luxe",desc:"تصميم قوي للوجبات السريعة والعروض.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=60"},
      {id:2,name:"لقمة",style:"Quick Order",layout:"app",desc:"طلب سريع وتصنيفات واضحة على الجوال.",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=60"},
      {id:3,name:"صباح",style:"Breakfast Editorial",layout:"editorial",desc:"تصميم هادئ للفطور والقهوة.",img:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=60"},
      {id:4,name:"مطبخ الشيخ",style:"Poster Menu",layout:"board",desc:"منيو خشبي وبرتقالي مضغوط للفطور والسندوتشات والمشروبات.",img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=60"}
    ],
    categories:["الفطور","السندوتشات","البرجر","العصائر","القهوة"],
    items:[
      ["فطور عربي","بيض، جبنة، فول وخبز طازج.","18 ر.س","https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=520&q=45","الفطور",true],
      ["شكشوكة","بيض بالطماطم والفلفل والبهارات.","14 ر.س","https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=520&q=45","الفطور",false],
      ["فول خاص","فول مع طحينة وزيت زيتون.","10 ر.س","https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=520&q=45","الفطور",true],

      ["ساندوتش دجاج","دجاج متبل وخضار وصوص خاص.","12 ر.س","https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=520&q=45","السندوتشات",true],
      ["ساندوتش شاورما","شاورما دجاج، ثوم ومخلل.","11 ر.س","https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=520&q=45","السندوتشات",true],
      ["ساندوتش بيض","بيض وجبن وخضار.","9 ر.س","https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=520&q=45","السندوتشات",false],

      ["برجر دجاج","دجاج مقرمش مع جبنة وصوص.","15 ر.س","https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=520&q=45","البرجر",true],
      ["برجر لحم","لحم مشوي مع جبنة وخضار.","17 ر.س","https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=520&q=45","البرجر",false],
      ["برجر دبل","قطعتا لحم وصوص خاص.","22 ر.س","https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=520&q=45","البرجر",true],

      ["عصير مانجو","مانجو طازج محضر يوميًا.","8 ر.س","https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=520&q=45","العصائر",true],
      ["عصير برتقال","برتقال طبيعي طازج.","7 ر.س","https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=520&q=45","العصائر",false],
      ["ليمون نعناع","ليمون ونعناع بارد.","9 ر.س","https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=520&q=45","العصائر",false],

      ["قهوة اليوم","قهوة سوداء طازجة.","7 ر.س","https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=520&q=45","القهوة",true],
      ["كابتشينو","إسبريسو وحليب مبخر.","12 ر.س","https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=520&q=45","القهوة",false],
      ["شاي حليب","شاي بالحليب والهيل.","6 ر.س","https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=520&q=45","القهوة",false]
    ],
    offer:["عرض الصباح","فطور + قهوة + عصير","25 ر.س"],
    gallery:[
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=55"
    ]
  },

  salons: {
    title:"نماذج الصوالين",
    singular:"صالون",
    intro:"كل نموذج موقع صالون كامل: الخدمات، الأسعار، الباقات، معرض الأعمال، آراء العميلات، الحجز، الموقع والتواصل.",
    sectionLabel:"الخدمات",
    actionLabel:"احجز موعدك",
    aboutTitle:"الجمال في التفاصيل",
    aboutText:"نقدم تجربة عناية متكاملة تبدأ باختيار الخدمة وتنتهي بحجز الموعد مباشرة من الموقع.",
    templates:[
      {id:1,name:"لمسة",style:"Beauty Luxe",layout:"luxe",desc:"هوية أنثوية فاخرة مع صور كبيرة.",img:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=60"},
      {id:2,name:"ستايل",style:"Booking App",layout:"app",desc:"خدمات وأسعار وحجز سريع من الجوال.",img:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=60"},
      {id:3,name:"Serenity",style:"Spa Editorial",layout:"editorial",desc:"تصميم هادئ للباقات والعناية والسبا.",img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=60"}
    ],
    categories:["قص وتصفيف","عناية الشعر","الصبغات","المكياج","الباقات"],
    items:[
      ["قص وتصفيف","جلسة قص وتصفيف كاملة.","60 ر.س","https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=55","قص وتصفيف"],
      ["عناية بالشعر","جلسة ترطيب وعناية مكثفة.","85 ر.س","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=55","عناية الشعر"],
      ["صبغة كاملة","اختيار لون واستشارة قبل التنفيذ.","180 ر.س","https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=55","الصبغات"],
      ["مكياج سهرة","مكياج كامل للمناسبات.","150 ر.س","https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=600&q=55","المكياج"],
      ["باقة العروس","تجهيز شامل للعروس.","650 ر.س","https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=55","الباقات"],
      ["سبا شعر","غسيل وعلاج وترطيب.","110 ر.س","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=55","عناية الشعر"]
    ],
    offer:["باقة المناسبات","شعر + مكياج + عناية","299 ر.س"],
    gallery:[
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=55"
    ]
  },

  groceries: {
    title:"نماذج البقالات",
    singular:"بقالة",
    intro:"كل نموذج متجر بقالة كامل: الأقسام، المنتجات، العروض، الأكثر طلبًا، التوصيل، معلومات المتجر والتواصل.",
    sectionLabel:"أقسام المتجر",
    actionLabel:"اطلب واتساب",
    aboutTitle:"احتياجاتك اليومية في مكان واحد",
    aboutText:"واجهة خفيفة وسريعة تعرض الأقسام والمنتجات والعروض اليومية مع إمكانية الطلب المباشر.",
    templates:[
      {id:1,name:"الخير",style:"Fresh Market",layout:"luxe",desc:"تصميم بصري للأقسام والمنتجات الطازجة.",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=60"},
      {id:2,name:"ماركت 24",style:"Quick Cart",layout:"app",desc:"متجر جوال سريع مع سلة وتصنيفات.",img:"https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=60"},
      {id:3,name:"سلة",style:"Weekly Deals",layout:"editorial",desc:"واجهة عروض وخصومات أسبوعية.",img:"https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=60"}
    ],
    categories:["العروض","المشروبات","الألبان","المعلبات","المنظفات"],
    items:[
      ["مياه 24 حبة","كرتون مياه شرب.","12 ر.س","https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=600&q=55","المشروبات"],
      ["حليب طازج","حليب كامل الدسم.","7 ر.س","https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=55","الألبان"],
      ["قهوة عربية","عبوة قهوة محمصة.","22 ر.س","https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=55","العروض"],
      ["منظف منزلي","منظف متعدد الاستخدام.","14 ر.س","https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=55","المنظفات"],
      ["عصير برتقال","عبوة عصير بارد.","8 ر.س","https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=55","المشروبات"],
      ["تونة","تونة معلبة.","6 ر.س","https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&w=600&q=55","المعلبات"]
    ],
    offer:["عروض الأسبوع","خصومات حتى 30%","وفر الآن"],
    gallery:[
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=700&q=55"
    ]
  },

  tailors: {
    title:"نماذج الخياطة",
    singular:"محل خياطة",
    intro:"كل نموذج موقع خياطة كامل: الموديلات، الخدمات، الأسعار، الأقمشة، معرض الأعمال، حجز القياس والموقع.",
    sectionLabel:"الخدمات والموديلات",
    actionLabel:"احجز قياس",
    aboutTitle:"تفصيل يليق بذوقك",
    aboutText:"نحوّل خبرة الخياط إلى معرض رقمي يعرض الموديلات والأقمشة والخدمات ويختصر رحلة حجز القياس.",
    templates:[
      {id:1,name:"Atelier",style:"Tailor Luxe",layout:"luxe",desc:"هوية فاخرة للتفصيل والبدلات.",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=60"},
      {id:2,name:"إبرة وخيط",style:"Measurement App",layout:"app",desc:"خدمات وأسعار وحجز قياس سريع.",img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=60"},
      {id:3,name:"Lookbook",style:"Fashion Editorial",layout:"editorial",desc:"معرض موديلات بصري مثل مجلات الأزياء.",img:"https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=60"}
    ],
    categories:["تفصيل الثياب","البدلات","التعديلات","الأقمشة","مواعيد القياس"],
    items:[
      ["تفصيل ثوب","تفصيل حسب المقاس مع خيارات متعددة.","180 ر.س","https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=55","تفصيل الثياب"],
      ["تفصيل بدلة","بدلة مفصلة حسب القياس.","450 ر.س","https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=55","البدلات"],
      ["تعديل مقاس","تقصير وتوسيع وتعديل احترافي.","35 ر.س","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=55","التعديلات"],
      ["قماش فاخر","تشكيلة أقمشة موسمية.","حسب النوع","https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=55","الأقمشة"],
      ["موعد قياس","احجز موعد القياس مباشرة.","مجاني","https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=55","مواعيد القياس"],
      ["تفصيل جاكيت","جاكيت رجالي حسب الطلب.","320 ر.س","https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=600&q=55","البدلات"]
    ],
    offer:["عرض الموسم","تفصيل ثوبين بسعر خاص","وفر 15%"],
    gallery:[
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=55",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=700&q=55"
    ]
  }
};

function lazyBackgrounds(root=document){
  const els=[...root.querySelectorAll('.lazy-bg[data-bg]')];
  const load=el=>{
    if(el.dataset.loaded)return;
    el.style.backgroundImage='url("'+el.dataset.bg+'")';
    el.dataset.loaded='1';
    el.classList.add('loaded');
  };
  if(!('IntersectionObserver' in window)){els.forEach(load);return;}
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){load(e.target);io.unobserve(e.target);}
    });
  },{rootMargin:'160px 0px'});
  els.forEach(el=>io.observe(el));
}
function q(n){return new URLSearchParams(location.search).get(n)}
function dataFor(t){return SITE_DATA[t]||SITE_DATA.restaurants}
function bindCategoryFilters(root=document){
  const controls=[...root.querySelectorAll("[data-menu-filter]")];
  const products=[...root.querySelectorAll("[data-category]")];
  if(!controls.length||!products.length)return;
  const apply=(value,clicked)=>{
    products.forEach(card=>{
      if(value==="الكل") card.hidden=false;
      else if(value==="الأكثر طلبًا") card.hidden=card.dataset.popular!=="1";
      else card.hidden=card.dataset.category!==value;
    });
    controls.forEach(btn=>btn.classList.toggle("active",btn===clicked));
    const section=root.querySelector("#sections");
    if(section) section.scrollIntoView({behavior:"smooth",block:"start"});
  };
  controls.forEach(btn=>btn.addEventListener("click",()=>apply(btn.dataset.menuFilter,btn)));
}
function navLinks(d){
  return `<nav class="full-demo-nav">
    <a href="#home">الرئيسية</a>
    <a href="#about">من نحن</a>
    <a href="#sections">${d.sectionLabel}</a>
    <a href="#offers">العروض</a>
    <a href="#gallery">المعرض</a>
    <a href="#reviews">الآراء</a>
    <a href="#contact">تواصل</a>
  </nav>`;
}
function commonSections(d, variant){
  return {
    about:`<section id="about" class="full-about ${variant}">
      <div><span class="mini-kicker">ABOUT</span><h2>${d.aboutTitle}</h2></div>
      <p>${d.aboutText}</p>
    </section>`,
    offer:`<section id="offers" class="full-offer ${variant}">
      <div><span>عرض مميز</span><h2>${d.offer[0]}</h2><p>${d.offer[1]}</p></div><strong>${d.offer[2]}</strong>
    </section>`,
    gallery:`<section id="gallery" class="full-gallery ${variant}">
      <div class="full-section-title"><span>GALLERY</span><h2>المعرض</h2></div>
      <div class="gallery-grid">${d.gallery.map((x,i)=>`<img src="${x}" alt="صورة ${i+1}" loading="lazy" decoding="async">`).join("")}</div>
    </section>`,
    reviews:`<section id="reviews" class="full-reviews ${variant}">
      <div class="full-section-title"><span>REVIEWS</span><h2>آراء العملاء</h2></div>
      <div class="review-grid">
        <article><b>★★★★★</b><p>الموقع مرتب جدًا وسهل الوصول لكل شيء.</p><span>— عميل</span></article>
        <article><b>★★★★★</b><p>الصور والأسعار واضحة والتواصل مباشر.</p><span>— عميل</span></article>
        <article><b>★★★★★</b><p>تجربة جميلة على الجوال وسريعة.</p><span>— عميل</span></article>
      </div>
    </section>`,
    contact:`<section id="contact" class="full-contact ${variant}">
      <div><span class="mini-kicker">VISIT US</span><h2>زورونا أو تواصلوا معنا</h2><p>يوميًا من 9:00 ص إلى 12:00 ص</p></div>
      <div class="contact-card"><p>📍 الموقع على الخريطة</p><p>☎ 05XXXXXXXX</p><a href="https://wa.me/" target="_blank">${d.actionLabel}</a></div>
    </section>`
  };
}

function renderCategoryPage(){
  const type=q("type")||"restaurants",d=dataFor(type);
  document.title=d.title+" | MM Studio";
  document.getElementById("catTitle").textContent=d.title;
  document.getElementById("catDesc").textContent=d.intro;
  document.getElementById("templatesGrid").innerHTML=d.templates.map(t=>`
    <article class="template-card layout-${t.layout}">
      <div class="template-preview lazy-bg" data-bg="${t.img}">
        <div><span class="template-no">0${t.id}</span><h3>${t.name}</h3><p>${t.style}</p></div>
      </div>
      <div class="template-body">
        <p class="template-desc">${t.desc}</p>
        <div class="template-sections"><span>الرئيسية</span><span>من نحن</span><span>${d.sectionLabel}</span><span>العروض</span><span>المعرض</span><span>الآراء</span><span>التواصل</span></div>
        <a class="template-btn" href="demo.html?type=${type}&style=${t.id}">فتح الموقع كاملًا</a>
      </div>
    </article>`).join("");
  lazyBackgrounds(document.getElementById("templatesGrid"));
}


function industrySection(type,d){
  const blocks={
    restaurants:`<section class="industry-section restaurant-extra">
      <div><span class="mini-kicker">CHEF'S NOTE</span><h2>اختيارات الشيف</h2><p>أطباق موسمية مختارة بعناية، مع إمكانية إبراز طبق اليوم أو الوجبة المميزة.</p></div>
      <div class="industry-cards"><article><b>طبق اليوم</b><span>يتغير يوميًا</span></article><article><b>حجز طاولة</b><span>واتساب أو اتصال</span></article><article><b>طلبات المناسبات</b><span>تنسيق مسبق</span></article></div>
    </section>`,
    buffets:`<section class="industry-section buffet-extra">
      <div><span class="mini-kicker">QUICK ORDER</span><h2>اطلبها بسرعة</h2><p>قسم مصمم للطلبات السريعة: اختر الوجبة، الإضافة والمشروب ثم انتقل مباشرة للتواصل.</p></div>
      <div class="industry-cards"><article><b>وجبة فردية</b><span>جاهزة خلال دقائق</span></article><article><b>وجبة عائلية</b><span>أوفر للعائلة</span></article><article><b>طلبات الشركات</b><span>كميات وتجهيز مسبق</span></article></div>
    </section>`,
    salons:`<section class="industry-section salon-extra">
      <div><span class="mini-kicker">BOOKING</span><h2>اختاري خدمتك وموعدك</h2><p>واجهة حجز واضحة تعرض الخدمات والباقات قبل التواصل مع الصالون.</p></div>
      <div class="industry-cards"><article><b>اليوم</b><span>4 م · 6 م · 8 م</span></article><article><b>غدًا</b><span>12 م · 5 م · 9 م</span></article><article><b>الباقات</b><span>مناسبة · عروس · عناية</span></article></div>
    </section>`,
    groceries:`<section class="industry-section grocery-extra">
      <div><span class="mini-kicker">DELIVERY</span><h2>توصيل الحي</h2><p>اعرض مناطق التوصيل والحد الأدنى للطلب والعروض اليومية بوضوح.</p></div>
      <div class="industry-cards"><article><b>توصيل سريع</b><span>داخل الحي</span></article><article><b>طلب أدنى</b><span>ابتداءً من 30 ر.س</span></article><article><b>عروض يومية</b><span>تتحدث باستمرار</span></article></div>
    </section>`,
    tailors:`<section class="industry-section tailor-extra">
      <div><span class="mini-kicker">MEASUREMENT</span><h2>رحلة التفصيل</h2><p>من اختيار القماش إلى القياس ثم البروفة والاستلام، كلها واضحة للعميل داخل الموقع.</p></div>
      <div class="industry-cards"><article><b>1. اختيار الموديل</b><span>من المعرض</span></article><article><b>2. أخذ القياس</b><span>موعد في المحل</span></article><article><b>3. الاستلام</b><span>بعد البروفة</span></article></div>
    </section>`
  };
  return blocks[type]||"";
}

function luxePage(type,d,t){
 const c=commonSections(d,"v-luxe");
 return `<section class="full-demo luxe-full type-${type}">
  <header class="demo-site-head"><a href="#home" class="demo-logo">${t.name}</a>${navLinks(d)}<a class="demo-head-action" href="#contact">${d.actionLabel}</a></header>
  <section id="home" class="luxe-full-hero" style="background-image:url('${t.img}')">
    <div class="hero-shade"></div>
    <div class="luxe-full-copy"><span>PREMIUM EXPERIENCE</span><h1>${t.name}</h1><p>${t.desc}</p><a href="#sections">استكشف ${d.sectionLabel}</a></div>
  </section>
  ${c.about}
  <section id="sections" class="full-products v-luxe">
    <div class="full-section-title"><span>EXPLORE</span><h2>${d.sectionLabel}</h2></div>
    <div class="category-band"><button type="button" class="active" data-menu-filter="الكل">الكل</button>${d.categories.map(x=>`<button type="button" data-menu-filter="${x}">${x}</button>`).join("")}</div>
    <div class="luxe-product-grid">${d.items.map(it=>`<article data-category="${it[4]}" data-popular="${it[5]?"1":"0"}"><img src="${it[3]}" loading="lazy" decoding="async"><div><small>${it[4]}</small><h3>${it[0]}</h3><p>${it[1]}</p><strong>${it[2]}</strong></div></article>`).join("")}</div>
  </section>
  ${c.offer}${industrySection(type,d)}${c.gallery}${c.reviews}${c.contact}
  <footer class="full-footer"><b>${t.name}</b><span>© 2026</span></footer>
 </section>`;
}

function appPage(type,d,t){
 const c=commonSections(d,"v-app");
 return `<section class="full-demo app-full type-${type}">
  <header class="app-full-head"><div><b>${t.name}</b><small>● متاح الآن</small></div><a href="#contact">${d.actionLabel}</a></header>
  <section id="home" class="app-full-home">
    <div class="app-promo"><div><span>عرض اليوم</span><h1>${d.offer[0]}</h1><p>${d.offer[1]}</p><a href="#sections">ابدأ التصفح</a></div><img src="${t.img}" decoding="async" fetchpriority="high"></div>
    <div class="app-search">⌕ ابحث داخل الموقع…</div>
    <div class="app-cat-scroll"><button type="button" class="active" data-menu-filter="الكل">الكل</button>${d.categories.map(x=>`<button type="button" data-menu-filter="${x}">${x}</button>`).join("")}</div>
  </section>
  ${c.about}
  <section id="sections" class="app-products">
    <div class="full-section-title"><span>POPULAR</span><h2>${d.sectionLabel}</h2></div>
    <div class="app-product-grid">${d.items.map(it=>`<article data-category="${it[4]}" data-popular="${it[5]?"1":"0"}"><img src="${it[3]}" loading="lazy" decoding="async"><div><small>${it[4]}</small><h3>${it[0]}</h3><p>${it[1]}</p><footer><strong>${it[2]}</strong><button type="button" aria-label="إضافة">+</button></footer></div></article>`).join("")}</div>
  </section>
  ${c.offer}${industrySection(type,d)}${c.gallery}${c.reviews}${c.contact}
  <div class="app-bottom-nav"><a href="#home">الرئيسية</a><a href="#sections">الأقسام</a><a href="#offers">العروض</a><a href="#contact">تواصل</a></div>
 </section>`;
}

function editorialPage(type,d,t){
 const c=commonSections(d,"v-editorial");
 return `<section class="full-demo editorial-full type-${type}">
  <header class="editorial-head"><a href="#home">${t.name}</a>${navLinks(d)}</header>
  <section id="home" class="editorial-full-hero">
    <div class="editorial-hero-copy"><span>ISSUE 01 • 2026</span><h1>${t.name}</h1><p>${t.desc}</p><a href="#about">اكتشف القصة ↓</a></div>
    <div class="editorial-hero-image" style="background-image:url('${t.img}')"></div>
  </section>
  ${c.about}
  <section id="sections" class="editorial-products">
    <div class="full-section-title"><span>COLLECTION</span><h2>${d.sectionLabel}</h2></div>
    <div class="editorial-category-list"><button type="button" class="active" data-menu-filter="الكل"><b>00</b><span>الكل</span></button>${d.categories.map((x,i)=>`<button type="button" data-menu-filter="${x}"><b>0${i+1}</b><span>${x}</span></button>`).join("")}</div>
    <div class="editorial-product-list">${d.items.map((it,i)=>`<article data-category="${it[4]}" data-popular="${it[5]?"1":"0"}"><span>0${i+1}</span><img src="${it[3]}" loading="lazy" decoding="async"><div><small>${it[4]}</small><h3>${it[0]}</h3><p>${it[1]}</p></div><strong>${it[2]}</strong></article>`).join("")}</div>
  </section>
  ${c.offer}${industrySection(type,d)}${c.gallery}${c.reviews}${c.contact}
  <footer class="full-footer editorial"><b>${t.name}</b><span>Designed as a full business website</span></footer>
 </section>`;
}


function boardPage(type,d,t){
  const isRestaurant=type==="restaurants";
  const grouped=d.categories
    .filter(x=>x!=="الأكثر طلبًا")
    .map((cat,idx)=>{
      const rows=d.items.filter(it=>it[4]===cat).slice(0,5);
      if(!rows.length)return "";
      return `<section class="board-group">
        <header><span>${idx+1}</span><h3>${cat}</h3></header>
        <div class="board-rows">${rows.map(it=>`<div class="board-row"><b>${it[0]}</b><span>${it[2]}</span></div>`).join("")}</div>
        ${idx<3&&rows[0]?`<img src="${rows[0][3]}" alt="${rows[0][0]}" loading="lazy" decoding="async">`:""}
      </section>`;
    }).join("");
  return `<section class="full-demo board-site ${isRestaurant?"board-red":"board-orange"}">
    <header class="board-top">
      <div class="board-brand"><small>MENU • 2026</small><h1>${t.name}</h1><p>${isRestaurant?"FOOD & DRINKS":"فطور • ساندوتشات • مشروبات"}</p></div>
      <a href="#contact">${d.actionLabel}</a>
    </header>
    <section class="board-hero" id="home">
      <div><span>${isRestaurant?"SPECIAL MENU":"منيو يومي"}</span><h2>${isRestaurant?"طعم قوي. منيو واضح.":"سريع، واضح، وأسعاره أمامك."}</h2><p>${t.desc}</p></div>
      <img src="${t.img}" alt="${t.name}" decoding="async" fetchpriority="high">
    </section>
    <section id="sections" class="board-menu">
      <div class="board-menu-title"><span>FULL MENU</span><h2>${d.sectionLabel}</h2><p>كل الأقسام والأسعار في صفحة واحدة مثل لوحات المنيو، لكن متجاوبة مع الجوال.</p></div>
      <div class="board-grid">${grouped}</div>
    </section>
    <section id="offers" class="board-offer">
      <div><small>عرض اليوم</small><h2>${d.offer[0]}</h2><p>${d.offer[1]}</p></div><strong>${d.offer[2]}</strong>
    </section>
    <section id="contact" class="board-contact">
      <div><small>للطلب والتواصل</small><h2>05XXXXXXXX</h2><p>📍 الموقع • يوميًا 9 ص — 12 ص</p></div>
      <a href="https://wa.me/" target="_blank">واتساب</a>
    </section>
    <footer class="board-footer"><span>${t.name}</span><span>MENU BOARD</span></footer>
  </section>`;
}

function renderDemoPage(){
  const type=q("type")||"restaurants",style=Number(q("style")||1),d=dataFor(type),t=d.templates[(style-1)%d.templates.length];
  document.title=t.name+" | MM Studio";
  document.getElementById("demoToolbarTitle").textContent=t.name+" — موقع كامل";
  let html=t.layout==="luxe"?luxePage(type,d,t):t.layout==="app"?appPage(type,d,t):t.layout==="board"?boardPage(type,d,t):editorialPage(type,d,t);
  document.getElementById("demoRoot").innerHTML=html;
  bindCategoryFilters(document.getElementById("demoRoot"));
}
