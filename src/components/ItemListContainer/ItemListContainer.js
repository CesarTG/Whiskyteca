export const ItemListContainer = (props) => {

    const {texto} = props;   
    return <section>
        <Textual parrafo={texto}/>
    </section>
}

const Textual = (props) => {

    return<>
    <h2>{ props.parrafo}</h2>
    </>
}