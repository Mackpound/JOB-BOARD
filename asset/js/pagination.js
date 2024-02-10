const pagination = document.querySelector('#pagination');
const gallery = document.getElementById('gallery');
// type
const fullTimeCheckbox = document.getElementById('inRadioOption1');
const partTimeCheckbox = document.getElementById('inRadioOption2');
const remoteCheckbox = document.getElementById('inRadioOption3');
const freelanceCheckbox = document.getElementById('inRadioOption4');
// Experience
const OneYearCheck = document.getElementById('exampleRadio1');
const twoYearCheck = document.getElementById('exampleRadio2');
const fourYearCheck = document.getElementById('exampleRadio3');
const tenYearCheck = document.getElementById('exampleRadio4');
// posted within
const anyCheck = document.getElementById('inlineRadio1');
const twoDaysCheck = document.getElementById('inlineRadio2');
const fourDaysCheck = document.getElementById('inlineRadio3');
const oneweekCheck = document.getElementById('inlineRadio4');
// range
const salaryRangeInput = document.querySelector('.salaryRange');
const minSalaryValueSpan = document.getElementById('minSalaryValue');
const maxSalaryValueSpan = document.getElementById('maxSalaryValue');

// Add the class "job-box-wraper" to the gallery element
gallery.classList.add("job-box-wraper");

const jobBoxes = [
    {
        className: "custom-class1",
        jobName: "Software Engineer",
        location: "Lagos",
        jobType: "Part-Time",
        salary: "$40",
        jobYear: "2 - 4years",
        jobPosted: "Any",
        logoSrc: "../../asset/images/logo-banners/GTbank.png"
    },
    {
        className: "custom-class2",
        jobName: "Data Analyst",
        location: "Lagos",
        jobType: "Part-Time",
        salary: "$50",
        jobYear: "1 - 2years",
        jobPosted: "4-days",
        logoSrc: "../../asset/images/logo-banners/upwork.png"
    },
    {
        className: "custom-class2",
        jobName: "Project Manager",
        location: "Abuja",
        jobType: "Remote",
        salary: "$40",
        jobYear: "4-10years",
        jobPosted: "2-days",
        logoSrc: "../../asset/images/logo-banners/microsoft.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos",
        jobType: "FreeLance",
        salary: "$18",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos",
        jobType: "Remote",
        salary: "$20",
        jobYear: "2-4years",
        jobPosted: "Any",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
    {
        className: "custom-class2",
        jobName: "Graduate Trainee",
        location: "Dubai",
        jobType: "Full-Time",
        salary: "$28",
        jobYear: "1-2years",
        jobPosted: "2-days",
        logoSrc: "../../asset/images/logo-banners/access.png"
    },
    {
        className: "custom-class2",
        jobName: "Kitchen Assistance",
        location: "Abuja",
        jobType: "Freelance",
        salary: "$30",
        jobYear: "1-2years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/chicken-rep.png"
    },
    {
        className: "custom-class2",
        jobName: "Project Manager",
        location: "Abuja",
        jobType: "Part-Time",
        salary: "$50",
        jobYear: "10-20years",
        jobPosted: "4-days",
        logoSrc: "../../asset/images/logo-banners/microsoft.png"
    },
    {
        className: "custom-class2",
        jobName: "Kitchen Assistance",
        location: "Lagos",
        jobType: "Full-Time",
        salary: "$60",
        jobYear: "2-4years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/chicken-rep.png"
    },
    {
        className: "custom-class2",
        jobName: "Kitchen Assistance",
        location: "Lagos",
        jobType: "Part-Time",
        salary: "$48",
        jobYear: "4-10years",
        jobPosted: "Any",
        logoSrc: "../../asset/images/logo-banners/GTBank.png"
    },
    {
        className: "custom-class2",
        jobName: "Software Engineer",
        location: "Lagos",
        jobType: "Part-Time",
        salary: "$78",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/chicken-rep.png"
    },
    {
        className: "custom-class2",
        jobName: "Project Manager",
        location: "Lagos",
        jobType: "Remote",
        salary: "$98",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/microsoft.png"
    },
   
];

const itemsPerPage = 7; // Number of job boxes per page
let currentPage = 1;

function renderPagination() {
    pagination.querySelector('.pagination-list').innerHTML = '';

    pagination.addEventListener('click', function (e) {
        if (e.target.classList.contains('leftBtn')) {
            if (currentPage > 1) {
                currentPage--;
                renderPagination();
                renderGallery();
            }
        } else if (e.target.classList.contains('rightBtn')) {
            if (currentPage < totalPages()) {
                currentPage++;
                renderPagination();
                renderGallery();
            }
        } else if (e.target.tagName === 'LI') {
            const page = parseInt(e.target.innerText);
            if (page !== currentPage) {
                currentPage = page;
                renderPagination();
                renderGallery();
            }
        }
    });

    const paginationList = pagination.querySelector('.pagination-list');
    for (let i = 1; i <= totalPages(); i++) {
        const pageButton = document.createElement('li');
        pageButton.innerText = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        paginationList.appendChild(pageButton);
    }
}

function renderGallery() {
    gallery.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = Math.min(startIndex + itemsPerPage, jobBoxes.length);

    let filteredJobBoxes = jobBoxes;

    if (fullTimeCheckbox.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobType === "Full-Time");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (partTimeCheckbox.checked) { // Apply filter for part-time jobs
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobType === "Part-Time");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (remoteCheckbox.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobType === "Remote");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (freelanceCheckbox.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobType === "Freelance");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (OneYearCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobYear === "1-2years");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (twoYearCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobYear === "2-4years");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (fourYearCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobYear === "4-10years");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (tenYearCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobYear === "10-20years");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (anyCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobPosted === "Any");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (twoDaysCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobPosted === "2-days");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (fourDaysCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobPosted === "4-days");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    if (oneweekCheck.checked) {
        filteredJobBoxes = filteredJobBoxes.filter(job => job.jobPosted === "1-week");
        if (filteredJobBoxes.length === 0) {
            gallery.innerHTML = `<p class="gallery-error">This Job offer is unavailable.</p>`;
            return;
        }
    }
    // if (lagosCheckbox.checked) {
    //     filteredJobBoxes = filteredJobBoxes.filter(job => job.location === "Lagos");
    // }
    // if (abujaCheckbox.checked) {
    //     filteredJobBoxes = filteredJobBoxes.filter(job => job.location === "Abuja");
    // }
    const salaryRange = salaryRangeInput.value;
    const minSalary = salaryRange;
    minSalaryValueSpan.textContent = "$" + minSalary;
    maxSalaryValueSpan.textContent = "$" + 100;

    filteredJobBoxes = filteredJobBoxes.filter(job => {
        const salary = parseFloat(job.salary.replace('$', ''));
        return salary >= minSalary && salary <= 100;
    });
    if (filteredJobBoxes.length === 0) {
        gallery.innerHTML = `<p class="gallery-error">Jobs offer at  $${minSalary} is not available.</p>`;
        return;
    }

    endIndex = Math.min(startIndex + itemsPerPage, filteredJobBoxes.length);
    for (let i = startIndex; i < endIndex; i++) {
        const jobBoxData = filteredJobBoxes[i];
        const jobBox = createJobBoxElement(jobBoxData);
        gallery.appendChild(jobBox);
    }


    const locationFilter = document.getElementById('locationFilter');
    
    locationFilter.addEventListener('change', function() {
        const selectedLocation = locationFilter.value;
        currentPage = 1;
    
        if (selectedLocation === '') {
            renderGallery(); // Show all job boxes if no location selected
        } else {
            const filteredJobBoxes = jobBoxes.filter(job => job.location === selectedLocation);
            if (filteredJobBoxes.length === 0) {
                gallery.innerHTML = `<p class="gallery-error">Job Filing in this Location is Empty.</p>`;
                return;
            }
            renderPagination();
            renderFilteredGallery(filteredJobBoxes);
        }
    });
}


function renderFilteredGallery(filteredJobBoxes) {
    gallery.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredJobBoxes.length);

    for (let i = startIndex; i < endIndex; i++) {
        const jobBoxData = filteredJobBoxes[i];
        const jobBox = createJobBoxElement(jobBoxData);
        gallery.appendChild(jobBox);
    }
}


