import styles from './ReadMore.module.scss';
const ReadMore = ({ setIsCollapse, isCollapse }) => (
	<button
		aria-label={isCollapse ? 'read more' : 'read less'}
		name="read-More"
		className={styles.btn}
		onClick={() => setIsCollapse(!isCollapse)}
	>
		{isCollapse ? 'Read More >>> ' : 'Read Less <<< '}
	</button>
);
export default ReadMore;
