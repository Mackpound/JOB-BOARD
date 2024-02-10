const pagination = document.querySelector('#pagination');
const gallery = document.getElementById('gallery');

// Add the class "job-box-wraper" to the gallery element
gallery.classList.add("job-box-wraper");

const jobBoxes = [
    {
        className: "custom-class1",
        jobName: "Software Engineer",
        location: "Lagos, state",
        jobType: "Part-Time",
        salary: "$40",
        jobYear: "2 - 4years",
        jobPosted: "Any",
        logoSrc: "../../asset/images/logo-banners/GTbank.png"
    },
    {
        className: "custom-class2",
        jobName: "Data Analyst",
        location: "Lagos, state",
        jobType: "Part-Time",
        salary: "$50",
        jobYear: "1 - 2years",
        jobPosted: "4-days",
        logoSrc: "../../asset/images/logo-banners/upwork.png"
    },
    {
        className: "custom-class2",
        jobName: "Project Manager",
        location: "Abuja, state",
        jobType: "Remote",
        salary: "$40",
        jobYear: "4-10years",
        jobPosted: "2-days",
        logoSrc: "../../asset/images/logo-banners/microsoft.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos, state",
        jobType: "FreeLance",
        salary: "$18",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos, state",
        jobType: "FreeLance",
        salary: "$18",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos, state",
        jobType: "FreeLance",
        salary: "$18",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos, state",
        jobType: "FreeLance",
        salary: "$18",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
    {
        className: "custom-class2",
        jobName: "Executive Assistant",
        location: "Lagos, state",
        jobType: "FreeLance",
        salary: "$18",
        jobYear: "10-20years",
        jobPosted: "1-week",
        logoSrc: "../../asset/images/logo-banners/reliance.png"
    },
]

const itemsPerPage = 5; // Number of job boxes per page
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
    const endIndex = Math.min(startIndex + itemsPerPage, jobBoxes.length);

     for (let i = startIndex; i < endIndex; i++) {
        const jobBoxData = jobBoxes[i];
        const jobBox = createJobBoxElement(jobBoxData);
        gallery.appendChild(jobBox);
    }
}

function totalPages() {
    return Math.ceil(jobBoxes.length / itemsPerPage);
}

function createJobBoxElement(jobData) {
    const jobBox = document.createElement('div');
    jobBox.classList.add('job-box', jobData.className);
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
                        <li class="list-unstyled">${jobData.location}</li>
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


renderPagination();
renderGallery();
