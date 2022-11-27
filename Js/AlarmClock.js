
// // select && option
// const SelectMenu = document.querySelectorAll("select");
// const TimeBox= document.querySelector(".time");
// const SetAlertBtn= document.querySelector('button');
// let AlarmTime  ;
// const RingSton = new Audio('./file/ringtone.mp3')
// const Content= document.querySelector('.content');

// for (let i = 23 ; i >= 0; i--) {
//     i = i < 10 ? '0' + i : i;
//     let option = `<option value = "${i}"> ${i}</option>`;
//     SelectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);

// }
// for (let i = 59 ; i >= 0; i--) {
//     i = i < 10 ? '0' + i : i;
//     let option = `<option value = "${i}"> ${i}</option>`;
//     SelectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);

// }

// setInterval(() => {
//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();

// h = h < 10 ? '0'+ h : h ;
// m = m < 10 ? '0'+ m : m;
// s = s < 10 ? '0'+ s : s ;

//  TimeBox.innerHTML = `${h}:${m}:${s}`;
// if(AlarmTime == `${h} : ${m}`){

//     RingSton.play();
//     RingSton.loop() =true
// }
// }, 1000);


// SetAlertBtn.addEventListener('click', ()=>{

//     AlarmTime = `${SelectMenu[0].value} : ${SelectMenu[1].value}`
// if(AlarmTime.includes('hour') || AlarmTime.includes('minute')){
//     return alert('زمان رو درست وارد کنید');
// }
// // Content.classList.add('disable')
// // SetAlertBtn.innerText = 'clear alarm'
// });

// function checkstate(state){
// if( state == "noset"){
//     Content.classList.add('disable')
// SetAlertBtn.innerText = 'clear alarm'
// alarmstate == "set"
// }
// else{
//     Content.classList.remove('disable')
//     AlarmTime = ''
//     RingSton.pause()
//     alarmstate = 'noset'
// }
// }





const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const SetAlertBtn = document.querySelector('button');
let alarmTime ;
const ringone = new Audio('./file/ringtone.mp3')
 
for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}" >${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
  console.log(option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}" >${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
  console.log(option);
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s
  timeBox.innerHTML = `${h}:${m}:${s}`
  if(alarmTime == `${h}:${m}`) {
 ringone.play();
 ringone.loop = true;
  }
}, 1000);


SetAlertBtn.addEventListener('click' , ()=>{
  alarmTime = `${selectMenu[0].value} : ${selectMenu[1].value }`
 if(alarmTime.includes('Hour') || alarmTime.includes('minute')){
  return alert("دقیقه و ساعت  رو درس وارد نکردی")
 }
})
