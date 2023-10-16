import './About.css'
import { motion } from 'framer-motion'
export default function About () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', delay: 0, duration: 1 }}
      className='fullscreen-container'
    >
      <div className='container-main'>
        <section>
          <h1> What's SmURL? </h1>
          <blockquote>
            {' '}
            Small URL or SmURL is a free URL shortener. This is a small project
            written over the weekend for fun.
          </blockquote>
        </section>
        <section>
          <h1>About Our URL Shortening Service</h1>
          <blockquote>
            <p>
              <strong>Simplicity at Its Best:</strong>
            </p>
            <p>
              Our primary goal is to simplify your online experience. We provide
              you with a straightforward and user-friendly interface to shorten
              URLs effortlessly.
            </p>
          </blockquote>

          <blockquote>
            <p>
              <strong>Free and Reliable:</strong>
            </p>
            <p>
              We offer our URL shortening service for free, without any hidden
              charges or subscriptions. It's a cost-effective solution for
              personal and business use alike.
            </p>
          </blockquote>

          <blockquote>
            <p>
              <strong>Privacy and Security:</strong>
            </p>
            <p>
              Your privacy matters to us. We take data security seriously,
              ensuring that your shortened links are safe and secure. We don't
              track or share your data with third parties.
            </p>
          </blockquote>

          <blockquote>
            <p>
              <strong>Usage Limits:</strong>
            </p>
            <p>
              While our service is free, we do have certain usage limits in
              place to ensure fair usage and prevent abuse.
            </p>
          </blockquote>

          <blockquote>
            <p>
              <strong>User Support:</strong>
            </p>
            <p>
              We value your feedback and are committed to providing excellent
              customer support. If you have any questions or encounter issues,
              our support team is here to assist you promptly.
            </p>
          </blockquote>

          <blockquote>
            <p>
              <strong>Future Enhancements:</strong>
            </p>
            <p>
              We are continuously working to improve our service. Stay tuned for
              upcoming features and enhancements that will make your URL
              shortening experience even better.
            </p>
          </blockquote>

          <p>
            Thank you for choosing our URL shortening service. We hope you find
            it valuable in simplifying your online activities. If you have any
            suggestions or ideas for improvement, please don't hesitate to reach
            out. We're here to serve you better.
          </p>
        </section>
      </div>
    </motion.div>
  )
}
