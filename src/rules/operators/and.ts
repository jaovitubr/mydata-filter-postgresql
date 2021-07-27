import { PostgreSqlTransformer } from "../..";

export default function AND(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} AND ${ctx.transform(node.right)}`
}