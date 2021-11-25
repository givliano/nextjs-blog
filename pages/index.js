import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilsStyles from '../styles/utils.module.css';

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilsStyles}>
        <p>Hello, I'm Giuliano. I'm a JavaScript developer from Brazil, studying modern frameworks for the frontend.</p>
        <p>(Technology provided by {' '}
          <a href="https://nextjs.org/learn">Next.js</a>)
        </p>
      </section>
    </Layout>
  )
}

export default Home;
