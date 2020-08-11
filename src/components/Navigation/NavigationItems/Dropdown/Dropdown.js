import React from 'react'
import classes from './Dropdown.module.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import Link from 'next/link'

const Dropdown = (props) => {

  const dd_List = [classes.dd_List];
  const dd_Header = [classes.dd__Header];
  const NavLink = [classes.NavLink];
  // props.nested ? dd_List.push(classes.dd_List__Nested) : dd_List.push(classes.dd_List);
  props.open ? dd_List.push(classes.Show) : dd_List.push(classes.Hide);
  // props.nested ? dd_Header.push(classes.dd__Header__Nested) : dd_Header.push(classes.dd__Header);
  // props.nested ? NavLink.push(classes.NavLink__Nested) : NavLink.push(classes.NavLink);

  const dd_List_Items = props.list.map(
    listItem => {
      return (
        <li key={listItem[0]}>
          <Link href={listItem[0]}>
            <a className={classes.Link}>
              <div className={NavLink.join(' ')}>
                {listItem[1]}
              </div>
            </a>
          </Link>
        </li>
      )
    }
  )
  return (
    <div className={props.nested ? classes.dd__Wrapper : classes.dd__Wrapper__Nested}
      onMouseEnter={props.mouseEntered}
      onMouseLeave={props.mouseLeft}>
      <div className={dd_Header.join(' ')}>
        <div className={classes.dd__HeaderTitle}
          onTouchStart={props.clicked}
          // onClick={props.clicked}
          onTouchEnd={e => e.preventDefault()}>{props.title}</div>
        {props.open ? <FaAngleDown className={classes.Icon} /> : <FaAngleUp />}
      </div >
      <ul className={dd_List.join(' ')}>
        {/* {props.children} */}
        {dd_List_Items}
      </ul>
    </div >
  )
}

export default Dropdown