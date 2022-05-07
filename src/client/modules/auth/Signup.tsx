import { Button } from 'client/components/Button';
import { Input } from 'client/components/Input';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'client/store';
import { signup } from './authState';

export const Signup = () => {
  const { register, handleSubmit } = useForm<any>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<any> = (data) => {
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
