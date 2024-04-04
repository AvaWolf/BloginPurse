import s from './Login.module.scss'

const Login:React.FC = () =>{
	return (
		<main className={s.megaContainer}>
		<form action="" className={s.container}>
			<span className={s.item1}>Авторизация</span>
			<span className={s.item2}>
				<span>Email</span>
				<input type="email" placeholder="Email..." />
			</span>
			<span className={s.item2}>
				<span>Пароль</span>
				<input type="password" placeholder="Пароль..." />
			</span>
			<span className={s.item3}><input type="checkbox" />Запомнить меня</span>
			<button type="submit">Авторизация</button>
		</form>
		</main>
		)
}

export default Login;