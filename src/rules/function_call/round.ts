import { PostgreSqlTransformer } from "../..";

export default function ROUND(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `ROUND(${ctx.transform(argument_node)})`;
}