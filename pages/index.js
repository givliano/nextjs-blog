import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilsStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  }
}

// allPostsData is being sent in the props object,
// the component first parameter is props
export default function Home({ allPostsData }) {
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

      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilsStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
