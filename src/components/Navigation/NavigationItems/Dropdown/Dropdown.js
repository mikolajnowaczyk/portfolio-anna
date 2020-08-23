import React from 'react'
import classes from './Dropdown.module.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import Link from 'next/link'

const Dropdown = (props) => {

  const dd_List = [classes.dd_List];
  const dd_Header = [classes.dd__Header];
  const NavLink = [classes.NavLink];
  props.open ? dd_List.push(classes.Show) : dd_List.push(classes.Hide);

  const dd_List_Items = props.list.map(
    listItem => {
      return (
        <li key={listItem[0]} onClick={props.clicked}>
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
    <div className={classes.dd__Wrapper}
      onMouseEnter={props.mouseEntered}
      onMouseLeave={props.mouseLeft}>
      <div className={dd_Header.join(' ')}>
        <div className={classes.dd__HeaderTitle}
          onTouchStart={props.touched}
          onTouchEnd={e => e.preventDefault()}>
          {props.title}</div>
        {props.open ? <FaAngleDown className={classes.Icon} /> : <FaAngleUp />}
      </div >
      <ul className={dd_List.join(' ')}>
        {dd_List_Items}
      </ul>
    </div >
  )
}

export default Dropdown