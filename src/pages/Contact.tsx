const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="mb-16 text-5xl font-medium uppercase">KONTAKT</h1>
        
        <div className="max-w-2xl">
          <div className="border-2 border-foreground p-8">
            <h2 className="text-2xl font-medium mb-6 uppercase">Skontaktuj się</h2>
            <div className="space-y-4 text-lg">
              <p>
                <span className="font-medium">Email:</span><br />
                <a href="mailto:kontakt@bognabartkowiak.pl" className="hover:opacity-70">
                  kontakt@bognabartkowiak.pl
                </a>
              </p>
              <p>
                <span className="font-medium">Instagram:</span><br />
                <a href="#" className="hover:opacity-70">
                  @bognabartkowiak
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
