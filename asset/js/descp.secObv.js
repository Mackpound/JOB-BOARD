const cards = document.querySelectorAll(".focus")
const relative = document.querySelector(".job-category-wrapper2")
const back = document.querySelector(".back")

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            relative.classList.add("relative")
            back.classList.add("relative")
        }else{
            relative.classList.remove("relative")
            back.classList.remove("relative")
        }
        // if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: 0,
})

cards.forEach(card =>{
    observer.observe(card)
})
