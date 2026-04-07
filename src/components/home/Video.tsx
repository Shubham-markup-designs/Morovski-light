import backgroundVideo from "../../assets/home/0_Chandelier_Crystal_1280x720.mp4";
import Button from "../ui/Button";

const Video = () => {
    return (
        <div className="relative w-full max-h-[800px] h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-xl">
                    Find Your Perfect Glowing Light At Morvoski
                </h1>

                <div className="mt-1">
                    <Button href="/categories">Shop Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Video;
