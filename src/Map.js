import React, { useState } from 'react'
import './Map.css'

const Map = () => {
    
    const [FullName, setFullName] = useState({
        name:"",
        age: "",
        qual:""
    });

    const inputEvent = ( e ) => {
        const { name, value } = e.target;
        setFullName((preValue)=>{
            console.log("This is name : ",name)
            console.log("This is value : ",value)
            return{
                ...preValue,
                [name] : value,
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Entered")
    };

    return(
                <>
                
                <div className="center">
                    <form onSubmit={onSubmit}>
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Qualification</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                               <td ><h1>{FullName.name}</h1></td>
                               <td ><h1>{FullName.age} </h1></td>
                               <td ><h1>{FullName.qual}</h1></td>
                            </tr>
                            <tr>
                               <td><input type="text" name="name" value={FullName.name} onChange={inputEvent}/></td>
                               <td><input type="text" name="age" value={FullName.age} onChange={inputEvent}/> <br/> </td>
                               <td><input type="text" name="qual" value={FullName.qual} onChange={inputEvent}/></td>
                            </tr>
                            </tbody>
                            
                        </table>
                        {/* <div>Name : <input type="text" name="name" value={FullName.name} onChange={inputEvent}/></div>
                        <div>Age : <input type="text" name="age" value={FullName.age} onChange={inputEvent}/></div>
                        <div>Qualification : <input type="text" name="qual" value={FullName.qual} onChange={inputEvent}/>
                        </div> */}
                        {/* <button className="bcenter" >Submit</button> */}
                    </form>
                </div>
                </>
    );
}

export default Map