import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { SocialInfo } from '../../typings'

const query = groq`
    *[_type == 'socialInfo']
`

type Data = {
    socials: SocialInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: SocialInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ socials })
  }