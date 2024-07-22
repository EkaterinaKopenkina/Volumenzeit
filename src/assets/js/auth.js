const tab = () => {
    const url = document.URL;
    const thisTabName = url.split('#')[1];
    const thisTabHead = document.querySelector(`#${thisTabName}`);
    const thisTabBlockName = thisTabHead.dataset.tab;
    const thisTabBlock = document.querySelector(thisTabBlockName);
    const tabItems = document.querySelectorAll('.auth__tab');
    const blockItems = document.querySelectorAll('.auth__block');

    tabItems.forEach(item => {
        item.classList.remove('active');
    })

    blockItems.forEach(item => {
        item.classList.remove('active');
    })

    thisTabHead.classList.add('active');
    thisTabBlock.classList.add('active');

    const tabs = document.querySelector('.auth__tabs');

    tabs.addEventListener('click', (event) => {
        event.preventDefault();
        const tabItem = event.target.closest('.auth__tab');

        tabItems.forEach(item => {
            item.classList.remove('active');
        })
    
        blockItems.forEach(item => {
            item.classList.remove('active');
        })

        if (tabItem) {
            const blockName = tabItem.dataset.tab;
            const block = document.querySelector(blockName);

            tabItem.classList.add('active');
            block.classList.add('active');
        }
    })
}

module.exports = {
    tab: tab,
}