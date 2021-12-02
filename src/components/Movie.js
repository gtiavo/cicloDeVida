import React, {Component} from 'react';

import MovieList from './MovieList';

class Movie  extends Component{
	constructor(){
		super()
		this.state = {
			allMovies: []
		}
	}
	apiCall(url, consecuencia){
		fetch(url)
		.then(response => response.json())
		.then(data => consecuencia(data))
		.catch(error => console.log(error))
	}
	componentDidMount(){
		this.apiCall('/api/movies', this.mostrarMovies)
	}
	 mostrarMovies = (data)=>{
		this.setState({
			allMovies: data.data
		})
	}

	componentDidUpdate(){

	}
	render() {

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</tfoot>
							{
								this.state.allMovies.map((movies, i) =>{
								return < MovieList {...movies} key = {i} />
							} )
							}
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	}
}
export default Movie;