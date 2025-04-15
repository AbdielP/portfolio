
export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <section className="bg-green-dark text-center p-4 text-white font-body">
            <small className="font-extralight">Abdiel's Fullstack developer portfolio - {year}.</small>
        </section>
    )
}
