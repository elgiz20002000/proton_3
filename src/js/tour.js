import { btns } from "./btns.js";
btns()

$(window).load(function() {    
      $('.sp-wrap').smoothproducts();
    });

  
let descriptions_btns = document.querySelectorAll('.descriptions_btns .btn') ,
descriptions = document.querySelectorAll('.description_container .description')

descriptions_btns.forEach((item , index) => {
  item.addEventListener('click' , () => {
    descriptions_btns.forEach(item => item.classList.remove('active'))
    descriptions.forEach(item => item.classList.remove('active'))
    item.classList.add('active')
    descriptions[index].classList.add('active')
  })
})
    