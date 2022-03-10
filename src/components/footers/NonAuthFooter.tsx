import React from 'react';
import { Text } from '../typography';
import { Link } from 'react-router-dom';

export const NonAuthFooter = React.memo(() => {
  return (
    <div className="flex justify-between w-full max-w-5xl px-5 py-5 mt-20 bg-base-sec text-primary-2">
      <Link to={'#help-center'} className="text-xs hover:underline text-primary-2">
        Help center
      </Link>

      <Text className="text-xs">GreatClinic @ {new Date().getFullYear()}</Text>

      <Link to={'#prices'} className="text-xs hover:underline text-primary-2">
        Prices
      </Link>
    </div>
  );
});
