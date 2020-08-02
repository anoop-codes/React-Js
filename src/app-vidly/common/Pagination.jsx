import React from 'react';
import _ from 'lodash';

const Pagination = ({ pageSize, itemsCount, onPageChange, currentPage }) => {

    const pageCounts = Math.ceil(itemsCount / pageSize);
    if (pageCounts === 1) return null;

    const pages = _.range(1, pageCounts + 1);

    return (
        <>
            <nav>
                <ul className="pagination">
                    {pages.map(page => (
                        <li
                            className={currentPage === page ? 'page-item active' : 'page-item'}
                            style={{ cursor: 'pointer' }}
                            key={page}
                        >
                            <span
                                className="active page-link" onClick={() => onPageChange(page)}>
                                {page}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Pagination;