const allStars = document.querySelectorAll('.star');
let currentRating = document.querySelector('.current_rating');

allStars.forEach( (star, i) => {
    star.onclick = function () {
        let currentStarLevel = i + 1;
        currentRating.innerText = `${currentStarLevel} of 5`;
        
        allStars.forEach( (star,j) => {
            if( currentStarLevel >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
            
        
        })
    }
})