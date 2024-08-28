var pagination = require('./pagination');

const watchesMainFn = () => {
    pagination.paginationMainFn();
    console.log('hi');
}

module.exports = {
    watchesMainFn: watchesMainFn,
}