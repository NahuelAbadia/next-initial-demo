import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <>
      <h1>About Page</h1>

      <h1 className="title">
        Volver al <Link href="/">Home!</Link>
      </h1>

      <p className="description">
        Estoy en{' '}
        <code className="code">pages/about.jsx</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}