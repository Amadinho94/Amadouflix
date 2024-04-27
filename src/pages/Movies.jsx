import {useState, useEffect} from 'react'

const Movies = () => {
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg'
          }
        };
        
        
        fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
          .then(response => response.json())
          .then(response => {
            setData(response.results)
             
          })
          .catch(err => console.error(err));
    }, [])
    
    
    return (
       <main className="main-container">
         <h1> LISTE DES FILMS </h1>
         
         <article>
            {data.map((oneMovie, index) => (
               <section className="movie-card" key={index} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path})` }}>
                  <div>
                  <img className="img-responsive" src={`https://image.tmdb.org/t/p/original/${oneMovie.poster_path}`} alt={oneMovie.title}/> 
                  </div>
                  
                  <div>
                  <h1 className="card-title" >{oneMovie.title}</h1>
                  <h1>Date de sortie {new Date(oneMovie.release_date).toLocaleDateString()}</h1>
                  <h1>RESUME :</h1>
                  <p>{oneMovie.overview}</p>
                  <p className="card-vote">Nombre de vote <span>{oneMovie.vote_count}</span></p>
                  <p className="card-vote">Note moyenne de <span>{(oneMovie.vote_average).toFixed(2)}</span></p>
                  </div>
               </section>
            ))}
         </article>
         
       </main>
    )
}

export default Movies