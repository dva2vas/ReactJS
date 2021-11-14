import React from 'react';
import './App.css';
import img from '../src/find.jpg';

import Post from './post/Post'
import guests from './guests.json';



class App extends React.Component {

	state = {
			search : "",
			guests
		}



	changeHandler = (event) => {
		this.setState({
			search: event.target.value,
		});

		this.setState({
			guests: this.state.search.length > 0
				? guests.filter(guest => [guest.name, guest.address, guest.phone].toString().toUpperCase().indexOf(event.target.value.toUpperCase()) > -1)
				: guests
		});

		console.log(this.state)
		this.setState();
	}

	render = () => {
		const { search, guests } = this.state;

		return (
			<>
				<div className='list_guests'>
					<div className="header" align="center">
						<h1 id="title1">Список гостей</h1>
						<s id="title2">Список жертв</s>
						<div>
							<img src={img} alt="Поиск гостей ...."></img>
						</div>

					</div>
					<div >
						<input id="inputSearch"
							onChange={this.changeHandler}
							placeholder="Найти..."
							value={search}
						/>
					</div>
					{guests.map(({ name, company, email, phone, address }, _id) =>
						<Post
							key={_id}
							name={name}
							company={company}
							phone={phone}
							address={address}
						/>
					)}
				</div>
			</>
		);
	}

}


export default App;
