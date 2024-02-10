 const selection = document.querySelectorAll(".select");
 const blur = document.querySelector(".blur")

 selection.forEach(select =>{
     select.addEventListener("click", () => {
        select.classList.toggle("active")
        blur.classList.toggle("showBlurness")
     })
 })

 function handleSelectChange(value) {
    const selectedOption = document.getElementById('selectedOption');
    // const sortList = document.getElementById('sort-list');
    // const options = sortList.getElementsByClassName('select-filter');
    

    // Update the selected option text
    switch (value) {
      case 1:
        selectedOption.textContent = 'Name';
        // Add your code logic for option "Name"
        break;
      case 2:
        selectedOption.textContent = 'Space';
        // Add your code logic for option "Space"
        break;
      case 3:
        selectedOption.textContent = 'Last Added';
        // Add your code logic for option "Last Added"
        break;
      default:
        selectedOption.textContent = 'None';
        // Add default logic if needed
    }
  }



  const filterClick = document.querySelector(".filter");
  const wrapper = document.querySelector(".job-category-wrapper");

  filterClick.addEventListener("click", function(){
    wrapper.classList.toggle("active")
    filterClick.classList.toggle("active")
  })


  