function totalPages() {
    return Math.ceil(jobBoxes.length / itemsPerPage);
}

function createJobBoxElement(jobData) {
    const jobBox = document.createElement('div');
    jobBox.classList.add('job-box2', jobData.className);
    jobBox.innerHTML = `
        <div class="job-box-main">
            <div class="job-box-logo flex-start">
                <img src="${jobData.logoSrc}" alt="logo">
            </div>
            <div class="job-box-content flex-sh-column">
                <h6 class="fs1-5 job-name">${jobData.jobName}</h6>
                <div class="content-detail flex-start">
                    <span class="flex-start-gs">
                        <img src="../../asset/images/svg/grey-location.svg" alt="">
                        <li class="list-unstyled">${jobData.location}, State</li>
                    </span>
                    <span class="flex-start-gs">
                        <img src="../../asset/images/svg/grey-clock.svg" alt="">
                        <li class="list-unstyled">${jobData.jobType}</li>
                    </span>
                    <span class="flex-start-gs">
                        <li class="list-unstyled">${jobData.salary}/hour</li>
                        <li class="list-unstyled job-year">${jobData.jobYear}</li>
                        <li class="list-unstyled job-posted"><strong>Posted within • </strong>${jobData.jobPosted}</li>
                    </span>
                </div>
            </div>
        </div>
        <div class="job-box-btn-layout ">
            <span id="heart"><img src="../../asset/images/svg/heart-vector.svg" alt=""></span>
            <div class="job-apply-btn flex-sv-column">
                <button class="btn bg-red" onclick="window.location.href='../../menu/job/job-descrip.html';">Apply</button>
                <span>Deadline: 28 Jan, 2024</span>
            </div>
        </div>
    `;
    return jobBox;
}

