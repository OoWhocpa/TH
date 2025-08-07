
document.addEventListener('DOMContentLoaded', function () {
    const commentElements = document.querySelectorAll('.comment');

    const likeState = {};
    const dislikeState = {};

    const updateLikes = () => {
        commentElements.forEach(comment => {
            const likeSpan = comment.querySelector('.likes');
            const currentLikes = parseInt(likeSpan.textContent, 10);
            const randomIncrement = Math.floor(Math.random() * 4) + 3; 
            likeSpan.textContent = currentLikes + randomIncrement;
        });
    };

    setInterval(updateLikes, 60000);

    commentElements.forEach((comment, index) => {
        likeState[index] = false;  
        dislikeState[index] = false; 

        const likeButton = comment.querySelector('.comments__like');
        const dislikeButton = comment.querySelector('.comments__dislike');
        const likeSpan = likeButton.querySelector('.likes');
        const dislikeSpan = dislikeButton.querySelector('.dislikes');

        likeButton.addEventListener('click', () => {
            const currentLikes = parseInt(likeSpan.textContent, 10);
            const currentDislikes = parseInt(dislikeSpan.textContent, 10);

            if (!likeState[index] && dislikeState[index]) {
                dislikeSpan.textContent = currentDislikes - 1;
                dislikeState[index] = false;
            }

            if (!likeState[index]) {
                likeSpan.textContent = currentLikes + 1;
                likeState[index] = true;
            } else {
                likeSpan.textContent = currentLikes - 1;
                likeState[index] = false;
            }
        });

        dislikeButton.addEventListener('click', () => {
            const currentLikes = parseInt(likeSpan.textContent, 10);
            const currentDislikes = parseInt(dislikeSpan.textContent, 10);
            
            if (!dislikeState[index] && likeState[index]) {
                likeSpan.textContent = currentLikes - 1;
                likeState[index] = false;
            }
          
            if (!dislikeState[index]) {
                dislikeSpan.textContent = currentDislikes + 1;
                dislikeState[index] = true;
            } else {
                dislikeSpan.textContent = currentDislikes - 1;
                dislikeState[index] = false;
            }
        });
    });
});


const { mainBtn, form } = {
    mainBtn: document.querySelector('.main-btn'),
    form: document.querySelector('.clearfix'),
}

mainBtn.addEventListener('click', () => {
    form.classList.toggle('hide')
})



document.querySelectorAll('.make-comment').forEach(e => {
    e.addEventListener('click', function (event) {
        event.preventDefault(); 
        document.getElementById('order').scrollIntoView({
            behavior: 'smooth' 
        });
    });
})

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});