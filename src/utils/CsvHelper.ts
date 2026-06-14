import fs from "fs";
import { parse } from "csv-parse/sync";

export class CsvHelper {
  static readCsv(filepath: string): Record<string, string>[] {
    const data = parse(fs.readFileSync(filepath, "utf-8"), {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as Record<string, string>[];
    // Filter the test data set: include only those rows where execute is set to yes
    return data.filter((row) => row.execute?.trim().toLowerCase() !== "no");
  }
}
