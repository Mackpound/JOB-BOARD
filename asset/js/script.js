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


       // JavaScript for carousel functionality
        let currentIndex = 0;
        const track = document.getElementsByClassName('testimony-wrapper')[0];
        const items = document.querySelectorAll('.testimony-content');
        const carouselBtn = document.querySelectorAll(".carusel-hug span")
        const totalItems = items.length;

        function goToSlide(index) {
          currentIndex = index;
          updateActiveButton()
          updateCarousel();
        }
    
        function updateCarousel() {
          const newPosition = -currentIndex * 100 + '%';
          items.forEach(item => {
            item.style.transform = 'translateX(' + newPosition + ')';
          })
        }

        function updateActiveButton() {
            // Remove the "active" class from all buttons
            carouselBtn.forEach(button => button.classList.remove('active'));
            // Add the "active" class to the current button
            carouselBtn[currentIndex].classList.add('active');
          }
        

        // Automatically advance to the next slide every 1 second
        let activeCarusel = true;

        const indexInterval = () => {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
            updateActiveButton() 
        };
        
        
        
          function currentCarusel() {
              if(activeCarusel === false){
                  setInterval(indexInterval, 10000)
              }else{
                  setInterval(indexInterval, 6000)
              }
          }

          currentCarusel();
           
        
        // read more 
        // const testimonyParent;
        const testimonyText = document.querySelectorAll(".testimony")
        testimonyText.forEach(testimony => {
            let testimonyParent = testimony.parentElement;
            let readBtn = testimonyParent.querySelector(".read-all")

            if (testimony.scrollHeight > 100){
                readBtn.classList.add("active")
                testimony.classList.add("active")
            }else{
                testimony.classList.remove("active")
                readBtn.classList.remove("active")
            }

            readBtn.addEventListener("click", function(){
                testimony.classList.add("is-active")
                testimony.classList.remove("active")
                readBtn.textContent = "Read Less";
                readBtn.style.color = "#CCC";
                readBtn.classList.add("is-active");
                activeCarusel = false;
            })
            
            if(readBtn.classList.contains("is-active")){
                console.log(readBtn.innerHTML)
                readBtn.addEventListener("click", function(){
                    testimony.classList.add("active")
                    testimony.classList.remove("is-active")
                    readBtn.textContent == "Read more";
                })
            }
        })