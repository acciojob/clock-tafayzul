// 'Id' must have a capital 'B'
const p = document.getElementById("timer");

setInterval(() => {
    const date = new Date();
   
    p.textContent = date.toLocaleString(); 
}, 1000);