import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export type IconMessages =
  | "warning"
  | "error"
  | "success"
  | "info"
  | "question";

const SwalMessage = (
  icon: IconMessages,
  text: string,
  title?: string
): void => {
  MySwal.fire({
    icon,
    title,
    text,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

// .then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>);
// });

export default SwalMessage;
