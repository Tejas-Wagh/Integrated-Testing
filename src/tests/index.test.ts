import {describe, it, expect, beforeEach} from "vitest";
import request from "supertest"
import { app } from "..";
import { prisma } from "../db";
import { resestDB } from "../reset-db";


describe("sum",()=>{

    beforeEach(async()=>{
        console.log("Cleanup started");
        await resestDB();
    })

    
    it("10 + 100 equals 110",async()=>{
        const res = await request(app).post("/sum").send({
            a:10,
            b:100
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(110);
        expect(res.body.id).toEqual(expect.any(Number));

    })
})