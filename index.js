// import { transformSync } from '@babel/core';
const { transformSync } = require('@babel/core');
// import generator from "@babel/generator";

const genCode = () => {
    return (t) => {
        return {
            visitor: {
                ObjectExpression(path) {
                    console.log(path);
                    // const treeNode = t.newExpression(t.identifier("TreeNode")

                    // );
                    // treeNode.arguments
                }
            }
        };
    };
};
// t.newExpression(
//     t.identifier("TreeNode"), [
//     t.numericLiteral(1),
//     t.newExpression(t.identifier("TreeNode"), [
//         t.numericLiteral(2)]
//     ),
//     t.newExpression(t.identifier("TreeNode"), [
//         t.numericLiteral(3)]
//     )]
// )

const c = transformSync(
    `
   var z =  {
        "val":1,
        "left":{
            "val":2,
            "left":{
                "val":3,
                "left":null,
                "right":null
            },
            "right":{
                "val":3,
                "left":null,
                "right":null
            }
        },
        "right":{
            "val":3,
            "left":{
                "val":4,
                "left":null,
                "right":null
            },
            "right":null
            }
        }
    `
    , {
        plugins: [
            genCode
        ]
    }).code

console.log(c);