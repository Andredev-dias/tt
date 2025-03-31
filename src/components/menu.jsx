import './menu.css'

export const Menu = (props) => {
    return(
          <nav className='navbar-style'>
              <p><a href="#s1">{props.s1}</a></p>
              <p><a href="#s2">{props.s2}</a></p>
              <p>{props.s3}</p>
              <p>{props.s4}</p>
            </nav>
    )
}