import { PostgreSqlTransformer } from "../..";

export default function TRIM(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `TRIM(${ctx.transform(argument_node)})`;
}