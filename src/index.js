import { el, element, formatDate } from './lib/utils';
// importa öðru sem þarf...
import { fetchEarthquakes, URL } from './lib/earthquakes.js';

document.addEventListener('DOMContentLoaded', async () => {
  fetchEarthquakes();
});

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
});
