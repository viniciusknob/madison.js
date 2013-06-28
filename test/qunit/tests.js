(function () {
    QUnit.testDone(function () {
        Madison.reset();
    });

    test('Madison()', function () {
        Madison({
            rule: function () {
                return 1 == "one";
            },
            errorMessage: '1 not equals one!'
        });
        ok(1 == Madison.lengthRules(), 'Uma regra foi inserida com sucesso!');
        Madison([{
            rule: function () {
                return 2 == "2";
            },
            errorMessage: '2 not equals 2!'
        }, {
            rule: function () {
                return 3 === "3";
            },
            errorMessage: '3 not exactly equals 3!'
        }]);
        ok(3 == Madison.lengthRules(), 'Três regras foram inserida com sucesso!');
    });

    test('version', function () {
        ok('0.2.0' == Madison.version, 'Madison version ' + Madison.version);
    });

    test('reset()', function () {
        for (var i = 0; i < 5; i++) {
            Madison({
                rule: function () {
                    return i % 2 === 0;
                },
                errorMessage: 'even number'
            });
        }
        ok(5 === Madison.lengthRules(), 'Madison possui 5 regras antes de reset()');
        Madison.reset();
        ok(0 === Madison.lengthRules(), 'Madison possui 0 regras após reset()');
    });

    test('lengthRules()', function () {
        ok('0' == Madison.lengthRules(), 'length == "0"');
        ok(0 === Madison.lengthRules(), 'length === 0');
        Madison({
            rule: function () {
                return 1 == "one";
            },
            errorMessage: '1 not equals one!'
        });
        ok('1' == Madison.lengthRules(), 'length == "1"');
        ok(1 === Madison.lengthRules(), 'length === 1');
        for (var i = 0; i < 10; i++) {
            Madison({
                rule: function () {
                    return i % 2 === 0;
                },
                errorMessage: 'even number'
            });
        }
        ok('11' == Madison.lengthRules(), 'length == "11"');
        ok(11 === Madison.lengthRules(), 'length === 11');
    });

    test('execute()', function () {
        Madison({
            rule: function () {
                return 1 == "one";
            },
            errorMessage: '1 not equals one!'
        });
        throws(function () {
            Madison.execute();
        },
            'Lança exceção caso a regra retorne false');

        throws(function () {
            Madison.execute();
        },
            /1 not equals one!/,
            'A regra 1 == "one" lança exceção com mensagem "1 not equals one!"');

        Madison.reset();
        Madison([{
            rule: function () {
                return 2 == "2";
            },
            errorMessage: '2 not equals 2!'
        }, {
            rule: function () {
                return 3 === "3";
            },
            errorMessage: '3 not exactly equals 3!'
        }]);
        throws(function () {
            Madison.execute();
        },
            'Lança exceção para a primeira regra que retorne false');

        throws(function () {
            Madison.execute();
        },
            /3 not exactly equals 3!/,
            'A primeira regra 3 === "3" lança exceção com mensagem "3 not exactly equals 3!"');

    });

    test('executeAndReturnErrors()', function () {
        Madison({
            rule: function () {
                return 1 == "one";
            },
            errorMessage: '1 not equals one!'
        });

        var actual = ['1 not equals one!'];
        deepEqual(actual, Madison.executeAndReturnErrors(), '1 regra errada: ' + actual);

        Madison.reset();
        Madison([{
            rule: function () {
                return 2 == "2";
            },
            errorMessage: '2 not equals 2!'
        }, {
            rule: function () {
                return 3 === "3";
            },
            errorMessage: '3 not exactly equals 3!'
        }]);
        actual = ['3 not exactly equals 3!'];
        deepEqual(actual, Madison.executeAndReturnErrors(), 'Duas regras, segunda regra errada: ' + actual);

        Madison.reset();
        Madison([{
            rule: function () {
                return 2 === "2";
            },
            errorMessage: '2 not exactly equals 2!'
        }, {
            rule: function () {
                return 3 === "3";
            },
            errorMessage: '3 not exactly equals 3!'
        }]);
        actual = ['2 not exactly equals 2!', '3 not exactly equals 3!'];
        deepEqual(actual, Madison.executeAndReturnErrors(), 'Duas regras erradas: ' + actual);
    });
}());