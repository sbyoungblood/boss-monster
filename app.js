
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

// SECTION OTHER FUNCTIONS


function attackBoss(){
  
  let totalDamage = 0
  heroes.forEach(hero => {
    totalDamage += hero.damage
    console.log(totalDamage);
  });
  if (totalDamage > 0){
    boss.health -= totalDamage
  }
  if (boss.health < 0) {
    boss.health = 0
  }
  console.log(boss.health);
  drawBoss()
}




// SECTION INITIALIZERS