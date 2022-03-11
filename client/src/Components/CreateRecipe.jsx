import React from 'redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function CreateRecipe() {
    const diets = useSelector(state => state.diets)
    const [recipe, setRecipe] = useState({
        title: "",
        score: "",
        healthScore: "",
        summary: "",
        image: "",
        diets: [],
        steps: []
    })

    const handleChange = (e) => {
        e.preventDefault()
        console.log({ ...recipe })
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e) => {
        e.preventDefault();
        (e.target.value === 'Diets types')
            ? e.target.value = ""
            : setRecipe({
                ...recipe,
                diets: [...recipe.diets, e.target.value]
            })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const step = e.lenght;
        (step === recipe.steps)
            ? step = step - 1
            : setRecipe({
                ...recipe,
                steps: [...recipe.steps, e.target.value]
            })
        console.log(step)
        console.log(recipe.steps)
    }

    const handleDelete = (diet) => {
        setRecipe({
            ...recipe,
            diets: recipe.diets.filter(e => e !== diet.e)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...recipe })
        setRecipe({
            title: "",
            score: "",
            healthScore: "",
            summary: "",
            image: "",
            diets: [],
            steps: []
        })
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Create recipe</h2>
                <label>Title: <input placeholder='Title of recipe' type='text' name='title' onChange={handleChange}></input></label>
                <label>Score: <input placeholder='Score' min='0' max='100' type='text' name='score' onChange={handleChange}></input></label>
                <label>Health Score: <input placeholder='Health score' min='0' max='100' type='text' name='healthScore' onChange={handleChange}></input></label>
                <label>Image: <input placeholder='Image URL' type='url' name='image' onChange={handleChange}></input></label>
                <label>Summary: <input placeholder='Summary' type='textarea' name='summary' onChange={handleChange} required></input></label>
                <select onChange={handleSelect}>
                    <option>Diets types</option>
                    {
                        diets?.map(e => {
                            return <option key={e.id} value={e.name} >{e.name}</option>
                        })
                    }
                </select>

                <button type='submit'>Create Recipe</button>
            </form>

            <form onSubmit={handleClick}>
                <label>Steps: <input placeholder='Add step' type='text' name='steps' onChange={handleClick}></input></label>
                <button type='submit'>Add step</button>
            </form>

            <div>

                <h2>Preview</h2>
                {
                    (recipe.image === "")
                        ? <p>¡Aqui se mostrara su imagen!</p>
                        : <img src={recipe.image} alt='img' />
                }
                <span>Title: </span><p>{recipe.title}</p>
                <span>Score: </span><p>{recipe.score}</p>
                <span>Health Score: </span><p>{recipe.healthScore}</p>
                <span>Summary: </span><p>{recipe.summary}</p>
                <div>
                    <ul>
                        <li>
                            {
                                (recipe.diets.length !== 0)
                                    ? recipe.diets.map((e) =>
                                        <p>
                                            <button onClick={() => handleDelete({ e })}>X</button>
                                            {e}
                                        </p>
                                    )
                                    : <p>Aun no se agrego ningun tipo de dieta</p>
                            }
                        </li>
                    </ul>
                </div>
            </div>







            <Link to={'/home'}>
                <button type='submit'>Go back</button>
            </Link>
        </>
    )
}