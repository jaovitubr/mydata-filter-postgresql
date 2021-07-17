import PostgreSqlTransformer from "../..";

export default function YEAR(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `EXTRACT(YEAR FROM ${ctx.transform(argument_node)})`;
}