# genkit-mcp-google-maps-sample

A sample project that integrates Google Maps API with Genkit. Access Google Maps features from Gemini AI models through the Model Context Protocol (MCP).

[Google Maps MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps)

## Features

This sample provides access to the following Google Maps features:

- Get coordinates from addresses (`maps_geocode`)
- Get addresses from coordinates (`maps_reverse_geocode`)
- Search for nearby places (`maps_search_places`)
- Get detailed place information (`maps_place_details`)
- Calculate distance and travel time between two points (`maps_distance_matrix`)
- Retrieve elevation data (`maps_elevation`)
- Get directions (`maps_directions`)

## Setup

### Requirements

- Node.js 20 or higher
- Firebase CLI
- Genkit CLI
- Access to a Google Cloud (Firebase) Project
- Google Maps Platform API key
- Google AI API key

### Installation

```bash
# Clone the project
git clone https://github.com/nozomi-koborinai/genkit-mcp-google-maps-sample
cd genkit-mcp-google-maps-sample

# Install dependencies
npm install

# Install development tools
npm install --save-dev genkit-cli@latest
```

### Environment Variables

Set the following secrets in Firebase Secret Manager:

- `GOOGLE_GENAI_API_KEY`: Google AI API key
- `GOOGLE_MAPS_API_KEY`: Google Maps API key

```bash
export GOOGLE_GENAI_API_KEY=your_genai_api_key
export GOOGLE_MAPS_API_KEY=your_maps_api_key
```

## Usage

### Local Development

Open Genkit Develoer UI.

```bash
npx genkit start -o -- tsx --watch src/index.ts
```

### Deployment

```bash
firebase deploy --only functions
```
