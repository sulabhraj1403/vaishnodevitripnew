const F=[
{id:"vkt",name:"Mr VKT",members:4,ticket:16447,hotel:2415.36,total:18862.36},
{id:"vjha",name:"Mr V Jha",members:4,ticket:20513,hotel:3979.36,total:24492.36},
{id:"ratish",name:"Mr Ratish",members:3,ticket:15392,hotel:2877.187,total:18269.1867},
{id:"ajay",name:"Mr Ajay",members:2,ticket:10257,hotel:2018.124,total:12275.1244444},
{id:"sambhu",name:"Mr Sambhu Mishra",members:4,ticket:20525,hotel:4036.249,total:24561.2488889},
{id:"manish",name:"Mr Manish",members:4,ticket:0,hotel:1815.36,total:1815.36},
{id:"mannu",name:"Mr Mannu Jha",members:4,ticket:0,hotel:1815.36,total:1815.36}
];
const FN=Object.fromEntries(F.map(f=>[f.id,f.name]));
function personName(value){
  const raw=String(value??"").trim();
  if(!raw) return "";
  if(/^mr\.?(?:\s|$)/i.test(raw)) return raw;
  const key=raw.toLowerCase().replace(/\s+/g," ");
  const map={"vkt":"Mr VKT","v jha":"Mr V Jha","vjha":"Mr V Jha","ratish":"Mr Ratish","dr ratish":"Mr Ratish","ajay":"Mr Ajay","sambhu mishra":"Mr Sambhu Mishra","sambhu mishra":"Mr Sambhu Mishra","manish":"Mr Manish","mannu jha":"Mr Mannu Jha"};
  return map[key] || "Mr "+raw;
}

