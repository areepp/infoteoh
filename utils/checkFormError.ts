import { FieldError } from 'react-hook-form'

export const checkFormError = (
  condition1: FieldError | undefined,
  condition2: FieldError | undefined,
) => {
  if (condition1 || condition2) {
    return true
  } else {
    return false
  }
}
