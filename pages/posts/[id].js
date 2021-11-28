import Layout from '../../components/layout';
import { getAllPostsIds, getPostsData} from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostsData(params.id);

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
  return <Layout>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
  </Layout>
}
