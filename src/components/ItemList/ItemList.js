
const licores = [
    {
        id: 1,
        nombre: "Blenders",
        role: "Suave",
    },
    {
        id: 2,
        nombre: "Criadores",
        role: "Fuerte",
    },
    {
        id: 3,
        nombre: "Tocornal",
        role: "Asqueroso",
    },
];

export const ItemList = () => {

    return (<div>
        {licores.map((whisky) => (
            <Licor key={whisky.id} titulo={whisky.nombre} role={whisky.role} />))}
    </div>
    );
}

const Licor = ({id, nombre , role}) => {
    return (<>
        <h4>{id}</h4>
        <h4>{nombre}</h4>
        <h3>{role}</h3>
        <button>Tomar</button>

    </>);
}

