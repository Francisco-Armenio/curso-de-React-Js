import React from 'react'

const Contador = () => {
    const [Contador, setContador] = useState(1);

    const handleClickButton = () => {
        setContador ( (prevState) => prevState + 1)
    }

    useEffect(()=>{
        const botonSumar = document.getElementById("sumar")

        botonSumar.addEventListener("click", handleClickButton)

        return () => {
            botonSumar.removeEventListener( "click", handleClickButton)
        }
    },[])

  return (
    <div>
        <p>{Contador}</p>
        <button id="sumar">+</button>
    </div>
  )
}

export default Contador
