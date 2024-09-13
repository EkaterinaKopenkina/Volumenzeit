import toggleFilter from '../helpers/filter';
import paginationMainFn from '../helpers/pagination';
import sort from '../helpers/sort';

const watchesMainFn = () => {
    paginationMainFn();
    toggleFilter();
    sort();
}

export default watchesMainFn;