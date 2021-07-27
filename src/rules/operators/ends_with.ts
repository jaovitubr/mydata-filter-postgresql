import { PostgreSqlTransformer } from "../..";

export default function ENDS_WITH(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} LIKE CONCAT("%", ${ctx.transform(node.right)})`
}