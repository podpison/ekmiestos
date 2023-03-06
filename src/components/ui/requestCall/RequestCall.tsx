import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Button';
import { Input } from './Input';
import "yup-phone";
import cn from 'classnames';
import { HugeO } from '../HugeO';

type Props = {
  heading: string
}

const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .phone()
    .required('Required'),
  country: Yup.string()
    .min(4, 'Too short!')
    .min(20, 'Too long!'),
  comment: Yup.string()
    .min(2, 'Too short!')
    .max(300, 'Too long!'),
  termsOfUse: Yup.boolean().required('Required')
});

const initialValues = {
  firstName: '',
  phone: '',
  country: '',
  comment: '',
  termsOfUse: true,
};

export const RequestCall: React.FC<Props> = ({ heading }) => {
  return <div className='relative w-full max-w-[470px] bg-white pt-5 pb-4 px-9 max-sm:mx-auto sm:ml-auto sm:pt-6 sm:px-10 md:pt-7 md:px-12'>
    <HugeO className='-left-20 -top-9' />
    <h6 className='text-orange'>Заполните форму</h6>
    <h2 className="text20-28 uppercase mt-2.5 sm:mt-4">{heading}</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => {
        return <FormikForm>
          <Input
            name='firstName'
            placeholder='Ваше имя*'
            error={(errors.firstName && touched.firstName) ? errors.firstName : undefined}
          />
          <Input
            name='phone'
            placeholder='Ваш номер телефона*'
            error={(errors.phone && touched.phone) ? errors.phone : undefined}
          />
          <Input
            name='country'
            placeholder='Страна'
            error={(errors.country && touched.country) ? errors.country : undefined}
          />
          <Input
            name='comment'
            placeholder='Комментарий'
            error={errors.comment && touched.comment ? errors.comment : undefined}
          />
          <div className='grid grid-cols-[max-content_1fr] items-center gap-x-2.5 cursor-pointer mt-4'>
            <Field className={cn(
              'relative appearance-none border w-4 h-4',
              values.termsOfUse && 'before:block before:absolute before:-right-[30%] before:bottom-[45%] before:w-[115%] before:h-[55%] before:rotate-[316deg] before:border-l-2 before:border-b-2 before:border-light-gray',
              'border-[#D1D1D1]',
              // !values.termsOfUse ? 'border-red-500' : 'border-[#D1D1D1]'
            )} checked={values.termsOfUse} name='termsOfUse' type='checkbox' id='requestCallTermsOfUse' />
            <label className='text10-14 opacity-50 max-w-[20em]' htmlFor='requestCallTermsOfUse'>Подтверждая заказ, я принимаю условия пользовательского соглашения</label>
          </div>
          <Button className='mt-7 mx-auto' isOrange>Запросить звонок</Button>
        </FormikForm>
      }}
    </Formik>
  </div>
};