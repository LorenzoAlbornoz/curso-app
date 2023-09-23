import * as yup from "yup"

export const REGISTRO_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido"),
    name: yup.string().max(25, "El maximo son 25 caracteres").min(5, "El minimo son 5 caracteres").required("El nombre completo es requerido"),
    password: yup.string().min(6, "El minimo es 6 caracteres").max(20, "El maximo es de 20 caracteres").required("La contraseña es obligatoria"),
    re_password: yup.string().oneOf([yup.ref("password")], "Las contraseñas no coinciden").required("Campo obligatorio")
})

export const LOGIN_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido"),
    password: yup.string().required("La contraseña es obligatoria"),
})