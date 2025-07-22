'use client';

import Image from 'next/image';

const IslandSnowLogo = () => (
  <div className="text-center my-4">
    <Image
      src="/images/islandsnowlogo.png"
      alt="Island Snow Logo"
      width={200}
      height={100}
      priority
    />
  </div>
);

export default IslandSnowLogo;
