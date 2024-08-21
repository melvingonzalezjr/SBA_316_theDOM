//Get ny Who am I statement
const myWho = document.getElementById("myWho");
let myWhoText = myWho.textContent;

//even handler functions to show answer to "Who am I?" or to revert to initial content.
function revealMyWho(e) {
  e.target.textContent = `Software Engineer in Space City!
I'm interested in AI, Data Science, and Mathematics
Learn more about me with above links`;
  e.target.classList.add("myWhoMouseOver");
}
function hideMyWho(e) {
  e.target.textContent = myWhoText;
  e.target.classList.remove("myWhoMouseOver");
}
//event listeners for when mouse is over div or leaves it.
myWho.addEventListener("mouseover", revealMyWho);
myWho.addEventListener("mouseout", hideMyWho);

//querySelector to get the #whyContainer div and append a newly created h2 with textContent 'My Why'
const myWhy = document.querySelector("#whyContainer");
const h2Why = document.createElement("h2");
h2Why.textContent = "My Why";
let myWhyText = h2Why.textContent;
myWhy.appendChild(h2Why);

//handler functions similar to those on 6 and 13. but now for My Why section
function revealMyWhy(e) {
  e.target.textContent = `The best contributions a person makes are not what they do but what they inspire and enable others to do. I believe in the power of Artificial Intelligence and Human Intelligence to accelerate creativity and innovation on a scale unimaginable today. I want to develop AI tools that free thinkers use to solve societal problems. I don't necessarily want to be a change-maker in the world; I want to be the catalyst for that change.`;
  e.target.classList.add("myWhyMouseOver");
}
function hideMyWhy(e) {
  e.target.textContent = myWhyText;
  e.target.classList.remove("myWhyMouseOver");
}

myWhy.addEventListener("mouseover", revealMyWhy);
myWhy.addEventListener("mouseout", hideMyWhy);

/******************************************
ADD PHOTO. Modify src attribute onmouseover 
******************************************/
const photos = [{ photo: "src/meBW.jpg" }, { photo: "src/meClr.jpg" }];

const mePhoto = document.getElementById("photoContainer");
const img = document.createElement("img");
img.setAttribute("src", photos[0].photo);
mePhoto.appendChild(img);

img.addEventListener("mouseover", () => {
  const clrPhoto = photos.find((source) => {
    return source.photo === "src/meClr.jpg";    // Explicitly return the result of the comparison. if true:
  });                                           //clrPhoto = source where condition is true
  if (clrPhoto) {
    img.setAttribute("src", clrPhoto.photo);
  }
});
img.addEventListener("mouseout", () => {
    const bwPhoto = photos.find((source) => {
        return source.photo === "src/meBW.jpg";
    });
    if (bwPhoto) {
        img.setAttribute("src", bwPhoto.photo);
    }
});


