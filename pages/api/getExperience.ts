import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ExperienceInfo } from '../../typings'

const query = groq`
    *[_type == 'experienceInfo'] {
      ...,
      technologies[]->
    }
`;

type Data = {
    experiences: ExperienceInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experiences: ExperienceInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ experiences })
  }