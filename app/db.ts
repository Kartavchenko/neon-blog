import { PrismaClient } from '@prisma/client'
// import { withPulse } from '@prisma/extension-pulse'

export const prisma = new PrismaClient()
//     .$extends(
//     withPulse({ apiKey: process.env.API_KEY })
// )