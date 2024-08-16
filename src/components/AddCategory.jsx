import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {

    const [inputValue, setinputValue] = useState("")

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }


    const onSubmint = (event) => {
        event.preventDefault()
        const ValueTrim = inputValue.trim()
        if (ValueTrim.length <= 1) return
        onNewValue(ValueTrim)
        setinputValue("")
    }
    return (
        <form onSubmit={onSubmint}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
        </form>
    )
}
