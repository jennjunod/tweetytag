const { PrismaClient } = require('@prisma/client')
//import type { SomeThing } from "./next-forms-app/pages/api/form";


const prisma = new PrismaClient()

async function main() {
    await prisma.twitterHandle.create({
        data: {
          twitterHandle: form.twitterHandle.value
        },
      })
    
      const alltwitterHandles = await prisma.twitterHandle.findMany({
      
      })
      console.dir(alltwitterHandles, { depth: null })
      }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })