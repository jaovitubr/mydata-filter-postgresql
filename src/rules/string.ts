import PostgreSqlTransformer from "..";

export default function STRING(node: any, ctx: PostgreSqlTransformer) {
    return `'${ctx.escape_string(node.value)}'`;
}