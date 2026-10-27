let days = [
  {no:'01', city:'郴州', from:'深圳', km:'350 km', drive:'约 4 h 40 min', charging:'清远服务区 · 国家电网快充', hotel:'郴州温德姆至尊豪廷大酒店', stay:'北湖公园附近 · 预留固定车位', spot:'高椅岭丹霞', note:'第一天收住节奏：午饭后再出发，傍晚去高椅岭看一段日落。'},
  {no:'02', city:'桂林', from:'郴州', km:'310 km', drive:'约 4 h 10 min', charging:'阳朔服务区 · 120 kW', hotel:'桂林喜来登酒店', stay:'两江四湖旁 · 连住 2 晚', spot:'遇龙河竹筏 / 东西巷', note:'把电量补满再进桂林，晚上步行即可吃饭，不折腾车。'},
  {no:'03', city:'凤凰古城', from:'桂林', km:'370 km', drive:'约 5 h 10 min', charging:'龙山服务区 · 180 kW', hotel:'丽枫酒店（凤凰古城店）', stay:'古城外停车更从容 · 步行入城', spot:'沱江夜游 / 虹桥', note:'把古城夜景留给抵达当晚，第二天早上再慢慢逛吊脚楼。'},
  {no:'04', city:'贵阳', from:'凤凰古城', km:'420 km', drive:'约 5 h 30 min', charging:'铜仁服务区 · 180 kW', hotel:'贵阳观山湖金融城希尔顿惠庭酒店', stay:'观山湖 · 家庭房优先', spot:'青岩古镇 / 甲秀楼', note:'今天以稳定抵达为主，晚餐选酒店周边，避免进出老城找车位。'},
  {no:'05', city:'重庆', from:'贵阳', km:'390 km', drive:'约 5 h 15 min', charging:'遵义服务区 · 180 kW', hotel:'重庆山前宋品酒店', stay:'沙坪坝 · 有停车场', spot:'鹅岭二厂 / 江边夜景', note:'晚餐安排在酒店附近，别为了网红餐厅再开一小时。'},
  {no:'06', city:'成都', from:'重庆', km:'310 km', drive:'约 4 h 20 min', charging:'永川服务区 · 180 kW', hotel:'成都新都假日酒店', stay:'家庭房 · 靠近北湖公园', spot:'熊猫基地 / 宽窄巷子', note:'成都安排一晚，把熊猫基地放在第二天早上，孩子更容易保持体力。'},
  {no:'07', city:'都江堰', from:'成都', km:'70 km', drive:'约 1 h 30 min', charging:'都江堰文旅城目的地充电', hotel:'都江堰亲亲·亲子酒店（融创乐园店）', stay:'亲子设施 · 停车方便', spot:'都江堰水利工程 / 南桥', note:'短途慢游日，先在酒店放行李，再沿南桥散步看蓝眼泪。'},
  {no:'08', city:'广元', from:'都江堰', km:'350 km', drive:'约 4 h 40 min', charging:'绵阳服务区 · 180 kW', hotel:'广元万达嘉华酒店', stay:'利州区 · 晚餐选择多', spot:'剑门关（次日清晨）', note:'今天是耐力段，午餐充电一次，抵达后只安排一处轻松散步。'},
  {no:'09', city:'天水', from:'广元', km:'450 km', drive:'约 6 h', charging:'陇南服务区 · 180 kW', hotel:'天水温德姆至尊酒店', stay:'麦积区 · 方便第二天看石窟', spot:'麦积山石窟', note:'建议 17:00 前到酒店，第二天一早看石窟，避开中午暴晒。'},
  {no:'10', city:'张掖', from:'天水', km:'490 km', drive:'约 6 h 20 min', charging:'定西服务区 · 180 kW', hotel:'张掖宾馆', stay:'甘州区 · 老城吃饭方便', spot:'七彩丹霞日落', note:'抵达张掖后直接去西门，日落前 40 分钟入园最舒服。'},
  {no:'11', city:'嘉峪关', from:'张掖', km:'230 km', drive:'约 3 h', charging:'临泽服务区 · 120 kW', hotel:'嘉峪关广场假日酒店', stay:'关城附近 · 早起方便', spot:'嘉峪关关城 / 悬壁长城', note:'轻松过渡日：短途 + 早睡，把明天长距离留给满电和好状态。'},
  {no:'12', city:'哈密', from:'嘉峪关', km:'540 km', drive:'约 6 h 40 min', charging:'瓜州服务区 · 180 kW', hotel:'哈密环球大酒店', stay:'市中心 · 补水补给方便', spot:'巴里坤草原（可选）', note:'全程风大，充电时检查胎压；到哈密后优先吃饭和补水。'},
  {no:'13', city:'鄯善', from:'哈密', km:'330 km', drive:'约 4 h 15 min', charging:'吐鲁番服务区 · 180 kW', hotel:'鄯善温德姆至尊豪廷酒店', stay:'库木塔格沙漠旁 · 连住 1 晚', spot:'库木塔格沙漠', note:'今天不追景点数量，下午把沙漠留给孩子，傍晚回酒店吃瓜。'},
  {no:'14', city:'乌鲁木齐', from:'鄯善', km:'300 km', drive:'约 3 h 50 min', charging:'吐鲁番服务区 · 180 kW', hotel:'乌鲁木齐希尔顿酒店', stay:'市区 · 洗衣和补给一晚', spot:'新疆博物馆 / 大巴扎', note:'进乌鲁木齐后完成一次整车整理和补给，给最后两天留出余量。'},
  {no:'15', city:'精河', from:'乌鲁木齐', km:'420 km', drive:'约 5 h 20 min', charging:'奎屯服务区 · 180 kW', hotel:'精河海川大酒店', stay:'县城 · 作为进湖缓冲站', spot:'赛里木湖东门观景台', note:'进入天山后气温下降，后排备一件抓绒；建议提前锁定湖区充电。'},
  {no:'16', city:'赛里木湖', from:'精河', km:'170 km', drive:'约 2 h 40 min', charging:'赛里木湖游客中心 · 目的地充电', hotel:'赛里木湖希尔顿惠庭酒店', stay:'湖畔 · 建议连住 2 晚', spot:'松树头 / 亲水滩 / 环湖公路', note:'最后一段不要赶路。上午入湖，下午沿环湖公路慢慢开，把风和湖留给家人。'}
];

