const exploreBtn = document.getElementById('explore');
const coursesDiv = document.querySelector('.fourth-container');
const beginnerBtn = document.getElementById('beginner')

function exploreFunct(e){
    coursesDiv.scrollIntoView({behavior: "smooth"});
    console.log('Bitch Please!')
}

exploreBtn.addEventListener('click', exploreFunct);

