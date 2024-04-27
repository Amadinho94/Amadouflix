import {useState, useEffect} from 'react'
// import {useSelector} from "react-redux"

const Contact = () => {
    
    // const data = useSelector(state => state.movies)
    
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
    
    
    const [userAvis, setUserAvis] = useState({
        userPseudo : "",
        userMovie : "",
        userMessage : ""
    })
    
    const handleChange = (e) => {
        const {value, name} = e.target
        setUserAvis({...userAvis, [name] : value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (userAvis.userPseudo.trim() !== "" 
        && userAvis.userMovie.trim() !== ""
        && userAvis.userMessage.trim() !== "") {
            let userDataToLS = {username : userAvis.userPseudo.trim(), movie : userAvis.userMovie.trim(),
            message : userAvis.userMessage.trim()}
            setUserAvis({...userAvis, userPseudo : "",userMovie : "",userMessage : ""})
            const getAllUserAvis = JSON.parse(window.localStorage.getItem("userAvis")) || []
            getAllUserAvis.push(userDataToLS)
            window.localStorage.setItem("userAvis",JSON.stringify(getAllUserAvis))
        }
        
    }

    
    return (
       <main className="main-container">
         <form className="contact-form" onSubmit={handleSubmit}>
             <div>
                <label htmlFor="userPseudo"> Votre nom d'utilisateur </label>
             </div>
             <div className="contact-input-div">
                <input placeholder="Veuillez saisir votre nom d'utilisateur"  value={userAvis.userPseudo.trim()} name="userPseudo" type="text" onChange={handleChange} />
             </div>
             
             <div>
                 <label htmlFor="userMovie"> Sélectionnez le film </label>
             </div>
             
             <div className="contact-input-div">
                <select className="contact-select" value={userAvis.userMovie} name="userMovie" onChange={handleChange}>
                   <option defaultValue> --- </option>
                   {data.map((oneMovie, index) => (
                     <option value={oneMovie.title}> {oneMovie.title} </option>
                   ))}
                   
                </select>
             </div>
             
             <div>
                 <label htmlFor="userMessage"> Votre avis sur ce film </label>
             </div>
             
             <div className="contact-input-div">
                <textarea placeholder="Votre commentaire sur le film" value={userAvis.userMessage} type="text" name="userMessage" onChange={handleChange} />
             </div>
             
             <button> VALIDER </button>
         </form>
       </main>
    )
}

export default Contact