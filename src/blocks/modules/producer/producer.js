const producers = document.querySelectorAll('.producer');


producers.forEach((el) => {
    const producerInner = el.querySelector('use'),
          innerWidth    = producerInner.getBoundingClientRect();


    console.log(producerInner.getClientRects()[0]);
    // el.style.width = innerWidth + 'px';
})
