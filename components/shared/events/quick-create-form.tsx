'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createEvent } from '@/lib/actions/event.actions';
import { insertEventSchema } from '@/lib/validators';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const QuickCreateForm = () => {
  const form = useForm<z.infer<typeof insertEventSchema>>({
    resolver: zodResolver(insertEventSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertEventSchema>> = async (
    data
  ) => {
    console.log(data);
    const res = await createEvent(data);
    if (res.success) {
      toast.success(res.message as string);
      form.reset();
    } else {
      toast.error(res.message as string);
    }
  };
  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Input
        placeholder="Event Name"
        {...form.register('name')}
        className="w-full"
      />
      <Input
        type="date"
        placeholder="Date"
        {...form.register('date')}
        className="w-full"
      />
      <Input
        type="type"
        placeholder="Type"
        {...form.register('type')}
        className="w-full"
      />

      <Button type="submit" className="btn btn-primary w-full">
        Create Event
      </Button>
    </form>
  );
};

export default QuickCreateForm;
