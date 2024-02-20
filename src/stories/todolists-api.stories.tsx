import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API',
}

const settings = {
    withCredentials: true,
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('new title for todolist')
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'cdafaed1-f1c3-46ee-bb53-72805508410d'
        todolistAPI.deleteTodolist(todolistId)
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'cdafaed1-f1c3-46ee-bb53-72805508410d'
        todolistAPI.updateTodolist(todolistId, 'NEW TITLE')
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}