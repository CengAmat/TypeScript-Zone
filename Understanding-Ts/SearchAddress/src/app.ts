import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY ?? '';

if (!GOOGLE_API_KEY) {
    throw new Error(
        'GOOGLE_API_KEY is missing. Copy .env.example to .env and set your key.'
    );
}

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS';
};

function loadGoogleMaps(apiKey: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof google !== 'undefined' && google.maps) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google Maps'));
        document.head.appendChild(script);
    });
}

async function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    try {
        await loadGoogleMaps(GOOGLE_API_KEY);

        const response = await axios.get<GoogleGeocodingResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                enteredAddress
            )}&key=${GOOGLE_API_KEY}`
        );

        if (response.data.status !== 'OK') {
            throw new Error('Could not fetch location!');
        }

        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(
            document.getElementById('map') as HTMLElement,
            {
                center: coordinates,
                zoom: 13,
            }
        );

        new google.maps.Marker({
            position: coordinates,
            map,
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        alert(message);
        console.error(err);
    }
}

form.addEventListener('submit', searchAddressHandler);
