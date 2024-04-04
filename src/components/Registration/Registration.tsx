import s from './Registration.module.scss'
import React,{useState,useEffect,useRef} from 'react'

const Registration:React.FC = () => {
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
			<form ref={animBlock} action="" className={s.animBlock}>
				<span className={s.item1}>Регистрация</span>
				<span className={s.item2}>
				<span>Имя</span>
				<input  type="name" pattern="[A-Za-zА-Яа-яЁё]+"  minLength={3} maxLength={16} name="name" placeholder="Имя..." />
				</span>
				<span className={s.item2}>
				<span>Email</span>
				<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" minLength={9} placeholder="Email..." name="email"/>
				</span>
				<span className={s.item2}>
				<span>Пароль</span>
				<input type="password" minLength={6} placeholder="Пароль..." name="password"/>
				</span>
				<span className={s.item2}>
				<span>Возрост</span>
				<input  type="number" min="16" max="100" pattern="[1-9][0-9]?|100" placeholder="Возрост..." name="age"/>
				</span>
				<span className={s.item3}><input type="checkbox" name="checkbox"/>Соглашусь с правилами сайта</span>
				<button type="submit" >Регистрация</button>

			</form>
		</main>
		)
}

export default Registration;