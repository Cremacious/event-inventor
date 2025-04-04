'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import flaskImage from '@/public/images/icons/flask-bubble.png';
import { useState } from 'react';

const PopForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="flex gap-2 justify-center items-center">
            <Plus className="w-5 h-5" />
            <span className="text-center">Quick Create</span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex gap-2 justify-center items-center">
                <Image
                  src={flaskImage}
                  alt="Flask Image"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              New Event
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="text-center">
                Create a new event quickly by filling out the form below. You
                can add more details later.
              </div>

              {/* <div className="flex flex-col gap-2 mt-4 justify-center items-center">
                <Input placeholder="Event Name" className="" />
                <div className="flex flex-row w-full justify-between gap-1">
                  <Select>
                    <SelectTrigger className="w-[180px] md:w-[190px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="text-center" value="birthday">
                        Birthday
                      </SelectItem>
                      <SelectItem value="holiday">Holiday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[140px] md:w-[190px]  text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Online Visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="text-center" value="private">
                      Private (Default)
                    </SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="text-center" value="birthday">
                      Birthday
                    </SelectItem>
                    <SelectItem value="holiday">Holiday</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Create</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PopForm;
