
export const ContactSection = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 text-center">
      <h2 className="text-3xl font-title font-semibold mb-4">Contact me</h2>
      <p className="text-gray-400 font-body max-w-xl mx-auto mb-6">
        Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
      </p>

      <div className="space-y-2 text-lg font-medium font-title">
        <div className="flex justify-center items-center gap-2">
          <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
          <a href="mailto:tucorreo@ejemplo.com" className="hover:underline">abdiel.pinzon@gmail.com</a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
          <a href="tel:+50760000000" className="hover:underline">+507 6000-0000</a>
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-500">You can also find me on these platforms:</p>
      <div className="mt-3 flex justify-center gap-6 text-xl">
        <a href="https://github.com/tuusuario" target="_blank"><i className="devicon-github-original"></i></a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank"><i className="devicon-linkedin-plain"></i></a>
        {/* Otros íconos si quieres */}
      </div>
    </section>

  )
}
