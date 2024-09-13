var pagination = require('../helpers/pagination');
var filter = require('../helpers/filter');
var sort = require('../helpers/sort');

const watchesMainFn = () => {
    pagination.paginationMainFn();
    filter.toggleFilter();
    sort.sort();
}

module.exports = {
    watchesMainFn: watchesMainFn,
}