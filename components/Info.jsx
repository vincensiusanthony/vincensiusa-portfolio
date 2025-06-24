import {
    HiOutlineMail, 
    HiOutlinePhone, 
    HiOutlineUser, 
    HiOutlineLocationMarker, 
} from 'react-icons/hi';

const Info = () => {
  return (
  <div className="flex flex-col gap-6 md:gap-10">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-[280px] flex items-start gap-4">
        <HiOutlineUser className="w-6 h-6 min-w-[24px] min-h-[24px] mt-1 text-accent" />
        <div>
          <p className="text-lg ">Date of Birth</p>
          <p>07 September 1999</p>
        </div>
      </div>
      <div className="w-[280px] flex items-start gap-4">
        <HiOutlineMail className="w-6 h-6 min-w-[24px] min-h-[24px] mt-1 text-accent" />
        <div>
          <p className="text-lg ">Email Address</p>
          <p>vincensius.anthony@gmail.com</p>
        </div>
      </div>
    </div>
  
  <div className="flex flex-col md:flex-row gap-4">
      <div className="w-[280px] flex items-start gap-4">
        <HiOutlinePhone className="w-6 h-6 min-w-[24px] min-h-[24px] mt-1 text-accent" />
        <div>
          <p className="text-lg ">Phone</p>
          <p>+6289686573084</p>
        </div>
      </div>
      <div className="w-[280px] flex items-start gap-4">
        <HiOutlineLocationMarker className="w-6 h-6 min-w-[24px] min-h-[24px] mt-1 text-accent" />
        <div>
          <p className="text-lg ">Location</p>
          <p>Tangerang, Banten, Indonesia</p>
        </div>
      </div>
    </div>
  </div>


  );
};

export default Info; 
