import { profile } from '@/data/profile';
import Image from 'next/image';
import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message');
      }

      setStatusMessage('Message sent successfully. I will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">
            Prefer email? Write to <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
          <p className="mt-1">{profile.phone}</p>
        </div>
        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-2">
              <Input
                placeholder="Your Name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                disabled={isSubmitting}
              />
              <Input
                placeholder="Email Address"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                disabled={isSubmitting}
              />
            </div>

            <div className="mt-8">
              <Input
                placeholder="Subject"
                name="subject"
                required
                value={form.subject}
                onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                disabled={isSubmitting}
              />
            </div>
            <div className="mt-8">
              <TextArea
                placeholder="Message"
                name="message"
                required
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                disabled={isSubmitting}
              />
            </div>
            <div className="mt-8">
              <Button
                className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {statusMessage ? <p className="mt-4 text-sm text-gray-400">{statusMessage}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
