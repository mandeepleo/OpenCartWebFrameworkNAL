import { v4 as uuidv4 } from "uuid";

// generating and returning unique email string

export class DataGenerator {
  static generateEmail(): string {
    return `user_${uuidv4()}@testmail.com`;
  }
}
