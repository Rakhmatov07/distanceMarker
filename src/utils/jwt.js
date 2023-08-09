import Jwt from "jsonwebtoken";
const jwtKey = process.env.JWT_KEY;

export function signPayload(payload) { return Jwt.sign(payload, jwtKey) };
export function verifyPayload(payload) { return Jwt.verify(payload, jwtKey) };
