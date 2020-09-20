
document.addEventListener("DOMContentLoaded", function(e){
    console.log("DOM Content Loaded")

const renderMonster = (monsterObj) => {

    const monsterLi = document.createElement('li')
    monsterLi.innerHTML = `
        <p> Name: monster.name</p>
        <p>Age: monster.age</p>
        <p>Description: monster.description</p>
        `
    const monsterContainer = document.querySelector('#monster-container')
    monsterContainer.appendChild(monsterLi)
    
}


const fetchMonsters = () => {
    fetch('http://localhost:3000/monsters')
    .then(response => response.json())
    .then(data => console.log(data));
}
renderMonster()

})