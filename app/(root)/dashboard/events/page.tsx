import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/public/images/stock.jpg';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Cake, Calendar1, PartyPopper, Sparkles } from 'lucide-react';
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
        <div className="bg-green-200 p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-6 font-bold text-lg">
            Your Recent Events
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-evenly">
            <Link href="/">
              <Card className="bg-teal-100 border-8 border-teal-50 flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform h-auto self-start">
                <CardContent className="w-full aspect-[4/3] relative">
                  <CardTitle className="md:text-lg font-bold text-center justify-center items-center flex flex-col text-gray-800">
                    <PartyPopper className="mb-2" />
                    <div className="flex">Kelly&#39;s Graduation</div>
                  </CardTitle>
                  <Image
                    src={image}
                    alt="name"
                    className="object-contain flex px-4 pt-4 rounded-3xl"
                  />
                </CardContent>
              </Card>
            </Link>
            <Link href="/">
              <Card className="bg-teal-100 border-8 border-teal-50 flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform h-auto self-start">
                <CardContent className="w-full aspect-[4/3] relative">
                  <CardTitle className="md:text-lg font-bold text-center justify-center items-center flex flex-col text-gray-800">
                    <Cake className="mb-2" />
                    <div className="flex">First Birthday</div>
                  </CardTitle>
                  <Image
                    src={image}
                    alt="name"
                    className="object-contain flex px-4 pt-4 rounded-3xl"
                  />
                </CardContent>
              </Card>
            </Link>
            <Link href="/">
              <Card className="bg-teal-100 border-8 border-teal-50 flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform h-auto self-start">
                <CardContent className="w-full aspect-[4/3] relative">
                  <CardTitle className="md:text-lg font-bold text-center justify-center items-center flex flex-col text-gray-800">
                    <Sparkles className="mb-2" />
                    <div className="flex">Christmas 2024</div>
                  </CardTitle>
                  <Image
                    src={image}
                    alt="name"
                    className="object-contain flex px-4 pt-4 rounded-3xl"
                  />
                </CardContent>
              </Card>
            </Link>
            <Link href="/">
              <Card className="bg-teal-100 border-8 border-teal-50 flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform h-auto self-start">
                <CardContent className="w-full aspect-[4/3] relative">
                  <CardTitle className="md:text-lg font-bold text-center justify-center items-center flex flex-col text-gray-800">
                    <Calendar1 className="mb-2" />
                    <div className="flex">Fourth Anniversary</div>
                  </CardTitle>
                  <Image
                    src={image}
                    alt="name"
                    className="object-contain flex px-4 pt-4 rounded-3xl"
                  />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
