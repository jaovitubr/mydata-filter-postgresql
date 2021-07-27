import { PostgreSqlTransformer } from "../..";

export default function DAY(node: any, ctx: PostgreSqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `DAY(${ctx.transform(argument_node)})`;
}