
import React from "react"

const Reatividade = () => {
    const [items, setItems] = React.useState(["Item 1", "Item 2"])


    function handleClickReativo(){
        //Maneira Correta
        setItems([...items, "Novo item"])
    }

    return(
        <>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))} 
        <button onClick={handleClickReativo}>Adicionar</button>
        </>
    )
}

export default Reatividade