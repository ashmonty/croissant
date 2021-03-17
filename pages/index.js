import Head from 'next/head';

export default function Home() {
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
            <img src="https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg" className="image" />
            <p className="pex-pic"><a href="https://www.pexels.com/photo/food-dinner-lunch-meal-4147875">Photo</a>&nbsp;provided by&nbsp;<a href="https://www.pexels.com/@daria">Valeria Boltneva</a>&nbsp;on Pexels.</p>
          </div>
          <button>Get a croissant</button>
        </div>
        <div className="footer">
          <a className="monty" href="https://monty.ga">Made by Monty</a>
          <a className="pex-gen" href="https://www.pexels.com">Photos provided by Pexels</a>

        </div>
      </section>
    </home>

  )
}