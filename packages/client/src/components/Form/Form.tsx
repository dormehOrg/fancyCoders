import { FC, useMemo, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { StFieldList, StFormSubtitle, StFormTitle } from './style';
import { CSSProp } from 'styled-components';
import { StFormContainer } from 'styles/global';

import Input from 'components/Input';
import { FormConfigType } from 'types';
import { LoginFormParams } from 'pages/LoginPage/LoginPage';
import { RegFormParams } from 'pages/RegistrationPage/RegistrationPage';
import { useAppDispatch } from '../../hooks/redux';
import { errorReset } from '../../store/auth/authSlice';
import { authState } from '../../hooks/authState';

export type DataType = LoginFormParams & RegFormParams;

type FormProps = {
  title?: string | ReactNode;
  subtitle?: string;
  fields: FormConfigType[];
  footer: ReactNode;
  handleFormSubmit: (data: DataType) => void;
  avatar?: ReactNode;
  className?: string;
  fieldListCss?: CSSProp;
  inputCss?: CSSProp;
  defaultValues?: Record<string, string>;
};

const Form: FC<FormProps> = ({
  title,
  subtitle,
  handleFormSubmit,
  footer,
  fields,
  avatar,
  className,
  fieldListCss,
  inputCss,
  defaultValues,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DataType>({
    mode: 'onBlur',
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
  });

  const dispatch = useAppDispatch();
  const { authError } = authState();

  const errorCancel = () => {
    if (authError) dispatch(errorReset());
  };

  return (
    <StFormContainer className={className}>
      {title && (
        <StFormTitle>
          {avatar}
          {title}
          {subtitle && <StFormSubtitle>{subtitle}</StFormSubtitle>}
        </StFormTitle>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} onClick={errorCancel}>
        <StFieldList css={fieldListCss}>
          {fields.map(({ name, ...rest }) => (
            <Input
              key={`input-${name}`}
              register={register}
              error={!!errors[name]?.message}
              errorMessage={errors[name]?.message?.toString()}
              inputCss={inputCss}
              name={name}
              {...rest}
            />
          ))}
        </StFieldList>
        {footer}
      </form>
    </StFormContainer>
  );
};

export default Form;
