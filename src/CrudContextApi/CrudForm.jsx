import React,{useContext, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import CrudContext from './Context/CrudContextApi';

const initialForm={
    marca:"",
    modelo:"",
    transmision:"",
    precio:"",
    puertas:"",
    color:"",
    year:"",
    id:null,



};

function CrudForm() {

    const {createData,updateData,dataToEdit,setDataToEdit,texts} =useContext(CrudContext);

    const[form,setForm]=React.useState(initialForm);
    let history= useHistory();

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm)
        }
    
    },[dataToEdit]);
    
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
        history.push("/")

    }
   
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!form.marca || !form.modelo){
         alert("Datos Incompletos")
         return;
     }else if(!form.transmision || !form.precio){
         alert("Datos Incompletos")
         return;
     }else if(!form.puertas || !form.color || !form.year){
         alert("Datos Incompletos")
         return;
     }

     if(form.id ===null){
         createData(form);
         
     }else{
         updateData(form);

     }

     handleReset();
     

    };
    const toInputUppercase = e => {
        e.target.value = ("" + e.target.value).toUpperCase();
      };

    return (
        <div >
        <h3>{dataToEdit ? "Editar Registro" :"Save Register"}</h3>
        <form onSubmit={handleSubmit} >
            
            <input type="text" name="marca" placeholder={texts.headerTitle5}
            value={form.marca}
            onChange={handleChange}/>
            <input type="text" name="modelo" placeholder={texts.headerTitle6}
            value={form.modelo}
            onChange={handleChange}
            onInput={toInputUppercase}
           />
            <input type="text" name="color" placeholder={texts.headerTitle7}
            value={form.color}
            onChange={handleChange}/>
            <input type="text" name="transmision" placeholder={texts.headerTitle8}
            value={form.transmision}
            onChange={handleChange}/>
            <input type="number" name="precio" placeholder={texts.headerTitle9}
            value={form.precio}
            onChange={handleChange}/>
            <input type="number" name="puertas" placeholder={texts.headerTitle10}
            value={form.puertas}
            onChange={handleChange}/>
            <input type="number" name="year" placeholder={texts.headerTitle11}
            value={form.year}
            onChange={handleChange}/>
            <button type="submit">{texts.headerTitle3}</button>
            <button type="reset" value="reset" onClick={handleReset}>{texts.headerTitle4}</button>
        </form>
    </div>
    )
}

export default CrudForm
