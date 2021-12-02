
import React, {Component} from 'react';
import Genre  from './Genre';

// let genres = [
//     {genre: 'Acción'},
//     {genre: 'Animación'},
//     {genre: 'Aventura'},
//     {genre: 'Ciencia Ficción'},
//     {genre: 'Comedia'},
//     {genre: 'Documental'},
//     {genre: 'Drama'},
//     {genre: 'Fantasia'},
//     {genre: 'Infantiles'},
//     {genre: 'Musical'}
// ]

class GenresInDb  extends Component {
    constructor(props){
        super(props)
        this.state = {
            genresList : []
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
        .then(response =>  response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    componentDidMount(){
       this.apiCall('/api/genres', this.traerLista)
    }
    traerLista = (data) =>{
        console.log(data)
        return this.setState({
            genresList: data.data
        })

        
    }

    render(){
        let cambio = ()=>{document.querySelector('.algo').classList.replace('card-body','bg-secondary' ) }

       
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={cambio}>Genres in Data Base</h6>
                        </div>
                        <div className="card-body algo">
                            <div className="row">
                                {/* {
                                    genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                } */}
                 {
                 this.state.genresList.map((genre, index)=>{
            return <Genre {...genre} key = {index} />
                  })}
                            </div>
                        </div>
      
                    </div>
                </div>
           
        </React.Fragment>
    )
                            }
}
export default GenresInDb;