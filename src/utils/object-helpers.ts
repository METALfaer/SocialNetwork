import {InitialStateType} from "../redux/users-reducer";

export const updateObjectInArray = (items: Array<InitialStateType>, itemId: number, objPropName: keyof InitialStateType, newObjProps: Partial<InitialStateType>) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}