const money=n=>"₹"+Number(n||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
let sb=null;
function configReady(){return window.SUPABASE_CONFIG && !window.SUPABASE_CONFIG.url.includes("PASTE_") && !window.SUPABASE_CONFIG.anonKey.includes("PASTE_")}
function ensureSupabase(){
  if(!configReady()) return null;
  if(!sb) sb=window.supabase.createClient(window.SUPABASE_CONFIG.url,window.SUPABASE_CONFIG.anonKey);
  return sb;
}
function nav(active){return `<header class="top"><div class="topin"><div class="brand">माता वैष्णो देवी · Group Trip<small>Mata Vaishno Devi Mandir, Katra</small></div><nav>
<a class="${active==="home"?"active":""}" href="index.html">Home</a>
<a class="${active==="family"?"active":""}" href="family-expenses.html">Pre Trip Expenses</a>
<a class="${active==="trip"?"active":""}" href="trip-expenses.html">Trip Expenses</a>
<a class="${active==="admin"?"active":""}" href="admin.html">Admin</a>
<a class="${active==="detailed"?"active":""}" href="original-tables.html">Detailed Tables</a>
<a class="${active==="gallery"?"active":""}" href="gallery.html">Gallery</a>
<a class="${active==="food"?"active":""}" href="local-delicacies.html">Local Delicacies</a></nav></div></header>`}
function page(active,body,title){document.body.innerHTML=nav(active)+`<main class="wrap">${body}</main><footer>Vaishno Devi Group Trip · Supabase backend</footer>`;document.title=title}
function setupBanner(){
 if(configReady()) return "";
 return `<section class="card notice"><b>Setup needed:</b> Open <code>config.js</code> and paste your Supabase Project URL and anon/publishable key.</section>`;
}
function home(){page("home",`<section class="hero hero-home"><div class="hero-copy"><div class="eyebrow">JAI MATA DI · GROUP TRIP</div><h1>Mata Vaishno Devi<br><span>Mandir, Katra</span></h1><p class="lead">One place for our group's pre-trip records, live expenses, settlement payments and travel inspiration.</p><div class="actions"><a class="btn gold" href="family-expenses.html">Pre Trip Expenses</a><a class="btn primary" href="trip-expenses.html">Trip Expenses</a><a class="btn ghost" href="gallery.html">Explore Gallery</a></div></div><div class="hero-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mata_Vaishno_Devi_Mandir,_Katra.jpg" alt="Mata Vaishno Devi Mandir, Katra"><div class="photo-credit">Photo: Lpp3535 / Wikimedia Commons</div></div></section><section class="feature-grid"><a class="feature-card image-card" href="gallery.html"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Katra_from_Vaishnodevi.jpg" alt="Katra from Vaishno Devi"><div><span>TRAVEL</span><h3>See Katra & Jammu</h3><p>Temples, mountain views, forts and beautiful scenery.</p></div></a><a class="feature-card image-card" href="local-delicacies.html"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Food_of_Jammu.jpg" alt="Food of Jammu"><div><span>FOOD</span><h3>Taste Jammu</h3><p>Discover Rajma, Kaladi, Dogri dishes and local sweets.</p></div></a><a class="feature-card" href="trip-expenses.html"><div class="feature-icon">₹</div><div><span>LIVE EXPENSES</span><h3>Trip Expenses</h3><p>Shared expenses, payments and family balance sheet.</p></div></a></section><section class="stats-strip"><div><strong>25</strong><span>Members</span></div><div><strong>7</strong><span>Families</span></div><div><strong>1</strong><span>Shared ledger</span></div><div><strong>∞</strong><span>Trip expenses</span></div></section><section class="card modern-card"><div class="section-head"><div><div class="eyebrow">PLAN · TRACK · SETTLE</div><h2>Everything for the trip</h2></div><a class="text-link" href="admin.html">Open Admin →</a></div><div class="quick-grid"><a href="family-expenses.html"><b>Pre Trip Expenses</b><span>Tickets, hotels and source totals</span></a><a href="trip-expenses.html"><b>Trip Expenses</b><span>Food, other items and balance sheet</span></a><a href="original-tables.html"><b>Detailed Tables</b><span>Original PDF tables</span></a><a href="local-delicacies.html"><b>Local Delicacies</b><span>What to try in Jammu & Katra</span></a></div></section>${setupBanner()}<section class="card source-note"><b>Source figures:</b> Family expense values from the supplied PDF are displayed as source figures and are not recalculated.</section>` ,"Mata Vaishno Devi · Group Trip")}
function family(){
 page("family",`<section class="hero"><div><div class="eyebrow">PRE TRIP EXPENSES</div><h1>Choose your family</h1><p>Select a family to see its amounts clearly.</p></div></section><section class="select-card"><label>Select Family<select id="fs"><option value="">-- Select a family --</option>${F.map(f=>`<option value="${f.id}">${f.name}</option>`).join("")}</select></label></section><section id="fr" class="family-result"></section>` ,"Pre Trip Expenses");
 fs.onchange=()=>{const f=F.find(x=>x.id===fs.value);if(!f){fr.classList.remove("show");return}fr.classList.add("show");fr.innerHTML=`<div class="total-box"><div class="label">TOTAL EXPENSE</div><div class="amount">${money(f.total)}</div><div>${f.name} · ${f.members} members</div></div><div class="breakdown"><div class="amount-box"><div class="label">TICKET EXPENSE</div><div class="value">${f.ticket?money(f.ticket):"—"}</div></div><div class="amount-box"><div class="label">HOTEL EXPENSE</div><div class="value">${money(f.hotel)}</div></div></div><div class="card"><h2>In simple words</h2><p>The PDF shows <b>${f.ticket?money(f.ticket):"—"}</b> for tickets, <b>${money(f.hotel)}</b> for hotels and <b>${money(f.total)}</b> as the total expense for <b>${f.name}</b>.</p><p class="muted">The PDF figures are displayed as source figures and are not recalculated.</p></div>`}
}
async function trip(){
 page("trip",`<section class="hero"><div><div class="eyebrow">TRIP EXPENSES</div><h1>Trip Expenses</h1><p>Select a family and expense type to see that family's share.</p></div></section><section class="filters card"><label>Family<select id="tf"><option value="all">All families</option>${F.map(f=>`<option value="${f.id}">${f.name}</option>`).join("")}</select></label><label>Type<select id="tt"><option value="all">All</option><option value="Food">Food</option><option value="Other Items">Other Items</option></select></label></section><section id="tr"><div class="card muted">Loading...</div></section>` ,"Trip Expenses");
 const client=ensureSupabase();
 async function render(){
   if(!client){tr.innerHTML=`${setupBanner()}`;return}
   const {data,error}=await client.from("expenses").select("id,date,time,place,category,item,amount,families,paid_by,created_at").order("date",{ascending:false}).order("time",{ascending:false});
   const {data:payments,paymentError}=await client.from("payments").select("id,from_person,to_person,amount,created_at").order("created_at",{ascending:false});
   if(paymentError){tr.innerHTML=`<div class="card error"><b>Payment database error:</b> ${esc(paymentError.message)}</div>`;return}
   if(error){tr.innerHTML=`<div class="card error"><b>Database error:</b> ${esc(error.message)}</div>`;return}
   let a=data||[], selectedFamily=tf.value, selectedType=tt.value;
   a=a.filter(e=>(selectedFamily==="all"||(e.families||[]).includes(selectedFamily))&&(selectedType==="all"||e.category===selectedType));

   // Family share is allocated according to the number of members in each family
   // among the families selected for each individual expense.
   function familyShare(e, familyId){
     const ids=Array.isArray(e.families)?e.families:[];
     const totalMembers=ids.reduce((sum,id)=>sum+(F.find(f=>f.id===id)?.members||0),0);
     const family=F.find(f=>f.id===familyId);
     if(!family || !totalMembers) return 0;
     return Number(e.amount||0)*(family.members/totalMembers);
   }

   let share=0;
   if(selectedFamily!=="all") share=a.reduce((sum,e)=>sum+familyShare(e,selectedFamily),0);
   else share=a.reduce((sum,e)=>sum+Number(e.amount||0),0);

   const heading=selectedFamily==="all"?"Total selected expenses":`Share for ${FN[selectedFamily]}`;
   const explanation=selectedFamily==="all"
     ?"Select a family above to see that family's share of the selected expenses."
     :"For each expense, the amount is divided between the involved families according to their number of members.";

   // Balance sheet: positive net means the person should RECEIVE money;
   // negative net means the person needs to PAY money. Admin is included
   // because Admin can also be the person who paid an expense.
   const balancePeople=[...F.map(f=>({id:f.id,name:f.name,members:f.members,paid:0,share:0})),{id:"admin",name:"Admin",members:0,paid:0,share:0}];
   const balanceMap=Object.fromEntries(balancePeople.map(x=>[x.id,x]));
   const balanceExpenses=(data||[]).filter(e=>selectedType==="all"||e.category===selectedType);
   for(const e of balanceExpenses){
     const ids=Array.isArray(e.families)?e.families:[];
     const totalMembers=ids.reduce((sum,id)=>sum+(F.find(f=>f.id===id)?.members||0),0);
     if(totalMembers){
       ids.forEach(id=>{if(balanceMap[id]) balanceMap[id].share += Number(e.amount||0)*(balanceMap[id].members/totalMembers);});
     }
     const payerRaw=String(e.paid_by||"").trim();
     const payerId=Object.values(balanceMap).find(x=>x.name.toLowerCase()===payerRaw.toLowerCase())?.id ||
       (payerRaw.toLowerCase()==="admin"?"admin":F.find(f=>f.id===payerRaw)?.id);
     if(payerId && balanceMap[payerId]) balanceMap[payerId].paid += Number(e.amount||0);
   }
   // Recorded person-to-person payments are SETTLEMENTS, not new expenses.
   // Therefore they must not change either Paid or Expense Share.
   // They only transfer balance: payer loses the amount and receiver gains it.
   const transferMap=Object.fromEntries(balancePeople.map(x=>[x.id,{paidOut:0,received:0}]));
   for(const p of (payments||[])){
     const from=transferMap[p.from_person], to=transferMap[p.to_person];
     const amt=Number(p.amount||0);
     if(from) from.paidOut += amt;
     if(to) to.received += amt;
   }
   const balances=balancePeople.map(x=>{
     const t=transferMap[x.id]||{paidOut:0,received:0};
     if(x.id==="admin"){
       // Admin is only the trip-money holder. Money received increases cash held;
       // money paid out (to a person or toward an expense) decreases cash held.
       return {...x,received:t.received,paidOut:t.paidOut,net:t.received-t.paidOut-x.paid};
     }
     // For a family, every amount they actually pay is a contribution, whether
     // paid directly for an expense or transferred to another person. Money they
     // receive is subtracted because it settles money they were owed.
     const totalPaid=x.paid+t.paidOut;
     const net=totalPaid-x.share-t.received;
     return {...x,received:t.received,paidOut:t.paidOut,net,displayPaid:totalPaid};
   });
   const balanceRows=balances.filter(x=>x.id!=="admin").map(x=>{
     const status=x.net>0.005?`<span class="ok">Should receive</span>`:x.net<-0.005?`<span class="error">Needs to pay</span>`:`<span class="muted">Settled</span>`;
     return `<tr><td>${esc(x.name)}</td><td class="money">${money(x.displayPaid)}</td><td class="money">${money(x.share)}</td><td class="money">${money(Math.abs(x.net))}</td><td>${status}</td></tr>`;
   }).join("");
   const adminBalance=balances.find(x=>x.id==="admin")||{net:0};
   const adminCash=adminBalance.net;

   tr.innerHTML=`<div class="grid"><div class="card"><h3>${esc(heading)}</h3><div class="money">${money(share)}</div><div class="muted">${esc(explanation)}</div></div><div class="card"><h3>Expenses shown</h3><div class="money">${a.length}</div></div><div class="card"><h3>Expense type</h3><div class="money" style="font-size:1.25rem">${selectedType==="all"?"All":esc(selectedType)}</div></div></div>
   <div class="card"><h2>Expense List</h2><div class="table-wrap"><table><thead><tr><th>Date</th><th>Time</th><th>Place</th><th>Type</th><th>Item</th><th>Total Amount</th>${selectedFamily!=="all"?"<th>Family Share</th>":""}<th>Families involved</th><th>Paid by</th></tr></thead><tbody>${a.map(e=>`<tr><td>${esc(e.date)}</td><td>${esc(e.time)||"—"}</td><td>${esc(e.place)}</td><td>${esc(e.category)}</td><td>${esc(e.item)||"—"}</td><td class="money">${money(e.amount)}</td>${selectedFamily!=="all"?`<td class="money">${money(familyShare(e,selectedFamily))}</td>`:""}<td>${(e.families||[]).map(x=>esc(FN[x]||x)).join(", ")}</td><td>${esc(personName(e.paid_by))||"—"}</td></tr>`).join("")||`<tr><td colspan="${selectedFamily!=="all"?9:8}">No matching expenses have been added yet.</td></tr>`}</tbody></table></div></div>
   <div class="card"><h2>Balance Sheet</h2><p class="muted">For each family, Paid includes money they paid directly for trip expenses plus money they transferred to another person. Net Amount = Paid − Expense Share − money received. Positive means they should receive money; negative means they need to pay the net amount.</p><div class="table-wrap"><table><thead><tr><th>Person</th><th>Paid</th><th>Expense Share</th><th>Net Amount</th><th>Status</th></tr></thead><tbody>${balanceRows}</tbody></table></div></div>
   <div class="card" style="border:2px solid var(--gold);background:linear-gradient(135deg,#fffaf0,#ffffff);"><h2 style="margin-bottom:6px">Admin — Trip Money</h2><p class="muted" style="margin-top:0">Admin is not a family and is not included in the balance sheet. This is the amount of trip money currently with Admin.</p><div class="money" style="font-size:2rem">${money(Math.max(0,adminCash))}</div>${adminCash< -0.005?`<div class="error" style="margin-top:8px">Admin has paid ${money(Math.abs(adminCash))} more than the money received.</div>`:""}</div>
   <div class="card"><h2>Recorded Payments</h2><div class="table-wrap"><table><thead><tr><th>Person paying</th><th>Person receiving</th><th>Amount</th></tr></thead><tbody>${(payments||[]).map(p=>`<tr><td>${esc(FN[p.from_person]||p.from_person)}</td><td>${esc(FN[p.to_person]||p.to_person)}</td><td class="money">${money(p.amount)}</td></tr>`).join("")||`<tr><td colspan="3" class="muted">No payments recorded yet.</td></tr>`}</tbody></table></div></div>`;
 }
 tf.onchange=render;tt.onchange=render;await render();
 if(client){client.channel("trip-expenses").on("postgres_changes",{event:"*",schema:"public",table:"expenses"},render).on("postgres_changes",{event:"*",schema:"public",table:"payments"},render).subscribe();}
}
async function admin(){
 page("admin",`<section class="card login"><div class="eyebrow">PRIVATE AREA</div><h1>Admin</h1><div id="adminRoot"><div class="muted">Loading...</div></div></section>`,"Admin");
 const client=ensureSupabase();
 if(!client){adminRoot.innerHTML=setupBanner();return}
 const {data:{session}}=await client.auth.getSession();
 if(!session){
   adminRoot.innerHTML=`<form id="lf" class="login-form"><label>Email<input id="u" type="email" required placeholder="Your Supabase admin email"></label><label>Password<input id="p" type="password" required></label><button class="btn gold">Login</button><div id="err" class="error"></div><p class="muted">Create the admin user once in Supabase Dashboard → Authentication → Users.</p></form>`;
   lf.onsubmit=async e=>{e.preventDefault();err.textContent="Signing in...";const {error}=await client.auth.signInWithPassword({email:u.value.trim(),password:p.value});err.textContent=error?error.message:"Signed in. Loading...";if(!error) admin()};
   return;
 }
 const email=session.user.email||"Admin";
 document.querySelector(".login").outerHTML=`<div><section style="display:flex;justify-content:space-between;align-items:end;gap:12px"><div><div class="eyebrow">ADMIN</div><h1>Manage Expenses</h1><p>Signed in as ${esc(email)}</p></div><button id="logout" class="btn">Log out</button></section><section class="card"><h2>Current Admin Expenses</h2><div id="list" class="admin-list"><div class="muted">Loading...</div></div></section><section class="card"><h2>Add New Expense</h2><form id="af" class="form"><label>Date<input id="d" type="date" required></label><label>Time<input id="ti" type="time"></label><label>Place<input id="pl" required></label><label>Expense type<select id="c"><option value="Food">Food</option><option value="Other Items">Other Items</option></select></label><label id="itemWrap" style="display:none">What item?<input id="item" placeholder="Enter item name"></label><label>Amount (₹)<input id="am" type="number" min="0" step=".01" required></label><label>Paid by<select id="pb"><option value="">-- Select payer --</option>${F.map(f=>`<option value="${f.name}">${f.name}</option>`).join("")}<option value="Admin">Admin</option></select></label><div class="full"><div>Families involved</div><div class="checks">${F.map(f=>`<label class="check"><input type="checkbox" value="${f.id}"> ${f.name} (${f.members})</label>`).join("")}</div></div><div class="full"><button class="btn gold">Save Expense</button> <span id="ok" class="ok"></span></div></form></section><section class="card"><h2>Record Payment Between Families</h2><p class="muted">Use this when one family or Admin pays money directly to another. The payment will automatically adjust the Trip Expenses balance sheet.</p><form id="payf" class="form"><label>Person paying<select id="payFrom" required><option value="">-- Select --</option>${F.map(f=>`<option value="${f.id}">${f.name}</option>`).join("")}<option value="admin">Admin</option></select></label><label>Person receiving<select id="payTo" required><option value="">-- Select --</option>${F.map(f=>`<option value="${f.id}">${f.name}</option>`).join("")}<option value="admin">Admin</option></select></label><label>Amount (₹)<input id="payAmount" type="number" min="0.01" step=".01" required placeholder="Enter amount"></label><div class="full"><button type="submit" class="btn gold">Record Payment</button> <span id="payOk" class="ok"></span></div></form></section><section class="card"><h2>Recorded Payments</h2><p class="muted">Delete a payment here if it was entered by mistake. Deleting it will automatically remove its effect from the Trip Expenses balance sheet.</p><div id="paymentList" class="admin-list"><div class="muted">Loading payments...</div></div></section><section class="card notice"><b>Shared database:</b> saved expenses are stored online in Supabase and can be viewed from other devices using the same website.</section></div>`;
 async function render(){
 const {data,error}=await client.from("expenses").select("id,date,time,place,category,item,amount,families,paid_by").order("date",{ascending:false}).order("time",{ascending:false});
 if(error){list.innerHTML=`<div class="error">${esc(error.message)}</div>`;}else{
   list.innerHTML=(data||[]).map(e=>`<div class="admin-row"><div><b>${esc(e.date)}${e.time?" · "+esc(e.time):""} · ${esc(e.place)}</b><br><span class="muted">${esc(e.category)}${e.item?" · "+esc(e.item):""} · ${money(e.amount)} · ${(e.families||[]).map(x=>esc(FN[x]||x)).join(", ")}${e.paid_by?" · Paid by "+esc(personName(e.paid_by)):""}</span></div><button class="btn danger expense-delete" data-id="${e.id}">Delete</button></div>`).join("")||"<div class='muted'>No Admin expenses yet.</div>";
   document.querySelectorAll(".expense-delete").forEach(b=>b.onclick=async()=>{if(!confirm("Delete this expense?"))return;const {error}=await client.from("expenses").delete().eq("id",b.dataset.id);if(error)alert(error.message);else render()});
 }
 const {data:payments,paymentError}=await client.from("payments").select("id,from_person,to_person,amount,created_at").order("created_at",{ascending:false});
 if(paymentError){paymentList.innerHTML=`<div class="error">${esc(paymentError.message)}</div>`;return;}
 paymentList.innerHTML=(payments||[]).map(p=>`<div class="admin-row"><div><b>${esc(FN[p.from_person]||personName(p.from_person))} → ${esc(FN[p.to_person]||personName(p.to_person))}</b><br><span class="muted">${money(p.amount)}${p.created_at?" · "+esc(new Date(p.created_at).toLocaleString("en-IN")):""}</span></div><button class="btn danger payment-delete" data-payment-id="${p.id}">Delete</button></div>`).join("")||"<div class='muted'>No payments recorded yet.</div>";
 document.querySelectorAll(".payment-delete").forEach(b=>b.onclick=async()=>{if(!confirm("Delete this recorded payment? Its effect will be removed from the balance sheet."))return;const {error}=await client.from("payments").delete().eq("id",b.dataset.paymentId);if(error)alert("Could not delete payment: "+error.message);else render()});
}
 await render();
 logout.onclick=async()=>{await client.auth.signOut();location.reload()};
 const dateEl=document.getElementById("d"),timeEl=document.getElementById("ti"),placeEl=document.getElementById("pl"),catEl=document.getElementById("c"),itemEl=document.getElementById("item"),amountEl=document.getElementById("am"),paidByEl=document.getElementById("pb"),itemWrap=document.getElementById("itemWrap");
 catEl.onchange=()=>{itemWrap.style.display=catEl.value==="Other Items"?"block":"none"; if(catEl.value!=="Other Items") itemEl.value=""};
 af.onsubmit=async e=>{
 e.preventDefault();
 const fam=[...document.querySelectorAll('.checks input[type="checkbox"]:checked')].map(x=>x.value).filter(Boolean);
 if(fam.length===0){alert("Select at least one family. You can select any number of families.");return}
 const amount=Number(amountEl.value);
 if(!Number.isFinite(amount)||amount<0){alert("Enter a valid amount.");return}
 ok.textContent=`Saving for ${fam.length} ${fam.length===1?"family":"families"}...`;
 const payload={date:dateEl.value,time:timeEl.value||null,place:placeEl.value.trim(),category:catEl.value,item:catEl.value==="Other Items"?(itemEl?.value.trim()||null):null,amount,families:fam,paid_by:paidByEl.value||null};
 const {error}=await client.from("expenses").insert([payload]);
 if(error){ok.textContent="";alert("Could not save expense: "+error.message);return}
 af.reset();ok.textContent="Saved successfully";await render();setTimeout(()=>ok.textContent="",1800)
};
 payf.onsubmit=async e=>{
   e.preventDefault();
   const from=payFrom.value,to=payTo.value,amount=Number(payAmount.value);
   if(!from||!to){alert("Select both people.");return}
   if(from===to){alert("Person paying and receiving must be different.");return}
   if(!Number.isFinite(amount)||amount<=0){alert("Enter a valid amount.");return}
   payOk.textContent="Saving...";
   const {error}=await client.from("payments").insert([{from_person:from,to_person:to,amount}]);
   if(error){payOk.textContent="";alert("Could not save payment: "+error.message);return}
   payf.reset();payOk.textContent="Payment recorded";setTimeout(()=>payOk.textContent="",1800);
 };
}

function gallery(){page("gallery",`<section class="page-hero"><div class="eyebrow">JAMMU · KATRA · VAISHNO DEVI</div><h1>Gallery</h1><p>Scenes from the pilgrimage, Katra and Jammu — temples, hills, forts and city views.</p></section><section class="gallery-grid"><figure class="gallery-item tall"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mata_Vaishno_Devi_Mandir,_Katra.jpg" alt="Mata Vaishno Devi Mandir, Katra"><figcaption><b>Vaishno Devi Mandir</b><span>Katra</span></figcaption></figure><figure class="gallery-item wide"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Katra_from_Vaishnodevi.jpg" alt="Katra from Vaishno Devi"><figcaption><b>Katra from the hills</b><span>Mountain panorama</span></figcaption></figure><figure class="gallery-item"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Vishno-Devi-Trikuta-Hills-from-Katra.jpg" alt="Trikuta Hills from Katra"><figcaption><b>Trikuta Hills</b><span>View from Katra</span></figcaption></figure><figure class="gallery-item"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Amar_Mahal_Palace,_Jammu.jpg" alt="Amar Mahal Palace Jammu"><figcaption><b>Amar Mahal Palace</b><span>Jammu</span></figcaption></figure><figure class="gallery-item"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Bahu_Fort_01.JPG" alt="Bahu Fort Jammu"><figcaption><b>Bahu Fort</b><span>Jammu</span></figcaption></figure><figure class="gallery-item wide"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/The_Temples_of_Raghunath,_Jammu,_India,_ca.1875-ca.1940_(imp-cswc-GB-237-CSWC47-LS10-011).jpg" alt="Raghunath Temples Jammu"><figcaption><b>Raghunath Temples</b><span>Historic Jammu</span></figcaption></figure></section><section class="card source-note"><b>Image sources:</b> Wikimedia Commons images are linked to their source pages; individual licenses/attribution requirements apply. The gallery includes CC-licensed and public-domain material.</section>`,"Gallery · Vaishno Devi Group Trip")}

function food(){const foods=[
{name:"Rajma Chawal",tag:"Jammu classic",desc:"Jammu's famous kidney-bean preparation served with rice.",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Rajma_Chawal_Rajma_Rice.jpg"},
{name:"Kaladi / Kalari Kulcha",tag:"Dogra speciality",desc:"Jammu's traditional Kaladi cheese, especially enjoyed hot with local bread or kulcha.",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Famous_Kalaadi_of_Ramnagar.jpg"},
{name:"Ambal",tag:"Dogri vegetarian",desc:"A traditional Dogri sweet-and-tangy vegetarian preparation. The image shows Ambal as part of a traditional Dogra meal.",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_dogra_food-jammu_and_kashmir-002.jpg"},
{name:"Kashmiri Aloo Dum",tag:"Classic vegetarian",desc:"A spiced potato dish associated with Jammu and Kashmir cuisine.",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dum_Aloo_Kashmiri_India.jpg"},
{name:"Patisa",tag:"Jammu sweet",desc:"A flaky traditional sweet associated with Jammu, including the well-known Kud Patisa.",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Kud_ka_patisa.jpg"},
{name:"Chocolate Barfi",tag:"Jammu sweet",desc:"Chocolate barfi, one of the sweets specifically associated with Jammu's food culture.",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_barfi.jpg"}
];page("food",`<section class="page-hero food-hero"><div class="eyebrow">EAT LIKE A LOCAL · VEGETARIAN</div><h1>Local Delicacies</h1><p>Vegetarian dishes and sweets to look out for during the Jammu and Katra trip.</p></section><section class="food-grid">${foods.map(x=>`<article class="food-card"><div class="food-photo"><img src="${x.img}" alt="${x.name}" loading="lazy"></div><div class="food-body"><span>${x.tag}</span><h3>${x.name}</h3><p>${x.desc}</p></div></article>`).join("")}</section><section class="card modern-card"><h2>Food note for Katra</h2><p>This page intentionally lists vegetarian delicacies only. Images are linked to the original Wikimedia Commons files rather than generic food photographs.</p><div class="food-links"><a href="https://www.incredibleindia.gov.in/en/jammu-and-kashmir/jammu" target="_blank" rel="noopener">Incredible India · Jammu cuisine ↗</a><a href="https://www.jktdc.co.in/info.aspx?id=137" target="_blank" rel="noopener">JKTDC · Cuisine of Jammu ↗</a></div></section>` ,"Local Delicacies · Jammu & Katra")}
function detailedTables(){
 page("detailed",`<section class="hero"><div><div class="eyebrow">SOURCE DOCUMENT</div><h1>Detailed Tables</h1><p>Ticket expenses, hotel expenses and total expenses reproduced from the supplied PDF. Values, spelling and blanks are preserved as shown in the PDF.</p></div></section>
<section class="card"><h2>Expenses on Ticket</h2><div class="table-wrap"><table class="source-table"><thead><tr><th>S No</th><th>Date</th><th>To</th><th>PNR</th><th>Number of members</th><th>ticket amount</th><th>tax</th><th>TOTAL Amount</th><th>Mr VKT</th><th>Mr V JHA</th><th>Mr Ratish</th><th>Mr Ajay</th><th>Mr Sambhu mishra</th><th>Paid by</th><th>Total</th></tr></thead><tbody>
<tr><td>1</td><td>25-Oct</td><td>bmki to anand vihar</td><td>6948705010</td><td>6</td><td>8246</td><td></td><td>8246</td><td>4123</td><td>4123</td><td></td><td></td><td></td><td>Mr vkt</td><td>8246</td></tr>
<tr><td>2</td><td>25-Oct</td><td>bmki to anand vihar</td><td>6208600793</td><td>4</td><td>5505</td><td></td><td>5505</td><td></td><td></td><td>2752</td><td>2752</td><td></td><td>Mr vkt</td><td>5504</td></tr>
<tr><td>3</td><td>25-Oct</td><td>bmki to anand vihar</td><td>6208598378</td><td>6</td><td>8246</td><td></td><td>8246</td><td></td><td>1375</td><td>1375</td><td></td><td>5500</td><td>Mr manish</td><td>8250</td></tr>
<tr><td>4</td><td>26-Oct</td><td>ndls to katra</td><td>2261919597</td><td>6</td><td>6416</td><td></td><td>6416</td><td></td><td></td><td>2139</td><td>2139</td><td>2139</td><td>Mr vkt</td><td>6417</td></tr>
<tr><td>5</td><td>26-Oct</td><td>ndls to katra</td><td></td><td></td><td>1069</td><td></td><td>1069</td><td>1069</td><td></td><td></td><td></td><td></td><td>Mr manish</td><td>1069</td></tr>
<tr><td>6</td><td>26-Oct</td><td>ndls to katra</td><td>2361918725</td><td>6</td><td>6416</td><td></td><td>6416</td><td>3208</td><td>3208</td><td></td><td></td><td></td><td>Mr vkt</td><td>6416</td></tr>
<tr><td>7</td><td>26-Oct</td><td>ndls to katra</td><td>2742610147</td><td>4</td><td>4285</td><td></td><td>4285</td><td></td><td>1071</td><td>1071</td><td></td><td>2142</td><td>Mr vkt</td><td>4284</td></tr>
<tr><td>8</td><td>29-Oct</td><td>jammu to dli</td><td>2624058734</td><td>6</td><td>6038</td><td>128.35</td><td>6166.35</td><td>3083</td><td>3083</td><td></td><td></td><td></td><td>Mr dr ratish</td><td>6166</td></tr>
<tr><td>9</td><td>29-Oct</td><td>jammu to dli</td><td>2262146990</td><td>6</td><td>6038</td><td>128.35</td><td>6166.35</td><td></td><td></td><td>2055</td><td>2055</td><td>2055</td><td>Mr dr ratish</td><td>6165</td></tr>
<tr><td>10</td><td>29-Oct</td><td>jammu to dli</td><td>2624058758</td><td>4</td><td>4037</td><td>85.95</td><td>4122.95</td><td></td><td>1030</td><td>1030</td><td></td><td>2061</td><td>Mr dr ratish</td><td>4121</td></tr>
<tr><td>11</td><td>30-Oct</td><td>dli to bmki</td><td>2162146056</td><td>6</td><td>9728</td><td>200.72</td><td>9928.72</td><td>4964</td><td>4964</td><td></td><td></td><td></td><td>Mr dr ratish</td><td>9928</td></tr>
<tr><td>12</td><td>30-Oct</td><td>dli to bmki</td><td>2842837633</td><td>4</td><td>6497</td><td>138.2</td><td>6635.2</td><td></td><td>1659</td><td>1659</td><td></td><td>3317</td><td>Mr dr ratish</td><td>6635</td></tr>
<tr><td>13</td><td>30-Oct</td><td>dli to bmki</td><td>2524058401</td><td>6</td><td>9728</td><td>206.72</td><td>9934.72</td><td></td><td></td><td>3311</td><td>3311</td><td>3311</td><td>Mr dr ratish</td><td>9933</td></tr>
<tr><td colspan="5">Total</td><td>82249</td><td></td><td>83137.29</td><td>16447</td><td>20513</td><td>15392</td><td>10257</td><td>20525</td><td>0</td><td>83134</td></tr>
</tbody></table></div></section>
<section class="card"><h2>Expenses on Hotel</h2><div class="table-wrap"><table class="source-table"><thead><tr><th>S. No.</th><th>Date</th><th>Place</th><th>Total Price</th><th>Members</th><th>Per person</th><th>Mr VKT</th><th>Mr V Jha</th><th>Mr Ratish</th><th>Mr Ajay</th><th>Sambhu Mishra</th><th>Mr Manish</th><th>Mr Mannu Jha</th><th>Paid by</th></tr></thead><tbody>
<tr><td>1</td><td>26 oct to<br>27 oct</td><td>Delhi</td><td>3647</td><td>9</td><td>405.222222</td><td></td><td></td><td>1215.6667</td><td>810.4444444444</td><td>1620.889</td><td></td><td></td><td>Mr Ratish</td></tr>
<tr><td>2</td><td>26 oct to<br>27 oct</td><td>Delhi</td><td>1564</td><td>4</td><td>391</td><td></td><td>1564</td><td></td><td></td><td></td><td></td><td></td><td>Mr Ratish</td></tr>
<tr><td>3</td><td>26 oct to<br>27 oct</td><td>Katra</td><td>1200</td><td>8</td><td>150</td><td>600</td><td>600</td><td></td><td></td><td></td><td></td><td></td><td>Mr VKT</td></tr>
<tr><td>4</td><td>26 oct to<br>27 oct</td><td>Katra</td><td>1200</td><td>9</td><td>150</td><td></td><td></td><td>300</td><td>300</td><td>600</td><td></td><td></td><td>Mr Ratish</td></tr>
<tr><td>5</td><td>28 oct to<br>29 oct</td><td>Katra</td><td>11346</td><td>25</td><td>454</td><td>1815</td><td>1815</td><td>1362</td><td>908</td><td>1815</td><td>1815</td><td>1815</td><td>Mr Ratish</td></tr>
<tr><td colspan="6">Total</td><td>2415.36</td><td>3979.36</td><td>2877.1867</td><td>2018.124444444</td><td>4036.249</td><td>1815.36</td><td>1815.36</td><td></td></tr>
</tbody></table></div></section>
<section class="card"><h2>Total Expenses</h2><div class="table-wrap"><table class="source-table"><thead><tr><th>Name</th><th>Exprenses on ticket</th><th>Exprenses on hotel</th><th>Total Expenses</th><th>Paid on ticket</th><th>Paid on hotel</th><th>Total Paid</th><th>Balance amount</th></tr></thead><tbody>
<tr><td>Mr Vkt</td><td>16447</td><td>2415.36</td><td>18862.36</td><td>30867</td><td>1200</td><td>32067</td><td>13204.64</td></tr>
<tr><td>Mr Ratish</td><td>15392</td><td>2877.187</td><td>18269.1867</td><td>42948</td><td>17757</td><td>60705</td><td>42435.81333333</td></tr>
<tr><td>Mr Ajay</td><td>10257</td><td>2018.124</td><td>12275.1244</td><td>0</td><td></td><td>0</td><td>-12275.1244444</td></tr>
<tr><td>Mr Sambhu mishra</td><td>20525</td><td>4036.249</td><td>24561.2489</td><td>0</td><td></td><td>0</td><td>-24561.2488889</td></tr>
<tr><td>Mr Manish</td><td></td><td>1815.36</td><td>1815.36</td><td>9319</td><td></td><td>9319</td><td>7503.64</td></tr>
<tr><td>Mr Vjha</td><td>20513</td><td>3979.36</td><td>24492.36</td><td>0</td><td></td><td>0</td><td>-24492.36</td></tr>
<tr><td>Mr Mannu Jha</td><td></td><td>1815.36</td><td>1815.36</td><td></td><td></td><td>0</td><td>-1815.36</td></tr>
<tr><td>Total</td><td>83134</td><td>18957</td><td>102091</td><td>83134</td><td>18957</td><td>102091</td><td>0</td></tr>
</tbody></table></div></section>
<section class="card"><h2>Who Pays Whom — How Much</h2><div class="table-wrap" style="margin-top:1rem"><table class="source-table"><thead><tr><th>Person paying</th><th>Person receiving</th><th>Amount</th></tr></thead><tbody>
<tr><td>Mr V Jha</td><td>Mr VKT</td><td>13204</td></tr>
<tr><td>Mr V Jha</td><td>Mr Manish</td><td>5688</td></tr>
<tr><td>Mr V Jha</td><td>Mr Ratish</td><td>5599</td></tr>
<tr><td>Mr Mannu Jha</td><td>Mr Manish</td><td>1815</td></tr>
<tr><td>Mr Sambhu mishra</td><td>Mr Ratish</td><td>24561</td></tr>
<tr><td>Mr Ajay</td><td>Mr Ratish</td><td>12275</td></tr>
</tbody></table></div></section>
`,`Detailed Tables`);
}

const path=location.pathname.split("/").pop()||"index.html";
if(path==="index.html")home();else if(path==="family-expenses.html")family();else if(path==="trip-expenses.html")trip();else if(path==="admin.html")admin();else if(path==="original-tables.html")detailedTables();else if(path==="gallery.html")gallery();else if(path==="local-delicacies.html")food();else home();
