import React, { useState } from 'react'

const Form = () => {

    const [dataToUpdate, setDataToUpdate] = useState({
        FlightNumber: ''
    })
    const [info, setInfo] = useState({});
  
    const updateGateData = async() => {
      try{
        const { data } = await axios.put(`https://airport.free.beeceptor.com/api/Gate`, dataToUpdate);
        setInfo(data);
      }catch(err){
        console.log(err);
      }
    }
   
  
  return (
    <form onSubmit={updateGateData}>
        <input type="text" placeholder='Numero de vuelo' />
        <button>Guardar</button>
    </form>
  )
}

export default Form