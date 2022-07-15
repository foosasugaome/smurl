import { motion } from 'framer-motion'
import './About.css'

export default function Paypal () {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 0, duration: 1 }}
        className='fullscreen-container'
      >
        <div className='container-main'>
          <section>
          Buying me coffee? Here's a 
          <a href='https://www.paypal.com/paypalme/normanteodoro?country.x=CA&locale.x=en_US' target='_blank' rel='noreferrer'>link!
          </a>
    

          </section>
        </div>
      </motion.div>
    </>
  )
}
