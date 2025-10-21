import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
