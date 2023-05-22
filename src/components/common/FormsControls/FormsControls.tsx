import styles from './FormsControls.module.css'


// @ts-ignore
const FormControl=({input, meta,child, ...props})=>{
    const hesError=meta.touched && meta.error
    return (
        <div className={styles.formControl + '' + (hesError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hesError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props:any) => {
    const {input,meta,child, ...restProps}=props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props:any) => {
    const {input,meta,child, ...restProps}=props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}