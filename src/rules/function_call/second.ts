import PostgreSqlTransformer from "../..";

export default function SECOND(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `EXTRACT(SECOND FROM ${ctx.transform(argument_node)})`;
}