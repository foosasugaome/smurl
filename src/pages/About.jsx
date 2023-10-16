import { useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'
import LoadingMessages from '../components/LoadingMessages'
import Form from '../components/Form'
import CopyURL from '../components/CopyURL'

export default function About () {

  const [form, setForm] = useState({
    url: ''
  })  

  const [smurl, setSmurl] = useState('')
  const [message, setMessage] = useState('')
  const [showSmurl, setShowSmurl] = useState(false)
  const [loading, setLoading] = useState(false)  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', delay: 0, duration: 1 }}
      className='fullscreen-container'
    >
      <section id='hero'>
        <div className='flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-between-y-0 md:space-y-0'>
          {/* left item  */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2 p-2'>
            <h1 className='max-w-md text-3xl font-bold text-center md:text-4xl md:text-left'>
              Shorten Your Links, Lengthen Your Potential
            </h1>
            <p className='max-w-sm text-center text-viridian md:text-left'>
              Simplifying your links, safely and for free. We offer
              user-friendly URL shortening, prioritize privacy, and provide
              dedicated support. Stay tuned for more features!
            </p>
          </div>
          {/* right item */}
          <div className='flex flex-col items-center justify-between mb-32 space-y-2 p-2 md:inline-block md:w-1/2'>            
          {/* <Link to='/' className='p-3 px-6 pt-2 text-white bg-viridian rounded-full baseline hover:bg-cambridgeBlue'            >
              Get Started
            </Link> */}
            <Form form={form} setForm={setForm} setMessage={setMessage} setLoading={setLoading} setSmurl={setSmurl} setShowSmurl={setShowSmurl} />
            {loading
          ?
          <div><h3><LoadingMessages /></h3></div>
          :
          null
        }
        {showSmurl ? (
          <div>
            <CopyURL url={smurl} />
          </div>
        ) : null}
          </div>
        </div>
      </section>

      <section id='features'>
        <div className='flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              What we do?
            </h2>
            <p className='max-w-sm text-center text-viridian md:text-left'>
              Small URL or SmURL is a free URL shortener. This is a small
              project written over the weekend for fun.
            </p>
          </div>

          <div className='flex flex-col space-y-8 md:w-1/2'>
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-cambridgeBlue text-white md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-cambridgeBlue'>
                    01
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Simplicity at its best
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Simplicity at its best
                </h3>
                <p className='text-viridian'>
                  Our primary goal is to simplify your online experience. We
                  provide you with a straightforward and user-friendly interface
                  to shorten URLs effortlessly.
                </p>
              </div>
            </div>

            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-cambridgeBlue text-white md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-cambridgeBlue'>
                    02
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Free and Reliable
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Free and Reliable
                </h3>
                <p className='text-viridian'>
                  We offer our URL shortening service for free, without any
                  hidden charges or subscriptions. It's a cost-effective
                  solution for personal and business use alike.
                </p>
              </div>
            </div>

            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-cambridgeBlue text-white md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-cambridgeBlue'>
                    03
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Privacy and Security
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Privacy and Security
                </h3>
                <p className='text-viridian'>
                  Your privacy matters to us. We take data security seriously,
                  ensuring that your shortened links are safe and secure. We
                  don't track or share your data with third parties.
                </p>
              </div>
            </div>

            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-cambridgeBlue text-white md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-cambridgeBlue'>
                    04
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Usage Limits
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Usage Limits
                </h3>
                <p className='text-viridian'>
                  While our service is free, we do have certain usage limits in
                  place to ensure fair usage and prevent abuse.
                </p>
              </div>
            </div>

            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-cambridgeBlue text-white md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-cambridgeBlue'>
                    05
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    User Support
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  User Support
                </h3>
                <p className='text-viridian'>
                  We value your feedback and are committed to providing
                  excellent customer support. If you have any questions or
                  encounter issues, our support team is here to assist you
                  promptly
                </p>
              </div>
            </div>

            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-cambridgeBlue text-white md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-cambridgeBlue'>
                    06
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Future Enhancements
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Future Enhancements
                </h3>
                <p className='text-viridian'>
                  We are continuously working to improve our service. Stay tuned
                  for upcoming features and enhancements that will make your URL
                  shortening experience even better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonials'>
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          <h2 className='text-4xl font-bold text-center'>
            What's different about Small URL?
          </h2>

          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-white md:w-1/3'>
              <img
                src='https://api.dicebear.com/7.x/adventurer/svg?seed=Lilly'
                className='w-16 -mt-14'
                alt='avatar'
              />
              <h5 className='text-lg font-bold'>Lilly</h5>
              <p className='text-sm text-viridian'>
                "Smurl is the best! It’s so easy and convenient. I can remember
                it from my phone, iPad or computer."
              </p>
            </div>

            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-white md:flex md:w-1/3'>
              <img
                src='https://api.dicebear.com/7.x/adventurer/svg?seed=Daisy'
                className='w-16 -mt-14'
                alt='avatar'
              />
              <h5 className='text-lg font-bold'>Daisy</h5>
              <p className='text-sm text-viridian'>
                "SmURL is a lifesaver! It's incredibly user-friendly and
                convenient. I can easily access it from my phone, iPad, or
                computer, making it the perfect solution for shortening and
                managing my links."
              </p>
            </div>

            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-white md:flex md:w-1/3'>
              <img
                src='https://api.dicebear.com/7.x/adventurer/svg?seed=Missy'
                className='w-16 -mt-14'
                alt='avatar'
              />
              <h5 className='text-lg font-bold'>Missy</h5>
              <p className='text-sm text-viridian'>
                "I've tried a few URL shorteners, but SmURL stands out. It's not
                just easy to use; it's a game-changer. Whether I'm on my phone
                or laptop, SmURL is my go-to for all my link shortening needs."
              </p>
            </div>
          </div>

          <div className='my-16'>
            <Link
              to='/'
              className='p-3 px-6 pt-2 text-white bg-viridian rounded-full baseline hover:bg-cambridgeBlue'
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  )
}
