import { PostgreSqlTransformer } from "../..";

export default function STARTS_WITH(node: any, ctx: PostgreSqlTransformer) {
    const [argument1_node, argument2_node] = node.arguments;
    
    return `${ctx.transform(argument1_node)} LIKE CONCAT(${ctx.transform(argument2_node)}, '%')`;
}