import { NextRequest, NextResponse } from "next/server";
import NextCors from 'nextjs-cors'

export default async function handler(req: any, res: any) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
  
     // Rest of the API logic
     res.json({ message: 'Hello NextJs Cors!' });
}