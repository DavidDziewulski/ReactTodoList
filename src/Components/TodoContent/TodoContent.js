import React, { useState } from 'react';
import styles from './TodoContent.module.scss';
import ReadMore from '../ReadMore/ReadMore';
const TodoContent = ({ content, maxLengthContent, id }) => {
	const isLengthContent = content.length > maxLengthContent;
	const [ isCollapse, setIsCollapse ] = useState(isLengthContent);
	const text = !isCollapse ? content : `${content.slice(0, maxLengthContent)}...`;
	return (
		<label htmlFor={id} className={styles.content}>
			<span>{text}</span>
			{isLengthContent && <ReadMore setIsCollapse={setIsCollapse} isCollapse={isCollapse} />}
		</label>
	);
};

export default TodoContent;
