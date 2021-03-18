import Head from 'next/head';
import { createClient } from 'pexels';
import { useRouter } from 'next/router';
let imgUrl = []
let pexUrl = []
let ptgUrl = []
let ptgNm = []

let imgNum = []

export async function getServerSideProps({ query }) {

  let urlQuery = query.n
  console.log(urlQuery)
  const client = createClient(process.env.PEXCLIENT);
  query = 'Croissant';

  if (!urlQuery) {
    imgNum = 0;
  } else {
    imgNum = urlQuery;
  }

  console.log(imgNum)

  client.photos.search({ query, per_page: 1, page: imgNum }).then(photos => {
    console.log(photos)
    imgUrl.push(photos.photos[0].src.original) //idk why but if I push it to an array it is accessible globally, otherwise it isn't. Kill me already.
    pexUrl.push(photos.photos[0].url)
    ptgUrl.push(photos.photos[0].photographer_url)
    ptgNm.push(photos.photos[0].photographer)
    return { imgUrl, pexUrl, ptgUrl, ptgNm }
  })

  return { props: { imgUrl, pexUrl, ptgUrl, ptgNm } }
}

export default function Home({ imgUrl, pexUrl, ptgUrl, ptgNm }) {

  const router = useRouter()


  function picUpd() {
    imgNum++
    router.push(`/?n=${imgNum}`)
  }

  return (
    <home>
      <Head>
        <title>Croissant</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Croissant." />
      </Head>

      <section>
        <div className="main">
          <div className="img-pnl">
            <img src={imgUrl[0]} className="image" />
            <p className="pex-pic"><a href={pexUrl[0]}>Photo</a>&nbsp;provided by&nbsp;<a href={ptgUrl[0]}>{ptgNm[0]}</a>&nbsp;on Pexels.</p>
          </div>
          <button onClick={picUpd}>Get a croissant</button>
        </div>
        <div className="footer">
          <a className="monty" href="https://monty.ga">Made by Monty</a>
          <a className="pex-gen" href="https://www.pexels.com">Photos provided by Pexels</a>
        </div>
      </section>
    </home>

  )
}