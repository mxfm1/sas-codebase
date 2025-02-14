import { TriangleAlert } from "lucide-react"
import { ErrorType } from "../types/auth"

type UserAuthFeedbackProps = {
    error: ErrorType
}

export default function UserAuthFeedback({
    error
}:UserAuthFeedbackProps){
    return (
        <div className="p-3 rounded-md bg-red-100 flex space-x-2 items-center justify-center">
            <TriangleAlert className="text-red-600" size={22} />
            <p className="text-red-600 text-sm">{error?.message}</p>
        </div>
    )
}