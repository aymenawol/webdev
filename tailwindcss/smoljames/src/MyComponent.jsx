import { useState } from 'react'
import './App.css'

function MyComponent() {


  return (
    <div className='text-slate-900 min-h-screen relative text-sm sm:text-base'>
      <header className='flex justify-between gap-8 p-8 max-w-[1000] m-auto'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Auckland Maths Tutoring</h1>
        <button className='opacity-0 pointer-events-none rounded-full p-5 cursor-pointer hover:bg-blue-500 hover:text-white ease-in'>Book a session</button>
        <div className='fixed top-8 right-8'>
          <button className='bg-blue-300 rounded-full p-5 cursor-pointer hover:bg-blue-500 hover:text-white'>Book a session</button>
        </div>
      </header>

      <main className='flex flex-col'>
        {/* Hero Section */}
        <section id="hero" className='flex flex-col gap-8 px-8 py-16 sm:py-20 md:py-24 max-w-[1000px] mx-auto'>
          <div className='text-center font-medium flex flex-col items-center gap-2'>
            <h2 className='text-6xl sm:text-7xl md:text-8xl'>Achievement Into Excellence</h2>
            <h4 className='text-4xl sm:text-5xl md:txt-6xl'>and beyond</h4>
          </div>
          <p className='text-center max-w-[600px] w-full mx-auto'>
            <span className='font-semibold'>Book a one-on-one private maths lesson</span> with James, a
            qualified Engineer and Math Teacher with over 13 years of tutoring
            experience.
          </p>
          <div className='flex items-center gap-4 flex-wrap justify-center'>
            <div className='rounded-full sm:py-2 font-bold text-blue-400 bg-gray-100 hover:bg-gray-200 px-3'>NCEA IB &amp; Cambridge</div>
            <div className='rounded-full sm:py-2 font-bold text-blue-400 bg-gray-100 hover:bg-gray-200 px-3 py-2'>Years 5 - 13</div>
            <div className='rounded-full sm:py-2 font-bold text-blue-400 bg-gray-100 hover:bg-gray-200 px-3 py-2'>In-person &amp; Online</div>
          </div>
          <div className='grid grid-cols-2 gap-4 '>
            <button className='border-2 border-blue-400 bg-gray-100'>What I teach</button>
            <button>Book a session</button>
          </div>
          <div>
            <p>Scroll for more</p>
            <div></div>
          </div>
        </section>

        {/* What I Teach Section */}
        <section id="maths">
          <div>
            <p>from catch up to acceleration</p>
            <div>
              <h3>What I Teach</h3>
              <p>I have the experience to teach you what you need to know</p>
            </div>
            <div>
              <div>
                <h4>NCEA</h4>
                <p>→ Personalized support for Levels 1, 2, and 3</p>
                <p>→ Focus on internal assessments, exams, and credits</p>
                <p>
                  → Assistance with problem-solving techniques and past exam
                  papers
                </p>
                <p>→ Guidance on achieving Merit and Excellence standards</p>
              </div>
              <div>
                <h4>International Baccalaureate</h4>
                <p>→ Help with SL and HL maths curriculum</p>
                <p>
                  → Tailored guidance for Internal Assessments (IA) and exam
                  preparation
                </p>
                <p>
                  → In-depth support for core concepts and optional topics
                </p>
                <p>
                  → Effective strategies for high achievement in assessments
                </p>
              </div>
              <div>
                <h4>Cambridge</h4>
                <p>→ Tutoring for IGCSE, AS, and A-Level maths</p>
                <p>→ Expert help with structured revision for exams</p>
                <p>
                  → Targeted support for past papers, exam techniques, and
                  challenging topics
                </p>
                <p>
                  → Focus on problem-solving, reasoning, and conceptual
                  understanding
                </p>
              </div>
              <div>
                <h4>General</h4>
                <p>→ Foundational maths support for all age groups</p>
                <p>→ Build confidence in basic arithmetic, algebra, and geometry</p>
                <p>
                  → Personalized learning pace and flexible tutoring plans
                </p>
                <p>
                  → Focus on improving problem-solving and critical thinking
                  skills
                </p>
                <p>
                  → Preparation for general school exams and continuous
                  assessment
                </p>
              </div>
            </div>
            <button>Book a session</button>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews">
          <p>Stories of Success</p>
          <div>
            <h3>What Students Say</h3>
            <p>See what my students say about our classes</p>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <p>Pierre</p>
                  <p>Student</p>
                </div>
                <p>
                  Algebra was really hard for me, and I was falling behind. But
                  my tutor goes over everything slowly and doesn&apos;t make me
                  feel dumb for asking questions. Now I actually understand
                  what&apos;s going on in class, and my grades are getting better
                  too.
                </p>
              </div>
              <div>
                <div>
                  <p>Danielle</p>
                  <p>Student</p>
                </div>
                <p>
                  As someone who hasn&apos;t enjoyed maths before, James made it
                  feel much easier and helped me make sense of what I am
                  learning in class. Thanks James.
                </p>
              </div>
              <div>
                <div>
                  <p>India</p>
                  <p>Student</p>
                </div>
                <p>
                  I needed help with maths because I don&apos;t like my teachers
                  but I didn&apos;t want to fail my final year exams. James
                  really knew how to explain things in a way that I could
                  understand and I ended up doing better than expected :D
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <p>Olivia (Parent)</p>
                  <p>Student</p>
                </div>
                <p>
                  I wanted to find a tutor who could help advance my daughters
                  mathematics ability beyond her current age level and stimulate
                  her with more challenging material. James did an excellent job
                  of helping Olivia to build her enthusiam and ability in Maths.
                </p>
              </div>
              <div>
                <div>
                  <p>Douglas</p>
                  <p>Student</p>
                </div>
                <p>
                  I felt that school was starting to get more challenging and I
                  was unable to pass all my exams without some extra assistance.
                  My sessions with Bridget were very supportive and enjoyable
                  and it helped make completing all my homework and studying
                  super easy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="services">
          <p>Book Today</p>
          <p>Send Me a message</p>
          <h3>+64 21 42 24 833</h3>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jamezmcarthur/"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/C5603AQG6Q4W3kWANtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1630988413596?e=1752105600&v=beta&t=-hYSuomF1nMSIxNHoC8u6BbEYOQeOQbFVYQDD2GcD0s"
            alt="pfp"
          />
          <p>LinkedIn</p>
          <i className=""></i>
        </a>
      </footer>
    </div>
  );
}

export default MyComponent
