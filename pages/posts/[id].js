import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostsIds, getPostsData} from '../../lib/posts';
import utilsStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostsData(params.id);

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  // `paths` contains the array of known paths returned by getAllPostIds(),
  // which include the params defined by pages/posts/[id].js
  // `fallback` is false, then any paths not returned by getStaticPaths
  // will result in a 404 page
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilsStyles.headingxl}>{postData.title}</h1>
        <div className={utilsStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
