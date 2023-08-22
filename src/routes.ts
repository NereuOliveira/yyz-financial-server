import { Router } from 'express'

const routes = Router()

const baseUrl = process.env.BASE_URL
const clientId = process.env.CLIENT_ID
const privateKey = process.env.PRIVATE_KEY

routes.post('/verify', async (req, res) => {
  if (!baseUrl || !clientId || !privateKey){
    return res.status(500).json({message: 'missing environment configuration'})
  }

  if (!req.headers.authorization) {
    return res.status(401).json({message: 'unauthorized'})
  }

  const [type, token] = req.headers.authorization?.split(' ')

  if (type !== 'Bearer') {
    return res.status(401).json({message: 'unauthorized'})
  }

  return res.status(501).json({ message: 'missing validation implementation' })
})

export default routes
