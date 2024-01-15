"use client";

import React, { useEffect, useState } from 'react';

const useHooks = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isMenu, setIsMenu] = React.useState<boolean>(false);
  const [isOpenLike, setIsOpenLike] = React.useState<boolean>(false);
  const [isFixed, setIsFixed] = React.useState<boolean>(false);

  // a state to track window width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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

  // function to open the mobile nav menu
  const handleMenuOpen = () => {
    setIsMenu(!isMenu);
  };

  // function to open the cart popup modal
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // function to open the favorite popup modal
  const handleOpenLike = () => {
    setIsOpenLike(!isOpenLike);
  };

  // handling of the navigation bar fixed on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 100;

      setIsFixed(scrollY > triggerHeight);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when switching to desktop view
  useEffect(() => {
    const desktopBreakpoint = 768;
    if (windowWidth >= desktopBreakpoint && isMenu) {
      setIsMenu(false);
    }
  }, [windowWidth, isMenu]);


  useEffect(() => {
    if (isOpen || isOpenLike) {
      setIsMenu(false);
    }
  }, [isOpen, isOpenLike]);
  

  return {
    isOpen,
    handleOpen,
    isFixed,
    handleOpenLike,
    isOpenLike,
    handleMenuOpen,
    isMenu,
  };
};

export default useHooks;
