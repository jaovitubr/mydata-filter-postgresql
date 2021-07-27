import { PostgreSqlTransformer } from "../..";

export default function SORTING_LIST(node: any, ctx: PostgreSqlTransformer) {
    return `${node.data.map((sub_node: any) => ctx.transform(sub_node)).join(", ")}`;
}