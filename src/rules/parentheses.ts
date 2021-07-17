import PostgreSqlTransformer from "..";

export default function PARENTHESES(node: any, ctx: PostgreSqlTransformer) {
    return `(${ctx.transform(node.data)})`
}