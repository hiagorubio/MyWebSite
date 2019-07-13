import React from 'react'
import './header.css'
import Tooltip from '@material-ui/core/Tooltip';


function Header () {
    return (
      <header class="mdc-top-app-bar--dense">
        <div class="mdc-top-app-bar__row">         
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start ">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span class="mdc-top-app-bar__action-item top-bar-item">Hiago Rubio</span>
          </section>  
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">      
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <Tooltip title="Dúvidas">
                <span class="mdi mdi-account-question top-bar-item"></span>          
              </Tooltip>
              <span class="mdi mdi-home top-bar-item"></span>
              <span class="mdi mdi-code-tags top-bar-item"></span>      
              <span class="mdi mdi-contact-mail top-bar-item"></span>  
              <span class="mdi mdi-facebook-box top-bar-item"></span>
              <span class="mdi mdi-instagram top-bar-item"></span>
              <span class="mdi mdi-linkedin top-bar-item"></span>  
              <span class="mdi mdi-github-box top-bar-item"></span>

            </section>
          </section>           
        </div>
      </header>
    )
}

export default Header;
