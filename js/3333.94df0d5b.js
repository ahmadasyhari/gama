"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[3333],{4362:(e,n,r)=>{var a=r(1589),t=Math.floor,o=function(e,n){var r=e.length,l=t(r/2);return r<8?u(e,n):s(e,o(a(e,0,l),n),o(a(e,l),n),n)},u=function(e,n){var r,a,t=e.length,o=1;while(o<t){a=o,r=e[o];while(a&&n(e[a-1],r)>0)e[a]=e[--a];a!==o++&&(e[a]=r)}return e},s=function(e,n,r,a){var t=n.length,o=r.length,u=0,s=0;while(u<t||s<o)e[u+s]=u<t&&s<o?a(n[u],r[s])<=0?n[u++]:r[s++]:u<t?n[u++]:r[s++];return e};e.exports=o},5117:(e,n,r)=>{var a=r(6330),t=TypeError;e.exports=function(e,n){if(!delete e[n])throw t("Cannot delete property "+a(n)+" of "+a(e))}},8886:(e,n,r)=>{var a=r(8113),t=a.match(/firefox\/(\d+)/i);e.exports=!!t&&+t[1]},256:(e,n,r)=>{var a=r(8113);e.exports=/MSIE|Trident/.test(a)},8008:(e,n,r)=>{var a=r(8113),t=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!t&&+t[1]},2707:(e,n,r)=>{var a=r(2109),t=r(1702),o=r(9662),u=r(7908),s=r(6244),l=r(5117),c=r(1340),i=r(7293),d=r(4362),f=r(2133),p=r(8886),h=r(256),k=r(7392),v=r(8008),g=[],w=t(g.sort),m=t(g.push),T=i((function(){g.sort(void 0)})),_=i((function(){g.sort(null)})),S=f("sort"),U=!i((function(){if(k)return k<70;if(!(p&&p>3)){if(h)return!0;if(v)return v<603;var e,n,r,a,t="";for(e=65;e<76;e++){switch(n=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)g.push({k:n+a,v:r})}for(g.sort((function(e,n){return n.v-e.v})),a=0;a<g.length;a++)n=g[a].k.charAt(0),t.charAt(t.length-1)!==n&&(t+=n);return"DGBEFHACIJK"!==t}})),x=T||!_||!S||!U,I=function(e){return function(n,r){return void 0===r?-1:void 0===n?1:void 0!==e?+e(n,r)||0:c(n)>c(r)?1:-1}};a({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&o(e);var n=u(this);if(U)return void 0===e?w(n):w(n,e);var r,a,t=[],c=s(n);for(a=0;a<c;a++)a in n&&m(t,n[a]);d(t,I(e)),r=s(t),a=0;while(a<r)n[a]=t[a++];while(a<c)l(n,a++);return n}})},1407:(e,n,r)=>{r.r(n),r.d(n,{default:()=>x});var a=r(124),t=r(8534),o=(r(1249),r(2222),r(7658),r(1539),r(8783),r(3948),r(3710),r(2707),r(6252)),u=r(2262),s=r(3577),l=r(7208),c=r(6100),i=r(5856),d=r(4105),f=function(e){return(0,o.dD)("data-v-c75d14ec"),e=e(),(0,o.Cn)(),e},p=f((function(){return(0,o._)("h2",null,"Daftar Hasil Ujian",-1)})),h=f((function(){return(0,o._)("strong",null,"Sekolah:",-1)})),k=f((function(){return(0,o._)("strong",null,"Skor TKP:",-1)})),v=f((function(){return(0,o._)("strong",null,"Skor TWK:",-1)})),g=f((function(){return(0,o._)("strong",null,"Skor TIU:",-1)})),w=f((function(){return(0,o._)("strong",null,"Total Skor:",-1)})),m=f((function(){return(0,o._)("strong",null,"Rata-Rata Skor:",-1)})),T={key:1};const _={__name:"HasilUjianKedinasan",props:{jadwalId:String},setup:function(e){var n=e,r=(0,c.ad)(i.H),f=(0,u.iH)([]),_=(0,u.iH)(null),S=(0,u.iH)(!0),U=(0,u.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),x=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var o,u,s,l,i,d;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o="MyLqxMzpV4P5Z1NUD0HI",u=(0,c.hJ)(r,"users"),s=_.value?(0,c.IO)(u,(0,c.ar)("kelas","==",o),(0,c.TQ)(_.value),(0,c.b9)(100)):(0,c.IO)(u,(0,c.ar)("kelas","==",o),(0,c.b9)(100)),e.next=6,(0,c.PL)(s);case 6:return l=e.sent,i=[],l.docs.length>0?_.value=l.docs[l.docs.length-1]:S.value=!1,d=l.docs.map(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(t){var o,u,s,l,d,f;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.id,u=t.data(),s=u.fullName||"Tidak Tersedia",l=u.schoolName||"Tidak Tersedia",console.log("Memproses userId: ".concat(o,", Nama: ").concat(s,", Sekolah: ").concat(l)),e.next=7,(0,c.QT)((0,c.JU)(r,"examResults",o,"results",n.jadwalId));case 7:d=e.sent,d.exists()&&(f=d.data(),i.push({userId:o,fullName:s,schoolName:l,scoreTKP:f.scoreTKP||0,scoreTWK:f.scoreTWK||0,scoreTIU:f.scoreTIU||0,totalScore:f.totalScore||0,score:f.score||0,createdAt:f.createdAt?y(f.createdAt):"Tidak tersedia"}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(d);case 12:f.value=f.value.concat(i),K(),0===i.length&&j("Tidak ada pengguna yang mengikuti ujian dengan jadwal ID ini.","warning"),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),console.error("Error fetching hasil ujian:",e.t0),j("Terjadi kesalahan saat mengambil data hasil ujian.","danger");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var o,u,s,l,i,d;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!_.value){e.next=22;break}return e.prev=1,o="MyLqxMzpV4P5Z1NUD0HI",u=(0,c.hJ)(r,"users"),s=(0,c.IO)(u,(0,c.ar)("kelas","==",o),(0,c.TQ)(_.value),(0,c.b9)(100)),e.next=7,(0,c.PL)(s);case 7:return l=e.sent,i=[],l.docs.length>0?_.value=l.docs[l.docs.length-1]:S.value=!1,d=l.docs.map(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(t){var o,u,s,l,d,f;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.id,u=t.data(),s=u.fullName||"Tidak Tersedia",l=u.schoolName||"Tidak Tersedia",console.log("Memproses userId: ".concat(o,", Nama: ").concat(s,", Sekolah: ").concat(l)),e.next=7,(0,c.QT)((0,c.JU)(r,"examResults",o,"results",n.jadwalId));case 7:d=e.sent,d.exists()&&(f=d.data(),i.push({userId:o,fullName:s,schoolName:l,scoreTKP:f.scoreTKP||0,scoreTWK:f.scoreTWK||0,scoreTIU:f.scoreTIU||0,totalScore:f.totalScore||0,score:f.score||0,createdAt:f.createdAt?y(f.createdAt):"Tidak tersedia"}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=13,Promise.all(d);case 13:f.value=f.value.concat(i),K(),0===i.length&&j("Tidak ada data hasil ujian lebih lanjut.","warning"),e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](1),console.error("Error loading more data:",e.t0),j("Terjadi kesalahan saat memuat lebih banyak data.","danger");case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}(),j=function(e,n){U.value={isOpen:!0,message:e,duration:2e3,color:n}},b=function(e){return e>=80?"green":e>=60?"orange":"red"},y=function(e){if(!e)return"N/A";var n=e.toDate?e.toDate():new Date(e);return n.toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric"})},K=function(){f.value.sort((function(e,n){return n.score-e.score}))},N=function(){var e=f.value.map((function(e,n){return{No:n+1,"Nama Lengkap":e.fullName,Sekolah:e.schoolName,"Skor TKP":e.scoreTKP||0,"Skor TWK":e.scoreTWK||0,"Skor TIU":e.scoreTIU||0,"Total Skor":e.totalScore||0,"Rata-Rata Skor":e.score||0,"Tanggal Dibuat":e.createdAt?y(e.createdAt):"Tidak tersedia"}})),n=d.P6.json_to_sheet(e),r=d.P6.book_new();d.P6.book_append_sheet(r,n,"Hasil Ujian"),d.NC(r,"hasil_ujian.xlsx")};return(0,o.bv)((function(){x()})),function(e,r){return(0,o.wg)(),(0,o.j4)((0,u.SU)(l._i),null,{default:(0,o.w5)((function(){return[(0,o.Wm)((0,u.SU)(l.Gu),null,{default:(0,o.w5)((function(){return[(0,o.Wm)((0,u.SU)(l.sr),null,{default:(0,o.w5)((function(){return[(0,o.Wm)((0,u.SU)(l.wd),null,{default:(0,o.w5)((function(){return[(0,o.Uk)("Hasil Ujian: "+(0,s.zw)(n.jadwalId),1)]})),_:1}),(0,o.Wm)((0,u.SU)(l.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,o.Wm)((0,u.SU)(l.W2),{class:"ion-padding"},{default:(0,o.w5)((function(){return[p,(0,o.Wm)((0,u.SU)(l.YG),{expand:"full",onClick:N},{default:(0,o.w5)((function(){return[(0,o.Uk)("Ekspor ke Excel")]})),_:1}),f.value.length>0?((0,o.wg)(),(0,o.j4)((0,u.SU)(l.q_),{key:0},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.value,(function(e,n){return(0,o.wg)(),(0,o.j4)((0,u.SU)(l.Ie),{key:e.userId},{default:(0,o.w5)((function(){return[(0,o.Wm)((0,u.SU)(l.Q$),null,{default:(0,o.w5)((function(){return[(0,o._)("h3",null,(0,s.zw)(n+1)+". "+(0,s.zw)(e.fullName),1),(0,o._)("p",null,[h,(0,o.Uk)(" "+(0,s.zw)(e.schoolName),1)]),(0,o._)("p",null,[k,(0,o.Uk)(" "+(0,s.zw)(e.scoreTKP||0),1)]),(0,o._)("p",null,[v,(0,o.Uk)(" "+(0,s.zw)(e.scoreTWK||0),1)]),(0,o._)("p",null,[g,(0,o.Uk)(" "+(0,s.zw)(e.scoreTIU||0),1)]),(0,o._)("p",null,[w,(0,o._)("span",{style:(0,s.j5)({color:b(e.totalScore)})},(0,s.zw)(e.totalScore),5)]),(0,o._)("p",null,[m,(0,o._)("span",{style:(0,s.j5)({color:b(e.score)})},(0,s.zw)(e.score),5)]),(0,o._)("p",null,"Dibuat pada: "+(0,s.zw)(e.createdAt?y(e.createdAt):"Tidak tersedia"),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})):((0,o.wg)(),(0,o.iD)("p",T,"Tidak ada pengguna yang mengikuti ujian dengan jadwal ID ini.")),S.value?((0,o.wg)(),(0,o.j4)((0,u.SU)(l.YG),{key:2,expand:"full",onClick:I},{default:(0,o.w5)((function(){return[(0,o.Uk)(" Muat Lebih Banyak ")]})),_:1})):(0,o.kq)("",!0),(0,o.Wm)((0,u.SU)(l.Px),{"is-open":U.value.isOpen,message:U.value.message,duration:U.value.duration,color:U.value.color,onDidDismiss:r[0]||(r[0]=function(){return U.value.isOpen=!1})},null,8,["is-open","message","duration","color"])]})),_:1})]})),_:1})}}};var S=r(3744);const U=(0,S.Z)(_,[["__scopeId","data-v-c75d14ec"]]),x=U}}]);
//# sourceMappingURL=3333.94df0d5b.js.map