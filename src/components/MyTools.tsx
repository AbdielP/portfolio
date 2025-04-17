import { BiLogoVisualStudio } from "react-icons/bi"
import { DiVisualstudio } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa"
import { SiPostman } from "react-icons/si"

export const MyTools = () => {
    const icons = [
        <BiLogoVisualStudio title="VS Code" />,
        <DiVisualstudio title="Visual Studio" />,
        <FaGitAlt title="Git" />,
        <SiPostman title="Postman" />
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 pb-20 text-primary" id="tools">
            <h2 className="text-3xl font-title font-bold text-center mb-8">
                <span className='text-blueSky'>Tools</span> I Use
            </h2>

            <div className="flex flex-wrap justify-center gap-y-10 gap-x-16">
                {icons.map((Icon, i) => (
                    <div
                        key={i}
                        className="w-[20%] max-w-[100px] sm:w-[25%] sm:max-w-[120px] xs:w-[33.33%] xs:max-w-[150px] 
                        flex justify-center items-center"
                    >
                        <div className="text-6xl border border-primary rounded-md px-8 py-6 backdrop-blur-sm hover:scale-[1.05] transition-all duration-200">
                            {Icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
