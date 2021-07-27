import { PostgreSqlTransformer } from "../..";

export default function MONTH(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `MONTH(${ctx.transform(argument_node)})`;
}