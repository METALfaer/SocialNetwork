import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import React from "react";


// @ts-ignore
const FormControl = ({input, meta: {touched, error}, children}) => {
    const hesError = touched && error
    return (
        <div className={styles.formControl + '' + (hesError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hesError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const createFild = (placeholder?: any | null, name?: any,
                           validators?: any, component?: any,
                           props?: any, text?: any) => (
    <div>
        <Field placeholder={placeholder} validate={validators}
               name={name} component={component} {...props}/>
        {text}
    </div>
)
