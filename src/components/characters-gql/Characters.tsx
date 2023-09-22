import { Card, Image, Space } from "antd";
import ICharacters from "../../interfaces/ICharacters";

const Characters = (props: { dataGql: ICharacters[] }) => {

    const characters: ICharacters[] = props.dataGql

    return ( 
        <>
            {/* <button onClick={() => console.log(characters[0])}>prueba</button> */}
            <Space direction="vertical" size={16}>
                {
                    characters.map((e: ICharacters )=> (
                        <Card key={e.id} title={e.name} style={{ width: 300 }}>
                            <Image src={e.image} />
                            <p><strong>Species: </strong>{e.species}</p>
                        </Card>
                    ))
                }
                
            </Space>
            
        </>
     );
}
 
export default Characters;