const EventBanner = ({ text, link }: { text: string; link: string }) => {
    return (
        <div className="flex justify-center py-2 px-50 bg-blue-500 text-white text-2xl font-bold underline">
            <a href={link} className="cursor-pointer">
                {text}
            </a>
        </div>
    );
};

export default EventBanner;