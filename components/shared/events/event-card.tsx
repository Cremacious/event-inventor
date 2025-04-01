import Image from 'next/image';
import image from '@/public/images/stock.jpg';
import { PartyPopper } from 'lucide-react';

const EventCard = () => {
  return (
    <>
      <div className="customDark shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4">
        <div className="aspect-[3/2]">
          <Image
            src={image}
            alt="name"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="p-6">
          <div className="text-lg md:text-2xl text-white font-bold">
            Kelly&#39;s Graduation
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-white font-bold flex-1">Date Here</h3>
            <div className="bg-cyan-300 text-slate-800 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
              <PartyPopper />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