const hotelOptions = {
  '01':['郴州温德姆至尊豪廷大酒店','郴州东江湖华美达酒店','郴州北湖国际大酒店'],
  '02':['桂林喜来登酒店','桂林漓江大瀑布饭店','桂林香格里拉酒店'],
  '03':['丽枫酒店（凤凰古城店）','凤凰古城河畔假日酒店','凤凰古城璞宿精品民宿（虹桥附近）'],
  '04':['贵阳观山湖金融城希尔顿惠庭酒店','贵阳会展中心希尔顿欢朋酒店','贵阳中天凯悦酒店'],
  '05':['重庆山前宋品酒店','重庆丽笙世嘉酒店','重庆北滨路亚朵酒店'],
  '06':['成都新都假日酒店','成都光环凯悦尚萃酒店','悦蓝里S酒店（成都宽窄巷子店）'],
  '07':['都江堰亲亲·亲子酒店（融创乐园店）','都江堰文旅城智选假日酒店','都江堰中心智选假日酒店'],
  '08':['广元万达嘉华酒店','广元国际大酒店','广元利州希尔顿欢朋酒店'],
  '09':['天水温德姆至尊酒店','天水凯悦酒店','天水麦积山智选假日酒店'],
  '10':['张掖宾馆','张掖华辰国际大酒店','张掖智选假日酒店'],
  '11':['嘉峪关广场假日酒店','嘉峪关国际大酒店','嘉峪关悦来大酒店'],
  '12':['哈密环球大酒店','哈密天悦湾大酒店','哈密华宇大酒店'],
  '13':['鄯善温德姆至尊豪廷酒店','鄯善鲁克沁大酒店','鄯善库木塔格沙漠营地'],
  '14':['乌鲁木齐希尔顿酒店','乌鲁木齐华凌雅高美爵酒店','乌鲁木齐万达文华酒店'],
  '15':['精河海川大酒店','精河锦江都城酒店','精河天山明珠大酒店'],
  '16':['赛里木湖希尔顿惠庭酒店','赛里木湖 AC 酒店','潮克星空营地']
};
const spotOptions = {
  '01':['高椅岭丹霞','东江湖小东江','郴州裕后街夜景'],
  '02':['遇龙河竹筏','兴坪古镇','桂林东西巷'],
  '03':['沱江夜游','凤凰古城墙','南华山神凤文化景区'],
  '04':['青岩古镇','甲秀楼夜景','贵州省博物馆'],
  '05':['鹅岭二厂','洪崖洞夜景','重庆中国三峡博物馆'],
  '06':['成都大熊猫繁育研究基地','宽窄巷子','东郊记忆'],
  '07':['都江堰水利工程','南桥夜景','青城山前山'],
  '08':['剑门关','昭化古城','皇泽寺'],
  '09':['麦积山石窟','伏羲庙','天水古城'],
  '10':['张掖七彩丹霞','平山湖大峡谷','大佛寺'],
  '11':['嘉峪关关城','悬壁长城','长城第一墩'],
  '12':['巴里坤草原','哈密回王府','东天山风景名胜区'],
  '13':['库木塔格沙漠','吐峪沟麻扎村','火焰山景区'],
  '14':['新疆博物馆','国际大巴扎','红山公园'],
  '15':['赛里木湖东门观景台','果子沟大桥','精河湿地公园'],
  '16':['松树头','亲水滩','赛里木湖环湖公路']
};

