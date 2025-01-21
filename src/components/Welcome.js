export default function Welcome(props){
    
    const {message, name} = props;
    return (
        <div>
            <h1>Bienvenido {name}</h1>
            <p>{message}</p>
        </div>
    );
}