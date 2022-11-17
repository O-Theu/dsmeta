import iconNotification from '../../assets/img/iconNotification.svg'

import './styles.css'

function NotificationButton() {
    return(
        <div className='dsmeta-red-btn'>
            <img src={iconNotification} alt='icone para enviar notificação'/>
        </div>
    )
}

export default NotificationButton;