const routeTemplates = {
  guilin:[['郴州',350],['阳朔',310],['__DEST__',80]],
  sailimu:[
    ['郴州',350],['桂林',310],['凤凰古城',370],['贵阳',420],['重庆',390],['成都',310],['都江堰',70],['广元',350],['天水',450],['张掖',490],['嘉峪关',230],['哈密',540],['鄯善',330],['乌鲁木齐',300],['精河',420],['__DEST__',170]
  ],
  kanas:[
    ['桂林',420],['贵阳',430],['重庆',390],['成都',310],['西安',650],['兰州',550],['张掖',510],['嘉峪关',230],['敦煌',370],['哈密',540],['鄯善',330],['乌鲁木齐',300],['布尔津',520],['__DEST__',180]
  ],
  lhasa:[
    ['桂林',520],['贵阳',430],['成都',650],['康定',310],['理塘',280],['巴塘',260],['芒康',310],['左贡',250],['八宿',360],['波密',220],['林芝',240],['__DEST__',400]
  ],
  generic:[
    ['桂林',420],['贵阳',430],['重庆',390],['成都',310],['西安',650],['兰州',550],['张掖',510],['乌鲁木齐',750],['__DEST__',420]
  ],
  northwest:[
    ['保定',160],['太原',420],['西安',600],['兰州',550],['张掖',510],['嘉峪关',230],['哈密',540],['乌鲁木齐',750],['精河',420],['__DEST__',170]
  ],
  eastwest:[
    ['南京',300],['合肥',170],['武汉',520],['重庆',650],['成都',310],['广元',350],['天水',450],['张掖',490],['哈密',540],['乌鲁木齐',750],['__DEST__',420]
  ],
  southwest:[
    ['都江堰',70],['广元',350],['天水',450],['兰州',350],['张掖',490],['嘉峪关',230],['哈密',540],['乌鲁木齐',750],['__DEST__',420]
  ]
};
const citySuggestions = {
  '桂林':{hotels:['桂林喜来登酒店','桂林漓江大瀑布饭店','桂林香格里拉酒店'],spots:['遇龙河竹筏','兴坪古镇','桂林东西巷']},
  '贵阳':{hotels:['贵阳观山湖金融城希尔顿惠庭酒店','贵阳会展中心希尔顿欢朋酒店','贵阳中天凯悦酒店'],spots:['青岩古镇','甲秀楼夜景','贵州省博物馆']},
  '重庆':{hotels:['重庆山前宋品酒店','重庆丽笙世嘉酒店','重庆北滨路亚朵酒店'],spots:['鹅岭二厂','洪崖洞夜景','重庆中国三峡博物馆']},
  '成都':{hotels:['成都新都假日酒店','成都光环凯悦尚萃酒店','悦蓝里S酒店（成都宽窄巷子店）'],spots:['成都大熊猫繁育研究基地','宽窄巷子','东郊记忆']},
  '都江堰':{hotels:['都江堰亲亲·亲子酒店（融创乐园店）','都江堰文旅城智选假日酒店','都江堰中心智选假日酒店'],spots:['都江堰水利工程','南桥夜景','青城山前山']},
  '西安':{hotels:['西安大雁塔假日酒店','西安曲江希尔顿嘉悦里酒店','西安钟楼诺富特酒店'],spots:['兵马俑','大雁塔北广场','西安城墙']},
  '兰州':{hotels:['兰州万达文华酒店','兰州皇冠假日酒店','兰州西站智选假日酒店'],spots:['黄河母亲雕像','甘肃省博物馆','正宁路夜市']},
  '张掖':{hotels:['张掖宾馆','张掖华辰国际大酒店','张掖智选假日酒店'],spots:['张掖七彩丹霞','平山湖大峡谷','大佛寺']},
  '嘉峪关':{hotels:['嘉峪关广场假日酒店','嘉峪关国际大酒店','嘉峪关悦来大酒店'],spots:['嘉峪关关城','悬壁长城','长城第一墩']},
  '敦煌':{hotels:['敦煌山庄','敦煌国际酒店','敦煌华夏大酒店'],spots:['莫高窟','鸣沙山月牙泉','阳关遗址']},
  '哈密':{hotels:['哈密环球大酒店','哈密天悦湾大酒店','哈密华宇大酒店'],spots:['巴里坤草原','哈密回王府','东天山风景名胜区']},
  '鄯善':{hotels:['鄯善温德姆至尊豪廷酒店','鄯善鲁克沁大酒店','鄯善库木塔格沙漠营地'],spots:['库木塔格沙漠','吐峪沟麻扎村','火焰山景区']},
  '乌鲁木齐':{hotels:['乌鲁木齐希尔顿酒店','乌鲁木齐华凌雅高美爵酒店','乌鲁木齐万达文华酒店'],spots:['新疆博物馆','国际大巴扎','红山公园']},
  '布尔津':{hotels:['布尔津友谊峰大酒店','布尔津旅游宾馆','布尔津禾木山庄'],spots:['五彩滩','喀纳斯河谷','禾木村']},
  '康定':{hotels:['康定溜溜城亚朵酒店','康定情歌大酒店','康定新都桥智选酒店'],spots:['木格措','折多山','新都桥']},
  '理塘':{hotels:['理塘康巴汉子大酒店','理塘云端大酒店','理塘高城宾馆'],spots:['勒通古镇','毛垭大草原','长青春科尔寺']},
  '林芝':{hotels:['林芝喜马拉雅大酒店','林芝华侨城南山国际汽车营地','林芝工布庄园希尔顿酒店'],spots:['巴松措','鲁朗林海','雅鲁藏布大峡谷']}
};
function selectRouteTemplate(destination,origin){
  if(/桂林/.test(destination) && /深圳|广州|东莞|珠海|厦门|福州/.test(origin)) return routeTemplates.guilin;
  if(/北京|天津|沈阳|济南|石家庄/.test(origin)) return routeTemplates.northwest;
  if(/上海|杭州|南京|苏州|宁波/.test(origin)) return routeTemplates.eastwest;
  if(/成都|重庆|昆明/.test(origin)) return routeTemplates.southwest;
  if(/赛里木湖/.test(destination)) return routeTemplates.sailimu;
  if(/喀纳斯/.test(destination)) return routeTemplates.kanas;
  if(/拉萨|西藏/.test(destination)) return routeTemplates.lhasa;
  return routeTemplates.generic;
}
function resolveRouteTemplate(destination,origin,daysCount){
  const base=selectRouteTemplate(destination,origin);
  const index=base.findIndex(([city])=>city!=='__DEST__' && (destination===city || destination.includes(city) || city.includes(destination)));
  if(index>=0) return base.slice(0,index+1);
  const knownLongDestination=/赛里木湖|喀纳斯|拉萨|西藏/.test(destination);
  if(!knownLongDestination && base===routeTemplates.generic) return [['__DEST__',Math.max(260,daysCount*260)]];
  return base;
}
function fitStops(template,count){
  if(count<=template.length){
    const idx=[];
    for(let i=0;i<count;i++) idx.push(Math.round(i*(template.length-1)/(count-1)));
    return idx.map((value,i)=>{const start=i===0?0:idx[i-1]+1;const km=template.slice(start,value+1).reduce((sum,item)=>sum+item[1],0);return [template[value][0],km]});
  }
  const output=template.map(item=>[item[0],item[1]]);
  let cursor=0;
  while(output.length<count){
    const insertAt=Math.min(cursor+1,output.length-1);
    const base=output[Math.max(0,insertAt-1)];
    output.splice(insertAt,0,[base[0],0]);
    cursor=insertAt+1;
    if(cursor>=output.length-1) cursor=0;
  }
  return output;
}
function suggestionsForCity(city,index){
  if(citySuggestions[city]) return citySuggestions[city];
  const sourceIndex=String(Math.min(16,index+1)).padStart(2,'0');
  return {hotels:hotelOptions[sourceIndex] || [`${city}精选家庭酒店`,`${city}智选假日酒店`,`${city}高评分民宿`],spots:spotOptions[sourceIndex] || [`${city}主景区`,`${city}城市漫游`,`${city}亲子轻徒步点`]};
}
function planRoute(origin,destination,daysCount){
  const template=fitStops(resolveRouteTemplate(destination,origin,daysCount),daysCount);
  const total=template.reduce((sum,item)=>sum+item[1],0);
  return template.map((entry,index)=>{
    const rawCity=entry[0];
    const city=index===template.length-1?destination:rawCity;
    const from=index===0?origin:(template[index-1][0]==='__DEST__'?destination:(template[index-1][0]));
    const suggestions=suggestionsForCity(city,index);
    const km=entry[1];
    const drive=km===0?'慢游 / 休息日':`约 ${Math.max(1,Math.round(km/82))} h ${km%2?'30':'00'} min`;
    return {no:String(index+1).padStart(2,'0'),city,from,km:`${km} km`,drive,charging:km===0?'酒店目的地充电':`${city}周边服务区 · 快充优先`,hotel:suggestions.hotels[0],hotelOptions:suggestions.hotels,stay:`${city}市区 · 优先确认停车和早餐`,spot:suggestions.spots[0],spotOptions:suggestions.spots,note:km===0?`今天安排慢游和补给，把体力留给${suggestions.spots[0]}。`:`建议在${city}完成补能和晚餐，抵达后只安排 1 个主景点。`,distanceKm:km};
  });
}

