import PostgreSqlTransformer from "..";

export default function ADDICTION(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} + ${ctx.transform(node.right)}`
}