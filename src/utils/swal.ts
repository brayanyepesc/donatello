import Swal, { type SweetAlertOptions } from "sweetalert2";


export const Alert = ({
    icon,
    title,
    timer
}: SweetAlertOptions) => {
    Swal.fire({
        icon,
        title,
        timer
    });
}