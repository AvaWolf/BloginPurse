import s from './Login.module.scss'
import React,{useState,useEffect,useRef} from 'react'

const Login:React.FC = () =>{
	const animBlock = useRef<HTMLFormElement>(null)

	useEffect(()=>{
		if(animBlock.current){
		setTimeout(()=>{animBlock.current?.classList.add(s.container)},0)
	}

		return ()=>{
			if(animBlock.current){
				animBlock.current.classList.remove(s.container)
			}
		}
	},[])
	return (
		<main className={s.megaContainer}>
		<form action="" ref={animBlock} className={s.animBlock}>
			<span className={s.item1}>Авторизация</span>
			<span className={s.item2}>
				<span>Email</span>
				<input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" minLength={9} placeholder="Email..." />
			</span>
			<span className={s.item2}>
				<span>Пароль</span>
				<input type="password" name="password" minLength={6} placeholder="Пароль..." />
			</span>
			<span className={s.item3}><input type="checkbox" />Запомнить меня</span>
			<button type="submit">Авторизация</button>
		</form>
		</main>
		)
}

export default Login;