import { ContactsHero } from '@/components/sections/contacts/contacts-hero';
import { ContactChannels } from '@/components/sections/contacts/contact-channels';
import { ContactProcess } from '@/components/sections/contacts/contact-process';
import { ContactsCta } from '@/components/sections/contacts/contacts-cta';
import { getPageMetadata } from '@/components/seo/seo-meta';

export const metadata = getPageMetadata('Контакты');

export default function ContactsPage() {
  return (
    <>
      <ContactsHero />
      <ContactChannels />
      <ContactProcess />
      <ContactsCta />
    </>
  );
}
