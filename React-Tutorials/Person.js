import React from 'react';
import './Person.css';

const person = props => {
	return (
		<div className="hello">
			<p onClick={props.click}>
				I'm a {props.name} and I am {props.age} years old.
			</p>
			<p>{props.children}</p>
			{/* 2 way binding */}
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
