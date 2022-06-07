import React, {Component} from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

class ContextMenu extends Component{
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false
        }
    }
    toggleMenu = () => {
        this.setState(prevState => ({
            openMenu: !prevState.openMenu
        }))
    }
    render() {
        const {openMenu} = this.state
        const {menu, bindCallback} = this.props
        return (
            <Dropdown toggle={this.toggleMenu} isOpen={openMenu}>
                <DropdownToggle>
                    {this.props.children}
                </DropdownToggle>
                <DropdownMenu>
                    {menu.map(menu_item => <DropdownItem key={menu_item.label} onClick={() => bindCallback(menu_item.callback)}>{menu_item.label}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default ContextMenu
