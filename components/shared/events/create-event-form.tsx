'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { insertEventSchema } from '@/lib/validators';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateEventForm = () => {
  const form = useForm<z.infer<typeof insertEventSchema>>({
    resolver: zodResolver(insertEventSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertEventSchema>> = (data) => {
    console.log('Form submitted');
    console.log(data);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <Input
          placeholder="Event Name"
          {...form.register('name')}
          className="w-full"
        />
        <Button variant="destructive" type="submit">
          Create Event
        </Button>
      </form>
    </>
  );
};

export default CreateEventForm;
