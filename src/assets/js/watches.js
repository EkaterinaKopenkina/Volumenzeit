var pagination = require('./helpers/pagination');

const watchesMainFn = () => {
    pagination.paginationMainFn();
    console.log('hi');
}

module.exports = {
    watchesMainFn: watchesMainFn,
}