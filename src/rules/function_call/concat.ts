import PostgreSqlTransformer from "../..";

export default function CONCAT(node: any, ctx: PostgreSqlTransformer) {
    return `CONCAT(${node.arguments.map((arg: any) => ctx.transform(arg)).join(", ")})`;
}