export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-8">

      <p className="uppercase tracking-[0.3em] text-violet-400 mb-3">
        EXPERIENCE
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-12">
        Experience & Achievements
      </h2>

      <div className="border-l-2 border-violet-600 pl-8 space-y-16">

        {/* IIT Delhi */}

        <div className="relative">
          <div className="absolute -left-[42px] w-4 h-4 rounded-full bg-violet-500"></div>

          <h3 className="text-2xl font-semibold">
            Research Intern
          </h3>

          <p className="text-violet-400 mb-3">
            IIT Delhi • AI Research
          </p>

          <ul className="text-zinc-400 leading-8 list-disc ml-5">
            <li>Conducted research on Explainable AI and Multimodal AI for healthcare applications.</li>
            <li>Reviewed and analyzed recent research papers to identify emerging trends in trustworthy AI systems.</li>
            <li>Implemented and experimented with deep learning models for medical image analysis.</li>
            <li>Presented weekly research findings, technical reports, and implementation progress.</li>
          </ul>
        </div>

        {/* Hackathons */}

        <div className="relative">
          <div className="absolute -left-[42px] w-4 h-4 rounded-full bg-violet-500"></div>

          <h3 className="text-2xl font-semibold">
            Hackathons
          </h3>

          <p className="text-violet-400 mb-3">
            National & International Competitions
          </p>

          <ul className="text-zinc-400 leading-8 list-disc ml-5">
            <li>Built <span className="text-white font-medium">City Agent</span>, an AI-powered municipal document processing platform during an international hackathon.</li>
            <li>Developed innovative AI solutions under strict time constraints while collaborating in a team environment.</li>
            <li>Participated in multiple hackathons focused on AI, software engineering, and real-world problem solving.</li>
            <li>Secured <span className="text-white font-medium">3rd Place</span> in a nationwide Hackathon Quiz among more than 1,100 participating teams.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}