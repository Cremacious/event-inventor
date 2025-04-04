import { z } from 'zod';

// export const insertEventSchema = z.object({
//   name: z.string().min(1, { message: 'Name is required' }),
//   description: z.string().min(1, { message: 'Description is required' }),
//   type: z.string().min(1, { message: 'Type is required' }),
//   date: z.string().min(1, { message: 'Date is required' }),
//   visibility: z.string().min(1, { message: 'Visibility is required' }),
// });

export const insertEventSchema = z.object({
  name: z.string().min(1, 'Event name is required'),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().min(3, 'Email must be at least 3 characters'),
    password: z.string().min(3, 'Password must be at least 3 characters'),
    confirmPassword: z
      .string()
      .min(3, 'Confirm password must be at least 3 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const signInFormSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(3, 'Email must be at least 3 characters'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
});
