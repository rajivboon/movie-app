import React from 'react'

class MovieList extends React.Component {

    shorthen = (text, maxLenght) => {
        if (text && text.length > maxLenght ) {
            return text.substr(0, maxLenght) + '...'
        }
        return text
    }

    renderMovies(whatEver) {          
        return whatEver.map(movie =>
            (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">{movie.name}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{this.shorthen (movie.description, 100)} </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating} </small>
                    </div>
                </div>
            </div> 
            )
        )       
    }

    render() {  
        const {whatEver} =this.props        
        return (           
            <React.Fragment>  
                { this.renderMovies (whatEver) }               
            </React.Fragment>         
        )
    }
}
export default MovieList