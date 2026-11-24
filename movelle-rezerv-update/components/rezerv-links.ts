// Public class destinations verified against Movelle's Rezerv catalogue.
const classLinks: Partial<Record<string, string>> = {
  'Reformer Pilates': 'https://movellestudio.rezerv.co/class/Reformer-Group-Class',
  'Red Light Therapy Pilates': 'https://movellestudio.rezerv.co/class/Red-Light-Therapy-Group-Reformer',
  'Private Pilates': 'https://movellestudio.rezerv.co/class/Private-Class-11',
  'Couple Pilates': 'https://movellestudio.rezerv.co/class/Couple-Pilates',
};

export function getRezervClassLink(title: string): string | undefined {
  return classLinks[title];
}

// Rezerv opens customer login when a visitor selects My Bookings.
export const rezervAccountUrl = 'https://movellestudio.rezerv.co/';
export const studioPhone = '+63 945 806 2917';
export const studioPhoneLink = 'tel:+639458062917';
export const studioWhatsAppUrl = 'https://wa.me/639458062917';
