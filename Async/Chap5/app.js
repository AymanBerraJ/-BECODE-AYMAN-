
function bcgColor (color,) {
  return new Promise((resolve)=> {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, 1000);
  })
};

bcgColor('blue')
.then(() => bcgColor('yellow'))
.then(() => bcgColor('red'))
.then(() => bcgColor('cyan'))
.then(() => bcgColor('violet'))
.then(() => bcgColor('green'))
.then(() => bcgColor('purple'))