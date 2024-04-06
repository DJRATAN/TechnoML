import { BiSolidErrorCircle } from "react-icons/bi";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({ message, }: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className="text-sm bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive">
            <BiSolidErrorCircle />
            <p>{message}</p>
        </div>
    )
}