const dayNav = document.querySelector('#dayNav');
const dayDetail = document.querySelector('#dayDetail');
const toast = document.querySelector('#toast');
let selectedDay = 0;

function renderNav(){
  dayNav.innerHTML = days.map((day,i)=>`<button class="day-tab ${i===selectedDay?'active':''}" data-day="${i}" aria-selected="${i===selectedDay}"><span class="day-no">${day.no}</span><span class="day-city">${day.city}<small>${day.from} → ${day.city}</small></span><span class="day-km">${day.km}</span></button>`).join('');
  dayNav.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{selectedDay=Number(btn.dataset.day);renderNav();renderDetail();}));
}

function renderDetail(){
  const day=days[selectedDay];
  const hotels=day.hotelOptions || hotelOptions[day.no] || [day.hotel,'当地高评分家庭酒店','带停车位的连锁酒店'];
  const spots=day.spotOptions || spotOptions[day.no] || [day.spot,'沿途观景台','亲子轻徒步点'];
  dayDetail.innerHTML = `<div class="detail-header"><div><p class="eyebrow">DAY ${day.no} / ${selectedDay===0?'出发日':selectedDay===days.length-1?'抵达日':'在路上'}</p><h3>${day.from} <span style="color:var(--orange)">→</span> ${day.city}</h3><p>${day.km} · ${day.drive}</p></div><div class="detail-badge"><i data-lucide="clock-3"></i>建议 08:00 出发</div></div><div class="detail-grid"><div class="detail-block"><div class="label"><i data-lucide="battery-charging"></i>补能点</div><strong>${day.charging}</strong><p>建议抵达时剩余 20% 电量，吃饭时完成补能。</p></div><div class="detail-block"><div class="label"><i data-lucide="bed-double"></i>住宿推荐 · 优先级</div>${renderOptionList(hotels,'hotel')}<p>${day.stay} · 房态、停车和充电条件请提前确认。</p></div><div class="detail-block"><div class="label"><i data-lucide="mountain"></i>沿途看点 · 优先级</div>${renderOptionList(spots,'spot')}<p>01 适合完整游玩，02/03 可按天气和孩子体力替换。</p></div></div><div class="detail-note"><i data-lucide="sparkles"></i><span>${day.note}</span></div>`;
  if(window.lucide) lucide.createIcons();
}

