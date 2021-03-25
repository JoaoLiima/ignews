import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Paulo' },
    { id: 3, name: 'Pedro' },
  ]

  return response.json(users)
}
