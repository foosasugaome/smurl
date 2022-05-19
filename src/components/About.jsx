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
          <h1> Whata is SmURL? </h1>
          <blockquote> Small URL or SmURL is a free URL shortener. This is a small project written over the weekend for fun.</blockquote>
        </section>
        <section>
          <h1> What is a URL shortener?</h1>
          <blockquote>URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page. This is achieved by using a redirect which links to the web page that has a long URL. For example, the URL <code>"https://example.com/assets/category_B/subcategory_C/Foo/"</code> can be shortened to <code>"https://example.com/Foo"</code>, and the URL <code>"https://en.wikipedia.org/wiki/URL_shortening"</code> can be shortened to <code>"https://w.wiki/U"</code>. Often the redirect domain name is shorter than the original one. A friendly URL may be desired for messaging technologies that limit the number of characters in a message (for example SMS), for reducing the amount of typing required if the reader is copying a URL from a print source, for making it easier for a person to remember, or for the intention of a permalink. In November 2009, the shortened links of the URL shortening service Bitly were accessed 2.1 billion times. <cite><a href='http://smurl.ca/cq9d9T' target='_blank' rel='noreferrer'>--wikipedia</a></cite></blockquote>

        </section>
      </div>
    </motion.div>
  )
}