// job type
fullTimeCheckbox.addEventListener('change', function () {
    currentPage = 1;
    renderPagination();
    renderGallery();
});

partTimeCheckbox.addEventListener('change', function () {
    currentPage = 1;
    renderPagination();
    renderGallery();
});
remoteCheckbox.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});

freelanceCheckbox.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});

// experience
OneYearCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});

twoYearCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});
fourYearCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});
tenYearCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});

// posted within
anyCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});
twoDaysCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});
fourDaysCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});
oneweekCheck.addEventListener('change', function () {
    currentPage = 1;
    renderGallery();
});
salaryRangeInput.addEventListener('input', function () {
    currentPage = 1;
    renderPagination();
    renderGallery();
});



function handleCheckboxClick(clickedCheckbox) {
    var checkboxes = document.querySelectorAll('[data-type]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
function handleCheckboxClick2(clickedCheckbox) {
    var checkboxes = document.querySelectorAll('[data-expirence]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
function handleCheckboxClick3(clickedCheckbox) {
    var checkboxes = document.querySelectorAll('[data-posted]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
  function updateFiltersFromLocalStorage() {
    fullTimeCheckbox.checked = localStorage.getItem('fullTimeChecked') === 'true';
    partTimeCheckbox.checked = localStorage.getItem('partTimeChecked') === 'true';
    remoteCheckbox.checked = localStorage.getItem('remoteCheckbox') === 'true';
    freelanceCheckbox.checked = localStorage.getItem('freelanceCheckbox') === 'true';
    OneYearCheck.checked = localStorage.getItem('OneYearCheck') === 'true';
    twoYearCheck.checked = localStorage.getItem('twoYearCheck') === 'true';
    fourYearCheck.checked = localStorage.getItem('fourYearCheck') === 'true';
    tenYearCheck.checked = localStorage.getItem('tenYearCheck') === 'true';
    anyCheck.checked = localStorage.getItem('anyCheck') === 'true';
    twoDaysCheck.checked = localStorage.getItem('twoDaysCheck') === 'true';
    fourDaysCheck.checked = localStorage.getItem('fourDaysCheck') === 'true';
    oneweekCheck.checked = localStorage.getItem('oneweekCheck') === 'true';
}

  function saveFiltersToLocalStorage() {
    localStorage.setItem('fullTimeChecked', fullTimeCheckbox.checked);
    localStorage.setItem('partTimeChecked', partTimeCheckbox.checked);
    localStorage.setItem('remoteCheckbox', remoteCheckbox.checked);
    localStorage.setItem('freelanceCheckbox', freelanceCheckbox.checked);
    localStorage.setItem('OneYearCheck', OneYearCheck.checked);
    localStorage.setItem('twoYearCheck', twoYearCheck.checked);
    localStorage.setItem('fourYearCheck', fourYearCheck.checked);
    localStorage.setItem('tenYearCheck', tenYearCheck.checked);
    localStorage.setItem('anyCheck', anyCheck.checked);
    localStorage.setItem('twoDaysCheck', twoDaysCheck.checked);
    localStorage.setItem('fourDaysCheck', fourDaysCheck.checked);
    localStorage.setItem('oneweekCheck', oneweekCheck.checked);
    localStorage.setItem('salaryRangeInput', salaryRangeInput.value);
}
 window.addEventListener('load', function () {
    updateFiltersFromLocalStorage();
    renderPagination();
    renderGallery();
});
window.addEventListener('beforeunload', function () {
    saveFiltersToLocalStorage();
    renderPagination();
    renderGallery();
});
window.addEventListener('DOMContentLoaded', function () {
    const savedSalaryRange = localStorage.getItem('salaryRangeInput');
    if (savedSalaryRange !== null) {
        salaryRangeInput.value = savedSalaryRange;
        renderGallery(); // Re-render the gallery based on the saved filter state
    }
});

const resetFilterBtn = document.getElementById('default');

resetFilterBtn.addEventListener('click', function() {
    // Reset checkboxes
    fullTimeCheckbox.checked = false;
    partTimeCheckbox.checked = false;
    remoteCheckbox.checked = false;
    freelanceCheckbox.checked = false;
    OneYearCheck.checked = false;
    twoYearCheck.checked = false;
    fourYearCheck.checked = false;
    tenYearCheck.checked = false;
    anyCheck.checked = false;
    twoDaysCheck.checked = false;
    fourDaysCheck.checked = false;
    oneweekCheck.checked = false;

    // Reset salary range input
    salaryRangeInput.value = 0;

    // Render gallery with default filters
    currentPage = 1;
    renderPagination();
    renderGallery();
    
});





renderPagination();
renderGallery();
