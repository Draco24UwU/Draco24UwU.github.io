function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let date = now.toDateString();
    let sufijo = 'a.m';

    if(minutes < 10){
        minutes = "0" + now.getMinutes();
    }
    
    if(seconds < 10){
        seconds = "0" + now.getSeconds();
    }

    if(hours >= 12){
        sufijo = 'p.m';
    }

    if(hours > 12){
        hours = now.getHours() - 12;
    }
    

  
    document.getElementById('clock').textContent = hours + ':'+ minutes + ':' + seconds + " " + sufijo;
    document.getElementById('date').textContent = date + '.';
}
  
setInterval(updateClock, 1000);