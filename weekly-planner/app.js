const days = [
  { id: 'sat', name: 'شنبه' }, { id: 'sun', name: 'یکشنبه' }, { id: 'mon', name: 'دوشنبه' },
  { id: 'tue', name: 'سه‌شنبه' }, { id: 'wed', name: 'چهارشنبه' }, { id: 'thu', name: 'پنجشنبه' }, { id: 'fri', name: 'جمعه' }
];
const starterEvents = [
  ['sa1','sat','بیداری','personal','06:30','06:45'], ['sa2','sat','باشگاه · جلسه اول','personal','06:45','08:00'], ['sa3','sat','صبحانه، دوش و رفت‌وآمد','personal','08:00','09:15'], ['sa4','sat','کار','work','09:30','14:00'], ['sa5','sat','ناهار','personal','14:00','14:30'], ['sa6','sat','جلسه کسب‌وکار و ایده‌پردازی با رفیق','personal','14:30','15:30'], ['sa7','sat','استراحت و آماده‌شدن برای کار','personal','15:30','16:30'], ['sa8','sat','کار','work','16:30','22:00'], ['sa9','sat','شام، استراحت و آماده‌شدن برای خواب','personal','22:00','23:30'],
  ['su1','sun','بیداری','personal','06:30','07:00'], ['su2','sun','صبحانه و آماده‌شدن','personal','07:00','07:45'], ['su3','sun','کار','work','08:00','12:00'], ['su4','sun','ناهار و رفت‌وآمد','personal','12:00','13:00'], ['su5','sun','فیزیک ۲','class','13:00','16:00'], ['su6','sun','دفاع مقدس','class','16:00','17:30'], ['su7','sun','رفت‌وآمد و استراحت','personal','17:30','19:00'], ['su8','sun','مرور درس‌های دانشگاه','personal','19:00','19:45'], ['su9','sun','جلسه آنلاین؛ ایده‌پردازی و سناریونویسی','personal','20:00','21:00'], ['su10','sun','زمان آزاد و آماده‌شدن برای خواب','personal','21:00','23:30'],
  ['mo1','mon','بیداری','personal','06:30','06:45'], ['mo2','mon','باشگاه · جلسه دوم','personal','06:45','08:00'], ['mo3','mon','صبحانه و دوش','personal','08:00','08:45'], ['mo4','mon','آموزش برنامه‌نویسی','personal','09:00','10:00'], ['mo5','mon','رفت‌وآمد و آماده‌شدن','personal','10:00','11:00'], ['mo6','mon','اندیشه امامین انقلاب','class','11:00','12:30'], ['mo7','mon','استراحت','personal','12:30','13:00'], ['mo8','mon','ریاضی عمومی ۱','class','13:00','16:00'], ['mo9','mon','رفت‌وآمد و غذا','personal','16:00','17:00'], ['mo10','mon','کار','work','17:00','22:00'], ['mo11','mon','شام و استراحت','personal','22:00','23:30'],
  ['tu1','tue','بیداری','personal','06:30','07:00'], ['tu2','tue','صبحانه و رفت‌وآمد','personal','07:00','08:00'], ['tu3','tue','ریاضی عمومی ۲','class','08:00','11:00'], ['tu4','tue','استراحت','personal','11:00','11:30'], ['tu5','tue','تمرین هوش مصنوعی و خلق کاراکتر','personal','11:30','12:30'], ['tu6','tue','ناهار','personal','12:30','13:15'], ['tu7','tue','تمرین و حل مسائل دانشگاه','personal','13:15','14:15'], ['tu8','tue','استراحت و رفت‌وآمد','personal','14:15','15:30'], ['tu9','tue','مبانی کامپیوتر و برنامه‌سازی','class','15:30','18:00'], ['tu10','tue','رفت‌وآمد و شام','personal','18:00','19:00'], ['tu11','tue','کار','work','19:00','22:00'], ['tu12','tue','استراحت و آماده‌شدن برای خواب','personal','22:00','23:30'],
  ['we1','wed','بیداری','personal','06:30','06:45'], ['we2','wed','باشگاه · جلسه سوم','personal','06:45','08:00'], ['we3','wed','صبحانه و آماده‌شدن','personal','08:00','09:15'], ['we4','wed','کار','work','09:30','14:00'], ['we5','wed','ناهار','personal','14:00','14:30'], ['we6','wed','ساخت ویدئو و تولید محتوای هوش مصنوعی با رفیق','personal','14:30','16:00'], ['we7','wed','آماده‌شدن و رفت‌وآمد','personal','16:00','16:30'], ['we8','wed','کار','work','16:30','22:00'], ['we9','wed','شام و استراحت','personal','22:00','23:30'],
  ['th1','thu','بیداری','personal','06:30','06:45'], ['th2','thu','باشگاه · جلسه چهارم','personal','06:45','08:00'], ['th3','thu','صبحانه و دوش','personal','08:00','08:45'], ['th4','thu','آموزش دیجیتال مارکتینگ','personal','08:45','10:00'], ['th5','thu','رفت‌وآمد و آماده‌شدن','personal','10:00','11:00'], ['th6','thu','اندیشه اسلامی ۱','class','11:00','12:30'], ['th7','thu','استراحت','personal','12:30','13:00'], ['th8','thu','زبان انگلیسی عمومی','class','13:00','13:59'], ['th9','thu','استراحت','personal','14:00','14:30'], ['th10','thu','آشنایی با صنعت کامپیوتر','class','14:30','16:00'], ['th11','thu','رفت‌وآمد و غذا','personal','16:00','17:00'], ['th12','thu','کار','work','17:00','22:00'], ['th13','thu','استراحت و آماده‌شدن برای خواب','personal','22:00','23:30'],
  ['fr1','fri','بیداری و صبحانه','personal','06:30','07:30'], ['fr2','fri','پروژه تولید محتوا با رفیق','personal','08:00','10:00'], ['fr3','fri','استراحت کوتاه','personal','10:00','10:30'], ['fr4','fri','آموزش و تمرین تتو','personal','10:30','12:00'], ['fr5','fri','ناهار و استراحت','personal','12:00','13:00'], ['fr6','fri','مرور دانشگاه و تکالیف','personal','13:00','14:00'], ['fr7','fri','بازه شناور: شیفت احتمالی، تفریح یا تکمیل پروژه','personal','14:00','23:30']
].map(([id,day,title,type,start,end])=>({id,day,title,type,start,end,done:false}));
const storageKey = 'ritm.week.v3';
let events = loadEvents();
let dailyTasks = loadTasks();
let selectedDay = days[(new Date().getDay()+1)%7].id;
const grid = document.querySelector('#weekGrid');
const dialog = document.querySelector('#eventDialog');
const form = document.querySelector('#eventForm');
const typeNames = {class:'دانشگاه',work:'کار',personal:'شخصی'};
const dayStartHour = 0;
const dayEndHour = 24;
const hourHeight = 34;
const faDigits = value => String(value).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const timeToMinutes = time => { const [h,m] = time.split(':').map(Number); return h*60+m; };
function loadEvents(){ try { const saved=localStorage.getItem(storageKey); return saved ? JSON.parse(saved) : starterEvents.map(x=>({...x})); } catch { return starterEvents.map(x=>({...x})); } }
function save(){ localStorage.setItem(storageKey, JSON.stringify(events)); }
function loadTasks(){ try { return JSON.parse(localStorage.getItem('ritm.daily-tasks.v1')||'{}'); } catch { return {}; } }
function saveTasks(){ localStorage.setItem('ritm.daily-tasks.v1', JSON.stringify(dailyTasks)); }
function overlaps(a,b){ return a.id!==b.id && a.day===b.day && timeToMinutes(a.start)<timeToMinutes(b.end) && timeToMinutes(b.start)<timeToMinutes(a.end); }
function render(){
  const todayIndex=(new Date().getDay()+1)%7;
  grid.dataset.selectedDay=selectedDay;
  grid.innerHTML=`<div class="timeline-head"><div class="time-head">ساعت</div>${days.map((day,index)=>`<button class="day-header ${index===todayIndex?'is-today':''} ${day.id===selectedDay?'is-selected':''}" data-day="${day.id}" type="button"><strong>${day.name}</strong><small>${day.id==='fri'?'شیفت متغیر · ':''}${index===todayIndex?'امروز · ':''}${faDigits(events.filter(e=>e.day===day.id).length)} برنامه</small></button>`).join('')}</div><div class="timeline-body"><div class="time-labels">${Array.from({length:dayEndHour-dayStartHour},(_,i)=>`<span>${faDigits(String(dayStartHour+i).padStart(2,'0'))}:۰۰</span>`).join('')}<span class="time-end-label">${faDigits(String(dayEndHour).padStart(2,'0'))}:۰۰</span></div><div class="day-tracks">${days.map(day=>{
    const items=events.filter(e=>e.day===day.id).sort((a,b)=>a.start.localeCompare(b.start));
    return `<div class="day-track ${day.id===selectedDay?'is-selected':''}" data-day-track="${day.id}">${items.map(e=>{const conflict=items.some(other=>overlaps(e,other));const otherOverlap=items.find(other=>other.id!==e.id&&overlaps(e,other));const lane=otherOverlap&&e.start>otherOverlap.start?1:0;const top=Math.max(0,(timeToMinutes(e.start)-dayStartHour*60)*hourHeight/60);const duration=timeToMinutes(e.end)-timeToMinutes(e.start);const height=Math.max(8,duration*hourHeight/60-1);const brief=duration<30;return `<button class="event ${e.type} timeline-event ${e.done?'done':''} ${brief?'brief':''} ${conflict?'conflict':''} ${conflict?'lane-'+lane:''}" data-id="${e.id}" title="${escapeHtml(e.title)} · ${e.start}–${e.end}" style="top:${top}px;height:${height}px" aria-label="${escapeHtml(e.title)}، ${faDigits(e.start)} تا ${faDigits(e.end)}${conflict?'، دارای تداخل':''}">${conflict?'<span class="conflict-mark" title="تداخل زمانی">!</span>':''}<span class="event-title">${escapeHtml(e.title)}</span><span class="event-time">${faDigits(e.start)} – ${faDigits(e.end)}</span></button>`}).join('')}</div>`;
  }).join('')}</div></div>`;
  grid.querySelectorAll('.event').forEach(button=>button.addEventListener('click',()=>openEditor(button.dataset.id)));
  grid.querySelectorAll('.day-header[data-day]').forEach(header=>header.addEventListener('click',()=>selectDay(header.dataset.day)));
  document.querySelector('#eventCount').textContent=faDigits(events.length);
  document.querySelector('#classCount').textContent=faDigits(events.filter(e=>e.type==='class').length);
  document.querySelector('#workCount').textContent=faDigits(events.filter(e=>e.type==='work').length);
  document.querySelector('#freeCount').textContent=faDigits(days.filter(d=>!events.some(e=>e.day===d.id&&e.type==='class')).length);
  renderDaily();
  renderMobileAgenda();
}
function selectDay(day){selectedDay=day;render();document.querySelector('#dailyTitle').scrollIntoView({behavior:'smooth',block:'center'});}
function renderDaily(){
  document.querySelector('#dayPicker').innerHTML=days.map(day=>`<button type="button" class="day-choice ${day.id===selectedDay?'active':''}" data-day="${day.id}">${day.name}</button>`).join('');
  document.querySelectorAll('.day-choice').forEach(button=>button.addEventListener('click',()=>{selectedDay=button.dataset.day;render();}));
  const dayName=days.find(day=>day.id===selectedDay)?.name||'امروز';
  document.querySelector('#selectedDayName').textContent=dayName;
  const scheduled=events.filter(e=>e.day===selectedDay).map(e=>({...e,isScheduled:true,displayTime:`${e.start}–${e.end}`}));
  const list=[...scheduled,...(dailyTasks[selectedDay]||[])];
  const done=list.filter(task=>task.done).length;
  const percent=list.length?Math.round(done/list.length*100):0;
  document.querySelector('#progressText').textContent=`${faDigits(percent)}٪`;
  document.querySelector('#taskCountText').textContent=`${faDigits(done)} از ${faDigits(list.length)} کار`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow',String(percent));
  document.querySelector('#progressFill').style.width=`${percent}%`;
  document.querySelector('#taskList').innerHTML=list.map(task=>`<div class="task-row ${task.done?'done':''} ${task.isScheduled?'scheduled-task':''}"><input class="task-check" type="checkbox" ${task.isScheduled?`data-event-task="${task.id}"`:`data-task="${task.id}"`} ${task.done?'checked':''} aria-label="انجام شد: ${escapeHtml(task.title)}"><span class="task-name">${escapeHtml(task.title)}</span>${task.displayTime?`<span class="task-time">${faDigits(task.displayTime)}</span>`:task.time?`<span class="task-time">${faDigits(task.time)}</span>`:''}${task.isScheduled?'':`<button type="button" class="task-delete" data-delete-task="${task.id}" aria-label="حذف ${escapeHtml(task.title)}">×</button>`}</div>`).join('');
  document.querySelector('#dailyEmpty').style.display=list.length?'none':'block';
  document.querySelectorAll('.task-check[data-task]').forEach(input=>input.addEventListener('change',()=>{const task=list.find(item=>item.id===input.dataset.task);if(task){task.done=input.checked;saveTasks();renderDaily();}}));
  document.querySelectorAll('.task-check[data-event-task]').forEach(input=>input.addEventListener('change',()=>{const event=events.find(item=>item.id===input.dataset.eventTask);if(event){event.done=input.checked;save();renderDaily();renderMobileAgenda();}}));
  document.querySelectorAll('.task-delete').forEach(button=>button.addEventListener('click',()=>{dailyTasks[selectedDay]=(dailyTasks[selectedDay]||[]).filter(task=>task.id!==button.dataset.deleteTask);saveTasks();renderDaily();}));
}
function renderMobileAgenda(){
  document.querySelector('#mobileDaySwitch').innerHTML=days.map(day=>`<button type="button" class="mobile-day ${day.id===selectedDay?'active':''}" data-mobile-day="${day.id}">${day.name}</button>`).join('');
  document.querySelectorAll('.mobile-day').forEach(button=>button.addEventListener('click',()=>{selectedDay=button.dataset.mobileDay;render();}));
  const dayEvents=events.filter(event=>event.day===selectedDay).sort((a,b)=>a.start.localeCompare(b.start));
  document.querySelector('#mobileAgenda').innerHTML=dayEvents.length?dayEvents.map(event=>`<div class="mobile-agenda-row ${event.type} ${event.done?'done':''}"><input class="mobile-agenda-check" type="checkbox" data-mobile-check="${event.id}" ${event.done?'checked':''} aria-label="انجام شد: ${escapeHtml(event.title)}"><span class="mobile-agenda-time">${faDigits(event.start)}<small>${faDigits(event.end)}</small></span><span class="mobile-agenda-copy"><strong>${escapeHtml(event.title)}</strong><small>${event.type==='class'?'دانشگاه':event.type==='work'?'کار':'برنامه شخصی'}</small></span><button class="mobile-agenda-edit" type="button" data-mobile-event="${event.id}" aria-label="ویرایش">ویرایش</button></div>`).join(''):'<div class="mobile-agenda-empty">برای این روز هنوز فعالیتی ثبت نشده.</div>';
  document.querySelectorAll('.mobile-agenda-edit').forEach(button=>button.addEventListener('click',()=>openEditor(button.dataset.mobileEvent)));
  document.querySelectorAll('.mobile-agenda-check').forEach(input=>input.addEventListener('change',()=>{const event=events.find(item=>item.id===input.dataset.mobileCheck);if(event){event.done=input.checked;save();render();}}));
}
function escapeHtml(text){return text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function fillDays(){document.querySelector('#dayInput').innerHTML=days.map(d=>`<option value="${d.id}">${d.name}</option>`).join('');}
function openEditor(id){const event=events.find(e=>e.id===id);form.reset();document.querySelector('#eventId').value=event?.id||'';document.querySelector('#dialogTitle').textContent=event?'ویرایش فعالیت':'فعالیت جدید';document.querySelector('#titleInput').value=event?.title||'';document.querySelector('#dayInput').value=event?.day||selectedDay;document.querySelector('#typeInput').value=event?.type||'personal';document.querySelector('#startInput').value=event?.start||'09:00';document.querySelector('#endInput').value=event?.end||'10:00';document.querySelector('#deleteButton').hidden=!event;dialog.showModal();}
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2200);}
function scrollToday(){const today=(new Date().getDay()+1)%7;selectDay(days[today].id);}
fillDays();render();
document.querySelector('#taskForm').addEventListener('submit',event=>{event.preventDefault();const input=document.querySelector('#taskInput');const title=input.value.trim();if(!title)return;dailyTasks[selectedDay]??=[];dailyTasks[selectedDay].push({id:crypto.randomUUID(),title,time:document.querySelector('#taskTimeInput').value,done:false});saveTasks();input.value='';document.querySelector('#taskTimeInput').value='';renderDaily();input.focus();});
document.querySelector('#addButton').addEventListener('click',()=>openEditor());
document.querySelector('#todayButton').addEventListener('click',scrollToday);
document.querySelector('#todayNav').addEventListener('click',scrollToday);
document.querySelector('#deleteButton').addEventListener('click',()=>{const id=document.querySelector('#eventId').value;if(id){events=events.filter(e=>e.id!==id);save();render();dialog.close();toast('فعالیت حذف شد');}});
form.addEventListener('submit',event=>{event.preventDefault();const id=document.querySelector('#eventId').value;const start=document.querySelector('#startInput').value;const end=document.querySelector('#endInput').value;if(timeToMinutes(end)<=timeToMinutes(start)){toast('زمان پایان باید بعد از زمان شروع باشد');return;}const existing=events.find(e=>e.id===id);const data={id:id||crypto.randomUUID(),title:document.querySelector('#titleInput').value.trim(),day:document.querySelector('#dayInput').value,type:document.querySelector('#typeInput').value,start,end,done:existing?.done||false};if(!data.title)return;events=id?events.map(e=>e.id===id?data:e):[...events,data];save();render();dialog.close();toast('برنامه ذخیره شد');});

