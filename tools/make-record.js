// 시연 영상 녹화용 페이지 생성: node tools/make-record.js → tools/record.html
// 숫자키로 장면을 바로 띄운다. 제출 ZIP·Pages에는 들어가지 않는다.
const fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scenes = `
// ---------- 녹화용 장면 ----------
const DEMO=true;
try{localStorage.removeItem('pps_save')}catch(e){}
function demoState(){newGame('시원공방');Object.assign(S,{turn:12,cash:6.4,q:62,t:55,integ:84,rep:66,aff:30,spark:true,affStage:1,tier:1,tierMax:1,wins:8,total:24,stock:150,mas:true,dpc:true,mat:112,matHist:[100,96,104,125,150,141,128,122,117,112,108,112],sajung:[1.0042,.9968,1.0011,.9987,1.0023],lastOffer:12,talks:5});
 S.log=['초등학교 천장형 선풍기 일괄 계약 3.21억 → 순이익 0.52억','🛠️ 품질관리 완료'];
 S.notices=[{type:'sme',item:'초등학교 천장형 선풍기 일괄',ag:'한빛시 교육청',base:3.42,comp:9},{type:'general',item:'국립대 강의실 실링팬',ag:'은하구 국립대학교',base:8.7,comp:11},{type:'sme',item:'무더위쉼터 선풍기',ag:'솔내군 시청',base:1.85,comp:6}]}
// 투찰하면 하한선에 칼같이 붙여 낙찰되는 결과가 나올 때까지 다시 추첨 (녹화용)
const realResolve=resolveBid;
resolveBid=function(collude){if(collude)return realResolve(collude);const snap=JSON.stringify(S),c0=JSON.stringify(S.cur);
 for(let k=0;k<400;k++){S=JSON.parse(snap);S.cur=JSON.parse(c0);const w=S.wins;realResolve(false);
  const sj=S.sajung[S.sajung.length-1],gap=S.cur.rate/100-sj*fr(S.cur.n.type);if(S.wins>w&&gap<=.0005&&gap>=0)return}
}
const SC={
 '1':()=>title(),
 '2':()=>{demoState();hub()},
 '3':()=>{demoState();S.cur=null;openBid(0)},
 '4':()=>{demoState();openBid(0);collusionOffer()},
 '5':()=>{demoState();S.turn=4;FIXED[4](hub)},
 '6':()=>{demoState();S.aff=60;S.affStage=1;romanceCheck()},
 '7':()=>{demoState();S.turn=13;S.halfRev=12;S.rev=[2,10];S.wins=12;S.yearWins0=8;S.yearBest={item:'초등학교 천장형 선풍기 일괄',ag:'한빛시 교육청',price:3.42};S.graceUsed=true;settle()},
 '8':()=>{demoState();Object.assign(S,{turn:20,tier:3,tierMax:3,ow:3,global:true,cash:84.2,total:284,wins:31,romance:'declared',aff:100,integ:93,collusion:0,polUsed:Object.fromEntries(Object.keys(POL).slice(0,15).map(k=>[k,1]))});finalEnding()},
 '9':()=>{demoState();Object.assign(S,{turn:20,tier:0,tierMax:1,romance:'declared',aff:100,integ:84,cash:3.1,total:18,wins:9,excellent:false,polUsed:{nara:1,yega:1,sme_priority:1,conflict:1,mas:1}});finalEnding()}};
// ?scene=번호 로 열면 그 장면부터 (캡처용)
setTimeout(()=>{const q=new URLSearchParams(location.search).get('scene');if(q&&SC[q])SC[q]()},0);
document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;const f=SC[e.key];if(f){e.preventDefault();f()}});
`;
const re = /title\(\);\r?\n<\/script>/;
if (!re.test(src)) throw new Error('index.html 끝부분(title(); </script>)을 찾지 못했어요');
const out = src.replace('<title>', '<title>[녹화용] ').replace(re, 'title();\n' + scenes + '\n</script>');
fs.writeFileSync(path.join(__dirname, 'record.html'), out);
console.log('tools/record.html 생성 완료');
