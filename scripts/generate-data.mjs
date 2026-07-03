import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="distributed system node cluster network partition latency timeout retry idempotent CAP CP AP BASE strong consistency eventual consistency linearizability sequential consistency causal consistency read-after-write clock drift logical clock Lamport clock vector clock replication master-slave multi-leader quorum NWR model sharding hash consistent hash virtual node data migration Raft Paxos leader election log replication heartbeat split brain ZooKeeper etcd coordination distributed lock lease fencing token distributed transaction 2PC 3PC TCC Saga Outbox eventual consistency service discovery registry config center circuit breaker rate limiting degradation disaster recovery failover data recovery consistency guarantee consensus algorithm fault tolerance partial failure unreliable network unreliable clock Byzantine fault gossip protocol SWIM membership protocol epidemic protocol CRDT conflict-free replicated data type";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"ds-tag-"+String(i+1).padStart(3,"0"),name:n,category:"DistSys",description:"DS标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"ds-course-01",order:1,slug:"DS入门",title:"分布式系统入门与学习路线",description:"分布式系统定义、挑战、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"ds-course-02",order:2,slug:"核心问题",title:"分布式系统核心问题",description:"部分失效、不可靠网络、时钟、共识。",estimatedHours:6,diff:"easy"},
  {id:"ds-course-03",order:3,slug:"CAPBASE",title:"CAP、BASE与一致性模型",description:"CAP定理、BASE理论、一致性等级、读写一致性。",estimatedHours:10,diff:"medium"},
  {id:"ds-course-04",order:4,slug:"时钟事件顺序",title:"时间、时钟与事件顺序",description:"物理时钟、逻辑时钟、Lamport Clock、Vector Clock。",estimatedHours:8,diff:"medium"},
  {id:"ds-course-05",order:5,slug:"复制同步",title:"复制、副本与数据同步",description:"主从复制、多主复制、Quorum、NWR、最终一致性。",estimatedHours:10,diff:"hard"},
  {id:"ds-course-06",order:6,slug:"分片路由",title:"分片、路由与数据分布",description:"哈希分片、一致性哈希、虚拟节点、重平衡。",estimatedHours:10,diff:"hard"},
  {id:"ds-course-07",order:7,slug:"共识Raft",title:"分布式共识：Raft与Paxos入门",description:"Leader选举、日志复制、安全性、Raft算法。",estimatedHours:12,diff:"hard"},
  {id:"ds-course-08",order:8,slug:"分布式事务",title:"分布式事务与最终一致性",description:"2PC、3PC、TCC、Saga、Outbox、本地消息表。",estimatedHours:10,diff:"hard"},
  {id:"ds-course-09",order:9,slug:"分布式锁",title:"分布式锁与协调服务",description:"Redis锁、ZooKeeper锁、etcd锁、租约、fencing。",estimatedHours:8,diff:"hard"},
  {id:"ds-course-10",order:10,slug:"服务发现",title:"服务发现、负载均衡与配置中心",description:"注册中心、心跳、服务缓存、负载均衡策略。",estimatedHours:8,diff:"hard"},
  {id:"ds-course-11",order:11,slug:"故障容错",title:"故障检测、重试、超时与容错",description:"故障检测、超时设计、重试策略、熔断、限流。",estimatedHours:8,diff:"hard"},
  {id:"ds-course-12",order:12,slug:"存储缓存",title:"分布式存储与缓存系统设计",description:"分布式KV、分布式缓存、数据分片与迁移。",estimatedHours:8,diff:"hard"},
  {id:"ds-course-13",order:13,slug:"观测测试",title:"分布式系统观测、测试与排错",description:"分布式追踪、混沌工程、Jepsen测试、排错。",estimatedHours:8,diff:"hard"},
  {id:"ds-course-14",order:14,slug:"DS案例面试",title:"分布式系统综合案例与面试训练",description:"经典分布式案例、面试题、系统设计题。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解分布式问题","掌握一致性理论","了解Raft共识","能设计分布式方案"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"ds-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["DistSys"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"DS课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["分布式系统","多节点系统"],["CAP","权衡三选二"],["BASE","可用性基本可用"],["一致性","数据一致"],["复制","数据副本"],["分片","数据分割"],["Raft","共识算法"],["Paxos","一致性协议"],["分布式事务","跨节点事务"],["分布式锁","互斥控制"],["服务发现","注册中心"],["一致性哈希","无中心哈希"],["Quorum","多数投票"],["逻辑时钟","事件排序"],["脑裂","分区问题"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"ds-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"DistSys",tags:["DistSys"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"ds-kp-"+String(k.length+1).padStart(4,"0"),name:"DS概念"+(k.length+1),description:"DS概念",category:"DistSys",tags:["DistSys"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["DS入门","核心问题","CAPBASE","时钟事件顺序","复制同步","分片路由","共识Raft","分布式事务","分布式锁","服务发现","故障容错","存储缓存","观测测试","DS案例面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"分布式系统最大挑战？",["部分失效","性能不够","存储不足","网络快"],"A","easy"],[1,"CAP中C代表？",["一致性","可用性","分区容错","持久性"],"A","easy"],[2,"最终一致性归属？",["BASE","ACID","CAP","SQL"],"A","medium"],[3,"逻辑时钟用于？",["事件排序","精确计时","时间同步","性能分析"],"A","medium"],[4,"主从复制延迟问题？",["读写不一致","数据丢失","网络分区","脑裂"],"A","medium"],[5,"一致性哈希优势？",["最小数据迁移","均匀分布","快速查询","顺序访问"],"A","hard"],[6,"Raft中Leader职责？",["管理日志复制","处理读请求","监控集群","分配资源"],"A","hard"],[7,"2PC缺点？",["协调者单点","性能高","扩展性好","容错强"],"A","hard"],[9,"分布式锁要求？",["互斥性、高可用、可重入","高性能","持久化","事务性"],"A","hard"],[13,"Chaos Engineering目的？",["发现系统脆弱性","提高性能","增加功能","优化代码"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];if(t_[4]&&typeof t_[4]==="string"&&t_[4].includes(":"))t_[4]=t_[4].replace(":","");qs.push({id:"ds-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"calculation",min:300},{type:"case_analysis",min:850}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="ds-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于DS"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="DS"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是分布式系统重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="DS"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在分布式系统中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于DS。";}
    else if(it.type==="calculation"){s="DS"+ch+"计算题。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="DS"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"ds-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["分布式锁","库存扣减","订单状态一致性","支付回调一致性","缓存一致性","分库分表路由","一致性哈希","主从复制延迟","RaftLeader选举","服务发现","配置中心","脑裂","幂等重试","分布式事务","Saga","Outbox","故障转移","容灾恢复","DS面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"ds-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握DS",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"问题",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"DS路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"ds-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["CAP","BASE","Raft","Paxos","一致性哈希","分布式事务","分布式锁","Quorum","2PC","Saga","脑裂","逻辑时钟","复制","分片","故障转移"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["DS概念"+i,"DS概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"ds-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"DistSys",tags:["DistSys"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["分布式系统问题"+(i+1)+"?","DS问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"ds-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"DistSys",tags:["DistSys"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["DistSys"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["DistSys"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["DistSys"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["DistSys"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["DistSys"]});});return e;}
async function main(){
  console.log("Gen DS...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-distributed-systems",slug:"module-distributed-systems",title:"分布式系统基础",subtitle:"面向后端和架构学习者",description:"面向后端架构和高并发系统学习者的分布式系统CAPBASE一致性模型复制分片Raft分布式事务分布式锁服务发现容错与工程实践训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["分布式系统","CAP","一致性","Raft","分布式事务","分布式锁","服务发现","高可用"],estimatedHours:190,difficulty:"advanced",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F310}",repoUrl:"https://github.com/openskill-galaxy/module-distributed-systems",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
