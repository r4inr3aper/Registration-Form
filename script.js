const form = document.querySelector("form"),
        nextbtn = form.querySelector(".nextbtn"),
        backbtn = form.querySelector(".backbtn"),
        allInput= form.querySelectorAll(".first input");
        submit= form.querySelectorAll(".submit");

nextbtn.addEventListener("click", ()=>{
    allInput.forEach(input => {
        if(input. value != ""){
               form.classList.add('secActive');

        }
        else{
            form.classList.remove('secActive');
        }
    });``
})
backbtn.addEventListener("click", ()=> form.classList.remove('secActive'));
submit[0].addEventListener("click", ()=> alert("Form Submitted"));