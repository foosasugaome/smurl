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
          <blockquote>URL shorteners are a simple but powerful tool that allows web addresses to be condensed into shorter and more manageable links. Understanding the coding behind URL shorteners can help developers create their own custom shorteners and better understand how these tools work.</blockquote><blockquote>

At the core of a URL shortener is a database that maps short links to their corresponding long links. When a user creates a short link, the URL shortener generates a unique code, called a "hash," and stores it in the database along with the corresponding long link. When someone clicks on the short link, the URL shortener looks up the hash in the database and redirects the user to the corresponding long link.</blockquote><blockquote>

The process of generating a hash can be done using a variety of algorithms, such as the MD5 or SHA-1 algorithms. These algorithms take a long string of text, such as a long URL, and convert it into a shorter, fixed-length string of characters. The hash is then used as the short link.</blockquote><blockquote>

The process of redirecting a user from the short link to the long link is done using the HTTP 301 redirect status code. This code tells the user's browser to go to a different URL, which is the long link associated with the short link.</blockquote><blockquote>

To build a URL shortener, a developer would need to set up a database to store the long and short links and create a web page where users can input their long links and get a shortened link back. This web page can be built with a variety of programming languages such as Python, JavaScript, or PHP.</blockquote><blockquote>

In addition to the basic functionality of creating and redirecting short links, URL shorteners can also include features such as link tracking, custom links, and link expiration. These features can be implemented by adding additional code to track clicks and set expiration dates for links in the database.</blockquote><blockquote>

In conclusion, the coding behind URL shorteners is relatively simple but powerful. By understanding the basic principles of how these tools work, developers can create their own custom shorteners and add additional features to enhance their functionality.
</blockquote>

        </section>
      </div>
    </motion.div>
  )
}
