import { PostgreSqlTransformer } from "../..";

export default function NEQ(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} != ${ctx.transform(node.right)}`
}