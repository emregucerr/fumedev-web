import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Pricing() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Pricing</h2>
            <p className="text-xl text-gray-400">Believe us: It's more expensive not to buy Fume.</p>
          </div>

          {/* Pricing */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center justify-center" data-aos="fade-up">
              <h2 className="h2 text-white mb-2">$19/mo</h2>
              <h4 className="h4 text-white mb-3">Individual</h4>
              <p className="text-white mb-3">Best for brilliant engineers who give or recieve code review and willing to be one of the best.</p>
              <ul>
                <li className='mb-2'>Instant onboarding. Just register and download the app</li>
                <li className='mb-2'>Unlimited PR reviews</li>
                <li className='mb-2'>No extra OpenAI cost</li>
                <li className='mb-2'>Hosted locally on your computer.</li>
              </ul>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center justify-center" data-aos="fade-up">
              <h2 className="h2 text-white mb-2">$39/mo/eng.</h2>
              <h4 className="h4 text-white mb-3">Team</h4>
              <p className="text-white mb-3">Priced by your team size. Fits for all teams.</p>
              <ul>
                <li className='mb-2'>Everything in the individual plan</li>
                <li className='mb-2'>Custom FumeDev Github bot.</li>
                <li className='mb-2'>Admin dashboard</li>
                <li className='mb-2'>Cloud hosted options</li>
              </ul>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center justify-center" data-aos="fade-up">
              <h2 className="h2 text-white mb-2">Custom</h2>
              <h4 className="h4 text-white mb-3">Enterprise</h4>
              <p className="text-white mb-3">Please contact sales</p>
              <ul>
              <li className='mb-2'>Everything in the team plan</li>
                <li className='mb-2'>SSO & SAML support</li>
                <li className='mb-2'>On-premise options</li>
                <li className='mb-2'>Advanced approval filters (for deciding if Fume should submit a PR)</li>
                <li className='mb-2'>Customizations</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