function mapCityPoint(city,index,total){
  const span=Math.max(1,total-1);
  let hash=0;
  for(let i=0;i<(city||'').length;i++) hash=(hash*31+city.charCodeAt(i))%997;
  const progress=index/span;
  const wave=((hash%61)-30)*(index===0||index===total-1?0.22:0.7);
  return {x:70+560*progress,y:385-300*progress+wave};
}
function renderRouteMap(){
  const map=document.querySelector('.route-map');
  const path=document.querySelector('.route-path');
  const shadow=document.querySelector('.route-shadow');
  const stops=document.querySelector('#routeStops');
  const labels=document.querySelector('#mapStops');
  if(!map||!path||!shadow||!stops||!labels||!days.length) return;
  const origin=document.querySelector('#originInput')?.value.trim() || defaultTrip.origin;
  const rawStops=[{city:origin,day:0},...days.map(day=>({city:day.city,day:Number(day.no)}))];
  const routeStops=rawStops.filter((stop,index)=>index===0||stop.city!==rawStops[index-1].city);
  const points=routeStops.map((stop,index)=>({...stop,...mapCityPoint(stop.city,index,routeStops.length)}));
  const pathData=points.reduce((d,point,index)=>{
    if(index===0) return `M ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    const previous=points[index-1];
    const midX=(previous.x+point.x)/2;
    return `${d} Q ${midX.toFixed(1)} ${previous.y.toFixed(1)} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
  },'');
  path.setAttribute('d',pathData);
  shadow.setAttribute('d',pathData);
  stops.innerHTML=points.map((point,index)=>`<circle class="route-stop ${index===0?'stop-a':''} ${index===points.length-1?'stop-end':''}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index===0||index===points.length-1?6:4}" />`).join('');
  const labelIndexes=new Set();
  const labelLimit=Math.min(10,points.length);
  for(let i=1;i<labelLimit-1;i++) labelIndexes.add(Math.round(i*(points.length-1)/(labelLimit-1)));
  labels.innerHTML=[...labelIndexes].sort((a,b)=>a-b).map(index=>{const point=points[index];return `<span class="map-label map-stop-label" style="left:${(point.x/700*100).toFixed(2)}%;top:${(point.y/470*100).toFixed(2)}%">${point.city}</span>`}).join('');
  const first=points[0],last=points[points.length-1];
  const originLabel=document.querySelector('#mapOriginLabel');
  const destinationLabel=document.querySelector('#mapDestinationLabel');
  if(originLabel){originLabel.textContent=first.city;originLabel.style.left=`${(first.x/700*100).toFixed(2)}%`;originLabel.style.bottom='auto';originLabel.style.top=`${(first.y/470*100).toFixed(2)}%`;}
  if(destinationLabel){destinationLabel.textContent=last.city;destinationLabel.style.right='auto';destinationLabel.style.left=`${(last.x/700*100).toFixed(2)}%`;destinationLabel.style.top=`${(last.y/470*100).toFixed(2)}%`;}
  map.setAttribute('aria-label',`${first.city}到${last.city}的${points.length-1}段路线轨迹`);
}

function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}

