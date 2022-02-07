import Head from 'next/head';

const picsArray = require("../public/pics.json")


export async function getServerSideProps() {

  const randomPic = picsArray.pics[Math.floor(Math.random() * picsArray.pics.length)]
  console.log(randomPic)
  let imgUrl = randomPic.imgUrl
  let pexUrl = randomPic.pexUrl
  let ptgUrl = randomPic.ptgUrl
  let ptgNm = randomPic.ptgNm
  console.log(picsArray.pics.length)


  return { props: { imgUrl, pexUrl, ptgUrl, ptgNm } }
}

export default function Home({ imgUrl, pexUrl, ptgUrl, ptgNm }) {

  return (
    <home>
      <Head>
        <title>Croissant</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=XByEo2dnw3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=XByEo2dnw3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=XByEo2dnw3" />
        <link rel="manifest" href="/site.webmanifest?v=XByEo2dnw3" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=XByEo2dnw3" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=XByEo2dnw3" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="https://croissant.ga/android-chrome-512x512.png" />
        <meta property="og:image:alt" content="Croissant" />
        <meta name="description" content="Croissant." />
      </Head>

      <section>
        <div className="main">
          <div className="img-pnl">
            <img src={imgUrl} className="image" />
            <p className="img-cap"><a href={pexUrl}>Photo</a>&nbsp;by&nbsp;<a href={ptgUrl}>{ptgNm}</a>&nbsp;&nbsp;&nbsp;∙&nbsp;&nbsp;&nbsp;Reload the page!</p>
          </div>
        </div>
        <div className="footer">
          <a className="monty" href="https://www.ashmonty.com/">Made by Monty</a>
        </div>
      </section>
    </home>

  )
}
