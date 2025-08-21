const btn = document.querySelectorAll(".open_land")
const pr = document.querySelector(".pr")
const land = document.querySelector(".land")
const title = document.querySelector(".main_title")
const commentButton = document.querySelector(".add-comment-button")
const comentNew = document.querySelector(".coment_new")
const comentWrite = document.querySelector(".comment-write")
const nameDefault = document.querySelector(".name_deffault")
const commentDefault = document.querySelector(".comment_deffault")

btn.forEach(button => {
    button.addEventListener("click", () => {
        pr.classList.add("d-none");
        land.classList.remove("d-none");
        title.scrollIntoView({ behavior: "smooth" });
    });
});



let name_default = "";
let comment_default = "";

document.querySelector(".add-comment-button").addEventListener("click", (e) => {
    const nameInput = document.getElementById("yourName");
    const commentInput = document.querySelector(".txt-content");

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    // Якщо якесь поле порожнє — не виконуємо далі
    if (!name || !comment) {
        return;
    }

    // Зберігаємо у змінні
    name_default = name;
    comment_default = comment;

    comentNew.classList.remove("d-none");
        comentWrite.classList.add("d-none");
        nameDefault.textContent = name_default;
        commentDefault.textContent = comment_default;

    // Очищуємо поля після відправки
    nameInput.value = "";
    commentInput.value = "";
});


// шукаємо всі блоки реакцій
document.querySelectorAll(".reaction").forEach((reactionBlock) => {
    const likeBtn = reactionBlock.querySelector(".pr_like");
    const dislikeBtn = reactionBlock.querySelector(".pr_dislike");

    likeBtn.addEventListener("click", () => {
        const likesCounter = likeBtn.querySelector(".likes");
        likesCounter.textContent = parseInt(likesCounter.textContent) + 1;

        // блокуємо обидві кнопки після кліку
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
    });

    dislikeBtn.addEventListener("click", () => {
        const dislikesCounter = dislikeBtn.querySelector(".dislikes");
        dislikesCounter.textContent = parseInt(dislikesCounter.textContent) + 1;

        // блокуємо обидві кнопки після кліку
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
    });
});