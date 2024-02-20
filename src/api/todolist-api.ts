import axios from 'axios'

type ResponseType<D= {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: D
}

type UpdateTodolistResponseType = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: {}
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: {}
}

type FieldErrorType = {
    error: string
    field: string
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
})

export const todolistAPI = {

    getTodolists() {
        return instance.get<TodolistType[]>(
            'todo-lists')
    },

    createTodolist(newTodolistTitle: string) {
        return instance.post<ResponseType<{item: TodolistType}>>('todo-lists',
            {title: newTodolistTitle})
    },

    deleteTodolist(todolistId: string) {
        return  instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    },

    updateTodolist(todolistId: string, title: string) {
        return  instance.put<ResponseType<{}>>(
            `todo-lists/${todolistId}`,{title})
    }
}