
import React, { useEffect } from "react";
import axios from "axios";



function AxiosComponente(){

    useEffect(() => {
        axios
          .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
          .then((response) => console.log(response.data))
          .catch((error) => console.error(error));
      }, []);
    
    //   export const apiCase = axios.create({
    //     baseURL: 'http://localhost:3004/',
    //     headers: {'Content-Type': 'application/Json'}
    //   });
    

    return(
        <>
        </>
    )
}

export default AxiosComponente