import s from './Search.module.scss'
import { FaSearch } from "react-icons/fa";

const Search:React.FC = () => {
	return (
		<div className={s.megaContainer}>
		<span>
		<FaSearch />
		<input placeholder="Search..." type="search" />
		</span>
		</div>
		)
}

export default Search;