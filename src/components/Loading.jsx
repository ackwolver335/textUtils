export default function Loading({ fadeOut }) {
    const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500"];

    return (
        <div
            className={`flex flex-col items-center justify-center min-h-screen bg-radial-[at_25%_25%] from-white to-secondary/90 to-80% text-white ease-in duration-500 ${fadeOut ? "opacity-10" : "opacity-100"
                }`}
        >
            <div className="text-2xl font-semibold mb-4">Loading</div>
            <div className="flex gap-2">
                {colors.map((color, index) => (
                    <span
                        key={index}
                        className={`w-4 h-4 rounded-full font-gg ${color} animate-bounce`}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                            animationDuration: "0.6s",
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
}
