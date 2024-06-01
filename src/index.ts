import express, { request } from "express"
import z from "zod";
import { prisma } from "./db";

export const app = express();

const inputs = z.object({
    a:z.number(),
    b:z.number()
})

app.use(express.json())

app.post("/sum",async(req,res)=>{
    const parsedData = inputs.safeParse(req.body);

    if(!parsedData.success){
        return res.status(422).json({
            msg:"Invalid Inputs"
        })
    }

    const ans = parsedData.data.a + parsedData.data.b;

    const result = await prisma.data.create({
        data:{
            a:parsedData.data.a,
            b:parsedData.data.b,
            answer:ans,
            type:"Sum"
        }
    })

    res.status(200).json({
        answer:ans, id:result.id
    })
})