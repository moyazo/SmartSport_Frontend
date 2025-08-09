import React from 'react';
const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main
            id="SignUpMainContainer"
            className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div
                id="SignupDivContainer"
                className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </main>
    );
};

export default SignUpLayout;
