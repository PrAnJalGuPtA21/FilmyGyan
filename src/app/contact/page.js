import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'
import styles from './contact.module.css'
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We'd love to hear <span> from you </span></h2>
          <ContactForm />
        </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223978.5876719869!2d77.39502834999999!3d28.69965315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708509568653!5m2!1sen!2sin" width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>    
    </>
  )
}

export default page