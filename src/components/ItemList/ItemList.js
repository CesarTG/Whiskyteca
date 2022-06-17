
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
            <Licor key={whisky.id} nombre={whisky.nombre} role={whisky.role} />))}
    </div>

    );

}

const Licor = ({ whisky }) => {
    return (<>
        <h4>{whisky.id}</h4>
        <h4>{whisky.nombre}</h4>
        <h3>{whisky.role}</h3>
        <button>Tomar</button>

    </>);
}

