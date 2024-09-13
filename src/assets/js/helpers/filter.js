const toggleFilter = () => {
    const filter = document.querySelector('.products__filter');
    const btns = document.querySelectorAll('.products__filter-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
    
            filter.classList.toggle('active');
        })
    })
}

export default toggleFilter;