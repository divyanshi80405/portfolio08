"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <section className="mb-20">
          <h1 className="text-6xl font-bold">
            Divyanshi Negi
          </h1>

          <p className="text-xl text-stone-600 mt-4">
            Software Developer | AI/ML Engineer
          </p>

          <p className="mt-6 max-w-2xl text-stone-700">
            Computer Science student specializing in AI and IoT. I build web applications, AI-powered tools, and developer-focused products using React, Next.js, Python, and Machine Learning.
          </p>
        </section>

        <section>
  <h2 className="text-3xl font-bold mb-8">
    Projects 🚀
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Text Metrics */}
    <a
      href="https://wordcountertool-9j0lw6uc6-divi2.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-white
        p-6
        rounded-2xl
        border
        border-stone-200
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-blue-400
      "
    >
      <h3 className="text-2xl font-semibold">
        Text Metrics
      </h3>

      <p className="mt-3 text-stone-600">
        A clean online tool for counting words and characters.
      </p>

      <div className="mt-4">
  <a
    href="https://github.com/divyanshi80405/word-counter-tool"
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="text-blue-600 underline"
  >
    GitHub Repository
  </a>
</div>
    </a>

    {/* GitHub Profile Finder */}
    <a
      href="https://githubprofilefinder-lf69yt5b6-divi2.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-white
        p-6
        rounded-2xl
        border
        border-stone-200
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-blue-400
      "
    >
      <h3 className="text-2xl font-semibold">
        GitHub Profile Finder
      </h3>

      <p className="mt-3 text-stone-600">
        Search GitHub users and view repositories and profile information.
      </p>

      <div className="mt-4">
  <a
    href="https://github.com/divyanshi80405/GitHub-Profile-Finder"
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="text-blue-600 underline"
  >
    GitHub Repository
  </a>
</div>
    </a>

  </div>
</section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Contact
          </h2>

          <p>
            Email: divyanshi80405@gmail.com
          </p>

          <p>
            GitHub: github.com/divyanshi80405
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/divyanshi80405"
              target="_blank"
              className="
                px-4 py-2
                border
                rounded-lg
                transition-all
                duration-200
                hover:bg-black
                hover:text-white
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshi-negi/"
              target="_blank"
              className="
                px-4 py-2
                border
                rounded-lg
                transition-all
                duration-200
                hover:bg-black
                hover:text-white
              "
            >
              LinkedIn
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}