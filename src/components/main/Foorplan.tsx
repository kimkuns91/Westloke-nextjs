import Image from 'next/image';

const Foorplan = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <Image
        src={'/images/Foorplan.png'}
        alt="Foorplan"
        width={600}
        height={400}
      />
    </div>
  );
};
export default Foorplan;
