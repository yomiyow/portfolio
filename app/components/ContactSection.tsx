const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center min-h-screen">
      <h2 className="text-5xl mt-24 mb-5 lg:mb-24">Contact</h2>
      <div className="hero-content flex flex-col-reverse xl:flex-row-reverse gap-20">
        <section className="text-center py-20">
          <p className="mt-3 text-base-content/70 max-w-md mx-auto">
            Have a project in mind or just want to connect? Let’s talk.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="mailto:romeoquinones4@gmail.com" className="btn btn-outline">
              Email Me
            </a>
            <a href="https://linkedin.com/in/romeo-m-quinones-jr/" target="_blank" className="btn btn-outline">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;