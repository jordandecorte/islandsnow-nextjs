import Image from 'next/image';

const FullWidthImage = () => (
  <div>
    <Image
      src="/images/fullwidth.png"
      alt="Island Background"
      width={1200}
      height={500}
      style={{ width: '100%', height: 'auto' }} // Responsive image width
    />
  </div>
);

export default FullWidthImage;
