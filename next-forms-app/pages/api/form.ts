import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

type ResponseData = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  console.log('body: ', body)

  // Both of these are required.
  //if (!body.first) {
  //  return res.json({ data: 'Twitter Handle Not Found' })
  //}
  const twitterHandle = await prisma.twitterHandle.create({
    data: {
      twitterHandle: body.twitterHandle // need to double-check that this is actually properly accessing the `twitterHandle` field on the body
    },
  });
  

  // Found the name.
  res.json({ data: twitterHandle })
}
