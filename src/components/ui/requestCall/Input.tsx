import cn from 'classnames';
import { Field } from 'formik';

type Props = {
  name: string
  error: string | undefined
  placeholder: string
}

export const Input: React.FC<Props> = ({ name, error, placeholder }) => {

  return <div className="relative mt-5">
    <Field
      className={cn(
        "text10-14 w-full border-b border-b-gray transition-colors placeholder:opacity-50 focus:outline-none sm:pb-1.5",
        error ? 'text-red-500 placeholder:text-red-500' : 'placeholder:text-gray',
      )}
      name={name}
      placeholder={placeholder}
    />
    {error ? <small className='text10-14 mt-3 text-red-500'>{error}</small> : null}
  </div>
};