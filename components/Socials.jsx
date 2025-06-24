import { moveItem } from 'framer-motion';
import { icons } from 'lucide-react';
import {BiLogoLinkedin, BiLogoInstagramAlt} from 'react-icons/bi';    

const socials = [
    {
      icon: <BiLogoLinkedin />,
      path: "",
    },
    {
      icon: <BiLogoInstagramAlt />,
      path: "",
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <div key={index} className={iconStyles}>
          {item.icon}
        </div>  
      )
    })}
  </div>;
};

export default Socials;