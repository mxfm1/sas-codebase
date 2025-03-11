import { ReactNode } from "react"

type OnBoardingWrapperProps = {
    children:ReactNode;
    title?:string;
    description?:string;
    subdescription?:string;
}

export const OnboardingFormWrapper = ({
    children,
    title,
    description,
    subdescription
}:OnBoardingWrapperProps) => {
    return (
        <div className="w-full p-8 md:p-12 bg-white dark:bg-gray-800 shadow-lg rounded-2xl max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
        <div className="text-center space-y-4">
          {title && (
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-400 text-lg">{description}</p>
          )}
          {subdescription && (
            <p className="text-xs text-gray-500 dark:text-gray-400">{subdescription}</p>
          )}
        </div>
  
        <div className="mt-6">{children}</div>
      </div>
    )
}