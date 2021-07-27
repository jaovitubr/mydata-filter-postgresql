import { PostgreSqlTransformer } from "../..";

export default function CEIL(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `CEIL(${ctx.transform(argument_node)})`;
}