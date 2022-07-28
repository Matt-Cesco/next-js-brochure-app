import Head from 'next/head'
import Navbar from '../components/Navbar'

const strategy = () => {
  return (
    <>
      <Head>
        <title>Strategy</title>
        <meta
          name="demo website for a financial firm"
          content="financial firm"
        />
      </Head>
      <Navbar />
      <div className="container mt-lg-5 pt-lg-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="fs-xxxl">Our Strategy</h2>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="fs-xxl text-uppercase">trend following</h2>
            <p className="fs-lg py-lg-5">
              The programme is systematic trend following in its approach,
              trading a strategy with a track record spanning around two
              decades.
            </p>
            <p className="fs-lg">
              Strong performance has been delivered in a variety of market
              environments because of the strategy’s ability to profit from
              trends, either up or down, in around 400 liquid markets across a
              variety of asset classes.
            </p>
          </div>
        </div>
        <hr />
        <div className="row align-self-center">
          <div className="col-12 col-lg-6">
            <p className="fs-xl text-uppercase">Volatility Target*</p>
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-xxxxl">34%</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p className="fs-lg">
              Trends have been observed in markets for centuries and a body of
              academic literature has built up to explain their persistence1.
              Trend following strategies use sophisticated computer algorithms
              to identify trends, which allow them to trade hundreds of diverse
              markets simultaneously, and avoid biases introduced by human
              emotions.
            </p>
            <p className="fs-lg">
              Trends have been observed in markets for centuries and a body of
              academic literature has built up to explain their persistence1.
              Trend following strategies use sophisticated computer algorithms
              to identify trends, which allow them to trade hundreds of diverse
              markets simultaneously, and avoid biases introduced by human
              emotions.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default strategy