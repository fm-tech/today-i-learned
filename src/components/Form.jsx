import { useState } from "react"

const Form = () => {

    const [] = useState('')

    return (
        <div>
            <form>
                <input type="text"/>
                <input type="text"/>
                <select type="select">
                    <option value="technology" >Technology</option>
                    <option value="finance" >Finance</option>
                </select>
                <button>Post</button>
            </form>
        </div>
    )
}

export default Form