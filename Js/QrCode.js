const generateBtn = document.querySelector('form button');
const qrCodeBox = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage = document.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
let qrvalue = qrInput.value ;
if(!qrvalue){
    return alert("please enter text our passeworld")
}
generateBtn.innerHTML = "در حال تولید کیو آر کد"
qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
qrImage.addEventListener('load', ()=>{
    qrCodeBox.classList.remove('hidden')
    generateBtn.innerHTML = "تولید شد"
    qrInput.addEventListener('keyup',() => {
        if(!qrInput.value){
            qrCodeBox.classList.add('hidden');
        }
    })
})
})




// generateBtn.addEventListener('click',() => {
//     let qrvalu = qrInput.value;
//     if(!qrvalu){
//         return alert("please enter text our passeworld")
//     }
//     generateBtn.innerHTML= " در حال دریافت کیو آر کد"
//     qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalu}`
//     qrImage.addEventListener('load' , () => {
//         qrCodeBox.classList.remove('hidden')
//         generateBtn.innerHTML= "تولید شد"
//         qrInput.addEventListener('keyup', () =>{
//             if(!qrInput.value){
//                 qrCodeBox.classList.add('hidden');
//             }
//         })
//     })
// })
// goqr.me 