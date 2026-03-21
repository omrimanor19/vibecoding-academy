import { ArrowLeft } from 'lucide-react';

interface ChallengeDetailProps {
  onBack: () => void;
}

export function ChallengeDetail({ onBack }: ChallengeDetailProps) {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Challenges
        </button>

        <div className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Quick Win
            </span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">My Landing Page</h1>
          <p className="text-xl text-gray-600 mb-6">20 min • Beginner-friendly</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded">
          <p className="text-gray-800">
            Your personal landing page is like your digital front door. It's where you introduce yourself to the world. In this challenge, you'll build a page that shows off who you are, what you're interested in, and how people can reach you.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Build</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A clean, modern personal homepage with your name, a bio, links to your projects or social media, and a way for people to contact you. When you're done, you'll have something real you can share with friends, teachers, or potential employers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Guide</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Step 1: Set Up Your Structure</h3>
                <p className="text-gray-700 mb-3">
                  Start with a clean HTML base. You need a header section with your name, a bio section, and a footer with contact links.
                </p>
                <p className="text-sm text-gray-600">
                  Prompt tip: "Create a simple HTML structure for a personal landing page with a header, hero section with my name and bio, and a footer."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Step 2: Style It to Look Good</h3>
                <p className="text-gray-700 mb-3">
                  Add CSS to make it look modern and clean. Think about colors, fonts, spacing, and how it looks on phones too.
                </p>
                <p className="text-sm text-gray-600">
                  Prompt tip: "Add CSS to make this page look modern and professional. Use a nice color scheme and make sure it's responsive on mobile."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Step 3: Add Your Content</h3>
                <p className="text-gray-700 mb-3">
                  Fill in your name, write a short bio about yourself, add links to your socials or projects, and include your email or contact form.
                </p>
                <p className="text-sm text-gray-600">
                  Prompt tip: "Help me write a compelling 2-3 sentence bio about myself as a high school student interested in coding and tech."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Step 4: Deploy It</h3>
                <p className="text-gray-700 mb-3">
                  Get your page live on the internet. We'll use a free hosting service so you can share it with anyone.
                </p>
                <p className="text-sm text-gray-600">
                  Prompt tip: "How do I deploy this HTML/CSS page to the internet for free?"
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips & Tricks</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Keep it simple. You don't need fancy animations or effects to look professional.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Use plenty of white space. It makes your page easier to read and more elegant.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Make sure your links work and your contact info is correct before sharing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Test it on your phone. More people will see it on mobile than desktop.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Success Checklist</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Your name is prominently displayed</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">You have a bio or "about" section</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">It has at least one call-to-action (contact link, email, social)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">It looks good on mobile</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">You've deployed it and have a live URL</span>
              </label>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Ready to ship?</h3>
            <p className="text-gray-700">
              Once your page is live, share it with the Vibe Coding community. You just built your first real project — that's awesome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
