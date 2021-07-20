import PostgreSqlTransformer from "../..";

export default function LOWER(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `LOWER(${ctx.transform(argument_node)})`;
}