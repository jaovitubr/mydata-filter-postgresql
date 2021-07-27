import { PostgreSqlTransformer } from "../..";

export default function HOUR(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `HOUR(${ctx.transform(argument_node)})`;
}