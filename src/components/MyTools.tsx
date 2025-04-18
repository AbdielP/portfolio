import { BiLogoVisualStudio } from "react-icons/bi"
import { DiVisualstudio } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa"
import { SiPostman } from "react-icons/si"
import { IconBox } from "./ui/IconBox"

export const MyTools = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 pb-20 text-primary" id="tools">
            <h2 className="text-3xl font-title font-bold text-center mb-8">
                <span className='text-blueSky'>Tools</span> I Use
            </h2>

            <div className="flex flex-wrap justify-center gap-y-10 gap-x-10">
                <IconBox title="VS Code"><BiLogoVisualStudio /></IconBox>
                <IconBox title="Visual Studio"><DiVisualstudio /></IconBox>
                <IconBox title="Git"><FaGitAlt /></IconBox>
                <IconBox title="Postman"><SiPostman /></IconBox>
            </div>
        </section>
    )
}
