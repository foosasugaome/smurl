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
          Buy me coffee? 
          SmURL will always be free for use. But a little donation can really help keep this website alive. Anyting helps! Thank you.
          {/* Here's a 
          <a href='https://www.paypal.com/paypalme/normanteodoro?country.x=CA&locale.x=en_US' target='_blank' rel='noreferrer'>link!
          </a> */}
          </section>
        </div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="business" value="BBDCR9LMFBRD6" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="item_name" value="This helps pay for maintaining my site!" />
              <input type="hidden" name="currency_code" value="CAD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" className='paypal-button' />
              <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
            </form>
      </motion.div>
    </>
  )
}
