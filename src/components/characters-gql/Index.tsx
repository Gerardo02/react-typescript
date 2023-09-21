import Characters from "./Characters";
import { useState } from "react";
import { disableExperimentalFragmentVariables, useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../queries";

const Index = () => {

    const [dataGql, setDataGql] = useState<Object[]>([])

    const { loading } = useQuery(GET_CHARACTERS, {
        onCompleted: (data) => {
            console.log(data.characters.results)
            setDataGql(data.characters.results)
        },
        onError: (error) => {
            console.error(error)
        }
    })

    if(loading === true){
        return ( 
            <>
                <h1>Loading...</h1>
            </>
         );
    }

    return ( 
        <>
            <p></p>
            <Characters dataGql={dataGql} />
        </>
     );
    
}
 
export default Index;