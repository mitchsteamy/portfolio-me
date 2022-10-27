import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ProjectInfo } from '../../typings'

const query = groq`
    *[_type == 'projectInfo'] {
      ...,
      technologies[]->
    }
`;

type Data = {
    projects: ProjectInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projects: ProjectInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ projects })
  }