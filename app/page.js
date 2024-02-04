import LikeButton from "./like-button";

function Header({title}){
return <h1>{title ? title : 'default title'}</h1>;
}

export default function HomePage(){


    return (
        <div>
        <Header title="Develop. Preview. Ship" />
        <Ul />
        <LikeButton/>
    </div>
    );
}

function Ul(){
    const names = ['Davin', 'Gavin', 'Mavin', 'Haven', 'Lovelife'];
    return (<ul>
        {names.map((name) => (
        <li key={name}>{name}</li>
        ))}
    </ul>)
}