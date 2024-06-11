let body = document.querySelector("body");

function bcgColor(color, delay) {

  return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > 0.5){
        reject();
      }
      setTimeout(() => {
        body.style.backgroundColor = color;
        resolve();
      }, delay);

  });
}

async function bcgColor2() {
    try{
        await bcgColor("blue", 1000);
        await bcgColor("yellow", 1000);
        await bcgColor("red", 1000);
        await bcgColor("cyan", 1000);
        await bcgColor("violet", 1000);
        await bcgColor("green", 1000);
        await bcgColor("purple", 1000);

    }catch(error){
        console.error("Le random est au dessus de 0.5s");
    }

}

bcgColor2();
