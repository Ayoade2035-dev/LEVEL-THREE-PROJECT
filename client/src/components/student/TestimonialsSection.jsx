import React from 'react'
import assets from '../../assets/assets'

// Fallback dummy data so the section renders even before backend data is available
const dummyTestimonial = [
  {
    name: 'Donald Jackman',
    role: 'Software Developer',
    image: assets.profile_img_1,
    rating: 5,
    feedback: 'This platform transformed my career. The courses are practical, well-structured, and taught by real industry experts.'
  },
  {
    name: 'Richard Nelson',
    role: 'UX Designer',
    image: assets.profile_img_2,
    rating: 4,
    feedback: 'Fantastic learning experience. I went from beginner to job-ready in just a few months thanks to the hands-on projects.'
  },
  {
    name: 'James Washington',
    role: 'Data Analyst',
    image: assets.profile_img_3,
    rating: 5,
    feedback: 'The instructors are world-class and the community is incredibly supportive. Highly recommend to anyone looking to upskill.'
  },
]

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation, success, and how our <br />
        platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-auto gap-8 mt-14 ">
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)]'>
            <div className="flex items-center gap-4 py-4 px-5 bg-gray-500/10 overflow-hidden">
              <img
                className='h-12 w-12 rounded-full object-cover'
                src={testimonial.image}
                alt={testimonial.name}
                onError={e => { e.target.src = 'https://placehold.co/48x48/e5e7eb/374151?text=U' }}
              />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5'
                    key={i}
                    src={i < testimonial.rating ? assets.star : assets.star_blank}
                    alt={i < testimonial.rating ? 'filled star' : 'empty star'}
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
