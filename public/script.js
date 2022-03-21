const cat = document.querySelector(".cat");

const pleasedEyes = document.querySelector(".pleased-eyes");

const angryEyes = document.querySelector(".angry-eyes");

const msg = document.querySelector(".msg");

// Petting the cat
cat.addEventListener("mouseover", (e) => {
	pleasedEyes.classList.add("show");
	angryEyes.classList.remove("show");

	msg.textContent = "❤️ Purrrrr ❤️";
	e.stopPropagation();
});

cat.addEventListener("mouseleave", (e) => {
	angryEyes.classList.add("show");
	pleasedEyes.classList.remove("show");

	msg.textContent = "Pet me!";
	e.stopPropagation();
});
