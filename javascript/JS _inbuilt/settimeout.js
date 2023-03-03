let time = 20;
let x = setTimeout(() => {
    console.log('GM');
    
    if (time > 10) {
        clearInterval(x)
    }
    time++;
}, [2000])
