
const myWho = document.getElementById('myWho');
let myWhoText = myWho.textContent

myWho.addEventListener('mouseover', e => {
    e.target.textContent = 
`Software Engineer in Space City!
I'm interested in AI, Data Science, and Mathematics
Learn more about me with above links`
    e.target.classList.add('myWhoMouseOver');
});

myWho.addEventListener('mouseout', e => {
    e.target.textContent = myWhoText
    e.target.classList.remove('myWhoMouseOver')
});


