import { customAlphabet } from "nanoid";

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const generateSlug = customAlphabet(alphabet, 6);

export function createSlug(): string {
    return generateSlug();
}