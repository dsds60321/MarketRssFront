import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const autoClose = 1000;

export const toastNotification = ({ type, text }) => {
  switch (type) {
    case 'default':
      toast(text);
      break;
    case 'success':
      toast.success(text);
      break;
    case 'error':
      toast.error(text);
      break;
    case 'warn':
      toast.warn(text);
      break;
  }
};

const Toast = () => {
  return (
    <ToastContainer
      style={{ zIndex: 20 }}
      position="top-right"
      transition={Slide}
      autoClose={autoClose}
      pauseOnHover
      draggable={false}
      pauseOnFocusLoss={false}
      theme="light"
    />
  );
};

export default Toast;
