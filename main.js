function createGame(player1, hour, player2) {
  return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>
  `
}

let delay = -0.4;
function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class ="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML = 
  
    creatCard("24/11", "quinta", 
    createGame('switzerland', '07:00', 'cameroon') +
    createGame('uruguay', '10:00', 'southkorea') +
    createGame('portugal', '13:00', 'ghana') +
    createGame('brazil', '16:00', 'serbia')) +
    
    creatCard("28/11", "segunda",
    createGame('cameroon', '07:00', 'serbia') + 
    createGame('southkorea', '10:00', 'ghana') +
    createGame('brazil', '13:00', 'switzerland') +
    createGame("portugal", "16:00", "uruguay")) +
    
    creatCard("02/12", "sexta", 
    createGame('southkorea', '12:00', 'portugal') +
    createGame('ghana', '12:00', 'uruguay') +
    createGame('serbia', '16:00', 'switzerland') +
    createGame('cameroon', '16:00', 'brazil'))
