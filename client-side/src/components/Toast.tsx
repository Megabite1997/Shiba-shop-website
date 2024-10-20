import { FC } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {}

const Toast: FC<ToastProps> = ({}) => {
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-center",
    });

    toast.error("Error Notification !", {
      position: "top-left",
    });

    toast.warn("Warning Notification !", {
      position: "bottom-left",
    });

    toast.info("Info Notification !", {
      position: "bottom-center",
    });

    toast("Custom Style Notification with css class!", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce
      />
    </div>
  );
};

export default Toast;
