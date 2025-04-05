'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { insertEventSchema } from '@/lib/validators';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateEventForm = () => {
  const form = useForm<z.infer<typeof insertEventSchema>>({
    resolver: zodResolver(insertEventSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertEventSchema>> = async (
    data
  ) => {
    console.log(data);
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <form
        className="space-y-4"
        method="Post"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Event Name"
          {...form.register('name')}
          className="w-full"
        />
        <Input
          placeholder="Description"
          {...form.register('description')}
          className="w-full"
        />
        <Input
          placeholder="Type"
          {...form.register('type')}
          className="w-full"
        />
        <Input
          placeholder="Date"
          {...form.register('date')}
          className="w-full"
        />
        <Input
          placeholder="Visibility"
          {...form.register('visibility')}
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
