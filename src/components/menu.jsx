import './menu.css'

export const Menu = (props) => {
    return(
        //   <nav className='navbar-style'>
        //       <p><a href={'/'}>{props.s1}</a></p>
        //       <p><a href="#s2">{props.s2}</a></p>
        //       <p><a href={'/contact'}>{props.s3}</a></p>
        //       <p>{props.s4}</p>
        //     </nav>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a href={'/'}>{props.s1}</a>
                <a href="#s2">{props.s2}</a>
                <a href={'/contact'}>{props.s3}</a>
                <a href={'/calcs'}>{props.s4}</a>
                <a href={'/requisicao'}>{props.s5}</a>
                </div>
              </div>
            </div>
          </nav>
    )
}