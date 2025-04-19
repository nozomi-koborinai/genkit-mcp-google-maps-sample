import { genkit, z } from 'genkit'
import { mapsClient } from './client'
import googleAI, { gemini25FlashPreview0417 } from '@genkit-ai/googleai'

// Initialize Genkit
export const ai = genkit({
  plugins: [ mapsClient, googleAI() ],
  model: gemini25FlashPreview0417,
})

export const googleMapsFlow = ai.defineFlow({
  name: 'google-maps-flow',
  inputSchema: z.string(),
}, async (prompt) => {
  const { text } = await ai.generate({
    prompt,
    tools: [
      'maps/maps_geocode',
      // ↓ Register tools as needed below ↓
      // 'maps/maps_reverse_geocode',
      // 'maps/maps_search_places',
      // 'maps/maps_place_details',
      // 'maps/maps_distance_matrix',
      // 'maps/maps_elevation',
      // 'maps/maps_directions',
    ]
  })
  return text
})