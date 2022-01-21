import { transformSync } from '@babel/core';
// import generator from "@babel/generator";

const genCode = () => {
    return (t) => {
        return {
            visitor: {

            }
        };
    };
};


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