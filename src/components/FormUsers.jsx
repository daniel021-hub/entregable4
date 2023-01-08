import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: ""
}

const FormUsers = ({createUser, userUpdate, updateUser}) => {

  const {handleSubmit, register, reset} = useForm()

  const submitForm = (data) => {
    if(userUpdate){
      updateUser(userUpdate.id, data)
    }else{
      createUser(data)
    }
    reset(defaultValues)
  }

  const titleForm = userUpdate ? "Edit User" : "New User"
  const textButton = userUpdate ? "Edit User" : "Add new user"

  useEffect(() => {
    if(userUpdate){
      reset(userUpdate)
    }
  }, [userUpdate])

  return (
    <div className='container-form'>
      <form className='form' onSubmit={handleSubmit(submitForm)}>
        <h2 className='form_title'>{titleForm}</h2>
        <div className="form_div">
            <label className="form_label" htmlFor="">Email</label>
            <input className='form_input' placeholder='Enter your email' type="email" {...register("email")} />
        </div>
        <div className="form_div">
            <label className="form_label" htmlFor="">Password</label>
            <input className='form_input' placeholder='Enter your password' type="password" {...register("password")} />
        </div>
        <div className="form_div">
            <label className="form_label" htmlFor="">First Name</label>
            <input className='form_input' placeholder='Enter your first name' type="text" {...register("first_name")} />
        </div>
        <div className="form_div">
            <label htmlFor="">Last Name</label>
            <input className='form_input' placeholder='Enter your last name' type="text" {...register("last_name")} />
        </div>
        <div className="form_div">
            <label className="form_label" htmlFor="">Birthday</label>
            <input className='form_input' type="date" {...register("birthday")} />
        </div>
        <button className="form_btn">{textButton}</button>
    </form>
    </div>
  )
}

export default FormUsers
