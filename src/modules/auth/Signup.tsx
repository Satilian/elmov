import { Button } from 'components/Button';
import { Input } from 'components/Input';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'store';
import { CreateUserDto } from '../../../server/users/dto/create-user.dto';
import { signup } from './authState';

export const Signup = () => {
  const { register, handleSubmit } = useForm<CreateUserDto>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<CreateUserDto> = (data) => {
    dispatch(signup(data)).unwrap().then(console.log);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email', { required: true })} />

      <Input type="password" {...register('password', { required: true })} />

      <Button type="submit" block>
        Продолжить
      </Button>
    </form>
  );
};
