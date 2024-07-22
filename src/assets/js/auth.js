const tab = () => {
    const url = document.URL;
    const thisTabName = url.split('#')[1];
    const thisTabHead = document.querySelector(`#${thisTabName}`);
    const thisTabBlockName = thisTabHead.dataset.tab;
    const thisTabBlock = document.querySelector(thisTabBlockName);

    tabClear();

    thisTabHead.classList.add('active');
    thisTabBlock.classList.add('active');

    const tabs = document.querySelector('.auth__tabs');

    tabs.addEventListener('click', (event) => {
        event.preventDefault();
        const tabItem = event.target.closest('.auth__tab');

        tabClear();

        if (tabItem) {
            const blockName = tabItem.dataset.tab;
            const block = document.querySelector(blockName);

            tabItem.classList.add('active');
            block.classList.add('active');
        }
    })
}

const tabClear = () => {
    const tabs = document.querySelectorAll('.auth__tab');
    const blocks = document.querySelectorAll('.auth__block');

    tabs.forEach(item => {
        item.classList.remove('active');
    })

    blocks.forEach(item => {
        item.classList.remove('active');
    })
}

module.exports = {
    tab: tab,
}