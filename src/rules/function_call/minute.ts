import { PostgreSqlTransformer } from "../..";

export default function MINUTE(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `MINUTE(${ctx.transform(argument_node)})`;
}