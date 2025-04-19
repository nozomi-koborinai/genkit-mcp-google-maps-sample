import { genkit } from 'genkit'
import { gemini25FlashPreview0417, googleAI } from '@genkit-ai/googleai'
import { defineSecret } from 'firebase-functions/params'
import { logger } from 'genkit/logging'
import { mapsClient } from './client'
import { onCallGenkit } from 'firebase-functions/https'
import { googleMapsFlow } from './google-maps-flow'

// Set logging level to debug for detailed operation logs
logger.setLogLevel(`debug`)

// API keys stored in Google Cloud Secret Manager
export const googleAIapiKey = defineSecret(`GOOGLE_GENAI_API_KEY`)
export const mapsApiKey = defineSecret(`GOOGLE_MAPS_API_KEY`)

export const callGoogleMaps = onCallGenkit({
  secrets: [ googleAIapiKey ], 
  region: 'asia-northeast1', 
  cors: true,
},
  googleMapsFlow
)