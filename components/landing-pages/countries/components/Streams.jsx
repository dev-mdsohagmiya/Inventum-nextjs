import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const pricing = {
  frequencies: [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  alevels: [
    {
      name: 'Medicine Stream',
      id: 'alevel-medicine',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$100', annually: '$949' },
      description: 'Tailored for aspiring medical students, this stream covers core sciences and math to prepare for a career in medicine.',
      features: ['Physics', 'Biology', 'Chemistry', 'Mathematics'],
      mostPopular: false,
    },
    {
      name: 'Business Stream',
      id: 'alevel-business',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$100', annually: '$949' },
      description: 'Ideal for students aiming for a strong foundation in business and economics, this stream prepares for commerce-related careers.',
      features: ['Business', 'Economics', 'Accounting'],
      mostPopular: false,
    },
    {
      name: 'Engineering Stream',
      id: 'alevel-engineering',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$100', annually: '$949' },
      description: 'Designed for future engineers, this stream covers the essential sciences and math for university-level engineering programmes.',
      features: ['Mathematics', 'Physics', 'Chemistry'],
      mostPopular: true,
    },
    {
      name: 'Humanities Stream',
      id: 'alevel-humanities',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$100', annually: '$949' },
      description: 'Perfect for students interested in social sciences, this stream allows flexible subject choices from various humanities topics.',
      subjectsuffix: "Any 3",
      features: ['Geography', 'Sociology', 'Psychology', 'Environmental Management'],
      mostPopular: false,
    },
    {
      name: 'IT Stream',
      id: 'alevel-it',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$100', annually: '$949' },
      description: 'Ideal for tech enthusiasts, this stream focuses on core IT subjects and math to prepare for computer science and IT careers.',
      features: ['Computer Science', 'Information Technology', 'Mathematics'],
      mostPopular: false,
    },
  ],
  igcse: [
    {
      name: 'Medicine Stream',
      id: 'igcse-medicine',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$140', annually: '$1,300' },
      description: 'Tailored for aspiring medical students, this stream covers core sciences and math along with English for a solid foundation.',
      features: ['Physics', 'Biology', 'Chemistry', 'Mathematics', 'English'],
      mostPopular: false,
    },
    {
      name: 'Business Stream',
      id: 'igcse-business',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$140', annually: '$1,300' },
      description: 'Perfect for students aiming to excel in business and economics, this stream covers essential commerce-related subjects.',
      features: ['Business', 'Economics', 'Accounting', 'Mathematics', 'English'],
      mostPopular: false,
    },
    {
      name: 'Engineering Stream',
      id: 'igcse-engineering',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$140', annually: '$1,300' },
      description: 'Designed for future engineers, this stream includes key sciences, math, and additional math for engineering readiness.',
      features: ['Mathematics', 'Physics', 'Chemistry', 'Additional Mathematics', 'English'],
      mostPopular: true,
    },
    {
      name: 'Humanities Stream',
      id: 'igcse-humanities',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$140', annually: '$1,300' },
      description: 'For those interested in social sciences, this stream offers flexible humanities options along with math and English.',
      subjectsuffix: "Any 3 + Math & English",
      features: ['Geography', 'Sociology', 'Psychology', 'Environmental Management', 'Mathematics', 'English'],
      mostPopular: false,
    },
    {
      name: 'IT Stream',
      id: 'igcse-it',
      href: 'https://apply.inventumonline.com',
      price: { monthly: '$140', annually: '$1,300' },
      description: 'Focused on IT and computing, this stream provides a foundation for technology enthusiasts, along with essential math and English.',
      features: ['Computer Science', 'Information Technology', 'Mathematics', 'Additional Mathematics', 'English'],
      mostPopular: false,
    },
  ],
  };

export default function Routes() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className={`bg-dl py-24 sm:py-32`}>
      <div className="mx-auto  px-6 lg:px-8">
      <h2 className="text-5xl lg:text-7xl text-center py-5 lg:py-10 font-bold bg-clip-text text-transparent bg-pg mx-auto lg:w-max">Subject Streams</h2>   
        <p className="mx-auto max-w-3xl text-center text-lg text-ll">
        Learners can select an academic stream suited to their needs and talents. The education model is highly adaptive and flexible and shatters traditional boundaries and restrictions. If a young person has a particular strength in a subject area, they can move quicker through the curriculum, studying at advanced levels for their age. Similarly, if a young person needs a little more time, this is easily achieved. Our team of dedicated study coaches and expert teachers ensure that support is always available. <bold>Disclaimer:</bold> These price points are only for individuals reciding in Nigeria.
        </p>
        <div className="mt-6 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full bg-pg p-1 text-center text-md font-semibold leading-5 text-white"
            >
              {pricing.frequencies.map((option) => (
                <div
                  key={option.value}
                  value={option}
                  className={`cursor-pointer rounded-full px-3 py-2 relative z-20 transition-all duration-300 ${frequency === option ? "bg-white/25" : "bg-b"}`}
                  onClick={() => { setFrequency(option) }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <h3 className='bg-pg text-transparent bg-clip-text text-center md:w-max mx-auto font-bold lg:text-4xl text-3xl mt-10'>IGCSE</h3>
        <div className=" mx-auto mt-10 flex flex-wrap justify-center gap-8 flex-1">
          {pricing.igcse.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-dd ring-2 ring-white' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10 bg-dd flex gap-10 flex-col md:flex-row xs:min-w-[400px] sm:min-w-[600px] max-w-[900px] flex-1 justify-center'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4 relative">
                  <h2 id={tier.id} className="text-3xl font-semibold leading-8 text-transparent bg-pg bg-clip-text text-start">
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-pg px-2.5 py-1 text-xs font-semibold leading-5 text-white whitespace-nowrap ">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-lg leading-6 text-gray-300 text-start max-w-lg">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1 ">
                  <span className="text-5xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                  <span className="text-md font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-pg text-white shadow-sm hover:brightness-125 focus-visible:outline-pg'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  Apply before it's too late
                </a>
              </div>
              <div className=''>
              <p className='text-transparent bg-pg bg-clip-text font-bold'>{tier.subjectsuffix ? `Subjects (${tier.subjectsuffix}):` : "Subjects:"}</p>
                <ul role="list" className="mt-4 space-y-3 text-md leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <h3 className='bg-pg text-transparent bg-clip-text text-center md:w-max mx-auto font-bold text-3xl mt-10'>A-Levels</h3>
        <div className=" mx-auto mt-10 flex flex-wrap justify-center gap-8 flex-1">
          {pricing.alevels.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-dd ring-2 ring-white' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10 bg-dd flex gap-10 flex-col md:flex-row xs:min-w-[400px] sm:min-w-[600px] max-w-[900px] flex-1  justify-center'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4 relative">
                  <h2 id={tier.id} className="text-3xl font-semibold leading-8 text-transparent bg-pg bg-clip-text text-start">
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-pg px-2.5 py-1 text-xs font-semibold leading-5 text-white whitespace-nowrap ">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-lg leading-6 text-gray-300 text-start max-w-lg">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1 ">
                  <span className="text-5xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                  <span className="text-md font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-pg text-white shadow-sm hover:brightness-125 focus-visible:outline-pg'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  Apply before it's too late
                </a>
              </div>
              <div className=''>
              <p className='text-transparent bg-pg bg-clip-text font-bold'>{tier.subjectsuffix ? `Subjects (${tier.subjectsuffix}):` : "Subjects:"}</p>
              <ul role="list" className="mt-4 space-y-3 text-md leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
