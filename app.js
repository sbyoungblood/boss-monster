
// SECTION VARIABLES/ARRAYS

let heroes = [
  {
      name: 'Slate Slabrock',
      type: 'dwarf',
      damage: 5,
      health: 100
  },
  {
      name: 'Flint Ironstag',
      type: 'elf',
      damage: 10,
      health: 50
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
  let heroElem = document.getElementById()
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

setInterval(attackHeroes, 750)