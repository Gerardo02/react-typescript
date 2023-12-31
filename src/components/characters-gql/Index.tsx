import Characters from "./Characters";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../queries";
import ICharacters from "../../interfaces/ICharacters";

const Index = () => {

    const [dataGql, setDataGql] = useState<ICharacters[]>([])

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
            <Characters dataGql={dataGql} />
        </>
     );
    
}
 
export default Index;