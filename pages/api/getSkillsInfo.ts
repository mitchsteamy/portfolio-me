import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { SkillInfo } from '../../typings'

const query = groq`
    *[_type == 'skillsInfo']
`

type Data = {
    skills: SkillInfo[]
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills: SkillInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ skills })
  }