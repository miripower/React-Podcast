const EventBanner = ({ text, link }: { text: string; link: string }) => {
    return (
        <div className="flex justify-center py-2 px-5 md:px-10 lg:px-20 bg-blue-500 text-white text-lg md:text-xl lg:text-2xl font-bold underline">
            <a href={link} className="cursor-pointer text-center">
                {text}
            </a>
        </div>
    );
};

export default EventBanner;