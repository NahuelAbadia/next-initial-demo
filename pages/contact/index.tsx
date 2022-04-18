import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className="title">
        Volver al <Link href="/">Home!</Link>
      </h1>

      <p className="description">
        Estoy en{' '}
        <code className="code">pages/contact/index.jsx</code>
      </p>
    </MainLayout>
  )
}
