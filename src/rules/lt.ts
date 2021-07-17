import PostgreSqlTransformer from "..";

export default function LT(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} < ${ctx.transform(node.right)}`
}