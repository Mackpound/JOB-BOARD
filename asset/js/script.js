'use strict';

var buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.onclick = function(){
            button.classList.toggle('isClicked');
        }
    })


// const jobBoxContent = document.getElementsByClassName("job-box-content")[0]
const jobNames = document.querySelectorAll(".job-name")
const jobView = document.querySelectorAll("#job-view")

for (let i = 0; i < jobNames.length; i++){
    const jobName = jobNames[i];


    jobName.addEventListener("mouseover", () =>{
        if(jobName.innerText.value <= 15){
           return true;
        }else{
            const jobParent = jobName.parentElement;
            const popName = jobParent.getElementsByClassName("job-view")[0]
            popName.classList.add("active")
            popName.textContent = jobName.textContent;
            setTimeout(() =>{
                popName.classList.remove("active")
            }, 1700)
        }
    })
}

const applyBtn = document.querySelectorAll(".job-apply-btn > button")
      applyBtn.forEach(btn => {
        btn.addEventListener("click", function(){
            btn.innerHTML = `<span style="white-space:nowrap;"><i class="fa fa-check"></i>&nbsp;Applied</span> `
        })
      })