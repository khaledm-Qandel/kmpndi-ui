/* kmpndi shared content: bilingual copy and product data used by site versions 2 and 3.
   Everything here is product truth from PRODUCT.md; names and passes are illustrative. */
(function(){
var AR={
 skip:'تخطَّ إلى المحتوى',
 'nav.how':'كيف يعمل','nav.passes':'التصاريح','nav.all':'الكمبوند كله','nav.apps':'التطبيقات','nav.cta':'تواصل معنا',
 'rail.gate':'البوابة','rail.today':'اليوم','rail.map':'ارسمه مرة','rail.passes':'التصاريح','rail.own':'الملكية','rail.all':'كل الباقي','rail.apps':'أربعة تطبيقات','rail.egypt':'صُنع لمصر','rail.contact':'تواصل معنا',
 'hero.title':'كمبوند يُدير نفسه بنفسه.',
 'hero.lede':'kmpndi يحوّل خريطة الكمبوند (المناطق والمباني والوحدات والملّاك) إلى صلاحيات دخول حيّة على البوابة. <strong>السكان يصدرون تصاريح QR بأنفسهم، والأمن يمسحها، وتنتهي قوائم الورق.</strong>',
 'hero.f1':'حامل التصريح','hero.v1':'المطوّرون العقاريون','hero.f2':'يشمل','hero.v2':'البوابات · المناطق · المباني · الوحدات','hero.f3':'يعمل مع','hero.v3':'QR · NFC · موبايل فرد الأمن',
 'hero.stub':'احجز تجهيز الكمبوند','hero.sf1':'يسمح بدخول','hero.sv1':'كمبوند واحد','hero.sf2':'البوابات','hero.sv2':'كلها','hero.sf3':'الصلاحية','hero.sv3':'٢٤ / ٧','hero.cta':'كلّم فريق kmpndi',
 'film.pause':'إيقاف الفيلم','film.play':'تشغيل الفيلم','film.full':'شاهد الفيلم',
 'today.title':'بوابتك لسه شغّالة بالورق.',
 'today.lede':'قوائم ضيوف على واتساب، وكروت عمّال محدش بيراجعها، وسكان سابقين سابوا الشقة من شهور ولسه بيدخلوا بإشارة. فرد الأمن بيعمل اللي يقدر عليه، بس كل اللي في إيده تخمين.',
 'today.s1':'غير واضح','today.w1':'ضيف · ٢١:١٠','today.h1':'صورة بطاقة مش واضحة','today.p1':'اتبعتت على واتساب تلات مرات، والأمن مش عارف ده ضيف مين.',
 'today.s2':'منتهي','today.w2':'عامل · ٠٧:٤٥','today.h2':'كارت متغلّف من السنة اللي فاتت','today.p2':'العقد خلص، بس الكارت لسه بيعدّي على البوابة.',
 'today.s3':'ملغي؟','today.w3':'مستأجر سابق · ١٨:٣٠','today.h3':'وش فرد الأمن فاكره','today.p3':'الإيجار خلص في الربيع، ومحدش بلّغ البوابة.',
 'today.s4':'مجهول','today.w4':'توصيل · ١٣:٠٥','today.h4':'تلات مكالمات لتلات فيلات','today.p4':'محدش بيرد، والطلب مستني عند الحاجز، والساكن متضايق.',
 'today.close':'kmpndi يستبدل التخمين <em>بقاعدة واحدة تقدر البوابة تتحقق منها</em>: مين مالك الوحدة أو ساكن فيها، ومين هو سمح له بالدخول.',
 'how.title':'ارسمه مرة. والصلاحيات تتوارث.',
 'how.lede':'ترسم الكمبوند في تطبيق الإدارة: البوابات، والمناطق جوّه المناطق، والمباني، والوحدات. <strong>امنح صلاحية لوحدة، وkmpndi يفتح لصاحبها المبنى وكل منطقة حواليها والبوابة الرئيسية.</strong> جرّب: اختار وحدة.',
 'how.hint':'كمبوند تجريبي · اختار وحدة','how.gc':'الكمبوند · البوابة الرئيسية A','how.twr':'برج A2 · باب المدخل','how.club':'النادي · المرافق','how.shops':'الشريط التجاري','how.vzb':'منطقة الفيلات B · حاجز','how.vip':'منطقة VIP · بوابة','how.pool':'حمام السباحة','how.gym':'الجيم','how.shop':'صيدلية','how.grant':'صلاحية دخول ممنوحة لـ',
 'passes.title':'تصريح لكل نوع زيارة.',
 'passes.lede':'السكان بيعملوها من التطبيق ويبعتوها على واتساب. كل تصريح طالع من صلاحية الساكن نفسه، <strong>فعمره ما يعيش بعدها</strong>. البوابة بتراجع المدة، مش ذاكرة فرد الأمن.',
 'passes.hint':'آخر تلاتة هم اللي البوابة بتشوفها لما التصريح مش صالح.',
 'own.title':'تبيع الوحدة، والمفاتيح تتنقل.',
 'own.lede':'الدخول في kmpndi طالع من الملكية والإشغال، ومتسجّل زي عقد الملكية. لما وحدة تتباع أو تتأجر، الناس الصح بياخدوا الصلاحية والغلط بيخسروها، أوتوماتيك. محدش محتاج يفتكر يحدّث البوابة.',
 'own.w1':'يوم ٠ · التسليم','own.h1':'المطوّر يملك كل الوحدات','own.p1':'كل وحدة بتبدأ والمطوّر هو المالك المسجّل.','own.d1':'المطوّر',
 'own.w2':'تسجيل البيع','own.h2':'الملكية تنتقل للمشتري','own.p2':'kmpndi بيسجّل المشتري كساكن ويديله دخول الوحدة ومنطقتها والبوابة الرئيسية.','own.d2':'نور حسن · مالكة',
 'own.w3':'إضافة العيلة','own.h3':'وعيلتها تدخل كمان','own.p3':'كل فرد في العيلة بياخد صلاحيته، وبتنتهي يوم ما يطلع من العيلة.','own.f1':'الزوج','own.f2':'الابن','own.f3':'البنت','own.f4':'الأم',
 'own.w4':'تأجير','own.h4':'المستأجر يستلم البوابة','own.p4':'طول ما المستأجر ساكن، هو بس اللي يقدر يدعي ضيوف. صلاحية المالك بتتوقف وترجع لما الإيجار يخلص.','own.d4':'كريم صالح · مستأجر',
 'own.a1':'<b>كل تغيير متسجّل:</b> مين منح إيه، لمين، وإمتى.','own.a2':'الشركات بنفس الطريقة: مسؤولينها بيديروا صلاحيات موظفينهم.','own.note':'الأسماء للتوضيح فقط.',
 'all.title':'باقي حياة الكمبوند ماشية على نفس الصلاحيات.',
 'all.lede':'أول ما kmpndi يعرف مين ساكن فين، كل حاجة تانية في الكمبوند بتشتغل على السجل ده: حمام السباحة، والصيدلية، والتكييف العطلان، والعربية التانية.',
 'apps.title':'أربعة تطبيقات. سجل صلاحيات واحد.',
 'apps.lede':'كل شخص بياخد التطبيق المناسب لشغله، وكل التطبيقات بتقرا نفس سجل الملكية والصلاحيات.',
 'egypt.title':'معمول على طريقة كمبوندات مصر.',
 'contact.title':'حط الكمبوند بتاعك على kmpndi.',
 'contact.lede':'احكيلنا عن الكمبوند. فريق kmpndi هيمشي معاك في التجهيز، ولو مش عايز ترسمه بنفسك، نقدر نستورده من ملفات الإكسل بتاعتك.',
 'contact.or':'أو ابعت مباشرة',
 'form.t':'طلب تجهيز','form.name':'اسمك','form.company':'المطوّر / الشركة','form.compound':'اسم الكمبوند','form.units':'عدد الوحدات','form.u0':'اختار النطاق','form.u1':'أقل من ٥٠٠','form.u2':'٥٠٠ – ٢٬٠٠٠','form.u3':'٢٬٠٠٠ – ٥٬٠٠٠','form.u4':'٥٬٠٠٠ أو أكتر','form.phone':'موبايل / واتساب','form.email':'الإيميل','form.msg':'عايزنا نعرف إيه؟','form.msgph':'البوابات، النظام الحالي، إمتى هتسلّم الوحدات…',
 'form.eName':'اكتب اسمك عشان نعرف نسأل على مين.','form.eCompany':'اكتب اسم المطوّر أو الشركة.','form.eEmail':'اكتب إيميل نقدر نرد عليه، زي name@company.com.',
 'form.note':'الإرسال بيفتح تطبيق الإيميل عندك والرسالة جاهزة تتبعت لفريق kmpndi.','form.send':'ابعت لفريق kmpndi',
 'sent.stamp':'تم الإصدار','sent.t':'الإيميل جاهز للإرسال.','sent.p':'فتحنا تطبيق الإيميل والرسالة مكتوبة. دوس إرسال هناك. لو مفتحش حاجة، ابعت على <a href="mailto:sales@kmpndi.com">sales@kmpndi.com</a>.','sent.again':'عدّل الطلب'
};

/* Content rendered from data, bilingual */
var L=function(en,ar){return {en:en,ar:ar}};
var UNITS={
 'V-14':{t:L('Villa V-14','فيلا V-14'),chain:['vip','vzb','gc'],doors:[L('VIP Zone gate','بوابة منطقة VIP'),L('Villa Zone B barrier','حاجز منطقة الفيلات B'),L('Main gate A','البوابة الرئيسية A')],note:L('Two nested zones, one grant. The owner never asks security for anything.','منطقتين جوّه بعض، بصلاحية واحدة. المالك مش محتاج يطلب حاجة من الأمن.')},
 'V-16':{t:L('Villa V-16','فيلا V-16'),chain:['vip','vzb','gc'],doors:[L('VIP Zone gate','بوابة منطقة VIP'),L('Villa Zone B barrier','حاجز منطقة الفيلات B'),L('Main gate A','البوابة الرئيسية A')],note:L('Same zone as V-14, so exactly the same doors open.','نفس منطقة V-14، فنفس الأبواب بالظبط بتتفتح.')},
 'V-03':{t:L('Villa V-03','فيلا V-03'),chain:['vzb','gc'],doors:[L('Villa Zone B barrier','حاجز منطقة الفيلات B'),L('Main gate A','البوابة الرئيسية A')],note:L('Outside the VIP zone, so its gate stays closed to this household.','برّه منطقة VIP، فبوابتها تفضل مقفولة على الأسرة دي.')},
 'V-05':{t:L('Villa V-05','فيلا V-05'),chain:['vzb','gc'],doors:[L('Villa Zone B barrier','حاجز منطقة الفيلات B'),L('Main gate A','البوابة الرئيسية A')],note:L('Outside the VIP zone, so its gate stays closed to this household.','برّه منطقة VIP، فبوابتها تفضل مقفولة على الأسرة دي.')},
 'V-08':{t:L('Villa V-08','فيلا V-08'),chain:['vzb','gc'],doors:[L('Villa Zone B barrier','حاجز منطقة الفيلات B'),L('Main gate A','البوابة الرئيسية A')],note:L('Outside the VIP zone, so its gate stays closed to this household.','برّه منطقة VIP، فبوابتها تفضل مقفولة على الأسرة دي.')},
 'A2-3':{t:L('Apartment A2-3','شقة A2-3'),chain:['twr','gc'],doors:[L('Tower A2 lobby door','باب مدخل برج A2'),L('Main gate A','البوابة الرئيسية A')],note:L('The apartment opens its own building, never the villa zones.','الشقة بتفتح المبنى بتاعها بس، عمرها ما تفتح مناطق الفيلات.')},
 'A2-7':{t:L('Apartment A2-7','شقة A2-7'),chain:['twr','gc'],doors:[L('Tower A2 lobby door','باب مدخل برج A2'),L('Main gate A','البوابة الرئيسية A')],note:L('The apartment opens its own building, never the villa zones.','الشقة بتفتح المبنى بتاعها بس، عمرها ما تفتح مناطق الفيلات.')},
 'A2-12':{t:L('Apartment A2-12','شقة A2-12'),chain:['twr','gc'],doors:[L('Tower A2 lobby door','باب مدخل برج A2'),L('Main gate A','البوابة الرئيسية A')],note:L('The apartment opens its own building, never the villa zones.','الشقة بتفتح المبنى بتاعها بس، عمرها ما تفتح مناطق الفيلات.')},
 'A2-18':{t:L('Apartment A2-18','شقة A2-18'),chain:['twr','gc'],doors:[L('Tower A2 lobby door','باب مدخل برج A2'),L('Main gate A','البوابة الرئيسية A')],note:L('The apartment opens its own building, never the villa zones.','الشقة بتفتح المبنى بتاعها بس، عمرها ما تفتح مناطق الفيلات.')},
 'POOL':{t:L('Pool slot · 17:00','حجز حمام السباحة · ١٧:٠٠'),chain:['club','gc'],doors:[L('Clubhouse door, 17:00–18:00 only','باب النادي، من ١٧:٠٠ لـ ١٨:٠٠ بس'),L('Main gate A','البوابة الرئيسية A')],note:L('A booking is a time-limited right. The slot can\'t be double-booked.','الحجز صلاحية لمدة محددة، والميعاد مايتحجزش مرتين.')},
 'GYM':{t:L('Gym membership','اشتراك الجيم'),chain:['club','gc'],doors:[L('Clubhouse gym, 06:00–23:00','جيم النادي، من ٠٦:٠٠ لـ ٢٣:٠٠'),L('Main gate A','البوابة الرئيسية A')],note:L('Facilities follow the same rules as homes: who, where, and when.','المرافق ماشية بنفس قواعد البيوت: مين، وفين، وإمتى.')},
 'SHOP-3':{t:L('Pharmacy · shop 3','صيدلية · محل ٣'),chain:['shops','gc'],doors:[L('Commercial strip, staff entrance','الشريط التجاري، مدخل العاملين'),L('Main gate A (delivery riders)','البوابة الرئيسية A (مندوبي التوصيل)')],note:L('Commercial units become marketplace shops automatically. Riders get delivery passes.','الوحدات التجارية بتتحوّل لمحلات في الماركت أوتوماتيك، والمندوبين بياخدوا تصاريح توصيل.')}
};
var PASSES=[
 {cls:L('Guest','ضيف'),name:L('Omar Adel','عمر عادل'),rows:[[L('Unit','الوحدة'),'V-14'],[L('Gate','البوابة'),L('Main · A','الرئيسية · A')]],win:L('Today · 18:00 → 23:00','النهارده · ١٨:٠٠ ← ٢٣:٠٠'),bar:[62,22],seed:4},
 {cls:L('Worker','عامل'),name:L('Mahmoud · gardener','محمود · جنايني'),rows:[[L('Unit','الوحدة'),'V-14'],[L('Repeats','يتكرر'),L('Sun–Thu','الأحد–الخميس')]],win:L('Every week · 08:00 → 16:00','كل أسبوع · ٠٨:٠٠ ← ١٦:٠٠'),bar:[33,34],seed:9},
 {cls:L('Delivery','توصيل'),name:L('Pharmacy rider','مندوب الصيدلية'),rows:[[L('To','إلى'),'A2-7'],[L('Pay','الدفع'),L('Cash','كاش')]],win:L('Next 30 minutes','خلال ٣٠ دقيقة'),bar:[70,6],seed:13},
 {cls:L('Vehicle','عربية'),name:L('Guest car','عربية ضيف'),plate:true,rows:[[L('Make','الماركة'),L('Kia · white','كيا · أبيض')],[L('Host','المضيف'),'V-14']],win:L('Today · until 23:00','النهارده · لحد ٢٣:٠٠'),bar:[62,22],seed:21},
 {cls:L('Family','عيلة'),name:L('Salma Hassan','سلمى حسن'),rows:[[L('Unit','الوحدة'),'V-14'],[L('Via','عن طريق'),L('Family','العيلة')]],win:L('Permanent, while the family lives here','دائم، طول ما العيلة ساكنة'),bar:[0,100],seed:33},
 {dead:'expired',stamp:L('Expired','منتهي'),cls:L('Worker','عامل'),name:L('Painter · last month','نقّاش · الشهر اللي فات'),rows:[[L('Unit','الوحدة'),'A2-12'],[L('Ended','انتهى'),L('30 Aug','٣٠ أغسطس')]],win:L('Window closed. The gate says no.','المدة خلصت، والبوابة بترفض.'),bar:[0,0],seed:41},
 {dead:'revoked',stamp:L('Revoked','ملغي'),cls:L('Tenant','مستأجر'),name:L('Former tenant','مستأجر سابق'),rows:[[L('Unit','الوحدة'),'V-05'],[L('Reason','السبب'),L('Lease ended','الإيجار خلص')]],win:L('Revoked with the lease, with all their guest passes.','اتلغى مع الإيجار، ومعاه كل تصاريح ضيوفه.'),bar:[0,0],seed:52},
 {dead:'pending',stamp:L('Not yet','لسه'),cls:L('Guest','ضيف'),name:L('Weekend visitor','زائر الويك إند'),rows:[[L('Unit','الوحدة'),'V-08'],[L('Starts','يبدأ'),L('Fri 10:00','الجمعة ١٠:٠٠')]],win:L('Valid from Friday. Until then, the gate waits.','صالح من الجمعة، ولحد وقتها البوابة مستنية.'),bar:[88,10],seed:63}
];
var IC={
 fac:'<path d="M3 17c2 0 2-1.5 4.5-1.5S9.5 17 12 17s2-1.5 4.5-1.5S19 17 21 17"/><path d="M3 21c2 0 2-1.5 4.5-1.5S9.5 21 12 21s2-1.5 4.5-1.5S19 21 21 21"/><path d="M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0M8 8h8"/>',
 mkt:'<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5 11v9h14v-9M10 20v-5h4v5"/>',
 mnt:'<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/><path d="M4 20l3-3"/>',
 car:'<path d="M3 16v-3l2-5h14l2 5v3"/><path d="M3 16h18v3H3z"/><circle cx="7" cy="16" r=".5"/><circle cx="17" cy="16" r=".5"/><path d="M6 8l1-3h10l1 3"/>',
 brd:'<path d="M4 10v4h3l6 4V6L7 10z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11"/>',
 stf:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4l2 1v3.5c0 1.8-1 3-2 3.5-1-.5-2-1.7-2-3.5V5z"/>',
 aud:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7M9 8h2"/>',
 hw:'<path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3"/><path d="M7 12h10M7 9h2M7 15h4M13 15h4M15 9h2"/>',
 fam:'<circle cx="8" cy="7" r="2.6"/><circle cx="16" cy="7" r="2.6"/><circle cx="12" cy="13" r="2"/><path d="M3 20c0-2.8 2.2-5 5-5M21 20c0-2.8-2.2-5-5-5M8.5 21c0-2 1.6-3.5 3.5-3.5s3.5 1.5 3.5 3.5"/>',
 sos:'<path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17v.5"/>',
 idc:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16c.5-1.6 1.9-2.5 3.5-2.5s3 .9 3.5 2.5M14 10h4M14 13h3"/>',
 imp:'<path d="M4 4h16v16H4z"/><path d="M4 9h16M4 14h16M10 4v16"/><path d="M15 17l2-2-2-2"/>'
};
var MODS=[
 {k:'fac',cls:'fac',code:'FAC',t:L('Facility booking','حجز المرافق'),p:L('Pools, gyms and courts in time slots, with no double bookings.','حمامات السباحة والجيم والملاعب بمواعيد، ومن غير حجز مكرر.')},
 {k:'mkt',cls:'mkt',code:'MKT',t:L('Marketplace','الماركت'),p:L('Shops in commercial units list themselves. Residents order by text or voice and pay cash on delivery.','محلات الوحدات التجارية بتظهر لوحدها. السكان بيطلبوا بالكتابة أو بالصوت، والدفع كاش عند الاستلام.')},
 {k:'mnt',code:'MNT',t:L('Maintenance','الصيانة'),p:L('Residents send a photo and a description. Your staff work it from submitted to done.','الساكن يبعت صورة ووصف، وفريقك يشتغل عليه من الاستلام للتسليم.')},
 {k:'car',code:'CAR',t:L('Vehicles & parking','العربيات والجراج'),p:L('A car allowance per unit, QR credentials for residents\' cars, and temporary passes for visitors\' cars.','عدد عربيات لكل وحدة، وQR لعربيات السكان، وتصاريح مؤقتة لعربيات الزوار.')},
 {k:'brd',code:'BRD',t:L('Announcements','الإعلانات'),p:L('Schedule messages to the whole compound or to selected residents.','جدول رسائل للكمبوند كله أو لسكان بعينهم.')},
 {k:'stf',code:'STF',t:L('Staff roles','أدوار الموظفين'),p:L('Security, maintenance, sales and office staff each see only their own work.','الأمن والصيانة والمبيعات والإدارة، كل واحد يشوف شغله بس.')},
 {k:'aud',cls:'hot',code:'AUD',t:L('Audit trail','سجل التدقيق'),p:L('Every grant can be traced to the person who made it. Every entry and override is logged.','كل صلاحية معروف مين منحها، وكل دخول واستثناء متسجّل.')},
 {k:'hw',code:'HW',t:L('Your hardware','أجهزتك الحالية'),p:L('QR scanners, NFC readers, or just the guard\'s phone. kmpndi fits the gate you already have.','ماسحات QR أو قارئات NFC أو موبايل فرد الأمن. kmpndi بيركب على البوابة اللي عندك.')},
 {k:'fam',code:'FAM',t:L('Families & companies','العائلات والشركات'),p:L('Households and companies manage their own members, and their access follows them.','الأسر والشركات بيديروا أفرادهم، والصلاحيات ماشية معاهم.')},
 {k:'sos',code:'SOS',t:L('Emergency override','دخول الطوارئ'),p:L('Urgent access with a stated reason, reviewed afterwards by management.','دخول عاجل بسبب مكتوب، والإدارة بتراجعه بعدها.')},
 {k:'idc',code:'ID',t:L('Verified identity','هوية موثّقة'),p:L('National ID or passport checks, with login by phone or WhatsApp code.','تحقق بالرقم القومي أو الباسبور، ودخول بكود على الموبايل أو واتساب.')},
 {k:'imp',cls:'hot',code:'IMP',t:L('We set it up for you','إحنا نجهّزهولك'),p:L('Our team can import your units, owners and staff from spreadsheets.','فريقنا يقدر يستورد الوحدات والملّاك والموظفين من ملفات الإكسل.')}
];
var APPS=[
 {code:'R',t:L('Resident app','تطبيق السكان'),who:L('Owners, tenants, families','الملّاك والمستأجرين والعائلات'),does:L('Guest and worker passes, cars, bookings, shop orders, maintenance requests, announcements.','تصاريح الضيوف والعمّال، والعربيات، والحجوزات، وطلبات المحلات، والصيانة، والإعلانات.'),dev:L('iOS · Android','iOS · Android')},
 {code:'S',t:L('Staff app','تطبيق الموظفين'),who:L('Guards, maintenance, management','الأمن والصيانة والإدارة'),does:L('Scan and verify passes at the gate, handle assigned tasks, report incidents.','مسح التصاريح والتحقق منها على البوابة، وتنفيذ المهام، والإبلاغ عن الحوادث.'),dev:L('iOS · Android','iOS · Android')},
 {code:'D',t:L('Developer admin','إدارة المطوّر'),who:L('Your compound management','إدارة الكمبوند عندك'),does:L('Configure gates, zones, buildings, units and parking. Transfer ownership, manage staff, see dashboards.','ضبط البوابات والمناطق والمباني والوحدات والجراجات، ونقل الملكية، وإدارة الموظفين، ولوحات المتابعة.'),dev:L('Web','ويب')},
 {code:'K',t:L('kmpndi admin','إدارة kmpndi'),who:L('The kmpndi team','فريق kmpndi'),does:L('Set up developers and compounds, run bulk imports, support you after launch.','تجهيز المطوّرين والكمبوندات، والاستيراد بالجملة، والدعم بعد التشغيل.'),dev:L('Web','ويب')}
];
var TRUTHS=[
 {i:'fam',t:L('Families, not just residents','عائلات، مش سكان وبس'),p:L('Several households under one family and one unit, each managing its own people.','أكتر من أسرة تحت عيلة ووحدة واحدة، وكل أسرة بتدير ناسها.')},
 {i:'mkt',t:L('Cash on delivery','الدفع كاش عند الاستلام'),p:L('The local shop and the rider with change in his pocket, handled properly.','المحل اللي جنبك والمندوب اللي معاه الفكّة، في نظام محترم.')},
 {i:'idc',t:L('National ID and WhatsApp','الرقم القومي وواتساب'),p:L('Identity by National ID or passport. Codes and passes arrive on WhatsApp.','الهوية بالرقم القومي أو الباسبور، والأكواد والتصاريح بتوصل على واتساب.')},
 {i:'hw',t:L('Works when the scanner doesn\'t','شغّال حتى لو الماسح عطلان'),p:L('Guards can verify a pass by eye with the staff app when hardware is down.','الأمن يقدر يتحقق من التصريح بعينه من تطبيق الموظفين لو الأجهزة وقعت.')},
 {i:'brd',t:L('Arabic and English, fully','عربي وإنجليزي بالكامل'),p:L('Every screen in both languages, right-to-left done properly.','كل شاشة باللغتين، والعربي من اليمين للشمال زي ما لازم.')}
];
function rnd(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function qr(seed,color){var N=25,s='';function fin(r,c){function b(r0,c0){var rr=r-r0,cc=c-c0;if(rr<0||rr>6||cc<0||cc>6)return null;var ring=Math.max(Math.abs(rr-3),Math.abs(cc-3));return ring===3||ring<=1}var v=b(0,0);if(v===null)v=b(0,N-7);if(v===null)v=b(N-7,0);return v}
 for(var r=0;r<N;r++)for(var c=0;c<N;c++){var f=fin(r,c),q=(r<8&&c<8)||(r<8&&c>N-9)||(r>N-9&&c<8);var on=f!==null?f:(!q&&rnd(r*31+c*7+seed)>.52);if(on)s+='M'+c+' '+r+'h1v1h-1z'}
 return '<svg class="qr" viewBox="0 0 25 25" shape-rendering="crispEdges" aria-hidden="true"><path d="'+s+'" fill="'+(color||'#121417')+'"/></svg>'}
window.KMP={AR:AR,L:L,UNITS:UNITS,PASSES:PASSES,IC:IC,MODS:MODS,APPS:APPS,TRUTHS:TRUTHS,qr:qr};
})();
