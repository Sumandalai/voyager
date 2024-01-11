'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 
  const  startDate = params?.get('startDate');
  const  endDate = params?.get('endDate');
  const  guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);

  return ( 
    <div className='w-[90%] flex justify-end'>
      <div
      onClick={searchModal.onOpen}
      className='  
      mr-1
      sm:mr-4 
       border-[1px] 
      md:w-auto 
      py-1 
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer'
    >
      <div 
        className="
          flex 
          flex-row 
          items-center 
          pr-2
        "
      >
        <div 
          className="
            text-sm
            sm:text-lg 
            font-semibold 
            px-4
          "
        >
          search
        </div>
        <div 
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      {/* <h1
        className="
          text-3xl
          font-semibold
          cursor-pointer
          text-neutral-500
          text-right
          hover:text-neutral-600
        "
      >filter</h1> */}
    </div>
    </div>
  );
}
 
export default Search;