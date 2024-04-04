import s from './Registration.module.scss'

const Registration:React.FC = () => {
	return (
		<main className={s.megaContainer}>
			<form action="" className={s.container}>
				<span className={s.item1}>Регистрация</span>
				<span className={s.item2}>
				<span>Имя</span>
				<input  type="name" placeholder="Имя..." />
				</span>
				<span className={s.item2}>
				<span>Email</span>
				<input type="email" placeholder="Email..."/>
				</span>
				<span className={s.item2}>
				<span>Пароль</span>
				<input type="password" placeholder="Пароль..."/>
				</span>
				<span className={s.item2}>
				<span>Возрост</span>
				<input  type="number" placeholder="Возрост..."/>
				</span>
				<span className={s.item3}><input type="checkbox" />Соглашусь с правилами сайта</span>
				<button type="submit" >Регистрация</button>

			</form>
		</main>
		)
}

export default Registration;