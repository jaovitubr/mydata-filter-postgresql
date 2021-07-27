import { PostgreSqlTransformer } from "../..";

export default function DESC(node: any, ctx: PostgreSqlTransformer) {
    return `${ctx.transform(node.data)} DESC`
}