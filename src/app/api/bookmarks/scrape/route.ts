import axios from 'axios'
import { URL } from 'url'
import * as cheerio from 'cheerio'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const scrapeUrl = params.get('url') as string
    const response = await axios.get(scrapeUrl)
    const $ = cheerio.load(response.data)

    const title: string = $('title').text() || 'No Title Found'
    const metaDescription: string = $('meta[name="description"]').attr('content') || 'No Meta Description Found'

    const parsedURL: URL = new URL(scrapeUrl)
    const baseURL: string = `${parsedURL.protocol}//${parsedURL.host}`

    let faviconURL: string = ''
    $('link[rel="icon"]').each((index: number, element: cheerio.Element) => {
      const href: string | undefined = $(element).attr('href')
      if (href) {
        faviconURL = new URL(href, baseURL).href
        return false // Exit the loop on the first favicon found
      }
    })

    if (!faviconURL) {
      faviconURL = 'No Favicon Found'
    }

    return Response.json({ title, metaDescription, baseURL, faviconURL })
  } catch (error) {
    return Response.json({ error: 'error' })
  }
}
