import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value.trim()
        if (inputValue) {
            setName(inputValue)
            setError("")
        } else {
            setName("")
            setError("empty name is blocked")
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello: "${name}" !`)
        setName("")
    }

    const pressBoard = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && name) {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressBoard={pressBoard}
        />
    )
}

export default GreetingContainer
