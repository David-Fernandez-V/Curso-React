export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () =>{
        setCharacters(null)
    }

    return (
        <div className="characters">
            <h1>Personajes Encontrados</h1>
            <span className="back-home" onClick={resetCharacters}>Back Home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div><img src={character.image} alt={character.name}/></div>
                        <div>
                            {character.name}
                            <br></br><br></br>
                           <h6>
                                {character.status==="Alive" ? (
                                    <>
                                        <span className="alive"/>
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"/>
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodes: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Species: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Back Home</span>
        </div>
    );
}
