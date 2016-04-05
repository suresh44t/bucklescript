// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_int64 = require("../runtime/caml_int64");
var Mt         = require("./mt");
var Int32      = require("../stdlib/int32");
var Int64      = require("../stdlib/int64");
var $$Array    = require("../stdlib/array");

function f(u, v) {
  return +(u > v);
}

var v = Caml_int64.add(Caml_int64.of_int32(Int32.max_int), Int64.one);

var h = Caml_int64.neg(v);

var a = /* int64 */[
  2147483647,
  0
];

function commutative_add(result, a, b) {
  return /* Eq */{
          0: /* tuple */[
            result,
            result
          ],
          1: /* tuple */[
            Caml_int64.add(a, b),
            Caml_int64.add(b, a)
          ],
          length: 2,
          tag: 0
        };
}

var suites_000 = /* tuple */[
  "add_one",
  function () {
    return /* Eq */{
            0: v,
            1: /* int64 */[
              -2147483648,
              0
            ],
            length: 2,
            tag: 0
          };
  }
];

var suites_001 = /* :: */[
  /* tuple */[
    "add_2",
    function () {
      return /* Eq */{
              0: /* int64 */[
                -2,
                0
              ],
              1: Caml_int64.add(a, a),
              length: 2,
              tag: 0
            };
    }
  ],
  /* :: */[
    /* tuple */[
      "add_3",
      function () {
        return /* Eq */{
                0: /* int64 */[
                  0,
                  0
                ],
                1: Caml_int64.add(/* int64 */[
                      0,
                      0
                    ], /* int64 */[
                      0,
                      0
                    ]),
                length: 2,
                tag: 0
              };
      }
    ],
    /* :: */[
      /* tuple */[
        "add_4",
        function () {
          return commutative_add(/* int64 */[
                      -2,
                      -1
                    ], /* int64 */[
                      -3,
                      -1
                    ], /* int64 */[
                      1,
                      0
                    ]);
        }
      ],
      /* :: */[
        /* tuple */[
          "add_5",
          function () {
            return commutative_add(/* int64 */[
                        -3,
                        -1
                      ], /* int64 */[
                        -3,
                        -1
                      ], /* int64 */[
                        0,
                        0
                      ]);
          }
        ],
        /* :: */[
          /* tuple */[
            "add_6",
            function () {
              return commutative_add(/* int64 */[
                          4,
                          0
                        ], /* int64 */[
                          -3,
                          -1
                        ], /* int64 */[
                          7,
                          0
                        ]);
            }
          ],
          /* :: */[
            /* tuple */[
              "add_7",
              function () {
                return commutative_add(/* int64 */[
                            0,
                            1
                          ], /* int64 */[
                            -2147483648,
                            0
                          ], /* int64 */[
                            -2147483648,
                            0
                          ]);
              }
            ],
            /* :: */[
              /* tuple */[
                "add_8",
                function () {
                  return commutative_add(/* int64 */[
                              0,
                              1
                            ], /* int64 */[
                              -1,
                              0
                            ], /* int64 */[
                              1,
                              0
                            ]);
                }
              ],
              /* :: */[
                /* tuple */[
                  "add_9",
                  function () {
                    return commutative_add(/* int64 */[
                                -1,
                                0
                              ], /* int64 */[
                                -2147483648,
                                0
                              ], /* int64 */[
                                2147483647,
                                0
                              ]);
                  }
                ],
                /* :: */[
                  /* tuple */[
                    "add_10",
                    function () {
                      return commutative_add(/* int64 */[
                                  -2147483648,
                                  0
                                ], /* int64 */[
                                  -2147483648,
                                  0
                                ], /* int64 */[
                                  0,
                                  0
                                ]);
                    }
                  ],
                  /* :: */[
                    /* tuple */[
                      "add_11",
                      function () {
                        return commutative_add(/* int64 */[
                                    -1,
                                    0
                                  ], /* int64 */[
                                    -1,
                                    0
                                  ], /* int64 */[
                                    0,
                                    0
                                  ]);
                      }
                    ],
                    /* :: */[
                      /* tuple */[
                        "to_int32",
                        function () {
                          return /* Eq */{
                                  0: 3,
                                  1: 3,
                                  length: 2,
                                  tag: 0
                                };
                        }
                      ],
                      /* :: */[
                        /* tuple */[
                          "to_int",
                          function () {
                            return /* Eq */{
                                    0: 3,
                                    1: 3,
                                    length: 2,
                                    tag: 0
                                  };
                          }
                        ],
                        /* :: */[
                          /* tuple */[
                            "of_int",
                            function () {
                              return /* Eq */{
                                      0: /* int64 */[
                                        3,
                                        0
                                      ],
                                      1: /* int64 */[
                                        3,
                                        0
                                      ],
                                      length: 2,
                                      tag: 0
                                    };
                            }
                          ],
                          /* :: */[
                            /* tuple */[
                              "lognot",
                              function () {
                                return /* Eq */{
                                        0: /* int64 */[
                                          -3,
                                          -1
                                        ],
                                        1: /* int64 */[
                                          -3,
                                          -1
                                        ],
                                        length: 2,
                                        tag: 0
                                      };
                              }
                            ],
                            /* :: */[
                              /* tuple */[
                                "neg",
                                function () {
                                  return /* Eq */{
                                          0: /* int64 */[
                                            -2,
                                            -1
                                          ],
                                          1: Caml_int64.neg(/* int64 */[
                                                2,
                                                0
                                              ]),
                                          length: 2,
                                          tag: 0
                                        };
                                }
                              ],
                              /* :: */[
                                /* tuple */[
                                  "sub1",
                                  function () {
                                    return /* Eq */{
                                            0: /* int64 */[
                                              2,
                                              0
                                            ],
                                            1: Caml_int64.sub(/* int64 */[
                                                  3,
                                                  0
                                                ], /* int64 */[
                                                  1,
                                                  0
                                                ]),
                                            length: 2,
                                            tag: 0
                                          };
                                  }
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "xor1",
                                    function () {
                                      return /* Eq */{
                                              0: /* tuple */[
                                                /* int64 */[
                                                  286331153,
                                                  0
                                                ],
                                                /* int64 */[
                                                  2147483647 ^ -285217025,
                                                  0 ^ 0
                                                ]
                                              ],
                                              1: /* tuple */[
                                                /* int64 */[
                                                  286331153,
                                                  0
                                                ],
                                                /* int64 */[
                                                  -1862266624,
                                                  0
                                                ]
                                              ],
                                              length: 2,
                                              tag: 0
                                            };
                                    }
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "or",
                                      function () {
                                        return /* Eq */{
                                                0: /* int64 */[
                                                  -285217025 | -1114130,
                                                  0 | 0
                                                ],
                                                1: /* int64 */[
                                                  -1,
                                                  0
                                                ],
                                                length: 2,
                                                tag: 0
                                              };
                                      }
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "and",
                                        function () {
                                          return /* Eq */{
                                                  0: /* int64 */[
                                                    -285217025 & -1114130,
                                                    0 & 0
                                                  ],
                                                  1: /* int64 */[
                                                    -286331154,
                                                    0
                                                  ],
                                                  length: 2,
                                                  tag: 0
                                                };
                                        }
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "lsl",
                                          function () {
                                            return /* Eq */{
                                                    0: $$Array.map(function (x) {
                                                          return Caml_int64.lsl_(/* int64 */[
                                                                      1,
                                                                      0
                                                                    ], x);
                                                        }, $$Array.init(64, function (i) {
                                                              return i;
                                                            })),
                                                    1: /* array */[
                                                      /* int64 */[
                                                        1,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        2,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        4,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        8,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        16,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        32,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        64,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        128,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        256,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        512,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        1024,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        2048,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        4096,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        8192,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        16384,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        32768,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        65536,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        131072,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        262144,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        524288,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        1048576,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        2097152,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        4194304,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        8388608,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        16777216,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        33554432,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        67108864,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        134217728,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        268435456,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        536870912,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        1073741824,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        -2147483648,
                                                        0
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        1
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        2
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        4
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        8
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        16
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        32
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        64
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        128
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        256
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        512
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        1024
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        2048
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        4096
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        8192
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        16384
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        32768
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        65536
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        131072
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        262144
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        524288
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        1048576
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        2097152
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        4194304
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        8388608
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        16777216
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        33554432
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        67108864
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        134217728
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        268435456
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        536870912
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        1073741824
                                                      ],
                                                      /* int64 */[
                                                        0,
                                                        -2147483648
                                                      ]
                                                    ],
                                                    length: 2,
                                                    tag: 0
                                                  };
                                          }
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "lsr",
                                            function () {
                                              return /* Eq */{
                                                      0: $$Array.map(function (x) {
                                                            return Caml_int64.lsr_(/* int64 */[
                                                                        -1,
                                                                        -1
                                                                      ], x);
                                                          }, $$Array.init(64, function (i) {
                                                                return i;
                                                              })),
                                                      1: /* array */[
                                                        /* int64 */[
                                                          -1,
                                                          -1
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          2147483647
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          1073741823
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          536870911
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          268435455
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          134217727
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          67108863
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          33554431
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          16777215
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          8388607
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          4194303
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          2097151
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          1048575
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          524287
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          262143
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          131071
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          65535
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          32767
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          16383
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          8191
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          4095
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          2047
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          1023
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          511
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          255
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          127
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          63
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          31
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          15
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          7
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          3
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          1
                                                        ],
                                                        /* int64 */[
                                                          -1,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          2147483647,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          1073741823,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          536870911,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          268435455,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          134217727,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          67108863,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          33554431,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          16777215,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          8388607,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          4194303,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          2097151,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          1048575,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          524287,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          262143,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          131071,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          65535,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          32767,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          16383,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          8191,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          4095,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          2047,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          1023,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          511,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          255,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          127,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          63,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          31,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          15,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          7,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          3,
                                                          0
                                                        ],
                                                        /* int64 */[
                                                          1,
                                                          0
                                                        ]
                                                      ],
                                                      length: 2,
                                                      tag: 0
                                                    };
                                            }
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "asr",
                                              function () {
                                                return /* Eq */{
                                                        0: $$Array.map(function (x) {
                                                              return Caml_int64.asr_(/* int64 */[
                                                                          -1,
                                                                          -1
                                                                        ], x);
                                                            }, $$Array.init(64, function (i) {
                                                                  return i;
                                                                })),
                                                        1: /* array */[
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ],
                                                          /* int64 */[
                                                            -1,
                                                            -1
                                                          ]
                                                        ],
                                                        length: 2,
                                                        tag: 0
                                                      };
                                              }
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "mul simple",
                                                function () {
                                                  return /* Eq */{
                                                          0: /* int64 */[
                                                            6,
                                                            0
                                                          ],
                                                          1: Caml_int64.mul(/* int64 */[
                                                                3,
                                                                0
                                                              ], /* int64 */[
                                                                2,
                                                                0
                                                              ]),
                                                          length: 2,
                                                          tag: 0
                                                        };
                                                }
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "of_int32",
                                                  function () {
                                                    return /* Eq */{
                                                            0: $$Array.map(function (prim) {
                                                                  return Caml_int64.of_int32(prim);
                                                                }, /* array */[0]),
                                                            1: /* array */[/* int64 */[
                                                                0,
                                                                0
                                                              ]],
                                                            length: 2,
                                                            tag: 0
                                                          };
                                                  }
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "to_int32",
                                                    function () {
                                                      return /* Eq */{
                                                              0: $$Array.map(function (prim) {
                                                                    return prim[0];
                                                                  }, /* array */[/* int64 */[
                                                                      0,
                                                                      0
                                                                    ]]),
                                                              1: /* array */[0],
                                                              length: 2,
                                                              tag: 0
                                                            };
                                                    }
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "discard_sign",
                                                      function () {
                                                        return /* Eq */{
                                                                0: Caml_int64.discard_sign(/* int64 */[
                                                                      -1,
                                                                      -1
                                                                    ]),
                                                                1: /* int64 */[
                                                                  -1,
                                                                  2147483647
                                                                ],
                                                                length: 2,
                                                                tag: 0
                                                              };
                                                      }
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "div_mod",
                                                        function () {
                                                          return /* Eq */{
                                                                  0: Caml_int64.div_mod(/* int64 */[
                                                                        7,
                                                                        0
                                                                      ], /* int64 */[
                                                                        3,
                                                                        0
                                                                      ]),
                                                                  1: /* tuple */[
                                                                    /* int64 */[
                                                                      2,
                                                                      0
                                                                    ],
                                                                    /* int64 */[
                                                                      1,
                                                                      0
                                                                    ]
                                                                  ],
                                                                  length: 2,
                                                                  tag: 0
                                                                };
                                                        }
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "to_hex",
                                                          function () {
                                                            return /* Eq */{
                                                                    0: Caml_int64.to_hex(/* int64 */[
                                                                          -1,
                                                                          -1
                                                                        ]),
                                                                    1: "ffffffffffffffff",
                                                                    length: 2,
                                                                    tag: 0
                                                                  };
                                                          }
                                                        ],
                                                        /* [] */0
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("int64_test.ml", suites);

exports.f               = f;
exports.v               = v;
exports.h               = h;
exports.a               = a;
exports.commutative_add = commutative_add;
exports.suites          = suites;
/*  Not a pure module */
