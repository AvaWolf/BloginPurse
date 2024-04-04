import s from './Header.module.scss'
import { FaKey } from "react-icons/fa";
import { MdOutlineAppRegistration } from "react-icons/md";
import BackGpc from './../../assets/backGpc.png'
import BackGmobile from './../../assets/backGmobile.png'
import {NavLink} from 'react-router-dom'



const Header:React.FC = () => {
	return (
		<div className={s.megaContainer}>
			<div className={s.content1}>
				<NavLink to="/"><img src={BackGpc} alt="" /></NavLink>
			</div>
			<div className={s.content2}>
				<NavLink to="/login"><span className={s.item1}>
				Авторизация<FaKey />
				</span></NavLink>
				<NavLink to="registration"><span className={s.item2}>
				Регистрация<MdOutlineAppRegistration/>
				</span></NavLink>
				
			</div>
			
		</div>
		)
}

export default Header 