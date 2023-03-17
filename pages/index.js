import { useState } from 'react';





function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);

    const names = ['Ada Lavelace', 'Grace Hopper', 'Margaret Hamilton'];

    const handleClick = () => {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="React 💙" />
            <Header />
            <Header title="I 💙 Fart" />
            <Header title="Develop. Preview. Ship.🚀" />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}