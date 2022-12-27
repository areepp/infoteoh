import { Controller, FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { ITryout } from '../../lib/tryout.service'
import { FormInputs } from '../../pages/tambah-tryout'

interface InputProps {
  register: UseFormRegister<FormInputs>
  id:
    | 'penyelenggara'
    | 'mulaiPendaftaranDate'
    | 'akhirPendaftaranDate'
    | 'mulaiPengerjaanDate'
    | 'akhirPengerjaanDate'
    | 'link'
  labelText: string
  placeholder: string
  errors: Partial<
    FieldErrorsImpl<{
      penyelenggara: string
      mulaiPendaftaranDate: Date
      akhirPendaftaranDate: Date
      mulaiPengerjaanDate: Date
      akhirPengerjaanDate: Date
      link: string
    }>
  >
}

const Input = ({
  register,
  id,
  labelText,
  placeholder,
  errors,
}: InputProps) => {
  return (
    <div className="mt-4">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        className="mt-1 w-full pl-2 p-1 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
        placeholder={placeholder}
        type="text"
        {...register(id, { required: true })}
      />
      {errors[id] && <span className="text-xs">lengkapi data ini</span>}
    </div>
  )
}

export default Input
