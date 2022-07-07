import { Formik , Form , Field  } from 'formik'
import React from 'react'
import Button from '@mui/material/Button';
import * as Yup from "yup"
import { registerUserAsync } from '../redux/actions/actionsRegister';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    nombre: Yup.string().min(2, 'Nombre muy corto').max(20, 'Nombre muy Largo').required("Este nombre es requerido"),
    email: Yup.string().email('debe ser del tipo ana@ana.com').required("Este email se requiere"),
    pass1: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy Largo').required("este campo es obligatorio").oneOf([Yup.ref('pass2')], 'Los Password No coinciden'),
    pass2: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy Largo').required("este campo es obligatorio").oneOf([Yup.ref('pass1')], 'Los Password No coinciden')
})

export default function RegisterUser() {

  const dispatch = useDispatch()

    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  return (
    <div>
    <h1>Registrar Usuario</h1>
    <Formik
        initialValues={
            {
                nombre:"",
                email:"",
                pass1:"",
                pass2:""
            }
        }
        validationSchema={SignupSchema}
        onSubmit={values => {
            console.log(values.nombre,values.email,values.pass1,values.pass2)
            dispatch(registerUserAsync(values.nombre,values.email,values.pass1))
          }}
    
    >
        {({errors,touched,handleReset})=>(
        <Form>
          <Field type="text" placeholder="Nombre" name="nombre"/>
          {errors.nombre && touched.nombre ? 
          (<div>{errors.nombre}</div>): null }

          {tab}
          <Field type="email" placeholder="Email" name="email"/>
          {errors.email && touched.email ? 
          (<div>{errors.email}</div>): null }

          {tab}
          <Field type="password" placeholder="password1" name="pass1"/>
          {errors.pass1 && touched.pass1 ? 
          (<div>{errors.pass1}</div>): null }

          {tab}
          <Field type="password" placeholder="password2" name="pass2"/>
          {errors.pass2 && touched.pass2 ? 
          (<div>{errors.pass2}</div>): null }
           {tab}

<Button variant="contained" color="success" type="submit">
  Registrar
</Button>
{tab}
<Button variant="contained" color="success" onClick={handleReset}>
  Reset
</Button>
<Link  to="/login" style={{color: "green"}}>
                        <Button variant="contained" color="success" type="submit" style={{margin: "2%"}}>
                            si ya tienes una cuenta ingresa aqui
                        </Button>
                        </Link>
        </Form>
        )}
    </Formik>




    </div>
  )
}
