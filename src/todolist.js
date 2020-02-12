import React, {Component} from 'react';

class Todolist extends Component{
	constructor(){
		super();
		this.state={
			userInput:"", //on créé un state vide car le client n'a encore rien écrit !!
			items:[]
		};
	}
	
 //onChange est une fonction qui est connecter avec le input, elle recoit un evenement qui update notre state userInput !!	
	onChange(event){ 
	//console.log(event.target.value);
		this.setState({
			userInput:(event.target.value)
		}, () => (console.log(this.state.userInput))) //ceci est un arrow function !!
	}
	
//on ajoute nos valeurs input à l'écran !! on créé une fonction.
	ajouter(event){
		event.preventDefault(); //pour que la page ne se recharge pas
		this.setState({
			userInput: "",  // afin que la champ redevienne vide 
			items: [...this.state.items, this.state.userInput] // mon tableau
		}, () => (console.log(this.state))) // pour voir en console 
	}	
	
	supprimer(event){
		event.preventDefault();
		const array = this.state.items;
		const index = array.indexOf(event.target.value);
		array.splice(index);
		this.setState({
			items: array
		});	
	}
	
	renderTodos(){
		return this.state.items.map((item) => {
			return (
				<div className="list-group-item" key={item}>
					{item} <button onClick={this.supprimer.bind(this)} className="btn btn-outline-danger btn-sm float-right">supprimer</button>
				</div>
			);
		});
	}

	render(){
		return(
			<div>
				<h1 align="center">REACT TODO-LIST</h1>
				<form className="form-row align-items-center">
					<input 
						value={this.state.userInput} 
						type="text" 
						placeholder="write something"		 
						onChange={this.onChange.bind(this)}
						className="form-control mb-2"
					/>   
					<button 
						onClick={this.ajouter.bind(this)}
						className="btn btn-primary"
						>Ajouter	
					</button>
				</form>
				<div>
					{this.renderTodos()}
				</div>
			</div>
		);
	}
}

export default Todolist