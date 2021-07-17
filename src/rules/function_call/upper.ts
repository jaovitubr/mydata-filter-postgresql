import PostgreSqlTransformer from "../..";

export default function UPPER(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `UPPER(${ctx.transform(argument_node)})`;
}