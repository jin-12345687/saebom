/* ============================================================
   주기율표 – 데이터 및 상호작용
   ============================================================ */

// ── 카테고리 정의 ──────────────────────────────────────────
const CATEGORIES = {
  alkali:       { label: '알칼리 금속',      cls: 'cat-alkali',       color: '#ff6b6b' },
  alkaline:     { label: '알칼리 토금속',    cls: 'cat-alkaline',     color: '#ffa07a' },
  transition:   { label: '전이 금속',        cls: 'cat-transition',   color: '#ffd700' },
  posttransition:{ label: '전이후 금속',     cls: 'cat-posttransition',color: '#4ecdc4' },
  metalloid:    { label: '준금속',           cls: 'cat-metalloid',    color: '#95e1d3' },
  nonmetal:     { label: '비금속',           cls: 'cat-nonmetal',     color: '#87ceeb' },
  halogen:      { label: '할로젠',           cls: 'cat-halogen',      color: '#dda0dd' },
  noble:        { label: '비활성 기체',      cls: 'cat-noble',        color: '#b39ddb' },
  lanthanide:   { label: '란타넘족',         cls: 'cat-lanthanide',   color: '#f0e68c' },
  actinide:     { label: '악티늄족',         cls: 'cat-actinide',     color: '#e6c8ff' },
  unknown:      { label: '미분류',           cls: 'cat-unknown',      color: '#6c757d' },
};

