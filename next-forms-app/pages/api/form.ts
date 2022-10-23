import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  console.log('body: ', body)

  // Both of these are required.
  //if (!body.first) {
  //  return res.json({ data: 'Twitter Handle Not Found' })
  //}

  // Found the name.
  res.json({ data: `${body.first} ${body.last}` })
}
