
// SECTION VARIABLES/ARRAYS

let heroes = [
  {
      name: 'Slate Slabrock',
      type: 'dwarf',
      damage: 5,
      health: 100,
      image:"https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
  },
  {
      name: 'Flint Ironstag',
      type: 'elf',
      damage: 10,
      health: 50,
      image:"https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  }
]


let boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}

// SECTION DRAW FUNCTIONS


function drawBoss(){
  let bossElem = document.getElementById('boss-health')
  let bossHealthSpan = bossElem.querySelector('span')
  bossHealthSpan.innerText = `${boss.health}`
}

function drawHeroes(){
  let heroElem = document.getElementById('hero')
  let heroHealthSpan = heroElem.querySelector('span')
  let template = ''

  heroes.forEach(hero => {
    template += /*html*/
    `<div class="col-4">
    <img class="img-fluid" src="${hero.image}">
    <p><b>${hero.name}</b></p>
    <div class=""><span>${hero.health}</span></div>
  </div>`
  })
  heroElem.innerHTML= template
}

// function drawHeroes(){
//   let heroElem = document.getElementById('hero-health')
//   let heroHealthSpan = heroElem.querySelector('span')
//   heroHealthSpan.innerText = `${}`
// }

// SECTION OTHER FUNCTIONS


function attackBoss(){
  
  let totalDamage = 0
  heroes.forEach(hero => {
    totalDamage += hero.damage
    console.log(totalDamage);
  })
  if (totalDamage > 0){
    boss.health -= totalDamage
  }
  if (boss.health < 0) {
    boss.health = 0
  }
  console.log(boss.health);
  drawBoss()
}

// function attackHeroes(){
//   let attackedHero = heroes.find(hero => hero.health = heroHealth)
//   attackedHero.health -= 5
//   if (attackedHero.health < 0) {
//     attackedHero.health = 0
//   }
//   console.log(attackedHero.health);
// }

function attackHeroes(){
  heroes.forEach(attackedHero => {
    attackedHero.health -=5
    if (attackedHero.health < 0) {
      attackedHero.health = 0
      return
    }
    console.log(attackedHero.health);
  })
  drawHeroes()
}

// function attackHeroes(){
//   let heroHealth = 100
//   heroes.forEach(hero => {
//     hero.health -= boss.damage
//     heroHealth = hero.health
//   })
//   if (heroHealth < 0) {
//     heroHealth = 0
//   }
//   console.log(heroes);
// }




// SECTION INITIALIZERS

setInterval(attackHeroes, 3000
  )