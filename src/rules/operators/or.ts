import { PostgreSqlTransformer } from "../..";

export default function OR(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.left)} OR ${ctx.transform(node.right)}`
}