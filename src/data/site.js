export const site = {
 name: 'Fusión Sushi Calama', phoneDisplay: '+56 9 7764 9249', phone: '56977649249',
 email: 'fusionsushicalama@gmail.com', instagram: 'https://www.instagram.com/fusionsushicalama/',
 instagramHandle: '@fusionsushicalama', facebook: 'https://www.facebook.com/search/top?q=Fusi%C3%B3n%20Sushi%20Calama',
 address: 'Sector céntrico, calle Bartolomé Vivar, Calama, Chile', hours: 'Lunes a sábado · Horarios por confirmar',
 // Sustituir por la dirección verificada antes de incrustar Google Maps.
 exactAddress: null,
};
export const whatsappUrl = (message = 'Hola, vengo de la página web de Fusión Sushi Calama y me gustaría realizar un pedido.') => `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
export const images = {
 hero: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=2200&q=85',
 about: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1100&q=80',
 roll: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
 special: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
 fried: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80',
 burger: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
 promo: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
 gallery: [
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
 ]
};
