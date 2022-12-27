import { Control, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { FormInputs } from '../../pages/tambah-tryout'

interface Props {
  control: Control<FormInputs, any>
  id:
    | 'mulaiPendaftaranDate'
    | 'akhirPendaftaranDate'
    | 'mulaiPengerjaanDate'
    | 'akhirPengerjaanDate'
  placeholder: string
  addMarginTop?: boolean
}

const DateInput = ({ control, id, placeholder, addMarginTop }: Props) => {
  return (
    <Controller
      control={control}
      name={id}
      rules={{ required: true }}
      render={({ field }) => (
        <DatePicker
          dateFormat="dd/MM/yyyy"
          wrapperClassName={addMarginTop ? 'mt-2' : ''}
          placeholderText={placeholder}
          onChange={(date) => field.onChange(date)}
          selected={field.value}
        />
      )}
    />
  )
}

export default DateInput
