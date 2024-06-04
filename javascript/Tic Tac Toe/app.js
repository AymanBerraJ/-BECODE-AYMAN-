const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const cell = [...document.getElementsByClassName("cell")];
  const message = document.querySelector(".message")
  const p = document.querySelector("p");
  const button = document.querySelector("button");

  let tour = {
    joueur: 1,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
  };

    const verifierVictoire = () => {
        if(
            (tour.c1 == tour.c2 && tour.c2 == tour.c3 && tour.c1 > 0)||
            (tour.c4 == tour.c5 && tour.c5 == tour.c6 && tour.c4 > 0)||
            (tour.c7 == tour.c8 && tour.c8 == tour.c9 && tour.c7 > 0)||
            (tour.c1 == tour.c5 && tour.c5 == tour.c9 && tour.c1 > 0)||
            (tour.c1 == tour.c4 && tour.c4 == tour.c7 && tour.c1 > 0)||
            (tour.c2 == tour.c5 && tour.c5 == tour.c8 && tour.c2 > 0)||
            (tour.c3 == tour.c6 && tour.c6 == tour.c9 && tour.c3 > 0)||
            (tour.c3 == tour.c5 && tour.c5 == tour.c7 && tour.c3 > 0)
           ){
            return true;
           }else if(
            tour.c1 != 0 &&
            tour.c2 != 0 &&
            tour.c3 != 0 &&
            tour.c4 != 0 &&
            tour.c5 != 0 &&
            tour.c6 != 0 &&
            tour.c7 != 0 &&
            tour.c8 != 0 &&
            tour.c9 != 0
           ){
            return null;
           }
           else{
            return false;
           }
    }

  const caseJouer = (el) => {
    let numCase = el.target.id;
    if(tour[numCase] != 0) return;

    tour[numCase] = tour.joueur;

    let victory = verifierVictoire();

    if (victory == true) {
        p.textContent = "The winner is the Player " + tour.joueur;
        cell.forEach(c => c.textContent = "" );
    }else if(victory === null){
        p.textContent = "Match Tie";
        cell.forEach(c => c.textContent = "" );
    }else if(victory == false){
        if(tour.joueur == 1){
            el.target.textContent = "X";
            tour.joueur = 2;
            message.textContent = "Player 2 you have to play";
        }else{
            el.target.textContent = "O";
            tour.joueur = 1;
            message.textContent = "Player 1 you have to play";
        }
    }
  }

  cell.forEach((element)=>{
    element.addEventListener('click', caseJouer)
  });

  button.addEventListener('click', ()=>{
    reset();
  })
  const reset = () => {
    message.textContent = "Good Luck !";
    joueur = 1;
    tour.c1 = 0;
    tour.c2 = 0;
    tour.c3 = 0;
    tour.c4 = 0;
    tour.c5 = 0;
    tour.c6 = 0;
    tour.c7 = 0;
    tour.c8 = 0;
    tour.c9 = 0;
  }