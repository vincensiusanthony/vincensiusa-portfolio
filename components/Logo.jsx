import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Logo = ({ className= "" }) => (
<Link href="/">
  <Image 
    src="/assets/va-personal-logo.svg"
    alt="VA Personal Logo"
    width={48}
    height={48}
    className={className}
    priority
    style={{ cursor: "pointer"}}
  />
</Link>
);

export default Logo;