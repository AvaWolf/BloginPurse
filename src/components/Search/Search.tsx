import s from './Search.module.scss'

const Search:React.FC = () => {
	return (
		<div className={s.megaContainer}>
			<input placeholder="Search..." type="search" />
		</div>
		)
}

export default Search;