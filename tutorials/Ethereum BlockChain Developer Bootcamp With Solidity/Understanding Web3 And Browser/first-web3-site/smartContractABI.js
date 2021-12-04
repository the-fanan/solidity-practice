const smartContractABI = {
    "contractName": "SmartContract",
    "abi": [
      {
        "inputs": [],
        "name": "myUint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_myUint",
            "type": "uint256"
          }
        ],
        "name": "setMyUint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.10+commit.fc410830\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"myUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_myUint\",\"type\":\"uint256\"}],\"name\":\"setMyUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/SmartContract.sol\":\"SmartContract\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/SmartContract.sol\":{\"keccak256\":\"0x73bd3dd9a8a80bc8382e574ce9e9de0b93c5f18558f08c6bce5a44aa5a4885b6\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://56303cae927edb52b95390c341dd5a9b030e01735ea92a50297dbee1ee9f41bb\",\"dweb:/ipfs/QmREbdYE4SHEXbtQhFhNTcCYxX7ZYzzkuM1kBEgTys9wq6\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610133806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806306540f7e146037578063e492fd84146051575b600080fd5b603d6069565b604051604891906090565b60405180910390f35b606760048036038101906063919060d5565b606f565b005b60005481565b8060008190555050565b6000819050919050565b608a816079565b82525050565b600060208201905060a360008301846083565b92915050565b600080fd5b60b5816079565b811460bf57600080fd5b50565b60008135905060cf8160ae565b92915050565b60006020828403121560e85760e760a9565b5b600060f48482850160c2565b9150509291505056fea2646970667358221220c223fe336b01578b33f8a15e50a7bbf8f29acab5ec692431bd906377701a8b7964736f6c634300080a0033",
    "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806306540f7e146037578063e492fd84146051575b600080fd5b603d6069565b604051604891906090565b60405180910390f35b606760048036038101906063919060d5565b606f565b005b60005481565b8060008190555050565b6000819050919050565b608a816079565b82525050565b600060208201905060a360008301846083565b92915050565b600080fd5b60b5816079565b811460bf57600080fd5b50565b60008135905060cf8160ae565b92915050565b60006020828403121560e85760e760a9565b5b600060f48482850160c2565b9150509291505056fea2646970667358221220c223fe336b01578b33f8a15e50a7bbf8f29acab5ec692431bd906377701a8b7964736f6c634300080a0033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:1374:1",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "52:32:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "62:16:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "73:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "62:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "34:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "44:7:1",
                  "type": ""
                }
              ],
              "src": "7:77:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "155:53:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "172:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "195:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "177:17:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "177:24:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "165:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "165:37:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "165:37:1"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "143:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "150:3:1",
                  "type": ""
                }
              ],
              "src": "90:118:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "312:124:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "322:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "334:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "345:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "330:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "330:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "322:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "402:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "415:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "426:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "411:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "411:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "358:43:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "358:71:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "358:71:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "284:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "296:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "307:4:1",
                  "type": ""
                }
              ],
              "src": "214:222:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "482:35:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "492:19:1",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "508:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "502:5:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "502:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "492:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "475:6:1",
                  "type": ""
                }
              ],
              "src": "442:75:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "612:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "629:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "632:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "622:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "622:12:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "622:12:1"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "523:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "735:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "752:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "755:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "745:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "745:12:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "745:12:1"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "646:117:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "812:79:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "869:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "878:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "881:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "871:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "871:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "871:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "835:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "860:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "842:17:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "842:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "832:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "832:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "825:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "825:43:1"
                    },
                    "nodeType": "YulIf",
                    "src": "822:63:1"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "805:5:1",
                  "type": ""
                }
              ],
              "src": "769:122:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "949:87:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "959:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "981:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "968:12:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "968:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "959:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1024:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "997:26:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "997:33:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "997:33:1"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "927:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "935:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "943:5:1",
                  "type": ""
                }
              ],
              "src": "897:139:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1108:263:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1154:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "1156:77:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1156:79:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1156:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1129:7:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1138:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1125:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1125:23:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1150:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1121:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1121:32:1"
                    },
                    "nodeType": "YulIf",
                    "src": "1118:119:1"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1247:117:1",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1262:15:1",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1276:1:1",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1266:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1291:63:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1326:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1337:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1322:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1322:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1346:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "1301:20:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1301:53:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1291:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1078:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1089:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1101:6:1",
                  "type": ""
                }
              ],
              "src": "1042:329:1"
            }
          ]
        },
        "contents": "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "70:132:0:-:0;;;;;;;;;;;;;;;;;;;",
    "deployedSourceMap": "70:132:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:21;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;127:73;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;99:21;;;;:::o;127:73::-;186:7;177:6;:16;;;;127:73;:::o;7:77:1:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;523:117::-;632:1;629;622:12;769:122;842:24;860:5;842:24;:::i;:::-;835:5;832:35;822:63;;881:1;878;871:12;822:63;769:122;:::o;897:139::-;943:5;981:6;968:20;959:29;;997:33;1024:5;997:33;:::i;:::-;897:139;;;;:::o;1042:329::-;1101:6;1150:2;1138:9;1129:7;1125:23;1121:32;1118:119;;;1156:79;;:::i;:::-;1118:119;1276:1;1301:53;1346:7;1337:6;1326:9;1322:22;1301:53;:::i;:::-;1291:63;;1247:117;1042:329;;;;:::o",
    "source": "// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\n\ncontract SmartContract {\n    uint256 public myUint;\n\n    function setMyUint(uint _myUint) public {\n        myUint = _myUint;\n    }\n}",
    "sourcePath": "/Users/fanan/Documents/projects/solidity-practice/tutorials/Ethereum BlockChain Developer Bootcamp With Solidity/Understanding Web3 And Browser/first-web3-site/contracts/SmartContract.sol",
    "ast": {
      "absolutePath": "project:/contracts/SmartContract.sol",
      "exportedSymbols": {
        "SmartContract": [
          14
        ]
      },
      "id": 15,
      "license": "GPL-3.0",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">=",
            "0.7",
            ".0",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "37:31:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "SmartContract",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 14,
          "linearizedBaseContracts": [
            14
          ],
          "name": "SmartContract",
          "nameLocation": "79:13:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "06540f7e",
              "id": 3,
              "mutability": "mutable",
              "name": "myUint",
              "nameLocation": "114:6:0",
              "nodeType": "VariableDeclaration",
              "scope": 14,
              "src": "99:21:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "99:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "167:33:0",
                "statements": [
                  {
                    "expression": {
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 8,
                        "name": "myUint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "177:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 9,
                        "name": "_myUint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "186:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "177:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "177:16:0"
                  }
                ]
              },
              "functionSelector": "e492fd84",
              "id": 13,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "setMyUint",
              "nameLocation": "136:9:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 6,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5,
                    "mutability": "mutable",
                    "name": "_myUint",
                    "nameLocation": "151:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 13,
                    "src": "146:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 4,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "146:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "145:14:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "167:0:0"
              },
              "scope": 14,
              "src": "127:73:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 15,
          "src": "70:132:0",
          "usedErrors": []
        }
      ],
      "src": "37:165:0"
    },
    "legacyAST": {
      "absolutePath": "project:/contracts/SmartContract.sol",
      "exportedSymbols": {
        "SmartContract": [
          14
        ]
      },
      "id": 15,
      "license": "GPL-3.0",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">=",
            "0.7",
            ".0",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "37:31:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "SmartContract",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 14,
          "linearizedBaseContracts": [
            14
          ],
          "name": "SmartContract",
          "nameLocation": "79:13:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "06540f7e",
              "id": 3,
              "mutability": "mutable",
              "name": "myUint",
              "nameLocation": "114:6:0",
              "nodeType": "VariableDeclaration",
              "scope": 14,
              "src": "99:21:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "99:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "167:33:0",
                "statements": [
                  {
                    "expression": {
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 8,
                        "name": "myUint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "177:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 9,
                        "name": "_myUint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "186:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "177:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "177:16:0"
                  }
                ]
              },
              "functionSelector": "e492fd84",
              "id": 13,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "setMyUint",
              "nameLocation": "136:9:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 6,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5,
                    "mutability": "mutable",
                    "name": "_myUint",
                    "nameLocation": "151:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 13,
                    "src": "146:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 4,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "146:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "145:14:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "167:0:0"
              },
              "scope": 14,
              "src": "127:73:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 15,
          "src": "70:132:0",
          "usedErrors": []
        }
      ],
      "src": "37:165:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.10+commit.fc410830.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xbD09871dd1A35aE6997eD14366581F5dC1bb8a95",
        "transactionHash": "0x014728f7b296a29d5612277ce3954ad709f2c579b63d7d9971fe808e3250987c"
      }
    },
    "schemaVersion": "3.4.3",
    "updatedAt": "2021-11-30T18:45:56.822Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  };