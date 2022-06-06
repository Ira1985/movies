import React, {Component} from "react";
import "./pagination.scss"

class Pagination extends Component{
    constructor(props) {
        super(props)
        this.state = {
            pages: [1, 2, 3, 4, 5]
        }
    }
    selectPage(page) {
        this.props.onChangePage(page)
        this.changePages(page)
    }
    changePages(page) {
        const addPageArr = [-2, -1, 0, 1, 2]
        if (page > 3) {
            const newPages = addPageArr.map(item => item + page)
            this.setState({
                pages: newPages
            })
        }
    }
    render() {
        const {page} = this.props
        const {pages} = this.state
        return(
            <ul className='pagination'>
                <li disabled={page === 1}>
                    {"<<"}
                </li>
                <li
                    disabled={page === 1}
                    onClick={() => this.selectPage(page - 1)}
                >
                    {"<"}
                </li>
                {pages.map((i, index) => (
                    <li
                        className={i === page ? 'selected-page' : ''}
                        key={index}
                        onClick={() => this.selectPage(i)}
                    >
                        {i}
                    </li>
                ))}
                <li onClick={() => this.selectPage(page + 1)}>
                    {">"}
                </li>
                <li>
                    {">>"}
                </li>
            </ul>
        )
    }
}

export default Pagination;
