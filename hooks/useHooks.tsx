

import React, { useEffect } from 'react'

const useHooks = () => {
    const [ isOpen, setIsOpen ] = React.useState<boolean>(false)
    const [ isOpenLike, setIsOpenLike ] = React.useState<boolean>(false)
    const [ isFixed, setIsFixed] = React.useState<boolean>(false)

    // modal overlay and inner width
    useEffect(() => {
      const originalOverflow = document.body.style.overflow;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  
      if (isOpen || isOpenLike) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = originalOverflow;
        document.body.style.marginRight = '0';
      }
  
      // Cleanup function to restore the original styles when the component unmounts
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.marginRight = '0';
      };
    }, [isOpen, isOpenLike]);


    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleOpenLike = () => {
      setIsOpenLike(!isOpenLike)
  }


    // handling of the navigation bar fixed on scroll
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerHeight = 100;
  
        setIsFixed(scrollY > triggerHeight);
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return {
    isOpen,
    handleOpen,
    isFixed,
    handleOpenLike,
    isOpenLike
  }
}

export default useHooks