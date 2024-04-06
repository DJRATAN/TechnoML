import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({ message, }: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className="text-sm bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald">
            <CheckCircleIcon />
            <p>{message}</p>
        </div>
    )
}
