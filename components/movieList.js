import React from 'react'

class MovieList extends React.Component {

    renderMovies() {
        const {whatEver} =this.props     
        const movieElements = whatEver.map(movie =>
            (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">{movie.name}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{movie.description} </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating} </small>
                    </div>
                </div>
            </div> 
            )
        )
        return movieElements
    }

    render() {       
        return (           
            <React.Fragment>  
                { this.renderMovies () }               
            </React.Fragment>         
        )
    }
}
export default MovieList