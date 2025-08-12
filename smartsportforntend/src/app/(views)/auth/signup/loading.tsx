const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            <p className="text-xl ml-4">Loading...</p>
        </div>
    );
};
export default Loading;
