import { useState } from 'react';

function Header({title}){
return <h1>{title ? title : 'default title'}</h1>;
}

export default function HomePage(){

    const [likes, setLikes] = useState(0);

    function handleClick(){
        setLikes(likes + 1);
    }

    return (
        <div>
        <Header title="Develop. Preview. Ship" />
        <Ul />
        <button onClick={handleClick}>Like ({likes})</button>
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

root.render(<HomePage />);