import { PostgreSqlTransformer } from "../..";

export default function STARTS_WITH(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} LIKE CONCAT(${ctx.transform(node.right)}, '%')`
}