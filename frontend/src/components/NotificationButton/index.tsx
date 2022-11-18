import axios from 'axios';
import { toast } from 'react-toastify';
import iconNotification from '../../assets/img/iconNotification.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleId: number;
}

const handleClick = (id : number) => {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then(resp => {
            toast.success("SMS enviado com sucesso!")
        })
        .catch(err => {
            toast.error("Algo deu errado!")
        })
}

function NotificationButton( {saleId} : Props) {
    return(
        <div className='dsmeta-red-btn' onClick={() => handleClick(saleId)}> 
            <img src={iconNotification} alt='icone para enviar notificação'/>
        </div>
    )
}

export default NotificationButton;