document.querySelectorAll('.filter-button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>{card.style.opacity=f==='all'||card.dataset.category===f?'1':'.35'});showToast(f==='all'?'已显示全部行程':`已聚焦${btn.textContent.trim()}安排`)}));
document.querySelector('#shareBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);showToast('路线链接已复制')}catch{showToast('可以直接复制当前页面地址分享')}});
document.querySelector('#printBtn').addEventListener('click',()=>{showToast('已打开打印预览');setTimeout(()=>window.print(),250)});
document.querySelector('#checklistBtn').addEventListener('click',()=>showToast('清单已展开：证件、儿童用品、补能线、保温水壶、常用药'));

const defaultTrip = {origin:'深圳',destination:'赛里木湖',vehicle:'纯电 SUV',travelers:'1 家 3 口',days:16};
let storedTrip = null;
try { storedTrip = JSON.parse(localStorage.getItem('silkRoadTrip') || 'null'); } catch { storedTrip = null; }
const savedTrip = {...defaultTrip,...(storedTrip || {})};
let currentTrip = {...defaultTrip};
let currentVehicleProfile = null;
let lastProfileKey = null;
function inferVehicleProfile(name){
  const t=(name||'').toLowerCase().replace(/\s+/g,'');
  if(/插混|phev|dm-?i|dm|混动|增程|erev|理想|问界|零跑|腾势|蓝山|摩卡dht/i.test(t)) return {key:'hybrid',label:'插混 / 增程',rate:18,price:8.2};
  if(/纯电|电车|ev|electric|特斯拉|model3|modely|蔚来|小鹏|极氪|阿维塔|小米su7|智己|海豹|汉ev|id4|id\.4/i.test(t)) return {key:'ev',label:'纯电',rate:18,price:1.05};
  return {key:'fuel',label:'纯油',rate:8.5,price:8.2};
}
function travelerProfile(text,trip={}){
  const t=(text||'').toLowerCase();
  const routeLabel=`${trip.origin||'出发地'}到${trip.destination||'目的地'}的自驾路线`;
  const hasChild=/儿童|小孩|孩子|宝宝|婴儿|亲子/.test(t);
  const hasElder=/老人|长辈|父母|爷爷|奶奶|长者/.test(t);
  const hasPet=/宠物|狗|猫|毛孩子/.test(t);
  if(hasPet) return {intro:`这是一条带宠物一起慢慢走的${routeLabel}。每天保留补水、放风和中途休息，景点优先选择能轻松到达的户外点。`,note:'宠物同行模式 · 住宿请逐家确认宠物政策',packingIntro:'给带宠物出行的同行者准备的小抄，先把饮水、休息和住宿政策确认好。',items:[['宠物饮水碗 & 牵引绳','服务区放风时保持可控，准备一条备用牵引绳'],['车载清洁包 & 毛毯','长途换乘和住宿都更容易保持车内整洁'],['宠物疫苗本 & 常用药','提前整理成一个随手可取的小包'],['保温水壶 & 车载冰箱','人和宠物都能在路上及时补水'] ]};
  if(hasElder) return {intro:`这是一条给多人家庭设计的${routeLabel}。每天把长途段拆开，留出午休、少换酒店和就近用餐的缓冲。`,note:'长辈同行模式 · 住宿优先选电梯、停车和早餐便利',packingIntro:'给长辈同行准备的小抄，把舒适和取用方便排在行李数量之前。',items:[['常用药 & 就医信息','按天分装，随身保留一份用药清单'],['腰靠 & 轻薄毯','长途座椅支撑和昼夜温差都要照顾'],['保温水壶 & 软底鞋','服务区短休更舒服，景点步行更稳'],['酒店电梯 & 早餐确认','下单前把楼层、早餐和停车问清楚'] ]};
  if(hasChild) return {intro:`这是一条给家庭小队设计的${routeLabel}。每天保留午休、零食和孩子能走完的景点时间，把“赶到”留给导航，把“玩好”留给家人。`,note:'儿童同行模式 · 每 2–3 小时安排一次下车活动',packingIntro:'给有孩子同行的家庭小抄，按“路上舒服”而不是“塞得最多”整理。',items:[['儿童耳罩 & 颈枕','长途段安静睡一觉，比多逛一个景点更重要'],['零食盒 & 保温水壶','把服务区补给变成孩子愿意配合的小仪式'],['换洗衣物 & 湿巾','沙漠、湖边和车上都能快速应对突发状况'],['亲子房与早餐确认','优先选有家庭房、停车和早餐的酒店'] ]};
  return {intro:`这是一条适合多人轮换驾驶的${routeLabel}。每天控制在可预期的驾驶时长，沿途留出换手、用餐和临时停留的空间。`,note:'多人同行模式 · 建议每 2 小时轮换一次驾驶',packingIntro:'给多人同行准备的小抄，把证件、轮换驾驶和公共补给放在最容易取到的位置。',items:[['证件袋 & 电子备份','驾驶证、行驶证、保险和订房信息统一收纳'],['司机轮换表','提前标记每段驾驶人和休息点，避免疲劳驾驶'],['保温水壶 & 车载冰箱','多人长途补水和简单加餐更省心'],['遮阳帘 & 车载充电线','让不同座位的人都能舒服使用设备'] ]};
}
function updateRoutePaceTip(trip){
  const slowCities=[...new Set(days.filter(day=>day.distanceKm<=120).map(day=>day.city))];
  const anchors=(slowCities.length?slowCities:[...new Set(days.slice().sort((a,b)=>a.distanceKm-b.distanceKm).slice(0,2).map(day=>day.city))]).slice(0,3);
  const title=anchors.length?`${anchors.join('、')}留出慢游`:'沿途留出慢游';
  const hasChild=/儿童|小孩|孩子|宝宝|婴儿|亲子/.test(trip.travelers||'');
  const text=anchors.length?`${anchors.join('、')}安排慢游或连住${hasChild?'，让孩子有完整的休息日':'，不把每天的行程塞满'}。`:`根据${trip.origin}到${trip.destination}的里程安排休息日，保留临时停留的余量。`;
  document.querySelector('#paceTipTitle').textContent=title;
  document.querySelector('#paceTipText').textContent=text;
}
function updateTravelerExperience(travelers,trip=currentTrip){
  const profile=travelerProfile(travelers,trip);
  const intro=document.querySelector('#heroIntroText');
  intro.innerHTML=`${profile.intro} 把 ${Math.round(currentTrip.distanceKm || 5500).toLocaleString('zh-CN')} 公里的路拆成有景点、也有余量的 <span id="heroDaysText">${currentTrip.days || 16} 天</span>。`;
  document.querySelector('#heroNoteText').textContent=profile.note;
  document.querySelector('#packingIntroText').textContent=profile.packingIntro;
  document.querySelector('#packingList').innerHTML=profile.items.map((item,i)=>`<div class="packing-item"><span class="packing-number">0${i+1}</span><div><strong>${item[0]}</strong><small>${item[1]}</small></div><i data-lucide="chevron-right"></i></div>`).join('');
  document.querySelector('#checklistCount').textContent=String(profile.items.length).padStart(2,'0');
  if(window.lucide) lucide.createIcons();
}

function renderOptionList(items,type){return `<ol class="option-list">${items.map((item,i)=>{const label=type==='hotel'?`${item} 酒店详情`:`${item} 景点详情`;const url=`https://www.baidu.com/s?wd=${encodeURIComponent(label)}`;return `<li><span class="option-rank">0${i+1}</span><a class="option-link" href="${url}" target="_blank" rel="noopener noreferrer">${item}<i data-lucide="external-link"></i></a></li>`}).join('')}</ol>`}
function syncVehicleControls(profile){
  const rateInput=document.querySelector('#energyRate');
  const priceInput=document.querySelector('#electricPrice');
  const shareControl=document.querySelector('#fuelShareControl');
  const rateLabel=document.querySelector('#energyRateLabel');
  const priceLabel=document.querySelector('#electricPriceLabel');
  const unit=document.querySelector('#electricUnit');
  const energyUnit=document.querySelector('#energyUnit');
  if(profile.key==='ev'){
    rateInput.min='14';rateInput.max='24';rateInput.step='1';rateLabel.textContent='平均电耗';energyUnit.textContent='kWh/100km';priceInput.min='0.65';priceInput.max='1.55';priceInput.step='0.05';priceLabel.textContent='平均电价';unit.textContent='/kWh';shareControl.classList.remove('visible');
  } else if(profile.key==='hybrid'){
    rateInput.min='14';rateInput.max='24';rateInput.step='1';rateLabel.textContent='纯电电耗';energyUnit.textContent='kWh/100km';priceInput.min='7';priceInput.max='10';priceInput.step='0.1';priceLabel.textContent='平均油价';unit.textContent='/L';shareControl.classList.add('visible');
  } else {
    rateInput.min='5';rateInput.max='14';rateInput.step='0.5';rateLabel.textContent='平均油耗';energyUnit.textContent='L/100km';priceInput.min='7';priceInput.max='10';priceInput.step='0.1';priceLabel.textContent='平均油价';unit.textContent='/L';shareControl.classList.remove('visible');
  }
  if(profile.key!==lastProfileKey){
    rateInput.value=profile.rate;
    priceInput.value=profile.price;
  }
  lastProfileKey=profile.key;
}
function generatePoeticName(trip,profile){
  const originShort=trip.origin.replace(/市|省|自治区|特别行政区/g,'');
  const destinationShort=trip.destination.replace(/市|省|自治区|特别行政区/g,'');
  const routeVerb=/湖|海/.test(destinationShort)?'向':/山|峰|川|藏|高原/.test(destinationShort)?'入':/古城|城/.test(destinationShort)?'寻':'赴';
  const motion=profile.key==='ev'?'逐电':profile.key==='hybrid'?'双程':'燃野';
  const travel=/儿童|小孩|孩子|宝宝|亲子/.test(trip.travelers)?'童行':/老人|长辈|父母/.test(trip.travelers)?'携长辈':/宠物|狗|猫/.test(trip.travelers)?'伴宠':'同游';
  return `${originShort}${routeVerb}${destinationShort} · ${motion}${travel}`;
}
function generateTripTag(trip,profile){
  const origin=trip.origin.replace(/市|省|自治区|特别行政区/g,'');
  const destination=trip.destination.replace(/市|省|自治区|特别行政区/g,'');
  const group=/儿童|小孩|孩子|宝宝|亲子/.test(trip.travelers)?'家庭远征':/老人|长辈|父母|爷爷|奶奶/.test(trip.travelers)?'全家慢旅':/宠物|狗|猫|毛孩子/.test(trip.travelers)?'携宠远行':'同行远征';
  const region=/赛里木湖|喀纳斯|乌鲁木齐|新疆/.test(destination)?'西北线':/拉萨|西藏/.test(destination)?'高原线':/桂林|阳朔|凤凰|张家界|贵阳|重庆|成都/.test(destination)?'西南线':`${destination}线`;
  return `${group} · ${origin}→${destination} · ${profile.label}${region}`;
}
function applyTripSettings(showMessage=true){
  const origin=document.querySelector('#originInput').value.trim() || defaultTrip.origin;
  const destination=document.querySelector('#destinationInput').value.trim() || defaultTrip.destination;
  const vehicle=document.querySelector('#vehicleInput').value.trim() || defaultTrip.vehicle;
  const travelers=document.querySelector('#travelersInput').value.trim() || defaultTrip.travelers;
  const daysValue=Math.min(30,Math.max(3,Number(document.querySelector('#daysInput').value)||defaultTrip.days));
  const trip={origin,destination,vehicle,travelers,days:daysValue};
  currentVehicleProfile=inferVehicleProfile(vehicle);
  days=planRoute(origin,destination,daysValue);
  currentTrip={...trip,distanceKm:days.reduce((sum,day)=>sum+Number.parseInt(day.km,10),0)};
  localStorage.setItem('silkRoadTrip',JSON.stringify(trip));
  syncVehicleControls(currentVehicleProfile);
  const poeticName=generatePoeticName(currentTrip,currentVehicleProfile);
  const brandName=`${origin} → ${destination} · ${vehicle}`;
  document.querySelector('#tripTag').textContent=generateTripTag(currentTrip,currentVehicleProfile);
  document.querySelector('#travelerSummary').textContent=travelers;
  document.querySelector('#vehicleSummary').textContent=vehicle;
  document.querySelector('#vehicleTypeSummary').textContent=currentVehicleProfile.label;
  document.querySelector('#vehicleProfileLabel').textContent=`${currentVehicleProfile.label}估算`;
  document.querySelector('#brandTitle').textContent=poeticName;
  document.querySelector('#brandKicker').textContent=`ROADBOOK / ${currentVehicleProfile.label} · ${daysValue}D`;
  document.querySelector('#footerBrand').textContent=`${poeticName} · ${origin} → ${destination}`;
  document.title=`${poeticName} · ${brandName} · 自驾规划`;
  document.querySelector('#originHero').textContent=origin;
  document.querySelector('#destinationHero').textContent=destination;
  document.querySelector('#routeTitleOrigin').textContent=origin;
  document.querySelector('#routeTitleDestination').textContent=destination;
  document.querySelector('#startLabel').textContent=origin;
  document.querySelector('#destinationLabel').textContent=destination;
  document.querySelector('#mapOriginLabel').textContent=origin;
  document.querySelector('#mapDestinationLabel').textContent=destination;
  document.querySelector('#departureLabel').textContent=`${origin} · 07.06`;
  document.querySelector('#arrivalLabel').textContent=`${destination} · 07.06 + ${daysValue-1}天`;
  document.querySelector('#weatherArrivalTip').textContent=`${destination} · 预计第 ${daysValue} 天抵达`;
  const totalKm=currentTrip.distanceKm;
  const midIndex=Math.min(days.length-1,Math.max(0,Math.floor(days.length/2)-1));
  const chargeStops=currentVehicleProfile.key==='fuel'?0:Math.max(1,Math.round(totalKm/450));
  document.querySelector('#routeDistanceLabel').textContent=`${totalKm.toLocaleString('zh-CN')} km`;
  document.querySelector('#routeStationsLabel').textContent=`${destination}路线重算 · ${days.length} 站`;
  document.querySelector('#routeMidLabel').textContent=days[midIndex].city;
  document.querySelector('#routeMidDay').textContent=`DAY ${days[midIndex].no}`;
  document.querySelector('#chargeStopMetric').textContent=chargeStops;
  document.querySelector('#tripDaysMetric').textContent=daysValue;
  document.querySelector('#destinationDayLabel').textContent=`DAY ${daysValue}`;
  document.querySelector('#routeNightsLabel').textContent=`${Math.max(1,daysValue-1)} 晚`;
  document.querySelector('#heroDaysText').textContent=`${daysValue} 天`;
  document.querySelector('#costTravelerSummary').textContent=travelers;
  document.querySelector('#costDaysSummary').textContent=`${daysValue} 天 ${Math.max(1,daysValue-1)} 晚`;
  updateTravelerExperience(travelers,currentTrip);
  updateRoutePaceTip(currentTrip);
  selectedDay=0;
  renderNav();renderDetail();renderRouteMap();updateCosts();
  if(showMessage) showToast(`已按${currentVehicleProfile.label}和${daysValue}天更新旅程`);
}
function hydrateTripSettings(){
  document.querySelector('#originInput').value=savedTrip.origin;
  document.querySelector('#destinationInput').value=savedTrip.destination;
  document.querySelector('#vehicleInput').value=savedTrip.vehicle;
  document.querySelector('#travelersInput').value=savedTrip.travelers;
  document.querySelector('#daysInput').value=savedTrip.days;
  applyTripSettings(false);
}

document.querySelector('#editTripBtn').addEventListener('click',()=>{const panel=document.querySelector('#tripSettings');panel.classList.toggle('open');if(panel.classList.contains('open')) panel.scrollIntoView({behavior:'smooth',block:'center'});});
document.querySelector('#applyTripBtn').addEventListener('click',()=>{applyTripSettings(true);document.querySelector('#tripSettings').classList.remove('open');});
document.querySelector('#resetTripBtn').addEventListener('click',()=>{document.querySelector('#originInput').value=defaultTrip.origin;document.querySelector('#destinationInput').value=defaultTrip.destination;document.querySelector('#vehicleInput').value=defaultTrip.vehicle;document.querySelector('#travelersInput').value=defaultTrip.travelers;document.querySelector('#daysInput').value=defaultTrip.days;applyTripSettings(true);});

function formatMoney(value){return `¥${Math.round(value).toLocaleString('zh-CN')}`}
function updateCosts(){
  const profile=currentVehicleProfile || inferVehicleProfile(document.querySelector('#vehicleInput').value);
  const energyRate=Number(document.querySelector('#energyRate').value);
  const energyPrice=Number(document.querySelector('#electricPrice').value);
  const hotelPrice=Number(document.querySelector('#hotelPrice').value);
  const mealPrice=Number(document.querySelector('#mealPrice').value);
  const tripDays=currentTrip.days || 16;
  const nights=Math.max(1,tripDays-1);
  const km=currentTrip.distanceKm || 5500;
  const items=[];
  if(profile.key==='ev'){
    items.push({label:'充电补能',value:km*energyRate/100*energyPrice,icon:'battery-charging'});
  } else if(profile.key==='hybrid'){
    const fuelShare=Number(document.querySelector('#fuelShare').value)/100;
    items.push({label:'充电补能',value:km*energyRate/100*energyPrice*(1-fuelShare),icon:'battery-charging'});
    items.push({label:'燃油',value:km*6.5/100*8.2*fuelShare,icon:'fuel'});
    document.querySelector('#fuelShareValue').textContent=Math.round(fuelShare*100);
  } else {
    items.push({label:'燃油',value:km*energyRate/100*energyPrice,icon:'fuel'});
  }
  items.push({label:'住宿',value:hotelPrice*nights,icon:'bed-double'});
  items.push({label:'餐饮',value:mealPrice*tripDays,icon:'utensils'});
  items.push({label:'门票与活动',value:150*tripDays,icon:'ticket'});
  items.push({label:'高速 / 停车',value:2200,icon:'car-front'});
  items.push({label:'备用金',value:1000,icon:'wallet-cards'});
  const total=items.reduce((sum,item)=>sum+item.value,0);
  document.querySelector('#energyRateValue').textContent=energyRate;
  document.querySelector('#electricPriceValue').textContent=energyPrice.toFixed(profile.key==='ev'?2:1);
  document.querySelector('#hotelPriceValue').textContent=hotelPrice;
  document.querySelector('#mealPriceValue').textContent=mealPrice;
  document.querySelector('#costTotal').textContent=formatMoney(total);
  document.querySelector('#costPerDay').textContent=formatMoney(total/tripDays);
  document.querySelector('#costBreakdown').innerHTML=items.map(item=>`<div class="breakdown-row"><div class="breakdown-label"><i data-lucide="${item.icon}"></i><span>${item.label}</span></div><strong>${formatMoney(item.value)}</strong><div class="breakdown-bar"><span style="width:${Math.max(4,item.value/total*100)}%"></span></div></div>`).join('');
  if(window.lucide) lucide.createIcons();
}

['energyRate','electricPrice','hotelPrice','mealPrice','fuelShare'].forEach(id=>document.querySelector(`#${id}`).addEventListener('input',updateCosts));

renderNav();renderDetail();hydrateTripSettings();if(window.lucide) lucide.createIcons();
