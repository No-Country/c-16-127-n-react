const LoginPhotoModal = () => {
    return (
        <div className="relative">
            <div className="bg-red-200 w-[400px] h-full 
            rounded-r-2xl object-cover hidden md:block"></div>
            <div className="absolute bottom-10 right-6
            bg-black bg-opacity-30 backdrop-blur-sm
            drop-shadow-lg rounded p-6 hidden md:block">
                <span className="text-xl text-white">Put an image</span>
            </div>
        </div>
    );
}

export default LoginPhotoModal;

