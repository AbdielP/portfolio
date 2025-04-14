
export const AboutMe = () => {
    return (
        <section className="bg-gray-100 relative py-24 px-6">
            <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-[120px] opacity-10 font-title select-none hidden md:block">
                About
            </h1>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
                <img
                    src="/path/to/avatar.webp"
                    alt="Avatar"
                    className="w-32 h-32 rounded-full object-cover border border-gray-300 shadow"
                />
                <div>
                    <h2 className="text-3xl font-title font-bold mb-4 text-gray-800">About Me</h2>
                    <p className="text-gray-700 font-body max-w-xl mb-6">
                        I’m a fullstack developer with extensive experience in internal applications and automation tools.
                        I’m currently pursuing a Master’s degree in Software Engineering and have a strong interest in AI.
                    </p>
                    <a href="#contact" className="font-body font-medium text-black underline hover:text-green">
                        CONTACT ME
                    </a>
                </div>
            </div>
        </section>

    )
}
