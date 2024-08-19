import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    const onDelete = (category) => {
        const neWCategories = categories.filter(cat => cat != category)
        setCategories(neWCategories)
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewValue={onAddCategory}
            />

            {
                categories.map(category =>
                (<>
                    <GifGrid key={category} category={category} />
                    <button key={category + "b"} className="buttonClass" onClick={() => onDelete(category)}>Eliminar</button>
                </>
                )
                )
            }

        </>
    )
}
