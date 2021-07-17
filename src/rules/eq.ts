import PostgreSqlTransformer from "..";

export default function EQ(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} == ${ctx.transform(node.right)}`
}