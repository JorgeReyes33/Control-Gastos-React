import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto valido')

            return
        }

        setMensaje('')
        setIsValidPresupuesto(true)




    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='Number'
                    placeholder='Agrega tu presupuesto'
                    value={presupuesto}
                    //onChange para actualizar el state
                    onChange={ (e) => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type='submit' value='Agregar' />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        </form>
      
    </div>
  )
}

export default NuevoPresupuesto
