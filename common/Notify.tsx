

"use client"

import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({  message }) => {
  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Notification;
