import React from 'react'

import classes from './SettingsDropdown.module.css'

const SettingsDropdown = props => {
    return (
        <div className={classes.DropdownActive}>
             <div className={classes.title}>
                Settings
            </div>
            
            <a href="/auth" onClick={props.onLogout}>Log out</a>
        </div>
    )
}

export default SettingsDropdown
