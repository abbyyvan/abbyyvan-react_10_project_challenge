import {useEffect, useState} from 'react'

const NAME = 'code-'

export default function useLocalStorage(key, initialValue) {
    //use Key + name to create a key
    const codeKey = key + NAME

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(codeKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        
        if (typeof initialValue === 'function'){
            return initialValue()
        } else {
            return initialValue
        }
    
    })

    useEffect(() => {
        localStorage.setItem(codeKey, JSON.stringify(value));
      }, [codeKey, value]);
    
    return [value, setValue];
    
    
}