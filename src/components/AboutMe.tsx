
import avatar from '../assets/images/avatar.png'
export const AboutMe = () => {
    return (
        <section className="bg-gray-100 relative pb-24 pt-12 px-6">
            <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-[120px] opacity-10 font-title select-none hidden md:block">
                About
            </h1>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 relative z-10">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="w-48 h-48 rounded-full object-cover border border-gray-300 shadow"
                />
                <div>
                    <h2 className="text-3xl font-title font-bold mb-4 text-gray-800">About Me</h2>
                    <p className="text-gray-700 font-body max-w-xl mb-6">
                        I’m a fullstack developer with extensive experience in internal applications and automation tools.
                        I’m currently pursuing a Master’s degree in Software Engineering and have a strong interest in learning new technologies.
                    </p>
                    <a href="#contact" className="font-body font-medium text-black underline hover:text-green">
                        CONTACT ME
                    </a>
                </div>
            </div>
        </section>

    )
}
