const collapseTitle = document.querySelectorAll(
   "#collapse-list .medicament__title"
);

const collapseDesc = document.querySelectorAll(
   "#collapse-list .medicament__desc"
);

collapseDesc.forEach((desc) => {
   desc.classList.add("hidden");
});

collapseTitle.forEach((c) => {
   c.addEventListener("click", (e) => {
      collapseDesc.forEach((desc) => {
         if (desc.getAttribute("data-id") === e.target.id) {
            desc.classList.toggle("hidden");
         } else {
            desc.classList.add("hidden");
         }
      });
   });
});
