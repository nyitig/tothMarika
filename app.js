document.querySelector('.moveChar').innerHTML=document.querySelector('.moveChar').textContent.replace(/./g,'<span class="fontOther">$&</span>')
let spans =document.querySelectorAll('.moveChar span')
for (let i = 0; i < spans.length; i++) {
    let left=innerWidth * Math.random()
    let top=innerHeight * Math.random()
    if (Math.random() < 0.5) {
        spans[i].style.left="-"+left+"px"
    }else {
        spans[i].style.left=left+"px"
    }
    if (Math.random() < 0.5) {
        spans[i].style.top="-"+top+"px"
    }else {
        spans[i].style.top=top+"px"
    }
    
}
setTimeout(() => {
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.top=0
        spans[i].style.left=0
     }
}, 100);

// impressum show & hide
const impressumH6=document.getElementById('impressumH6')
const impressumSect=document.getElementById('impressumSect')
const impressumDivCont=document.getElementById('impressumDivCont')
const arrow=document.getElementById('arrow')
let num=0
impressumH6.addEventListener('click',()=> {
    switch (num) {
        case 0:
            num=1
            arrow.classList.toggle('active')
            impressumSect.classList.toggle('hide')
            setTimeout(() => {
                impressumDivCont.classList.toggle('active')
            }, 500);
            break;
        case 1:
            num=0
            arrow.classList.toggle('active')
            impressumDivCont.classList.toggle('active')
            setTimeout(() => {
                impressumSect.classList.toggle('hide')

            }, 1500);

        break;
        default:
            break;
    }

})