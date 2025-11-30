window.addEventListener('load', () =>{
    const progressBars =document.querySelectorAll('.progress');
    progressBars.forEach(bar=>{
        const value=bar.getAttribute('data-value');
        bar.style.width = value + '%';
        bar.style.width =  value + '%';
    })
})