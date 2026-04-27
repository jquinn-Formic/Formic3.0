import {createClient, type ClientConfig} from '@sanity/client'

const config: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'q7pbjl6y',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
  token: import.meta.env.SANITY_API_READ_TOKEN,
}

export const sanity = createClient(config)

export async function getHomePage() {
  return sanity.fetch(`*[_id == "homePage"][0]`)
}
