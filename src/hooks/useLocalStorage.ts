import { useState } from "react";

function useLocalStorage<T> (key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const storedItem = localStorage.getItem(key);
        return storedItem ? JSON.parse(storedItem) : initialValue;
    })

    const saveData = (data: T) => {
        try {
            localStorage.setItem(key, JSON.stringify(data))
            setStoredValue(data)
        }catch (error) {
            console.error('Error saving to local storage: ', error)
        }
    }
    return [storedValue, saveData] as const;
}
 
export default useLocalStorage;