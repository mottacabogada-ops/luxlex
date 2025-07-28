export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f8f4f9] to-[#eceae3] text-gray-800 font-sans relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-center bg-no-repeat bg-contain z-0" style={{ backgroundImage: "url('/star-symbol.png')" }}></div>

      <section className="relative z-10 px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-[#4f3a65] uppercase mb-4">LUXLEX</h1>
        <p className="text-lg mb-6">Confianza profesional para tu tranquilidad legal.</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:contacto@luxlex.com.ar" className="bg-[#b39ddb] hover:bg-[#a188c7] text-white px-4 py-2 rounded-xl shadow">
            Escribime
          </a>
          <a href="https://wa.me/5491168329335" target="_blank" className="bg-[#d7ccc8] hover:bg-[#bcaaa4] text-gray-800 px-4 py-2 rounded-xl shadow">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="px-6 py-10 bg-white shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-[#4f3a65]">Servicios</h2>
        <ul className="space-y-2 text-left max-w-md mx-auto">
          <li>• Divorcios</li>
          <li>• Sucesiones</li>
          <li>• Contratos y Sociedades</li>
          <li>• Asesoramiento a emprendedores y empresas</li>
          <li>• Poderes y acuerdos legales</li>
          <li>• ...y más</li>
        </ul>
      </section>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#4f3a65]">Sobre mí</h2>
        <p className="max-w-xl mx-auto">
          Soy Cristal Motta, abogada recibida en la UBA, especializada en Derecho Privado. Con experiencia en el ámbito corporativo y en el ejercicio profesional independiente, me especializo en brindar asesoría legal clara, empática y profesional, adaptada a cada necesidad.
        </p>
      </section>

      <section className="px-6 py-10 bg-[#f3e5f5] text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#4f3a65]">Contacto</h2>
        <p className="mb-2">📧 mottac.abogada@gmail.com</p>
        <p className="mb-2">📞 +54 9 11 6832-9335</p>
        <p>📸 Instagram: próximamente</p>
      </section>

      <footer className="py-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} LUXLEX. Todos los derechos reservados.
      </footer>
    </main>
  );
}
