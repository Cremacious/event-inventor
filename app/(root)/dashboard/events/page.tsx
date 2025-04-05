export const dynamic = 'force-dynamic';

import AllEventsCard from '@/components/shared/events/all-events-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const EventsPage = () => {
  return (
    <>
      <div className="bg-white p-8 min-h-screen mx-5 rounded-2xl shadow-lg">
        <div className="flex flex-row justify-center gap-4 mb-4">
          <div className="bg-green-500 text-white px-4 py-2 rounded-2xl cursor-pointer hover:bg-green-600">
            Create Event
          </div>
          <div className="bg-blue-500 rounded-2xl p-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/events/birthdays">
                <Button
                  size="lg"
                  className="bg-white rounded-2xl text-slate-700 hover:bg-blue-100"
                >
                  Birthdays
                </Button>
              </Link>
              <Link href="/events/birthdays">
                <Button
                  size="lg"
                  className="bg-white rounded-2xl text-slate-700 hover:bg-blue-100"
                >
                  Holidays
                </Button>
              </Link>
              <Link href="/events/birthdays">
                <Button
                  size="lg"
                  className="bg-white rounded-2xl text-slate-700 hover:bg-blue-100"
                >
                  Celebrations
                </Button>
              </Link>
              <Link href="/events/birthdays">
                <Button
                  size="lg"
                  className="bg-white rounded-2xl text-slate-700 hover:bg-blue-100"
                >
                  Anniversaries
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <AllEventsCard />
      </div>
    </>
  );
};

export default EventsPage;
