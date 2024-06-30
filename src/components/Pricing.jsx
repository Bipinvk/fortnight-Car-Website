import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { Star } from 'lucide-react';

const TestimonialCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src="/path-to-image.jpg"
            alt="Happy customer with blue car"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Client Auto.Hunt stories</h2>
            <blockquote className="text-gray-700 mb-4">
              "It's awesome when you can buy a car without going through the authorities and doing the paperwork. Because Auto.Hunt does it all for you and brings the car to your home. Great."
            </blockquote>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="font-semibold text-gray-900">Wachidun Al-Rizky</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              When you reach your goals, our whole community celebrates with you. That's over 180 million members sharing.
            </p>
            <div className="flex items-center mt-4">
              <AvatarGroup />
              <p className="ml-3 font-semibold text-lg">180k+ Auto.hunt Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvatarGroup = () => {
  return (
    <div className="flex -space-x-2">
      {[...Array(3)].map((_, i) => (
        <Avatar.Root key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
          <Avatar.Image
            src={`/avatar-${i + 1}.jpg`}
            alt={`User ${i + 1}`}
            className="h-full w-full object-cover"
          />
          <Avatar.Fallback className="bg-gray-200 flex h-full w-full items-center justify-center" delayMs={600}>
            U{i + 1}
          </Avatar.Fallback>
        </Avatar.Root>
      ))}
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white ring-2 ring-white">
        180k+
      </div>
    </div>
  );
};

export default TestimonialCard;