export default class Spreadsheet {
    private constructor(
        readonly name: string,
        readonly size: number,
        readonly type: string,
        private content: Table
    ) {}

    static async init(name: string, blob: Blob) {
        return new Spreadsheet(
            name,
            blob.size,
            blob.type,
            await read_n_parse(blob)
        );
    }

    cell(row: number, column: number) {
        return this.content[row][column];
    }
}

// class Chart {}

async function read_n_parse(blob: Blob): Promise<Table> {
    const [l_type] = blob.type.split("/");

    if ("text" === l_type) {
        const buf: string = await blob.text();
        return buf.split(/\r?\n/).map(line => line.split(/,/));
    }

    return [];
}

type Table = string[][];