// ── 원소 데이터 (118개) ─────────────────────────────────────
// gridRow, gridCol: 주기율표 상 위치 (1-based)
// 란타넘족(58~71)은 9행, 악티늄족(90~103)은 10행으로 분리
const ELEMENTS = [
  // 1주기
  { z:1,  sym:'H',  name:'수소',        mass:'1.008',   cat:'nonmetal',     row:1, col:1,  config:'1s¹',          year:1766, desc:'가장 가벼운 원소. 우주 질량의 약 75%를 차지하며, 항성의 핵융합 연료이다. 지구에서는 주로 물의 형태로 존재한다.' },
  { z:2,  sym:'He', name:'헬륨',        mass:'4.003',   cat:'noble',        row:1, col:18, config:'1s²',          year:1868, desc:'두 번째로 가벼운 원소. 비활성 기체로, 풍선·비행선·MRI 냉각제·심해 잠수 호흡 혼합물 등에 사용된다.' },

  // 2주기
  { z:3,  sym:'Li', name:'리튬',        mass:'6.941',   cat:'alkali',       row:2, col:1,  config:'[He] 2s¹',     year:1817, desc:'가장 가벼운 금속. 배터리·정신과 의약품·유리·세라믹 등에 사용된다. 물 위에 뜰 만큼 밀도가 낮다.' },
  { z:4,  sym:'Be', name:'베릴륨',      mass:'9.012',   cat:'alkaline',     row:2, col:2,  config:'[He] 2s²',     year:1798, desc:'가볍고 단단한 금속. X선 창문·항공우주 부품·핵반응로 감속재로 사용된다. 독성이 있어 취급에 주의가 필요하다.' },
  { z:5,  sym:'B',  name:'붕소',        mass:'10.81',   cat:'metalloid',    row:2, col:13, config:'[He] 2s² 2p¹', year:1808, desc:'준금속 원소. 붕사는 세제·유리 제조에, 붕소는 반도체 도핑·농업용 미량 원소로 사용된다.' },
  { z:6,  sym:'C',  name:'탄소',        mass:'12.011',  cat:'nonmetal',     row:2, col:14, config:'[He] 2s² 2p²', year:'고대', desc:'생명체의 기본 구성 원소. 다이아몬드·흑연·그래핀·풀러렌 등 다양한 동소체가 존재하며, 유기화학의 중심 원소이다.' },
  { z:7,  sym:'N',  name:'질소',        mass:'14.007',  cat:'nonmetal',     row:2, col:15, config:'[He] 2s² 2p³', year:1772, desc:'대기의 78%를 차지하는 기체. 암모니아·비료·폭발물 제조에 필수적이며, 액체 질소는 극저온 냉동에 사용된다.' },
  { z:8,  sym:'O',  name:'산소',        mass:'15.999',  cat:'nonmetal',     row:2, col:16, config:'[He] 2s² 2p⁴', year:1774, desc:'호흡과 연소에 필수적인 원소. 지구 지각에서 가장 풍부하며, 물의 구성 성분이다. 오존(O₃)은 자외선을 차단한다.' },
  { z:9,  sym:'F',  name:'플루오린',    mass:'18.998',  cat:'halogen',      row:2, col:17, config:'[He] 2s² 2p⁵', year:1886, desc:'가장 반응성이 큰 원소. 치약의 불소 화합물·테플론·냉매·핵연료 처리에 사용된다.' },
  { z:10, sym:'Ne', name:'네온',        mass:'20.180',  cat:'noble',        row:2, col:18, config:'[He] 2s² 2p⁶', year:1898, desc:'비활성 기체. 네온사인의 붉은빛 조명과 레이저·극저온 냉동에 사용된다.' },

  // 3주기
  { z:11, sym:'Na', name:'나트륨',      mass:'22.990',  cat:'alkali',       row:3, col:1,  config:'[Ne] 3s¹',     year:1807, desc:'반응성이 큰 은백색 금속. 식염(NaCl)의 구성 원소이며, 가로등·냉각재·비누 제조에 사용된다.' },
  { z:12, sym:'Mg', name:'마그네슘',    mass:'24.305',  cat:'alkaline',     row:3, col:2,  config:'[Ne] 3s²',     year:1808, desc:'가벼운 은백색 금속. 합금·불꽃놀이·소화기·식물 엽록소의 구성 성분으로 사용된다.' },
  { z:13, sym:'Al', name:'알루미늄',    mass:'26.982',  cat:'posttransition',row:3,col:13, config:'[Ne] 3s² 3p¹', year:1825, desc:'가볍고 부식에 강한 금속. 항공기·캔·호일·건축 자재·송전선에 널리 사용된다. 지각에서 세 번째로 풍부하다.' },
  { z:14, sym:'Si', name:'규소',        mass:'28.086',  cat:'metalloid',    row:3, col:14, config:'[Ne] 3s² 3p²', year:1824, desc:'반도체 산업의 핵심 원소. 컴퓨터 칩·태양전지·유리·세라믹·실리콘 고무의 주성분이다.' },
  { z:15, sym:'P',  name:'인',          mass:'30.974',  cat:'nonmetal',     row:3, col:15, config:'[Ne] 3s² 3p³', year:1669, desc:'생명체에 필수적인 원소. DNA·RNA·ATP의 구성 성분. 성냥·비료·세제·신경 작용제에 사용된다.' },
  { z:16, sym:'S',  name:'황',          mass:'32.065',  cat:'nonmetal',     row:3, col:16, config:'[Ne] 3s² 3p⁴', year:'고대', desc:'노란색 비금속. 황산·비료·화약·고무 가황·피부 치료제 제조에 사용된다. 화산 지역에서 천연으로 발견된다.' },
  { z:17, sym:'Cl', name:'염소',        mass:'35.453',  cat:'halogen',      row:3, col:17, config:'[Ne] 3s² 3p⁵', year:1774, desc:'녹황색 기체. 소독·표백·식수 정화·PVC 플라스틱·의약품 제조에 널리 사용된다.' },
  { z:18, sym:'Ar', name:'아르곤',      mass:'39.948',  cat:'noble',        row:3, col:18, config:'[Ne] 3s² 3p⁶', year:1894, desc:'대기의 0.93%를 차지하는 비활성 기체. 용접 보호 가스·백열등 충전·반도체 제조에 사용된다.' },

  // 4주기
  { z:19, sym:'K',  name:'칼륨',        mass:'39.098',  cat:'alkali',       row:4, col:1,  config:'[Ar] 4s¹',     year:1807, desc:'반응성이 큰 금속. 식물 생장에 필수적이며, 비료·식품 보존·심장 수술용 약물에 사용된다.' },
  { z:20, sym:'Ca', name:'칼슘',        mass:'40.078',  cat:'alkaline',     row:4, col:2,  config:'[Ar] 4s²',     year:1808, desc:'뼈와 치아의 주성분. 시멘트·석회·치즈·영양 보충제에 사용되며, 생물체의 신호 전달에 핵심적이다.' },
  { z:21, sym:'Sc', name:'스칸듐',      mass:'44.956',  cat:'transition',   row:4, col:3,  config:'[Ar] 3d¹ 4s²', year:1879, desc:'희토류 유사 원소. 항공우주 합금·스포츠 장비·조명·레이저 결정에 사용된다.' },
  { z:22, sym:'Ti', name:'티타늄',      mass:'47.867',  cat:'transition',   row:4, col:4,  config:'[Ar] 3d² 4s²', year:1791, desc:'강하고 가벼우며 부식에 강한 금속. 항공기·의료 임플란트·선박·화이트 페인트(TiO₂)에 사용된다.' },
  { z:23, sym:'V',  name:'바나듐',      mass:'50.942',  cat:'transition',   row:4, col:5,  config:'[Ar] 3d³ 4s²', year:1801, desc:'단단한 전이 금속. 고강도 강철 합금·레독스 흐름 배터리·촉매로 사용된다.' },
  { z:24, sym:'Cr', name:'크로뮴',      mass:'51.996',  cat:'transition',   row:4, col:6,  config:'[Ar] 3d⁵ 4s¹', year:1797, desc:'반짝이는 은색 금속. 스테인리스강·도금·색소·촉매로 사용된다. 6가 크로뮴은 발암성이 있다.' },
  { z:25, sym:'Mn', name:'망가니즈',    mass:'54.938',  cat:'transition',   row:4, col:7,  config:'[Ar] 3d⁵ 4s²', year:1774, desc:'회색 전이 금속. 강철 합금·건전지·비료·유리 탈색·산화망가니즈 건전지 등에 사용된다.' },
  { z:26, sym:'Fe', name:'철',          mass:'55.845',  cat:'transition',   row:4, col:8,  config:'[Ar] 3d⁶ 4s²', year:'고대', desc:'가장 널리 사용되는 금속. 강철의 주성분이며, 지구 핵의 주요 구성 원소. 헤모글로빈의 중심 원자이다.' },
  { z:27, sym:'Co', name:'코발트',      mass:'58.933',  cat:'transition',   row:4, col:9,  config:'[Ar] 3d⁷ 4s²', year:1735, desc:'단단한 은청색 금속. 리튬이온 배터리·자석·합금·방사선 치료·청색 색소에 사용된다.' },
  { z:28, sym:'Ni', name:'니켈',        mass:'58.693',  cat:'transition',   row:4, col:10, config:'[Ar] 3d⁸ 4s²', year:1751, desc:'내식성 있는 은백색 금속. 스테인리스강·배터리·화폐·전기 도금·촉매로 사용된다.' },
  { z:29, sym:'Cu', name:'구리',        mass:'63.546',  cat:'transition',   row:4, col:11, config:'[Ar] 3d¹⁰ 4s¹',year:'고대', desc:'전기 전도성이 뛰어난 붉은색 금속. 전선·배관·합금(청동·황동)·조리 기구·항균 표면에 사용된다.' },
  { z:30, sym:'Zn', name:'아연',        mass:'65.38',   cat:'transition',   row:4, col:12, config:'[Ar] 3d¹⁰ 4s²', year:1746, desc:'회색 금속. 철의 도금(방청)·건전지·황동 합금·화장품·영양 보충제에 사용된다.' },
  { z:31, sym:'Ga', name:'갈륨',        mass:'69.723',  cat:'posttransition',row:4,col:13, config:'[Ar] 3d¹⁰ 4s² 4p¹', year:1875, desc:'녹는점이 낮은 은색 금속. 반도체·LED·태양전지·체온계 액체에 사용된다. 손에 쥐면 녹는다.' },
  { z:32, sym:'Ge', name:'저마늄',      mass:'72.630',  cat:'metalloid',    row:4, col:14, config:'[Ar] 3d¹⁰ 4s² 4p²', year:1886, desc:'회색 준금속. 초기 트랜지스터·적외선 광학·태양전지·섬유 광학·촉매로 사용된다.' },
  { z:33, sym:'As', name:'비소',        mass:'74.922',  cat:'metalloid',    row:4, col:15, config:'[Ar] 3d¹⁰ 4s² 4p³', year:'고대', desc:'회색 준금속. 독성 물질로 유명하나, 반도체·목재 방부·의약품·살충제에도 사용된다.' },
  { z:34, sym:'Se', name:'셀레늄',      mass:'78.971',  cat:'nonmetal',     row:4, col:16, config:'[Ar] 3d¹⁰ 4s² 4p⁴', year:1817, desc:'회색 비금속. 항산화 미량 원소·복사기 드럼·유리 탈색·태양전지·영양 보충제에 사용된다.' },
  { z:35, sym:'Br', name:'브로민',      mass:'79.904',  cat:'halogen',      row:4, col:17, config:'[Ar] 3d¹⁰ 4s² 4p⁵', year:1826, desc:'적갈색 액체 할로젠. 난연제·사진 현상·의약품·살충제·수영장 소독에 사용된다.' },
  { z:36, sym:'Kr', name:'크립톤',      mass:'83.798',  cat:'noble',        row:4, col:18, config:'[Ar] 3d¹⁰ 4s² 4p⁶', year:1898, desc:'비활성 기체. 고효율 조명·레이저·심해 잠수 호흡 혼합물·광섬유 제조에 사용된다.' },

  // 5주기
  { z:37, sym:'Rb', name:'루비듐',      mass:'85.468',  cat:'alkali',       row:5, col:1,  config:'[Kr] 5s¹',     year:1861, desc:'매우 반응성이 큰 은백색 금속. 원자시계·광전지·특수 유리·진공관 게터에 사용된다.' },
  { z:38, sym:'Sr', name:'스트론튬',    mass:'87.62',   cat:'alkaline',     row:5, col:2,  config:'[Kr] 5s²',     year:1790, desc:'은백색 알칼리 토금속. 불꽃놀이(붉은색)·형광체·자석·뼈 영상 진단에 사용된다.' },
  { z:39, sym:'Y',  name:'이트륨',      mass:'88.906',  cat:'transition',   row:5, col:3,  config:'[Kr] 4d¹ 5s²', year:1794, desc:'은백색 전이 금속. LED·인광체·초전도체·레이저·암 치료·의료 영상에 사용된다.' },
  { z:40, sym:'Zr', name:'지르코늄',    mass:'91.224',  cat:'transition',   row:5, col:4,  config:'[Kr] 4d² 5s²', year:1789, desc:'부식에 강한 회색 금속. 원자로 피복·치과 임플란트·세라믹·보석(지르콘)·내식성 합금에 사용된다.' },
  { z:41, sym:'Nb', name:'나이오븀',    mass:'92.906',  cat:'transition',   row:5, col:5,  config:'[Kr] 4d⁴ 5s¹', year:1801, desc:'회색 전이 금속. 초전도체·항공우주 합금·MRI·주얼리·용접봉에 사용된다.' },
  { z:42, sym:'Mo', name:'몰리브데넘',  mass:'95.95',   cat:'transition',   row:5, col:6,  config:'[Kr] 4d⁵ 5s¹', year:1778, desc:'단단한 은백색 금속. 고강도 강철·촉매·윤활제·비료·효소의 구성 성분으로 사용된다.' },
  { z:43, sym:'Tc', name:'테크네튬',    mass:'(98)',     cat:'transition',   row:5, col:7,  config:'[Kr] 4d⁵ 5s²', year:1937, desc:'최초로 합성된 원소. 방사성 동위원소는 의료 영상 진단·산업용 계측기에 사용된다.' },
  { z:44, sym:'Ru', name:'루테늄',      mass:'101.07',  cat:'transition',   row:5, col:8,  config:'[Kr] 4d⁷ 5s¹', year:1844, desc:'단단한 은백색 금속. 전기 접촉·저항기·촉매·태양전지·데이터 저장에 사용된다.' },
  { z:45, sym:'Rh', name:'로듐',        mass:'102.91',  cat:'transition',   row:5, col:9,  config:'[Kr] 4d⁸ 5s¹', year:1803, desc:'귀금속. 자동차 촉매 변환기·전기 접촉·광섬유·보석 도금에 사용된다. 매우 희귀하고 비싸다.' },
  { z:46, sym:'Pd', name:'팔라듐',      mass:'106.42',  cat:'transition',   row:5, col:10, config:'[Kr] 4d¹⁰',    year:1803, desc:'귀금속. 촉매 변환기·수소 정제·전자부품·보석·치과 재료에 사용된다.' },
  { z:47, sym:'Ag', name:'은',          mass:'107.87',  cat:'transition',   row:5, col:11, config:'[Kr] 4d¹⁰ 5s¹', year:'고대', desc:'가장 전기 전도성이 높은 금속. 보석·화폐·사진·전자제품·항균 코팅·거울에 사용된다.' },
  { z:48, sym:'Cd', name:'카드뮴',      mass:'112.41',  cat:'transition',   row:5, col:12, config:'[Kr] 4d¹⁰ 5s²', year:1817, desc:'독성 있는 은백색 금속. 니켈-카드뮴 배터리·안료·플라스틱 안정제·태양전지에 사용된다.' },
  { z:49, sym:'In', name:'인듐',        mass:'114.82',  cat:'posttransition',row:5,col:13, config:'[Kr] 4d¹⁰ 5s² 5p¹', year:1863, desc:'부드러운 은백색 금속. 터치스크린·LCD·납땜·반도체·태양전지에 사용된다.' },
  { z:50, sym:'Sn', name:'주석',        mass:'118.71',  cat:'posttransition',row:5,col:14, config:'[Kr] 4d¹⁰ 5s² 5p²', year:'고대', desc:'부드러운 은색 금속. 캔 도금·납땜·합금(청동·펩터)·유리 코팅·식품 포장에 사용된다.' },
  { z:51, sym:'Sb', name:'안티모니',    mass:'121.76',  cat:'metalloid',    row:5, col:15, config:'[Kr] 4d¹⁰ 5s² 5p³', year:'고대', desc:'회색 준금속. 난연제·합금·배터리·반도체·화장품·의약품에 사용된다.' },
  { z:52, sym:'Te', name:'텔루륨',      mass:'127.60',  cat:'metalloid',    row:5, col:16, config:'[Kr] 4d¹⁰ 5s² 5p⁴', year:1782, desc:'회색 준금속. 태양 전지·열전 소자·합금·유리·세라믹·복사기 드럼에 사용된다.' },
  { z:53, sym:'I',  name:'아이오딘',    mass:'126.90',  cat:'halogen',      row:5, col:17, config:'[Kr] 4d¹⁰ 5s² 5p⁵', year:1811, desc:'보라색 고체 할로젠. 소독·갑상선 건강·의약품·식수 정화·동물 사료 첨가제에 사용된다.' },
  { z:54, sym:'Xe', name:'제논',        mass:'131.29',  cat:'noble',        row:5, col:18, config:'[Kr] 4d¹⁰ 5s² 5p⁶', year:1898, desc:'비활성 기체. 제논 헤드라이트·마취제·우주선 추진·레이저·핵자기 공명 영상에 사용된다.' },

  // 6주기 (란타넘족 제외)
  { z:55, sym:'Cs', name:'세슘',        mass:'132.91',  cat:'alkali',       row:6, col:1,  config:'[Xe] 6s¹',     year:1860, desc:'가장 반응성이 큰 금속 중 하나. 원자시계·광전지· Drilling 유체·특수 유리에 사용된다.' },
  { z:56, sym:'Ba', name:'바륨',        mass:'137.33',  cat:'alkaline',     row:6, col:2,  config:'[Xe] 6s²',     year:1808, desc:'은백색 알칼리 토금속. 의료 영상 조영제·유리·세라믹·불꽃놀이(녹색)·시추 유체에 사용된다.' },
  { z:57, sym:'La', name:'란타넘',      mass:'138.91',  cat:'lanthanide',   row:6, col:3,  config:'[Xe] 5d¹ 6s²', year:1839, desc:'란타넘족의 첫 원소. 카메라 렌즈·특수 유리·촉매·배터리·형광체에 사용된다.' },

  // 6주기 전이금속 (란타넘족 자리 비움 - 별도 행으로 분리)
  { z:72, sym:'Hf', name:'하프늄',      mass:'178.49',  cat:'transition',   row:6, col:4,  config:'[Xe] 4f¹⁴ 5d² 6s²', year:1923, desc:'회색 전이 금속. 원자로 제어봉·마이크로칩·플라즈마 절단·합금·우주 항공에 사용된다.' },
  { z:73, sym:'Ta', name:'탄탈럼',      mass:'180.95',  cat:'transition',   row:6, col:5,  config:'[Xe] 4f¹⁴ 5d³ 6s²', year:1802, desc:'부식에 매우 강한 회청색 금속. 전자 콘덴서·의료 임플란트·항공기 엔진·내식성 장비에 사용된다.' },
  { z:74, sym:'W',  name:'텅스텐',      mass:'183.84',  cat:'transition',   row:6, col:6,  config:'[Xe] 4f¹⁴ 5d⁴ 6s²', year:1781, desc:'가장 녹는점이 높은 금속. 전구 필라멘트·용접·합금·방사선 차폐·공구강에 사용된다.' },
  { z:75, sym:'Re', name:'레늄',        mass:'186.21',  cat:'transition',   row:6, col:7,  config:'[Xe] 4f¹⁴ 5d⁵ 6s²', year:1925, desc:'가장 희귀한 원소 중 하나. 제트 엔진 합금·촉매·열전쌍·질량 분석기에 사용된다.' },
  { z:76, sym:'Os', name:'오스뮴',      mass:'190.23',  cat:'transition',   row:6, col:8,  config:'[Xe] 4f¹⁴ 5d⁶ 6s²', year:1803, desc:'가장 밀도가 높은 천연 원소. 합금·펜촉·전기 접점·촉매·심박 조율기에 사용된다.' },
  { z:77, sym:'Ir', name:'이리듐',      mass:'192.22',  cat:'transition',   row:6, col:9,  config:'[Xe] 4f¹⁴ 5d⁷ 6s²', year:1803, desc:'가장 부식에 강한 금속. 스파크 플러그·합금·표준 킬로그램·촉매·의료 기기에 사용된다.' },
  { z:78, sym:'Pt', name:'백금',        mass:'195.08',  cat:'transition',   row:6, col:10, config:'[Xe] 4f¹⁴ 5d⁹ 6s¹', year:'고대', desc:'귀금속. 촉매 변환기·보석·실험 기구·연료전지·항암제·유리 섬유 생산에 사용된다.' },
  { z:79, sym:'Au', name:'금',          mass:'196.97',  cat:'transition',   row:6, col:11, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹', year:'고대', desc:'가장 귀한 금속. 보석·화폐·전자부품·치과·의료·우주선 코팅·금 나노입자에 사용된다.' },
  { z:80, sym:'Hg', name:'수은',        mass:'200.59',  cat:'transition',   row:6, col:12, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s²', year:'고대', desc:'상온에서 액체인 유일한 금속. 온도계·기압계·형광등·치과 아말감·전기 스위치에 사용된다. 독성이 강하다.' },
  { z:81, sym:'Tl', name:'탈륨',        mass:'204.38',  cat:'posttransition',row:6,col:13, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', year:1861, desc:'독성 있는 회백색 금속. 전자·광학·의약품·적외선 검출기·살서제에 사용된다.' },
  { z:82, sym:'Pb', name:'납',          mass:'207.2',   cat:'posttransition',row:6,col:14, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', year:'고대', desc:'무겁고 부드러운 금속. 배터리·방사선 차폐·배관·합금·무게 추에 사용된다. 독성이 있어 사용이 제한된다.' },
  { z:83, sym:'Bi', name:'비스무트',    mass:'208.98',  cat:'posttransition',row:6,col:15, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', year:1753, desc:'분홍빛을 띠는 금속. 위장약·화장품·납땜·합금·반도체·방사성 대체재로 사용된다.' },
  { z:84, sym:'Po', name:'폴로늄',      mass:'(209)',    cat:'posttransition',row:6,col:16, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', year:1898, desc:'강한 방사성 원소. 정전기 제거·우주 탐사·핵 배터리·암 치료에 사용된다. 매우 독성이 강하다.' },
  { z:85, sym:'At', name:'아스타틴',    mass:'(210)',    cat:'halogen',      row:6, col:17, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', year:1940, desc:'가장 희귀한 자연 원소. 방사성 동위원소는 암 치료·방사선 영상에 사용된다. 반감기가 매우 짧다.' },
  { z:86, sym:'Rn', name:'라돈',        mass:'(222)',    cat:'noble',        row:6, col:18, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', year:1900, desc:'방사성 비활성 기체. 지진 예측·방사선 치료·지질 연구에 사용된다. 실내 축적 시 폐암 위험이 있다.' },

  // 7주기 (악티늄족 제외)
  { z:87, sym:'Fr', name:'프랑슘',      mass:'(223)',    cat:'alkali',       row:7, col:1,  config:'[Rn] 7s¹',     year:1939, desc:'가장 불안정한 알칼리 금속. 자연에 극미량 존재하며, 주로 과학 연구에 사용된다. 반감기는 약 22분이다.' },
  { z:88, sym:'Ra', name:'라듐',        mass:'(226)',    cat:'alkaline',     row:7, col:2,  config:'[Rn] 7s²',     year:1898, desc:'방사성 알칼리 토금속. 과거 발광 페인트·암 치료·방사선 연구에 사용되었다. 현재는 대부분 대체되었다.' },
  { z:89, sym:'Ac', name:'악티늄',      mass:'(227)',    cat:'actinide',     row:7, col:3,  config:'[Rn] 6d¹ 7s²', year:1899, desc:'방사성 악티늄족. 중성자 원천·암 치료·원자력 연구·방사선 치료에 사용된다.' },

  // 7주기 전이금속 (악티늄족 자리 비움 - 별도 행으로 분리)
  { z:104,sym:'Rf', name:'러더포듐',    mass:'(267)',    cat:'transition',   row:7, col:4,  config:'[Rn] 5f¹⁴ 6d² 7s²', year:1964, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 하프늄과 유사한 화학적 성질을 가질 것으로 예상된다.' },
  { z:105,sym:'Db', name:'더브늄',      mass:'(268)',    cat:'transition',   row:7, col:5,  config:'[Rn] 5f¹⁴ 6d³ 7s²', year:1967, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 나이오븀과 유사한 성질을 가질 것으로 예상된다.' },
  { z:106,sym:'Sg', name:'시보귬',      mass:'(269)',    cat:'transition',   row:7, col:6,  config:'[Rn] 5f¹⁴ 6d⁴ 7s²', year:1974, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 텅스텐과 유사한 성질을 가질 것으로 예상된다.' },
  { z:107,sym:'Bh', name:'보륨',        mass:'(270)',    cat:'transition',   row:7, col:7,  config:'[Rn] 5f¹⁴ 6d⁵ 7s²', year:1976, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 레늄과 유사한 성질을 가질 것으로 예상된다.' },
  { z:108,sym:'Hs', name:'하슘',        mass:'(277)',    cat:'transition',   row:7, col:8,  config:'[Rn] 5f¹⁴ 6d⁶ 7s²', year:1984, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 오스뮴과 유사한 성질을 가질 것으로 예상된다.' },
  { z:109,sym:'Mt', name:'마이트너륨',  mass:'(278)',    cat:'transition',   row:7, col:9,  config:'[Rn] 5f¹⁴ 6d⁷ 7s²', year:1982, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 이리듐과 유사한 성질을 가질 것으로 예상된다.' },
  { z:110,sym:'Ds', name:'다름슈타튬',  mass:'(281)',    cat:'transition',   row:7, col:10, config:'[Rn] 5f¹⁴ 6d⁸ 7s²', year:1994, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 백금과 유사한 성질을 가질 것으로 예상된다.' },
  { z:111,sym:'Rg', name:'뢴트게늄',    mass:'(282)',    cat:'transition',   row:7, col:11, config:'[Rn] 5f¹⁴ 6d⁹ 7s²', year:1994, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 은과 유사한 성질을 가질 것으로 예상된다.' },
  { z:112,sym:'Cn', name:'코페르니슘',  mass:'(285)',    cat:'transition',   row:7, col:12, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s²', year:1996, desc:'합성 초중원소. 과학 연구 목적으로만 생산되며, 수은과 유사한 성질을 가질 것으로 예상된다.' },
  { z:113,sym:'Nh', name:'니호늄',      mass:'(286)',    cat:'posttransition',row:7,col:13, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', year:2004, desc:'합성 초중원소. 일본(RIKEN)에서 처음 발견. 과학 연구 목적으로만 생산된다.' },
  { z:114,sym:'Fl', name:'플레로븀',    mass:'(289)',    cat:'posttransition',row:7,col:14, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', year:1999, desc:'합성 초중원소. 러시아 두브나에서 발견. 과학 연구 목적으로만 생산된다.' },
  { z:115,sym:'Mc', name:'모스코븀',    mass:'(290)',    cat:'posttransition',row:7,col:15, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', year:2003, desc:'합성 초중원소. 러시아 두브나에서 발견. 과학 연구 목적으로만 생산된다.' },
  { z:116,sym:'Lv', name:'리버모륨',    mass:'(293)',    cat:'posttransition',row:7,col:16, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', year:2000, desc:'합성 초중원소. 러시아 두브나에서 발견. 과학 연구 목적으로만 생산된다.' },
  { z:117,sym:'Ts', name:'테네신',      mass:'(294)',    cat:'halogen',      row:7, col:17, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', year:2010, desc:'합성 초중원소. 러시아-미국 공동 연구팀이 발견. 과학 연구 목적으로만 생산된다.' },
  { z:118,sym:'Og', name:'오가네손',    mass:'(294)',    cat:'noble',        row:7, col:18, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', year:2002, desc:'가장 무거운 알려진 원소. 러시아-미국 공동 연구팀이 발견. 과학 연구 목적으로만 생산된다.' },

  // ── 란타넘족 (58~71) - 9행으로 분리 ──────────────────────
  { z:58, sym:'Ce', name:'세륨',        mass:'140.12',  cat:'lanthanide',   row:9, col:4,  config:'[Xe] 4f¹ 5d¹ 6s²', year:1803, desc:'가장 풍부한 희토류. 촉매·유리 연마·자가 청소 오븐·유리 착색·철 합금에 사용된다.' },
  { z:59, sym:'Pr', name:'프라세오디뮴',mass:'140.91',  cat:'lanthanide',   row:9, col:5,  config:'[Xe] 4f³ 6s²', year:1885, desc:'은백색 희토류. 강력한 자석·레이저·유리 착색·용접 고글·촉매에 사용된다.' },
  { z:60, sym:'Nd', name:'네오디뮴',    mass:'144.24',  cat:'lanthanide',   row:9, col:6,  config:'[Xe] 4f⁴ 6s²', year:1885, desc:'강력한 영구 자석(NdFeB)의 주성분. 헤드폰·스피커·풍력 터빈·레이저·유리 착색에 사용된다.' },
  { z:61, sym:'Pm', name:'프로메튬',    mass:'(145)',    cat:'lanthanide',   row:9, col:7,  config:'[Xe] 4f⁵ 6s²', year:1945, desc:'방사성 희토류. 핵 배터리·발광 페인트·계측기·우주 탐사에 사용된다.' },
  { z:62, sym:'Sm', name:'사마륨',      mass:'150.36',  cat:'lanthanide',   row:9, col:8,  config:'[Xe] 4f⁶ 6s²', year:1879, desc:'은백색 희토류. 영구 자석·암 치료·원자력 제어봉·촉매·유리 착색에 사용된다.' },
  { z:63, sym:'Eu', name:'유로퓸',      mass:'151.96',  cat:'lanthanide',   row:9, col:9,  config:'[Xe] 4f⁷ 6s²', year:1901, desc:'부드러운 은백색 희토류. 형광체·LED·레이저·항균제·유로 지폐 위조에 사용된다.' },
  { z:64, sym:'Gd', name:'가돌리늄',    mass:'157.25',  cat:'lanthanide',   row:9, col:10, config:'[Xe] 4f⁷ 5d¹ 6s²', year:1880, desc:'은백색 희토류. MRI 조영제·원자력 제어봉·자기 차폐·레이저·형광체에 사용된다.' },
  { z:65, sym:'Tb', name:'터븀',        mass:'158.93',  cat:'lanthanide',   row:9, col:11, config:'[Xe] 4f⁹ 6s²', year:1843, desc:'은백색 희토류. 녹색 형광체·레이저·자기 센서·솔더링 합금·전기 변압기에 사용된다.' },
  { z:66, sym:'Dy', name:'디스프로슘',  mass:'162.50',  cat:'lanthanide',   row:9, col:12, config:'[Xe] 4f¹⁰ 6s²', year:1886, desc:'은백색 희토류. 원자로 제어봉·레이저·자석·데이터 저장·원자력 발전에 사용된다.' },
  { z:67, sym:'Ho', name:'홀뮴',        mass:'164.93',  cat:'lanthanide',   row:9, col:13, config:'[Xe] 4f¹¹ 6s²', year:1878, desc:'은백색 희토류. 강력한 자석·레이저·광학·의료·원자력 제어봉에 사용된다.' },
  { z:68, sym:'Er', name:'어븀',        mass:'167.26',  cat:'lanthanide',   row:9, col:14, config:'[Xe] 4f¹² 6s²', year:1843, desc:'은백색 희토류. 광섬유 증폭기·레이저·유리 착색·원자력 제어봉에 사용된다.' },
  { z:69, sym:'Tm', name:'툴륨',        mass:'168.93',  cat:'lanthanide',   row:9, col:15, config:'[Xe] 4f¹³ 6s²', year:1879, desc:'은백색 희토류. 휴대용 X선 장치·레이저·방사선 치료·고강도 방전 램프에 사용된다.' },
  { z:70, sym:'Yb', name:'이터븀',      mass:'173.05',  cat:'lanthanide',   row:9, col:16, config:'[Xe] 4f¹⁴ 6s²', year:1878, desc:'은백색 희토류. 레이저·원자시계·스테인리스강 도핑·지진 모니터링에 사용된다.' },
  { z:71, sym:'Lu', name:'루테튬',      mass:'174.97',  cat:'lanthanide',   row:9, col:17, config:'[Xe] 4f¹⁴ 5d¹ 6s²', year:1907, desc:'가장 무거운 란타넘족. PET 스캐너·촉매·LED·의료 동위원소·고고학 연대 측정에 사용된다.' },

  // ── 악티늄족 (90~103) - 10행으로 분리 ────────────────────
  { z:90, sym:'Th', name:'토륨',        mass:'232.04',  cat:'actinide',     row:10, col:4, config:'[Rn] 6d² 7s²', year:1829, desc:'방사성 악티늄족. 차세대 원자력 연료·가스 맨틀·용접·방사선 촬영·우주 탐사에 사용된다.' },
  { z:91, sym:'Pa', name:'프로트악티늄',mass:'231.04',  cat:'actinide',     row:10, col:5, config:'[Rn] 5f² 6d¹ 7s²', year:1913, desc:'희귀한 방사성 원소. 우라늄-235 붕괴 계열에 존재하며, 지질 연대 측정에 사용된다.' },
  { z:92, sym:'U',  name:'우라늄',      mass:'238.03',  cat:'actinide',     row:10, col:6, config:'[Rn] 5f³ 6d¹ 7s²', year:1789, desc:'가장 잘 알려진 방사성 원소. 원자력 발전·핵무기·방사성 동위원소·해군 추진·의학에 사용된다.' },
  { z:93, sym:'Np', name:'넵투늄',      mass:'(237)',    cat:'actinide',     row:10, col:7, config:'[Rn] 5f⁴ 6d¹ 7s²', year:1940, desc:'최초로 합성된 초우라늄 원소. 중성자 검출기·원자력 연구·우주선 동력원에 사용된다.' },
  { z:94, sym:'Pu', name:'플루토늄',    mass:'(244)',    cat:'actinide',     row:10, col:8, config:'[Rn] 5f⁶ 7s²', year:1940, desc:'방사성 초우라늄 원소. 원자력 발전·핵무기·우주 탐사선 동력원(RTG)·의료에 사용된다.' },
  { z:95, sym:'Am', name:'아메리슘',    mass:'(243)',    cat:'actinide',     row:10, col:9, config:'[Rn] 5f⁷ 7s²', year:1944, desc:'방사성 초우라늄 원소. 연기 감지기·방사선 촬영·중성자 원천·의료 기기에 사용된다.' },
  { z:96, sym:'Cm', name:'퀴륨',        mass:'(247)',    cat:'actinide',     row:10, col:10,config:'[Rn] 5f⁷ 6d¹ 7s²', year:1944, desc:'방사성 초우라늄 원소. 우주 탐사·방사선 연구·의료·알파 입자 X선 분광기에 사용된다.' },
  { z:97, sym:'Bk', name:'버클륨',      mass:'(247)',    cat:'actinide',     row:10, col:11,config:'[Rn] 5f⁹ 7s²', year:1949, desc:'방사성 초우라늄 원소. 주로 과학 연구에 사용되며, 더 무거운 원소 합성의 출발 물질로 쓰인다.' },
  { z:98, sym:'Cf', name:'칼리포르늄',  mass:'(251)',    cat:'actinide',     row:10, col:12,config:'[Rn] 5f¹⁰ 7s²', year:1950, desc:'강한 중성자 방출 원소. 암 치료·금속 탐지·항공기 검사·원자력 분석에 사용된다.' },
  { z:99, sym:'Es', name:'아인슈타이늄',mass:'(252)',    cat:'actinide',     row:10, col:13,config:'[Rn] 5f¹¹ 7s²', year:1952, desc:'방사성 초우라늄 원소. 과학 연구·더 무거운 원소 합성·방사선 연구에 사용된다.' },
  { z:100,sym:'Fm', name:'페르뮴',      mass:'(257)',    cat:'actinide',     row:10, col:14,config:'[Rn] 5f¹² 7s²', year:1952, desc:'방사성 초우라늄 원소. 과학 연구·핵 반응 연구·더 무거운 원소 합성에 사용된다.' },
  { z:101,sym:'Md', name:'멘델레븀',    mass:'(258)',    cat:'actinide',     row:10, col:15,config:'[Rn] 5f¹³ 7s²', year:1955, desc:'방사성 초우라늄 원소. 과학 연구·원자 구조 연구·더 무거운 원소 합성에 사용된다.' },
  { z:102,sym:'No', name:'노벨륨',      mass:'(259)',    cat:'actinide',     row:10, col:16,config:'[Rn] 5f¹⁴ 7s²', year:1958, desc:'방사성 초우라늄 원소. 과학 연구·원자 구조 연구·주기율표 연구에 사용된다.' },
  { z:103,sym:'Lr', name:'로렌슘',      mass:'(266)',    cat:'actinide',     row:10, col:17,config:'[Rn] 5f¹⁴ 7s² 7p¹', year:1961, desc:'가장 무거운 악티늄족. 과학 연구·더 무거운 원소 합성·원자 구조 연구에 사용된다.' },
];

// ── 행 레이블 정의 ──────────────────────────────────────────
const ROW_LABELS = {
  1: '1주기',
  2: '2주기',
  3: '3주기',
  4: '4주기',
  5: '5주기',
  6: '6주기',
  7: '7주기',
  9: '란타넘족',
  10: '악티늄족',
};

// ── DOM 참조 ───────────────────────────────────────────────
const tableEl      = document.getElementById('periodicTable');
const searchInput  = document.getElementById('searchInput');
const clearBtn     = document.getElementById('clearSearch');
const filterBtns   = document.querySelectorAll('.filter-btn');
const legendEl     = document.getElementById('legend');
const detailPanel  = document.getElementById('detailPanel');
const detailOverlay= document.getElementById('detailOverlay');
const detailContent= document.getElementById('detailContent');
const detailClose  = document.getElementById('detailClose');

let activeFilter = 'all';
let searchQuery  = '';
let focusedIndex = -1;

// ── 레전드 렌더링 ──────────────────────────────────────────
function renderLegend() {
  legendEl.innerHTML = Object.entries(CATEGORIES)
    .map(([key, cat]) => `
      <div class="legend-item">
        <span class="legend-dot" style="background:${cat.color}"></span>
        ${cat.label}
      </div>
    `).join('');
}

// ── 주기율표 렌더링 ────────────────────────────────────────
function renderTable() {
  tableEl.innerHTML = ELEMENTS.map((el, i) => {
    const cat = CATEGORIES[el.cat];
    const massDisplay = typeof el.mass === 'number' ? el.mass.toFixed(2) : el.mass;
    return `
      <div class="element ${cat.cls}"
           data-index="${i}"
           data-z="${el.z}"
           data-sym="${el.sym}"
           data-name="${el.name}"
           data-cat="${el.cat}"
           style="grid-row:${el.row}; grid-column:${el.col}; animation-delay:${(i % 118) * 0.015}s">
        <span class="atomic-number">${el.z}</span>
        <span class="symbol">${el.sym}</span>
        <span class="name">${el.name}</span>
        <span class="atomic-mass">${massDisplay}</span>
      </div>
    `;
  }).join('');

  // 행 레이블 추가
  const existingLabels = tableEl.querySelectorAll('.row-label');
  existingLabels.forEach(el => el.remove());

  Object.entries(ROW_LABELS).forEach(([row, label]) => {
    const labelEl = document.createElement('div');
    labelEl.className = 'row-label';
    labelEl.textContent = label;
    labelEl.style.gridRow = row;
    labelEl.style.gridColumn = '1';
    labelEl.style.alignSelf = 'end';
    labelEl.style.justifySelf = 'start';
    tableEl.appendChild(labelEl);
  });

  // 이벤트 리스너
  tableEl.querySelectorAll('.element').forEach(el => {
    el.addEventListener('click', () => openDetail(parseInt(el.dataset.index)));
    el.addEventListener('mouseenter', () => {
      if (searchQuery) highlightSearch(el, parseInt(el.dataset.index));
    });
  });
}

// ── 검색 강조 ──────────────────────────────────────────────
function highlightSearch(el, idx) {
  const q = searchQuery.toLowerCase();
  const sym = el.dataset.sym.toLowerCase();
  const name = el.dataset.name.toLowerCase();
  const z = el.dataset.z.toString();

  if (sym.includes(q) || name.includes(q) || z.includes(q)) {
    el.classList.remove('hidden');
    el.classList.add('highlighted');
    focusedIndex = idx;
  } else {
    el.classList.add('hidden');
    el.classList.remove('highlighted');
  }
}

function clearHighlights() {
  tableEl.querySelectorAll('.element').forEach(el => {
    el.classList.remove('hidden', 'highlighted', 'focused');
  });
  focusedIndex = -1;
}

// ── 필터 적용 ──────────────────────────────────────────────
function applyFilter() {
  tableEl.querySelectorAll('.element').forEach(el => {
    const idx = parseInt(el.dataset.index);
    const elCat = ELEMENTS[idx].cat;
    const catGroup = categorizeGroup(elCat);

    if (activeFilter === 'all' || catGroup === activeFilter) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
    el.classList.remove('highlighted');
  });
}

function categorizeGroup(catKey) {
  const map = {
    alkali: 'metal', alkaline: 'metal', transition: 'metal',
    posttransition: 'metal', lanthanide: 'metal', actinide: 'metal',
    metalloid: 'metalloid',
    nonmetal: 'nonmetal', halogen: 'nonmetal', noble: 'nonmetal',
    unknown: 'nonmetal',
  };
  return map[catKey] || 'nonmetal';
}

// ── 검색 처리 ──────────────────────────────────────────────
function processSearch() {
  searchQuery = searchInput.value.trim().toLowerCase();
  clearBtn.classList.toggle('visible', searchQuery.length > 0);

  if (!searchQuery) {
    clearHighlights();
    applyFilter();
    return;
  }

  tableEl.querySelectorAll('.element').forEach(el => {
    const idx = parseInt(el.dataset.index);
    const elCat = ELEMENTS[idx].cat;
    const catGroup = categorizeGroup(elCat);

    // 필터 먼저 적용
    if (activeFilter !== 'all' && catGroup !== activeFilter) {
      el.classList.add('hidden');
      return;
    }

    highlightSearch(el, idx);
  });
}

// ── 상세 패널 ──────────────────────────────────────────────
function openDetail(index) {
  const el = ELEMENTS[index];
  if (!el) return;
  const cat = CATEGORIES[el.cat];
  const massDisplay = typeof el.mass === 'number' ? el.mass.toFixed(2) : el.mass;

  detailContent.innerHTML = `
    <div class="detail-hero">
      <div class="detail-symbol-big" style="color:${cat.color}">${el.sym}</div>
      <div class="detail-name-big">${el.name} (${el.sym})</div>
      <div class="detail-number-big">원자번호 ${el.z} · 원자량 ${massDisplay}</div>
      <span class="detail-category-badge" style="background:${cat.color}22; color:${cat.color}; border:1px solid ${cat.color}44">
        ${cat.label}
      </span>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">기본 정보</div>
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-item-label">원자번호</div>
          <div class="detail-item-value">${el.z}</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">기호</div>
          <div class="detail-item-value" style="font-family:'JetBrains Mono',monospace; font-weight:600; color:${cat.color}">${el.sym}</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">원자량</div>
          <div class="detail-item-value">${massDisplay} g/mol</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">발견 연도</div>
          <div class="detail-item-value">${el.year}</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">주기</div>
          <div class="detail-item-value">${el.row}주기</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">족</div>
          <div class="detail-item-value">${el.col}족</div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">전자 배치</div>
      <div class="detail-item" style="font-family:'JetBrains Mono',monospace; font-size:0.82rem; padding:10px 14px;">
        ${el.config}
      </div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">설명</div>
      <div class="detail-description">${el.desc}</div>
    </div>
  `;

  detailPanel.classList.add('open');
  detailOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  detailPanel.classList.remove('open');
  detailOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── 키보드 네비게이션 ──────────────────────────────────────
function handleKeydown(e) {
  // 검색창에서 엔터 → 검색
  if (e.target === searchInput && e.key === 'Enter') {
    processSearch();
    return;
  }

  // 방향키로 원소 간 이동
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' ||
      e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    navigateGrid(e.key);
  }

  // Escape → 패널 닫기 / 검색 지우기
  if (e.key === 'Escape') {
    if (detailPanel.classList.contains('open')) {
      closeDetail();
    } else if (searchQuery) {
      searchInput.value = '';
      processSearch();
      searchInput.blur();
    }
  }

  // Enter → 현재 강조된 원소 상세 열기
  if (e.key === 'Enter' && focusedIndex >= 0) {
    openDetail(focusedIndex);
  }
}

function navigateGrid(key) {
  if (focusedIndex < 0) {
    focusedIndex = 0;
  }

  const el = tableEl.querySelector(`.element[data-index="${focusedIndex}"]`);
  if (!el) return;

  const currentRow = ELEMENTS[focusedIndex].row;
  const currentCol = ELEMENTS[focusedIndex].col;

  let nextRow = currentRow;
  let nextCol = currentCol;

  switch (key) {
    case 'ArrowRight': nextCol++; break;
    case 'ArrowLeft':  nextCol--; break;
    case 'ArrowDown':  nextRow++; break;
    case 'ArrowUp':    nextRow--; break;
  }

  // 다음 위치의 원소 찾기
  const nextEl = ELEMENTS.find(e => e.row === nextRow && e.col === nextCol);
  if (nextEl) {
    const nextIdx = ELEMENTS.indexOf(nextEl);
    focusedIndex = nextIdx;

    // 하이라이트 업데이트
    tableEl.querySelectorAll('.element').forEach(e => e.classList.remove('focused'));
    const target = tableEl.querySelector(`.element[data-index="${nextIdx}"]`);
    if (target) {
      target.classList.add('focused');
      target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }
}

// ── 이벤트 바인딩 ──────────────────────────────────────────
searchInput.addEventListener('input', processSearch);
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  processSearch();
  searchInput.focus();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    processSearch();
  });
});

detailClose.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', closeDetail);

document.addEventListener('keydown', handleKeydown);

// 패널 열렸을 때 Tab 키 제한
detailPanel.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && !e.shiftKey) {
    const focusable = detailPanel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length > 0) {
      const last = focusable[focusable.length - 1];
      if (e.target === last) e.preventDefault();
    }
  }
});

// ── 초기화 ─────────────────────────────────────────────────
renderLegend();
renderTable();
