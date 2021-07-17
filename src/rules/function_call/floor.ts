import PostgreSqlTransformer from "../..";

export default function FLOOR(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `FLOOR(${ctx.transform(argument_node)})`;
}