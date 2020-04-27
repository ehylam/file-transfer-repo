import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import Person from './Person/Person';

// Functional based components
// When updating state, all of the state data must be included in the handler. Else you can create multiple useState().
// const App = props => {
// 	const [covState, setCovState] = useState({
// 		covData: {}
// 	});

// 	useEffect(() => {
// 		const test = async () => {
// 			const response = await fetch('https://api.covid19api.com/summary').then(res => res.json());
// 			setCovState(response);
// 		};

// 		// setCovState(test);
// 		test();
// 	}, []);
// 	// console.log(covState.Countries);
// 	// const [otherState, setOtherState] = useState({ otherState: 'Some other value' });
// 	// console.log(personState, otherState);

// 	// const switchNameHandler = () => {
// 	// 	setPersonState({
// 	// 		person: [{ name: 'Eric', age: 28 }, { name: 'Manus', age: 29 }, { name: 'Stephine', age: 22 }]
// 	// 	});
// 	// };

// 	// const switchOtherHandler = () => {
// 	// 	setOtherState({
// 	// 		otherState: 'No other state'
// 	// 	});
// 	// 	console.log(otherState);
// 	// };
// 	const renderData = [];
// 	setTimeout(() => {
// 		console.log(covState.Countries[0]);

// 		for (let i = 0; i <= covState.Countries.length; i++) {
// 			renderData.push(<div>{covState.Countries[i]}</div>);
// 			console.log(covState.Countries[i]);
// 		}
// 	}, 1000);
// 	return (
// 		<div className="App">
// 			{/* <Person name={covState.Countries.Country} /> */}
// 			{/* <h1>Hello</h1>
// 			<p>This is really working!</p>
// 			<button onClick={switchNameHandler}>Switch Name</button>
// 			<button onClick={switchOtherHandler}>Change State</button>
// 			<Person name={personState.person[0].name} age={personState.person[0].age} />
// 			<Person name={personState.person[1].name} age={personState.person[1].age} />
// 			<Person name={personState.person[2].name} age={personState.person[2].age} /> */}
// 		</div>
// 	);
// };

// Class based components
class App extends Component {
	state = {
		person: [
			{ id: '12jd', name: 'Max', age: 28 },
			{ id: '123d', name: 'Manus', age: 29 },
			{ id: '123', name: 'Stephine', age: 26 }
		],
		otherState: 'Hello',
		showPersons: false
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	nameChangedHandler = (event, id) => {
		// Getting the input's ID, use findIndex of the state data we
		// then return where the selected input is true to the current state data
		const personIndex = this.state.person.findIndex(p => {
			return p.id === id;
		});

		// We assign person to a spread operated that selects the index of the selected person
		const person = { ...this.state.person[personIndex] };
		// then assigning it to the input data
		person.name = event.target.value;
		// we then create a new array called persons
		const persons = [...this.state.person];
		// again assigning the new changed person state data from the input
		persons[personIndex] = person;
		// we then update the state with it.
		this.setState({
			person: persons
		});
	};

	deletePersonHandler = personIndex => {
		const persons = this.state.person;
		// const persons = [...this.state.person];
		console.log(persons);
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	render() {
		let persons = null;
		let nonPersons = null;

		if (this.state.showPersons) {
			persons = (
				<div className="">
					{this.state.person.map((persons, index) => {
						return (
							<Person
								key={persons.id}
								click={() => this.deletePersonHandler(index)}
								name={persons.name}
								age={persons.age}
								changed={event => this.nameChangedHandler(event, persons.id)}
							/>
						);
					})}
				</div>
			);
		} else {
			nonPersons = <div className="">Hello</div>;
		}
		return (
			<div className="App">
				<h1>Hello</h1>
				<p>This is really working!</p>
				{/* Using an arrow function, it implicitly adds a return */}
				<button onClick={this.togglePersonsHandler}>Toggle Persons State</button>
				{persons}
				{nonPersons}
			</div>
		);
	}
}

// <Person name={this.state.person[0].name} age={this.state.person[0].age} />
// {/* Passing methods as props into the component */}
// <Person
// 	name={this.state.person[1].name}
// 	age={this.state.person[1].age}
// 	// Bind is recommended.
// 	// click={this.switchNameHandler.bind(this, 'Max!')}
// 	// changed={this.nameChangedHandler}
// />
// <Person name={this.state.person[2].name} age={this.state.person[2].age} />

export default App;
