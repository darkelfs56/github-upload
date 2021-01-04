const parentContainer =  document.querySelector('.readMore_container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isExtendBtn = current.className.includes('extendBtn');

    if(!isExtendBtn) return;

    const currentText = event.target.parentNode.querySelector('.moreText');

    currentText.classList.toggle('moreText_show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";

})
