import { Toaster } from "react-hot-toast";

function CustomToaster() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          fontWeight: "bold",
          borderRadius: "8px",
        },
        success: {
          style: {
            backgroundColor: "#2e7d32",
            color: "#ffffff",
          },
        },
        error: {
          style: {
            backgroundColor: "#B91C1C",
            color: "#ffffff",
          },
        },
      }}
    />
  );
}

export default CustomToaster;
