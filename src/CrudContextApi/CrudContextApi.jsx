import React, {createContext,useEffect } from "react";
import { services } from "../Services/Services";

const CrudContext = createContext();

function CrudProvider({children}){
    const [db, setDb] = React.useState(null);
    const [dataToEdit, setDataToEdit] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    let api = services();
    let url = "http://localhost:5000/autos";

    useEffect(() => {
        setLoading(true)
        services()
            .get(url).then((res) => {
                console.log(res);
                if (!res.err) {
                    setDb(res)
                    setError(null)
                } else {
                    setDb(null)
                    setError(res)
                }
                setLoading(false)
            });
    }, [url]);

    const createData = (data) => {
        data.id = Date.now();

        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };
        api.post(url, options).then((res) => {
            console.log(res)
            if (!res.err) {
                setDb([...db, res])

            } else {
                setError(res)
            }
        })


    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;

        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };
        api.put(endpoint, options).then((res) => {


            if (!res.err) {
                let newData = db.map((value) => (value.id === data.id ? data : value))
                setDb(newData)

            } else {
                setError(res)
            }

        })



    }
    const deleteData = (id) => {
        let isDelete = window.confirm(
            `Estas seguro de eliminar el registro con el Id'${id}'?`
        );



        if (isDelete) {
            let endpoint = `${url}/${id}`;
            console.log(endpoint)
            let options = {
                headers: { "content-type": "application/json" }
            };
            api.del(endpoint, options).then((res) => {


                if (!res.err) {
                    let newData = db.filter((value) => (value.id !== id))
                    setDb(newData)


                } else {
                    setError(res)
                }
            })

        } else { return; }


    }

    const data ={db,updateData,deleteData,createData,error,loading,dataToEdit,setDataToEdit}
    

    return(<CrudContext.Provider value={data}>{children}</CrudContext.Provider>

    );


}

export {CrudProvider}
export default CrudContext