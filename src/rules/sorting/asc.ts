import { PostgreSqlTransformer } from "../..";

export default function ASC(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.data)} ASC`
}